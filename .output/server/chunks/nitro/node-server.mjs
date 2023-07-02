globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "pwaManifest": {
      "name": "nuxt-app",
      "short_name": "nuxt-app",
      "description": "",
      "lang": "en",
      "start_url": "/?standalone=true",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#000000",
      "icons": []
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const _4woGC8KXqi = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(
      [
        "<script>",
        "if ('serviceWorker' in navigator) {",
        `  window.addEventListener('load', () => navigator.serviceWorker.register('${joinURL(useRuntimeConfig().app.baseURL, "sw.js")}'))`,
        "}",
        "<\/script>"
      ].join("\n")
    );
  });
});

const plugins = [
  _4woGC8KXqi
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/Illustration.svg": {
    "type": "image/svg+xml",
    "etag": "\"7571-jDRHiJjiB00rE82tcfavf3F9LII\"",
    "mtime": "2023-07-02T07:14:27.899Z",
    "size": 30065,
    "path": "../public/Illustration.svg"
  },
  "/coin_top.svg": {
    "type": "image/svg+xml",
    "etag": "\"97f37-YEkpdcArn/2w3LWG8su0sm5Xym0\"",
    "mtime": "2023-07-02T07:14:27.883Z",
    "size": 622391,
    "path": "../public/coin_top.svg"
  },
  "/compass_top.svg": {
    "type": "image/svg+xml",
    "etag": "\"a08e7-DTkgUJg2jU3PMVYE2P1A4UEKSOE\"",
    "mtime": "2023-07-02T07:14:27.863Z",
    "size": 657639,
    "path": "../public/compass_top.svg"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-07-02T07:14:27.836Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/fiat.png": {
    "type": "image/png",
    "etag": "\"1739-Zv3JOK8/hbafQpYpV/XR/W0HY34\"",
    "mtime": "2023-07-02T07:14:27.817Z",
    "size": 5945,
    "path": "../public/fiat.png"
  },
  "/illustration (1).svg": {
    "type": "image/svg+xml",
    "etag": "\"37a2-vPjEW7wuYWo9rw9zvQgzI3iM4sE\"",
    "mtime": "2023-07-02T07:14:27.805Z",
    "size": 14242,
    "path": "../public/illustration (1).svg"
  },
  "/illustration (2).svg": {
    "type": "image/svg+xml",
    "etag": "\"2081-OlXWhX+a1vZZtb+f4WbF43SHMRA\"",
    "mtime": "2023-07-02T07:14:27.801Z",
    "size": 8321,
    "path": "../public/illustration (2).svg"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"bbb-I2wSLmCuh5pyKXnc3NUPbp/FlDU\"",
    "mtime": "2023-07-02T07:14:33.281Z",
    "size": 3003,
    "path": "../public/index.html"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"bf-haN5lapOHErhmbuJ12sW4WydWQ4\"",
    "mtime": "2023-07-02T07:14:33.284Z",
    "size": 191,
    "path": "../public/manifest.json"
  },
  "/ripple.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b7a-Edy34f//Zkq9yp0Ol+RTmFHBlQw\"",
    "mtime": "2023-07-02T07:14:27.782Z",
    "size": 7034,
    "path": "../public/ripple.svg"
  },
  "/solana.svg": {
    "type": "image/svg+xml",
    "etag": "\"e502a-tJmzJNQt62ZBI9PCJ3C2Al8Rs18\"",
    "mtime": "2023-07-02T07:14:27.769Z",
    "size": 938026,
    "path": "../public/solana.svg"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"74c-FYd+CnEHKU85TCXzJnxaUWrX+zg\"",
    "mtime": "2023-07-02T07:14:27.440Z",
    "size": 1868,
    "path": "../public/sw.js"
  },
  "/tether.svg": {
    "type": "image/svg+xml",
    "etag": "\"12fe-YKX8P6BaeazrbuJ70CjvdQGmPa0\"",
    "mtime": "2023-07-02T07:14:27.752Z",
    "size": 4862,
    "path": "../public/tether.svg"
  },
  "/tron.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b8a-w/2coWAzL51Nuj5aU81Kqj9r+oc\"",
    "mtime": "2023-07-02T07:14:27.643Z",
    "size": 7050,
    "path": "../public/tron.svg"
  },
  "/_nuxt/NunitoSans_10pt-Light.485e6b51.ttf": {
    "type": "font/ttf",
    "etag": "\"1bb80-MvPOzZtsD2fBpr7GiG4rjxYGF/E\"",
    "mtime": "2023-07-02T07:14:27.470Z",
    "size": 113536,
    "path": "../public/_nuxt/NunitoSans_10pt-Light.485e6b51.ttf"
  },
  "/_nuxt/addAsset.7f60a1e4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3-ZcIhKA6upq/KMwqyrOSIudpWuXY\"",
    "mtime": "2023-07-02T07:14:27.469Z",
    "size": 435,
    "path": "../public/_nuxt/addAsset.7f60a1e4.css"
  },
  "/_nuxt/addAsset.vue.2792efce.js": {
    "type": "application/javascript",
    "etag": "\"182a-Xd2qYydu8vrsW7d91sKmi2nNvSk\"",
    "mtime": "2023-07-02T07:14:27.469Z",
    "size": 6186,
    "path": "../public/_nuxt/addAsset.vue.2792efce.js"
  },
  "/_nuxt/allAssets.76b692c6.js": {
    "type": "application/javascript",
    "etag": "\"129f-TcE+i+RmEKNrR6CwyUH9MkIZe/0\"",
    "mtime": "2023-07-02T07:14:27.468Z",
    "size": 4767,
    "path": "../public/_nuxt/allAssets.76b692c6.js"
  },
  "/_nuxt/allAssets.e6cb1276.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26b-oCF++uzGekjM+zHasN0Mx4jfNro\"",
    "mtime": "2023-07-02T07:14:27.467Z",
    "size": 619,
    "path": "../public/_nuxt/allAssets.e6cb1276.css"
  },
  "/_nuxt/entry.2543cdad.js": {
    "type": "application/javascript",
    "etag": "\"6eea9-CeH9067127vFLYA1d9DDm1dfDFc\"",
    "mtime": "2023-07-02T07:14:27.466Z",
    "size": 454313,
    "path": "../public/_nuxt/entry.2543cdad.js"
  },
  "/_nuxt/entry.d2804ee6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ad8-CpBHEfUXJssZN+KYvllwigtH988\"",
    "mtime": "2023-07-02T07:14:27.464Z",
    "size": 19160,
    "path": "../public/_nuxt/entry.d2804ee6.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-07-02T07:14:27.464Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.de615671.js": {
    "type": "application/javascript",
    "etag": "\"1990-ggYhAZRcgypwBGGXM5tYsqKLJjk\"",
    "mtime": "2023-07-02T07:14:27.463Z",
    "size": 6544,
    "path": "../public/_nuxt/error-404.de615671.js"
  },
  "/_nuxt/error-500.24a323e3.js": {
    "type": "application/javascript",
    "etag": "\"77d-ibxrzGck5nbRB+A/NB9/8i85T00\"",
    "mtime": "2023-07-02T07:14:27.462Z",
    "size": 1917,
    "path": "../public/_nuxt/error-500.24a323e3.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-07-02T07:14:27.461Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.ac9485b9.js": {
    "type": "application/javascript",
    "etag": "\"4f7-jduAQT4xD/nt14xuoXnuFc70cJY\"",
    "mtime": "2023-07-02T07:14:27.461Z",
    "size": 1271,
    "path": "../public/_nuxt/error-component.ac9485b9.js"
  },
  "/_nuxt/focus-visible.9c13edeb.js": {
    "type": "application/javascript",
    "etag": "\"3e2-ilOgFj2agyKzBXg2XDJ6FgWnTAs\"",
    "mtime": "2023-07-02T07:14:27.460Z",
    "size": 994,
    "path": "../public/_nuxt/focus-visible.9c13edeb.js"
  },
  "/_nuxt/home.427452e8.js": {
    "type": "application/javascript",
    "etag": "\"198c-FG7nimm0Ry2QfJco9EBT6qNBwKE\"",
    "mtime": "2023-07-02T07:14:27.460Z",
    "size": 6540,
    "path": "../public/_nuxt/home.427452e8.js"
  },
  "/_nuxt/home.be441f23.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6-nUuPANRyWlt4E1RjkeKZ+fnsAP0\"",
    "mtime": "2023-07-02T07:14:27.459Z",
    "size": 470,
    "path": "../public/_nuxt/home.be441f23.css"
  },
  "/_nuxt/homelast.9f4bd5a0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"775-T1ePPyuB1SsHQJKbJGskGt/bo/0\"",
    "mtime": "2023-07-02T07:14:27.458Z",
    "size": 1909,
    "path": "../public/_nuxt/homelast.9f4bd5a0.css"
  },
  "/_nuxt/homelast.f29cdc6e.js": {
    "type": "application/javascript",
    "etag": "\"38af-M+XAdfPVaMZnB46VWezAzr4Q2hE\"",
    "mtime": "2023-07-02T07:14:27.457Z",
    "size": 14511,
    "path": "../public/_nuxt/homelast.f29cdc6e.js"
  },
  "/_nuxt/index.70aaea17.js": {
    "type": "application/javascript",
    "etag": "\"32aa-hwzP3LOLVzxHdYpyYxTIOWIDAj4\"",
    "mtime": "2023-07-02T07:14:27.456Z",
    "size": 12970,
    "path": "../public/_nuxt/index.70aaea17.js"
  },
  "/_nuxt/index.a974bb9e.js": {
    "type": "application/javascript",
    "etag": "\"49f-yHJyJ9PbK1WpeO8+PgVtUB/KMDA\"",
    "mtime": "2023-07-02T07:14:27.456Z",
    "size": 1183,
    "path": "../public/_nuxt/index.a974bb9e.js"
  },
  "/_nuxt/index9.53d69c95.js": {
    "type": "application/javascript",
    "etag": "\"75d-mjVGENmLfJuYR2+Rpyr9inn+v8o\"",
    "mtime": "2023-07-02T07:14:27.455Z",
    "size": 1885,
    "path": "../public/_nuxt/index9.53d69c95.js"
  },
  "/_nuxt/input-shims.c6ee930b.js": {
    "type": "application/javascript",
    "etag": "\"111e-xDvO4fWKNjbCFv8/nk5PcTg5LJM\"",
    "mtime": "2023-07-02T07:14:27.454Z",
    "size": 4382,
    "path": "../public/_nuxt/input-shims.c6ee930b.js"
  },
  "/_nuxt/intro.cde59819.js": {
    "type": "application/javascript",
    "etag": "\"c4e-1FecCN5qbM2WWkZ0MpLbjm7hryM\"",
    "mtime": "2023-07-02T07:14:27.453Z",
    "size": 3150,
    "path": "../public/_nuxt/intro.cde59819.js"
  },
  "/_nuxt/intro.dc4722df.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e-GVMAK+TPjTmQR78a/cPQJ4tu8O8\"",
    "mtime": "2023-07-02T07:14:27.452Z",
    "size": 94,
    "path": "../public/_nuxt/intro.dc4722df.css"
  },
  "/_nuxt/ios.transition.45a22cc3.js": {
    "type": "application/javascript",
    "etag": "\"251a-OiGHrzdHL+wQKD3+MJxvdFJltYs\"",
    "mtime": "2023-07-02T07:14:27.452Z",
    "size": 9498,
    "path": "../public/_nuxt/ios.transition.45a22cc3.js"
  },
  "/_nuxt/md.transition.e7c098e9.js": {
    "type": "application/javascript",
    "etag": "\"42b-PH0uQ11DAVicJPAWWLdFfULwL3E\"",
    "mtime": "2023-07-02T07:14:27.451Z",
    "size": 1067,
    "path": "../public/_nuxt/md.transition.e7c098e9.js"
  },
  "/_nuxt/newhome.10fe9b11.js": {
    "type": "application/javascript",
    "etag": "\"210e-B7quBeEoyPrhWp0ELSZpCVzADu4\"",
    "mtime": "2023-07-02T07:14:27.450Z",
    "size": 8462,
    "path": "../public/_nuxt/newhome.10fe9b11.js"
  },
  "/_nuxt/newhome.b2c31875.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1bc-UpXtpIrpBxpi6cmKjacKV0T9ro4\"",
    "mtime": "2023-07-02T07:14:27.450Z",
    "size": 444,
    "path": "../public/_nuxt/newhome.b2c31875.css"
  },
  "/_nuxt/status-tap.caeb2059.js": {
    "type": "application/javascript",
    "etag": "\"201-pgUUTX7vwgCyc6m56DG88ofFjYU\"",
    "mtime": "2023-07-02T07:14:27.449Z",
    "size": 513,
    "path": "../public/_nuxt/status-tap.caeb2059.js"
  },
  "/_nuxt/swipe-back.431f0ee1.js": {
    "type": "application/javascript",
    "etag": "\"2ca-330UxWuWkgiecZtAE5uXSE4fS2o\"",
    "mtime": "2023-07-02T07:14:27.448Z",
    "size": 714,
    "path": "../public/_nuxt/swipe-back.431f0ee1.js"
  },
  "/_nuxt/swiper-vue.3e83ad95.js": {
    "type": "application/javascript",
    "etag": "\"253a4-ce2L8ScYMBoWmsNLr6rN8XHwJT0\"",
    "mtime": "2023-07-02T07:14:27.447Z",
    "size": 152484,
    "path": "../public/_nuxt/swiper-vue.3e83ad95.js"
  },
  "/_nuxt/swiper-vue.b5b61d6c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4456-wNvvbYnhDzptqbVTki2s/2Xoj/0\"",
    "mtime": "2023-07-02T07:14:27.445Z",
    "size": 17494,
    "path": "../public/_nuxt/swiper-vue.b5b61d6c.css"
  },
  "/_nuxt/useDarkMode.d10998af.js": {
    "type": "application/javascript",
    "etag": "\"59-ZOrOQV4ffit+dXWlauRnfz9B2L0\"",
    "mtime": "2023-07-02T07:14:27.444Z",
    "size": 89,
    "path": "../public/_nuxt/useDarkMode.d10998af.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _rldSo3 = defineEventHandler(() => useRuntimeConfig().public.pwaManifest);

const _lazy_tt9yMi = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_tt9yMi, lazy: true, middleware: false, method: undefined },
  { route: '/manifest.json', handler: _rldSo3, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_tt9yMi, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
