import { reactive, hasInjectionContext, getCurrentInstance, version, unref, inject, ref, watchEffect, watch, toRef, isRef, isShallow, isReactive, toRaw, shallowRef, nextTick as nextTick$2, computed, isReadonly, defineComponent, h as h$2, provide, onUnmounted, Teleport, withCtx, createVNode, useSSRContext, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, defineAsyncComponent, createApp } from "vue";
import { $fetch } from "ofetch";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { createHooks } from "hookable";
import { getContext, executeAsync } from "unctx";
/* empty css                           */import "devalue";
import { sanitizeStatusCode, createError as createError$1 } from "h3";
import { renderSSRHead } from "@unhead/ssr";
import { createServerHead as createServerHead$1, getActiveHead } from "unhead";
import { defineHeadPlugin } from "@unhead/shared";
import { createRouter as createRouter$1, createMemoryHistory as createMemoryHistory$1, parseQuery, routeLocationKey, useRoute as useRoute$1, matchedRouteKey } from "vue-router";
import { hasProtocol, parseURL, joinURL, isEqual } from "ufo";
import "destr";
import "klona";
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.5.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a;
  const parallels = [];
  const errors = [];
  for (const plugin of plugins2) {
    const promise = applyPlugin(nuxtApp, plugin);
    if ((_a = plugin.meta) == null ? void 0 : _a.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin of _plugins2) {
    if (typeof plugin !== "function") {
      continue;
    }
    let _plugin = plugin;
    if (plugin.length > 1) {
      _plugin = (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin, meta) {
  var _a;
  if (typeof plugin === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin.hooks) {
      nuxtApp.hooks.addHooks(plugin.hooks);
    }
    if (plugin.setup) {
      return plugin.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin.name || ((_a = plugin.setup) == null ? void 0 : _a.name),
    parallel: plugin.parallel,
    order: (meta == null ? void 0 : meta.order) || plugin.order || orderMap[plugin.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const variables = "";
const core = "";
const normalize = "";
const structure = "";
const typography = "";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
const appHead = { "meta": [{ "name": "msapplication-tap-highlight", "content": "no" }, { "name": "format-detection", "content": "telephone: no" }, { "name": "color-scheme", "content": "light dark" }, { "name": "viewport", "content": "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" }, { "charset": "utf-8" }, { "name": "mobile-web-app-capable", "content": "yes", "key": "mobile-web-app-capable" }, { "name": "apple-mobile-web-app-capable", "content": "yes", "key": "apple-mobile-web-app-capable" }, { "name": "apple-mobile-web-app-status-bar-style", "content": "default", "key": "apple-mobile-web-app-status-bar-style" }, { "name": "apple-mobile-web-app-title", "content": "nuxt-app", "key": "apple-mobile-web-app-title" }, { "name": "theme-color", "content": "#000000", "key": "theme-color" }, { "property": "og:type", "content": "website", "key": "og:type" }, { "property": "og:title", "content": "nuxt-app", "key": "og:title" }, { "property": "og:site_name", "content": "nuxt-app", "key": "og:site_name" }, { "name": "twitter:card", "content": "summary", "key": "twitter:card" }], "link": [{ "rel": "manifest", "href": "/manifest.json" }], "style": [], "script": [], "noscript": [], "title": "nuxt-app", "htmlAttrs": { "lang": "en" } };
const appPageTransition = false;
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect() {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return inMiddleware ? (
          /* abort route navigation */
          false
        ) : void 0;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect() : void 0);
        return to;
      }
      return redirect();
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const createLocationHistory = () => {
  const locationHistory = [];
  const tabsHistory = {};
  const add = (routeInfo) => {
    switch (routeInfo.routerAction) {
      case "pop":
        pop(routeInfo);
        break;
      default:
        addRoute(routeInfo);
        break;
    }
    if (routeInfo.routerDirection === "root") {
      clearHistory();
      addRoute(routeInfo);
    }
  };
  const update = (routeInfo) => {
    const locationIndex = locationHistory.findIndex((x) => x.id === routeInfo.id);
    if (locationIndex > -1) {
      locationHistory.splice(locationIndex, 1, routeInfo);
    }
    const tabArray = tabsHistory[routeInfo.tab || ""];
    if (tabArray) {
      const tabIndex = tabArray.findIndex((x) => x.id === routeInfo.id);
      if (tabIndex > -1) {
        tabArray.splice(tabIndex, 1, routeInfo);
      } else {
        tabArray.push(routeInfo);
      }
    } else if (routeInfo.tab) {
      tabsHistory[routeInfo.tab] = [routeInfo];
    }
  };
  const pop = (routeInfo) => {
    const tabHistory = getTabsHistory(routeInfo.tab);
    let ri;
    if (tabHistory) {
      ri = tabHistory[tabHistory.length - 1];
      while (ri && ri.id !== routeInfo.id) {
        tabHistory.pop();
        ri = tabHistory[tabHistory.length - 1];
      }
      tabHistory.pop();
      tabHistory.push(routeInfo);
    }
    ri = locationHistory[locationHistory.length - 1];
    while (ri && ri.id !== routeInfo.id) {
      locationHistory.pop();
      ri = locationHistory[locationHistory.length - 1];
    }
    locationHistory.pop();
    locationHistory.push(routeInfo);
  };
  const addRoute = (routeInfo) => {
    const tabHistory = getTabsHistory(routeInfo.tab);
    if (tabHistory) {
      if (tabHistory[tabHistory.length - 1] && tabHistory[tabHistory.length - 1].id === routeInfo.id) {
        tabHistory.pop();
      }
      tabHistory.push(routeInfo);
    }
    locationHistory.push(routeInfo);
  };
  const clearHistory = (routeInfo) => {
    if (routeInfo) {
      const { position, tab } = routeInfo;
      const existingRouteIndex = locationHistory.findIndex((r) => r.position === position);
      if (existingRouteIndex === -1)
        return;
      locationHistory.splice(existingRouteIndex);
      const clearTabHistory = (tab2) => {
        const existingTabRouteIndex = tabsHistory[tab2].findIndex((r) => r.position === position);
        if (existingTabRouteIndex === -1)
          return;
        tabsHistory[tab2].splice(existingTabRouteIndex);
      };
      const tabHistory = tabsHistory[tab];
      if (tab && tabHistory) {
        clearTabHistory(tab);
      } else {
        for (const tab2 in tabsHistory) {
          clearTabHistory(tab2);
        }
      }
    } else {
      for (const tab in tabsHistory) {
        tabsHistory[tab] = [];
      }
      locationHistory.length = 0;
    }
  };
  const getTabsHistory = (tab) => {
    let history;
    if (tab) {
      history = tabsHistory[tab];
      if (!history) {
        history = tabsHistory[tab] = [];
      }
    }
    return history;
  };
  const size = () => locationHistory.length;
  const current = (initialHistory, currentHistory) => {
    const index = currentHistory - initialHistory;
    return locationHistory[index] || last();
  };
  const last = () => locationHistory[locationHistory.length - 1];
  const canGoBack = (deep = 1, initialHistory, currentHistory) => {
    return currentHistory - deep >= initialHistory;
  };
  const getFirstRouteInfoForTab = (tab) => {
    const tabHistory = getTabsHistory(tab);
    if (tabHistory) {
      return tabHistory[0];
    }
    return void 0;
  };
  const getCurrentRouteInfoForTab = (tab) => {
    const tabHistory = getTabsHistory(tab);
    if (tabHistory) {
      return tabHistory[tabHistory.length - 1];
    }
    return void 0;
  };
  const findLastLocation = (routeInfo, delta = -1) => {
    const routeInfos = getTabsHistory(routeInfo.tab);
    if (routeInfos) {
      if (delta < -1) {
        return routeInfos[routeInfos.length - 1 + delta];
      } else {
        for (let i = routeInfos.length - 2; i >= 0; i--) {
          const ri = routeInfos[i];
          if (ri) {
            if (ri.pathname === routeInfo.pushedByRoute) {
              return ri;
            }
          }
        }
      }
    }
    if (delta < -1) {
      return locationHistory[locationHistory.length - 1 + delta];
    } else {
      for (let i = locationHistory.length - 2; i >= 0; i--) {
        const ri = locationHistory[i];
        if (ri) {
          if (ri.pathname === routeInfo.pushedByRoute) {
            return ri;
          }
        }
      }
    }
    return void 0;
  };
  return {
    current,
    size,
    last,
    add,
    canGoBack,
    update,
    getFirstRouteInfoForTab,
    getCurrentRouteInfoForTab,
    findLastLocation,
    clearHistory
  };
};
const ids$2 = { main: 0 };
const generateId$1 = (type = "main") => {
  var _a;
  const id = ((_a = ids$2[type]) !== null && _a !== void 0 ? _a : 0) + 1;
  ids$2[type] = id;
  return id.toString();
};
const createIonRouter = (opts, router) => {
  let currentNavigationInfo = {
    direction: void 0,
    action: void 0,
    delta: void 0
  };
  router.afterEach((to, _, failure) => {
    if (failure)
      return;
    const { direction, action, delta } = currentNavigationInfo;
    currentHistoryPosition = opts.history.state.position;
    const replaceAction = opts.history.state.replaced ? "replace" : void 0;
    handleHistoryChange(to, action || replaceAction, direction, delta);
    currentNavigationInfo = {
      direction: void 0,
      action: void 0,
      delta: void 0
    };
  });
  const locationHistory = createLocationHistory();
  let initialHistoryPosition = opts.history.state.position;
  let currentHistoryPosition = opts.history.state.position;
  let currentRouteInfo;
  let incomingRouteParams;
  const historyChangeListeners = [];
  opts.history.listen((_, _x, info) => {
    currentNavigationInfo = {
      delta: info.delta,
      /**
       * Both the browser forward and backward actions
       * are considered "pop" actions, but when going forward
       * we want to make sure the forward animation is used.
       */
      action: info.type === "pop" && info.delta >= 1 ? "push" : info.type,
      direction: info.direction === "" ? "forward" : info.direction
    };
  });
  const handleNavigateBack = (defaultHref, routerAnimation) => {
    const routeInfo = locationHistory.current(initialHistoryPosition, currentHistoryPosition);
    if (routeInfo && routeInfo.pushedByRoute) {
      const prevInfo = locationHistory.findLastLocation(routeInfo);
      if (prevInfo) {
        incomingRouteParams = Object.assign(Object.assign({}, prevInfo), { routerAction: "pop", routerDirection: "back", routerAnimation: routerAnimation || routeInfo.routerAnimation });
        if (routeInfo.lastPathname === routeInfo.pushedByRoute || /**
         * We need to exclude tab switches/tab
         * context changes here because tabbed
         * navigation is not linear, but router.back()
         * will go back in a linear fashion.
         */
        prevInfo.pathname === routeInfo.pushedByRoute && /**
         * Tab info can be undefined or '' (empty string)
         * both are false-y values, so we can just use !.
         */
        !routeInfo.tab && !prevInfo.tab) {
          router.back();
        } else {
          router.go(prevInfo.position - routeInfo.position);
        }
      } else {
        handleNavigate(defaultHref, "pop", "back");
      }
    } else {
      handleNavigate(defaultHref, "pop", "back");
    }
  };
  const handleNavigate = (path, routerAction, routerDirection, routerAnimation, tab) => {
    setIncomingRouteParams(routerAction, routerDirection, routerAnimation, tab);
    if (routerAction === "push") {
      router.push(path);
    } else {
      router.replace(path);
    }
  };
  const handleHistoryChange = (location2, action, direction, delta) => {
    let leavingLocationInfo;
    if (incomingRouteParams) {
      if (incomingRouteParams.routerAction === "replace") {
        leavingLocationInfo = locationHistory.current(initialHistoryPosition, currentHistoryPosition);
      } else if (incomingRouteParams.routerAction === "pop") {
        leavingLocationInfo = locationHistory.current(initialHistoryPosition, currentHistoryPosition + 1);
        if (action === "replace") {
          locationHistory.clearHistory();
        }
      } else {
        const position = incomingRouteParams.routerDirection === "root" ? currentHistoryPosition : currentHistoryPosition - 1;
        leavingLocationInfo = locationHistory.current(initialHistoryPosition, position);
      }
    } else {
      leavingLocationInfo = currentRouteInfo;
    }
    if (!leavingLocationInfo) {
      leavingLocationInfo = {
        pathname: "",
        search: ""
      };
    }
    const leavingUrl = leavingLocationInfo.pathname + leavingLocationInfo.search;
    if (leavingUrl !== location2.fullPath) {
      if (!incomingRouteParams) {
        if (action === "replace") {
          incomingRouteParams = {
            routerAction: "replace",
            routerDirection: "none"
          };
        } else if (action === "pop") {
          const routeInfo2 = locationHistory.current(initialHistoryPosition, currentHistoryPosition - delta);
          if (routeInfo2 && routeInfo2.pushedByRoute) {
            const prevRouteInfo = locationHistory.findLastLocation(routeInfo2, delta);
            incomingRouteParams = Object.assign(Object.assign({}, prevRouteInfo), { routerAction: "pop", routerDirection: "back" });
          } else {
            incomingRouteParams = {
              routerAction: "pop",
              routerDirection: "none"
            };
          }
        }
        if (!incomingRouteParams) {
          incomingRouteParams = {
            routerAction: "push",
            routerDirection: direction || "forward"
          };
        }
      }
      let routeInfo;
      if (incomingRouteParams === null || incomingRouteParams === void 0 ? void 0 : incomingRouteParams.id) {
        routeInfo = Object.assign(Object.assign({}, incomingRouteParams), { lastPathname: leavingLocationInfo.pathname });
      } else {
        const isPushed = incomingRouteParams.routerAction === "push" && incomingRouteParams.routerDirection === "forward";
        routeInfo = Object.assign(Object.assign({ id: generateId$1("routeInfo") }, incomingRouteParams), { lastPathname: leavingLocationInfo.pathname, pathname: location2.path, search: location2.fullPath && location2.fullPath.split("?")[1] || "", params: location2.params && location2.params, prevRouteLastPathname: leavingLocationInfo.lastPathname });
        if (isPushed) {
          routeInfo.pushedByRoute = leavingLocationInfo.pathname !== "" ? leavingLocationInfo.pathname : void 0;
        } else if (routeInfo.routerAction === "pop") {
          const route = locationHistory.findLastLocation(routeInfo);
          routeInfo.pushedByRoute = route === null || route === void 0 ? void 0 : route.pushedByRoute;
        } else if (routeInfo.routerAction === "push" && routeInfo.tab !== leavingLocationInfo.tab) {
          const lastRoute = locationHistory.getCurrentRouteInfoForTab(routeInfo.tab);
          routeInfo.pushedByRoute = lastRoute === null || lastRoute === void 0 ? void 0 : lastRoute.pushedByRoute;
        } else if (routeInfo.routerAction === "replace") {
          const currentRouteInfo2 = locationHistory.current(initialHistoryPosition, currentHistoryPosition);
          const currentPushedBy = currentRouteInfo2 === null || currentRouteInfo2 === void 0 ? void 0 : currentRouteInfo2.pushedByRoute;
          const pushedByRoute = currentPushedBy !== void 0 && currentPushedBy !== routeInfo.pathname ? currentPushedBy : routeInfo.pushedByRoute;
          routeInfo.lastPathname = (currentRouteInfo2 === null || currentRouteInfo2 === void 0 ? void 0 : currentRouteInfo2.pathname) || routeInfo.lastPathname;
          routeInfo.pushedByRoute = pushedByRoute;
          routeInfo.routerDirection = (currentRouteInfo2 === null || currentRouteInfo2 === void 0 ? void 0 : currentRouteInfo2.routerDirection) || routeInfo.routerDirection;
          routeInfo.routerAnimation = (currentRouteInfo2 === null || currentRouteInfo2 === void 0 ? void 0 : currentRouteInfo2.routerAnimation) || routeInfo.routerAnimation;
          routeInfo.prevRouteLastPathname = currentRouteInfo2 === null || currentRouteInfo2 === void 0 ? void 0 : currentRouteInfo2.lastPathname;
        }
      }
      routeInfo.position = currentHistoryPosition;
      routeInfo.delta = delta;
      const historySize = locationHistory.size();
      const historyDiff = currentHistoryPosition - initialHistoryPosition;
      const isReplacing = historySize === historyDiff && historySize > 0 && action === "replace";
      if (historySize > historyDiff || isReplacing) {
        if ((routeInfo.routerAction === "push" || routeInfo.routerAction === "replace") && delta === void 0) {
          locationHistory.clearHistory(routeInfo);
          locationHistory.add(routeInfo);
        }
      } else {
        locationHistory.add(routeInfo);
      }
      if (locationHistory.size() === 1) {
        initialHistoryPosition = routeInfo.position;
      }
      currentRouteInfo = routeInfo;
    }
    incomingRouteParams = void 0;
    historyChangeListeners.forEach((cb) => cb(currentRouteInfo));
  };
  const getCurrentRouteInfo = () => currentRouteInfo;
  const canGoBack = (deep = 1) => locationHistory.canGoBack(deep, initialHistoryPosition, currentHistoryPosition);
  const navigate = (navigationOptions) => {
    const { routerAnimation, routerDirection, routerLink } = navigationOptions;
    setIncomingRouteParams("push", routerDirection, routerAnimation);
    router.push(routerLink);
  };
  const resetTab = (tab) => {
    const routeInfo = locationHistory.getFirstRouteInfoForTab(tab);
    if (routeInfo) {
      router.go(routeInfo.position - currentHistoryPosition);
    }
  };
  const changeTab = (tab, path) => {
    if (!path)
      return;
    const routeInfo = locationHistory.getCurrentRouteInfoForTab(tab);
    const [pathname] = path.split("?");
    if (routeInfo) {
      incomingRouteParams = Object.assign(Object.assign({}, incomingRouteParams), { routerAction: "push", routerDirection: "none", tab });
      if (routeInfo.pathname === pathname) {
        router.push({
          path: routeInfo.pathname,
          query: parseQuery(routeInfo.search)
        });
      } else {
        router.push({ path: pathname, query: parseQuery(routeInfo.search) });
      }
    } else {
      handleNavigate(pathname, "push", "none", void 0, tab);
    }
  };
  const handleSetCurrentTab = (tab) => {
    const ri = Object.assign({}, locationHistory.current(initialHistoryPosition, currentHistoryPosition));
    if (ri.tab !== tab) {
      ri.tab = tab;
      locationHistory.update(ri);
    }
    const pushedByRoute = locationHistory.findLastLocation(ri);
    if (ri.pushedByRoute !== ri.lastPathname && (pushedByRoute === null || pushedByRoute === void 0 ? void 0 : pushedByRoute.tab) !== tab) {
      ri.pushedByRoute = void 0;
      locationHistory.update(ri);
    }
  };
  const registerHistoryChangeListener = (cb) => {
    historyChangeListeners.push(cb);
  };
  const setIncomingRouteParams = (routerAction = "push", routerDirection = "forward", routerAnimation, tab) => {
    incomingRouteParams = {
      routerAction,
      routerDirection,
      routerAnimation,
      tab
    };
  };
  const goBack = (routerAnimation) => {
    setIncomingRouteParams("pop", "back", routerAnimation);
    router.back();
  };
  const goForward = (routerAnimation) => {
    setIncomingRouteParams("push", "forward", routerAnimation);
    router.forward();
  };
  const getLeavingRouteInfo = () => {
    return locationHistory.current(initialHistoryPosition, currentHistoryPosition);
  };
  return {
    handleNavigate,
    getLeavingRouteInfo,
    handleNavigateBack,
    handleSetCurrentTab,
    getCurrentRouteInfo,
    canGoBack,
    navigate,
    resetTab,
    changeTab,
    registerHistoryChangeListener,
    goBack,
    goForward
  };
};
const createViewStacks = (router) => {
  const viewStacks = {};
  const size = () => Object.keys(viewStacks).length;
  const clear = (outletId) => {
    delete viewStacks[outletId];
  };
  const getViewStack = (outletId) => {
    return viewStacks[outletId];
  };
  const registerIonPage = (viewItem, ionPage) => {
    viewItem.ionPageElement = ionPage;
    viewItem.ionRoute = true;
    viewItem.matchedRoute.instances = {
      default: viewItem.vueComponentRef.value
    };
  };
  const findViewItemByRouteInfo = (routeInfo, outletId) => {
    return findViewItemByPath(routeInfo.pathname, outletId, false);
  };
  const findLeavingViewItemByRouteInfo = (routeInfo, outletId, mustBeIonRoute = true) => {
    return findViewItemByPath(routeInfo.lastPathname, outletId, mustBeIonRoute);
  };
  const findViewItemByPathname = (pathname, outletId) => {
    return findViewItemByPath(pathname, outletId, false);
  };
  const findViewItemInStack = (path, stack) => {
    return stack.find((viewItem) => {
      if (viewItem.pathname === path) {
        return viewItem;
      }
      return void 0;
    });
  };
  const findViewItemByPath = (path, outletId, mustBeIonRoute = false) => {
    const matchView = (viewItem) => {
      if (mustBeIonRoute && !viewItem.ionRoute || path === "") {
        return false;
      }
      const resolvedPath = router.resolve(path);
      const findMatchedRoute = resolvedPath.matched.find((matchedRoute) => matchedRoute === viewItem.matchedRoute);
      if (findMatchedRoute) {
        const hasParameter = findMatchedRoute.path.includes(":");
        if (hasParameter && path !== viewItem.pathname) {
          return false;
        }
        return viewItem;
      }
      return void 0;
    };
    if (outletId) {
      const stack = viewStacks[outletId];
      if (!stack)
        return void 0;
      const match = router ? stack.find(matchView) : findViewItemInStack(path, stack);
      if (match)
        return match;
    } else {
      for (const outletId2 in viewStacks) {
        const stack = viewStacks[outletId2];
        const viewItem = findViewItemInStack(path, stack);
        if (viewItem) {
          return viewItem;
        }
      }
    }
    return void 0;
  };
  const createViewItem = (outletId, vueComponent, matchedRoute, routeInfo, ionPage) => {
    return {
      id: generateId$1("viewItem"),
      pathname: routeInfo.pathname,
      outletId,
      matchedRoute,
      ionPageElement: ionPage,
      vueComponent,
      vueComponentRef: shallowRef(),
      ionRoute: false,
      mount: false,
      exact: routeInfo.pathname === matchedRoute.path,
      params: routeInfo.params,
      vueComponentData: {}
    };
  };
  const add = (viewItem) => {
    const { outletId } = viewItem;
    if (!viewStacks[outletId]) {
      viewStacks[outletId] = [viewItem];
    } else {
      viewStacks[outletId].push(viewItem);
    }
  };
  const remove = (viewItem, outletId) => {
    if (!outletId) {
      throw Error("outletId required");
    }
    const viewStack = viewStacks[outletId];
    if (viewStack) {
      viewStacks[outletId] = viewStack.filter((item) => item.id !== viewItem.id);
    }
  };
  const getChildrenToRender = (outletId) => {
    const viewStack = viewStacks[outletId];
    if (viewStack) {
      const components = viewStacks[outletId].filter((v) => v.mount);
      return components;
    }
    return [];
  };
  const unmountLeavingViews = (outletId, viewItem, delta = 1) => {
    const viewStack = viewStacks[outletId];
    if (!viewStack)
      return;
    const startIndex = viewStack.findIndex((v) => v === viewItem);
    for (let i = startIndex + 1; i < startIndex - delta; i++) {
      const viewItem2 = viewStack[i];
      viewItem2.mount = false;
      viewItem2.ionPageElement = void 0;
      viewItem2.ionRoute = false;
      viewItem2.matchedRoute.instances = {};
    }
  };
  const mountIntermediaryViews = (outletId, viewItem, delta = 1) => {
    const viewStack = viewStacks[outletId];
    if (!viewStack)
      return;
    const startIndex = viewStack.findIndex((v) => v === viewItem);
    for (let i = startIndex + 1; i < startIndex + delta; i++) {
      viewStack[i].mount = true;
    }
  };
  return {
    unmountLeavingViews,
    mountIntermediaryViews,
    clear,
    findViewItemByRouteInfo,
    findLeavingViewItemByRouteInfo,
    findViewItemByPathname,
    createViewItem,
    getChildrenToRender,
    add,
    remove,
    registerIonPage,
    getViewStack,
    size
  };
};
const createRouter = (opts) => {
  const routerOptions2 = Object.assign({}, opts);
  delete routerOptions2.tabsPrefix;
  const router = createRouter$1(routerOptions2);
  const ionRouter = createIonRouter(opts, router);
  const viewStacks = createViewStacks(router);
  const oldInstall = router.install.bind(router);
  router.install = (app) => {
    app.provide("navManager", ionRouter);
    app.provide("viewStacks", viewStacks);
    oldInstall(app);
  };
  const oldIsReady = router.isReady.bind(router);
  router.isReady = () => oldIsReady();
  return router;
};
const createMemoryHistory = (base) => createMemoryHistory$1(base);
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick$2();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const _routes = [
  {
    name: "home",
    path: "/home",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/home-9df95297.js").then((m) => m.default || m)
  },
  {
    name: "homelast",
    path: "/homelast",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/homelast-cbee43dc.js").then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/index-1c2e3680.js").then((m) => m.default || m)
  },
  {
    name: "intro",
    path: "/intro",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/intro-10a90562.js").then((m) => m.default || m)
  },
  {
    name: "newhome",
    path: "/newhome",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/newhome-ed220739.js").then((m) => m.default || m)
  }
];
const router_h7T2ZmMnVl = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
  const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c, _d;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  nuxtApp.hooks.hookOnce("app:mounted", async () => {
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([
        ...globalMiddleware,
        ...nuxtApp._middleware.global
      ]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(async (to) => {
      delete nuxtApp._processingMiddleware;
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [
          createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`
          })
        ]);
      } else {
        const currentURL = to.fullPath || "/";
        if (!isEqual(currentURL, initialURL, { trailingSlash: true })) {
          const event = await callWithNuxt(nuxtApp, useRequestEvent);
          const options = {
            redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302
          };
          await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
        }
      }
    });
    try {
      if (false)
        ;
    } catch (error2) {
      await nuxtApp.runWithContext(() => showError(error2));
    }
  });
  return { provide: { router } };
});
const BUILD$1 = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  appendChildSlotFix: false,
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
  safari10: false,
  scriptDataOpts: false,
  scopedSlotTextContentFix: false,
  // TODO(STENCIL-662): Remove code related to deprecated shadowDomShim field
  shadowDomShim: false,
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  // TODO(STENCIL-659): Remove code implementing the CSS variable shim
  cssVarShim: false,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  // TODO(STENCIL-661): Remove code related to the dynamic import shim
  dynamicImportShim: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: false,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true
};
let scopeId$1;
let contentRef$1;
let hostTagName$1;
let useNativeShadowDom$1 = false;
let checkSlotFallbackVisibility$1 = false;
let checkSlotRelocate$1 = false;
let isSvgMode$1 = false;
let renderingRef$1 = null;
let queuePending$1 = false;
const Build = {
  isDev: false,
  isBrowser: true,
  isServer: false,
  isTesting: false
};
const getAssetPath$1 = (path) => {
  const assetUrl = new URL(path, plt$1.$resourcesUrl$);
  return assetUrl.origin !== win$2.location.origin ? assetUrl.href : assetUrl.pathname;
};
const createTime$1 = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
const XLINK_NS$1 = "http://www.w3.org/1999/xlink";
const EMPTY_OBJ$1 = {};
const SVG_NS$1 = "http://www.w3.org/2000/svg";
const HTML_NS$1 = "http://www.w3.org/1999/xhtml";
const isDef$1 = (v) => v != null;
const isComplexType$1 = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent$1(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : void 0;
}
const h$1 = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType$1(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode$1(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils$1);
  }
  const vnode = newVNode$1(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
const newVNode$1 = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
const Host$1 = {};
const isHost$1 = (node) => node && node.$tag$ === Host$1;
const vdomFnUtils$1 = {
  forEach: (children, cb) => children.map(convertToPublic$1).forEach(cb),
  map: (children, cb) => children.map(convertToPublic$1).map(cb).map(convertToPrivate$1)
};
const convertToPublic$1 = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
const convertToPrivate$1 = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = Object.assign({}, node.vattrs);
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h$1(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode$1(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
const computeMode$1 = (elm) => modeResolutionChain$1.map((h2) => h2(elm)).find((m) => !!m);
const getMode = (ref2) => getHostRef$1(ref2).$modeName$;
const parsePropertyValue$1 = (propValue, propType) => {
  if (propValue != null && !isComplexType$1(propValue)) {
    if (propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2) {
      return parseFloat(propValue);
    }
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
const getElement = (ref2) => ref2;
const createEvent = (ref2, name, flags) => {
  const elm = getElement(ref2);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
const emitEvent = (elm, name, opts) => {
  const ev = plt$1.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
const rootAppliedStyles$1 = /* @__PURE__ */ new WeakMap();
const registerStyle$1 = (scopeId2, cssText, allowCS) => {
  let style = styles$1.get(scopeId2);
  if (supportsConstructableStylesheets$1 && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles$1.set(scopeId2, style);
};
const addStyle$1 = (styleContainerNode, cmpMeta, mode, hostElm) => {
  var _a;
  let scopeId2 = getScopeId$1(cmpMeta, mode);
  const style = styles$1.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc$1;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles$1.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles$1.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          {
            styleElm = doc$1.createElement("style");
            styleElm.innerHTML = style;
          }
          const nonce = (_a = plt$1.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent$1(doc$1);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
const attachStyles$1 = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime$1("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle$1(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (flags & 2) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
const getScopeId$1 = (cmp, mode) => "sc-" + (mode && cmp.$flags$ & 32 ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
const setAccessor$1 = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement$1(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList$1(oldValue);
      const newClasses = parseClassList$1(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key")
      ;
    else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (!elm.__lookupSetter__(memberName) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement$1(win$2, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue) {
        plt$1.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt$1.ael(elm, memberName, newValue, false);
      }
    } else {
      const isComplex = isComplexType$1(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS$1, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS$1, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex$1 = /\s/;
const parseClassList$1 = (value) => !value ? [] : value.split(parseClassListRegex$1);
const updateElement$1 = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ$1;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ$1;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor$1(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor$1(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
const createElm$1 = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom$1) {
    checkSlotRelocate$1 = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId$1) {
        parentElm.classList.add(scopeId$1 + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        2
      ) : (
        // slot element does not have fallback content
        1
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc$1.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = doc$1.createTextNode("");
  } else {
    if (!isSvgMode$1) {
      isSvgMode$1 = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc$1.createElementNS(isSvgMode$1 ? SVG_NS$1 : HTML_NS$1, newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
    if (isSvgMode$1 && newVNode2.$tag$ === "foreignObject") {
      isSvgMode$1 = false;
    }
    {
      updateElement$1(null, newVNode2, isSvgMode$1);
    }
    if (isDef$1(scopeId$1) && elm["s-si"] !== scopeId$1) {
      elm.classList.add(elm["s-si"] = scopeId$1);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm$1(oldParentVNode, newVNode2, i, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode$1 = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode$1 = true;
      }
    }
  }
  {
    elm["s-hn"] = hostTagName$1;
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef$1;
      elm["s-sn"] = newVNode2.$name$ || "";
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        putBackInOriginalLocation$1(oldParentVNode.$elm$, false);
      }
    }
  }
  return elm;
};
const putBackInOriginalLocation$1 = (parentElm, recursive) => {
  plt$1.$flags$ |= 1;
  const oldSlotChildNodes = parentElm.childNodes;
  for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
    const childNode = oldSlotChildNodes[i];
    if (childNode["s-hn"] !== hostTagName$1 && childNode["s-ol"]) {
      parentReferenceNode$1(childNode).insertBefore(childNode, referenceNode$1(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      checkSlotRelocate$1 = true;
    }
    if (recursive) {
      putBackInOriginalLocation$1(childNode, recursive);
    }
  }
  plt$1.$flags$ &= ~1;
};
const addVnodes$1 = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName$1) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm$1(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, referenceNode$1(before));
      }
    }
  }
};
const removeVnodes$1 = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility$1 = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation$1(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
const updateChildren$1 = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode$1(oldStartVnode, newStartVnode)) {
      patch$1(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode$1(oldEndVnode, newEndVnode)) {
      patch$1(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode$1(oldStartVnode, newEndVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation$1(oldStartVnode.$elm$.parentNode, false);
      }
      patch$1(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode$1(oldEndVnode, newStartVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation$1(oldEndVnode.$elm$.parentNode, false);
      }
      patch$1(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm$1(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch$1(elmToMove, newStartVnode);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm$1(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          parentReferenceNode$1(oldStartVnode.$elm$).insertBefore(node, referenceNode$1(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes$1(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes$1(oldCh, oldStartIdx, oldEndIdx);
  }
};
const isSameVnode$1 = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    {
      return leftVNode.$key$ === rightVNode.$key$;
    }
  }
  return false;
};
const referenceNode$1 = (node) => {
  return node && node["s-ol"] || node;
};
const parentReferenceNode$1 = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
const patch$1 = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode$1 = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode$1;
    }
    {
      if (tag === "slot")
        ;
      else {
        updateElement$1(oldVNode, newVNode2, isSvgMode$1);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren$1(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes$1(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes$1(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode$1 && tag === "svg") {
      isSvgMode$1 = false;
    }
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
const updateFallbackSlotVisibility$1 = (elm) => {
  const childNodes = elm.childNodes;
  let childNode;
  let i;
  let ilen;
  let j;
  let slotNameAttr;
  let nodeType;
  for (i = 0, ilen = childNodes.length; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode.nodeType === 1) {
      if (childNode["s-sr"]) {
        slotNameAttr = childNode["s-sn"];
        childNode.hidden = false;
        for (j = 0; j < ilen; j++) {
          nodeType = childNodes[j].nodeType;
          if (childNodes[j]["s-hn"] !== childNode["s-hn"] || slotNameAttr !== "") {
            if (nodeType === 1 && slotNameAttr === childNodes[j].getAttribute("slot")) {
              childNode.hidden = true;
              break;
            }
          } else {
            if (nodeType === 1 || nodeType === 3 && childNodes[j].textContent.trim() !== "") {
              childNode.hidden = true;
              break;
            }
          }
        }
      }
      updateFallbackSlotVisibility$1(childNode);
    }
  }
};
const relocateNodes$1 = [];
const relocateSlotContent$1 = (elm) => {
  let childNode;
  let node;
  let hostContentNodes;
  let slotNameAttr;
  let relocateNodeData;
  let j;
  let i = 0;
  const childNodes = elm.childNodes;
  const ilen = childNodes.length;
  for (; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      slotNameAttr = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"]) {
          if (isNodeLocatedInSlot$1(node, slotNameAttr)) {
            relocateNodeData = relocateNodes$1.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility$1 = true;
            node["s-sn"] = node["s-sn"] || slotNameAttr;
            if (relocateNodeData) {
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              relocateNodes$1.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes$1.map((relocateNode) => {
                if (isNodeLocatedInSlot$1(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes$1.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes$1.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes$1.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1) {
      relocateSlotContent$1(childNode);
    }
  }
};
const isNodeLocatedInSlot$1 = (nodeToRelocate, slotNameAttr) => {
  if (nodeToRelocate.nodeType === 1) {
    if (nodeToRelocate.getAttribute("slot") === null && slotNameAttr === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotNameAttr) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotNameAttr) {
    return true;
  }
  return slotNameAttr === "";
};
const nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
const renderVdom$1 = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode$1(null, null);
  const rootVnode = isHost$1(renderFnResults) ? renderFnResults : h$1(null, null, renderFnResults);
  hostTagName$1 = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId$1 = hostElm["s-sc"];
  }
  {
    contentRef$1 = hostElm["s-cr"];
    useNativeShadowDom$1 = (cmpMeta.$flags$ & 1) !== 0;
    checkSlotFallbackVisibility$1 = false;
  }
  patch$1(oldVNode, rootVnode);
  {
    plt$1.$flags$ |= 1;
    if (checkSlotRelocate$1) {
      relocateSlotContent$1(rootVnode.$elm$);
      let relocateData;
      let nodeToRelocate;
      let orgLocationNode;
      let parentNodeRef;
      let insertBeforeNode;
      let refNode;
      let i = 0;
      for (; i < relocateNodes$1.length; i++) {
        relocateData = relocateNodes$1[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          orgLocationNode = doc$1.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (i = 0; i < relocateNodes$1.length; i++) {
        relocateData = relocateNodes$1[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (relocateData.$slotRefNode$) {
          parentNodeRef = relocateData.$slotRefNode$.parentNode;
          insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
          orgLocationNode = nodeToRelocate["s-ol"];
          while (orgLocationNode = orgLocationNode.previousSibling) {
            refNode = orgLocationNode["s-nr"];
            if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
              refNode = refNode.nextSibling;
              if (!refNode || !refNode["s-nr"]) {
                insertBeforeNode = refNode;
                break;
              }
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
            }
          }
        } else {
          if (nodeToRelocate.nodeType === 1) {
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility$1) {
      updateFallbackSlotVisibility$1(rootVnode.$elm$);
    }
    plt$1.$flags$ &= ~1;
    relocateNodes$1.length = 0;
  }
};
const attachToAncestor$1 = (hostRef, ancestorComponent) => {
};
const scheduleUpdate$1 = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  attachToAncestor$1(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks$1(hostRef, isInitialLoad);
  return writeTask$1(dispatch);
};
const dispatchHooks$1 = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime$1("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = elm;
  let maybePromise;
  if (isInitialLoad) {
    {
      maybePromise = safeCall$1(instance, "componentWillLoad");
    }
  } else {
    {
      maybePromise = safeCall$1(instance, "componentWillUpdate");
    }
  }
  {
    maybePromise = enqueue(maybePromise, () => safeCall$1(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent$1(hostRef, instance, isInitialLoad));
};
const enqueue = (maybePromise, fn) => maybePromise instanceof Promise ? maybePromise.then(fn) : fn();
const updateComponent$1 = async (hostRef, instance, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime$1("update", hostRef.$cmpMeta$.$tagName$);
  elm["s-rc"];
  if (isInitialLoad) {
    attachStyles$1(hostRef);
  }
  const endRender = createTime$1("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender$1(hostRef, instance, elm);
  }
  endRender();
  endUpdate();
  {
    postUpdateComponent$1(hostRef);
  }
};
const callRender$1 = (hostRef, instance, elm) => {
  const allRenderFn = false;
  const lazyLoad = false;
  const taskQueue = true;
  const updatable = true;
  try {
    renderingRef$1 = instance;
    instance = allRenderFn ? instance.render() : instance.render && instance.render();
    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16;
    }
    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2;
    }
    if (BUILD$1.hasRenderFn || BUILD$1.reflect) {
      if (BUILD$1.vdomRender || BUILD$1.reflect) {
        if (BUILD$1.hydrateServerSide)
          ;
        else {
          renderVdom$1(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError$1(e, hostRef.$hostElement$);
  }
  renderingRef$1 = null;
  return null;
};
const postUpdateComponent$1 = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime$1("postUpdate", tagName);
  const instance = elm;
  hostRef.$ancestorComponent$;
  {
    safeCall$1(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      safeCall$1(instance, "componentDidLoad");
    }
    endPostUpdate();
  } else {
    {
      safeCall$1(instance, "componentDidUpdate");
    }
    endPostUpdate();
  }
};
const forceUpdate = (ref2) => {
  {
    const hostRef = getHostRef$1(ref2);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate$1(hostRef, false);
    }
    return isConnected;
  }
};
const safeCall$1 = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError$1(e);
    }
  }
  return void 0;
};
const getValue$1 = (ref2, propName) => getHostRef$1(ref2).$instanceValues$.get(propName);
const setValue$1 = (ref2, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef$1(ref2);
  const elm = ref2;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = elm;
  newVal = parsePropertyValue$1(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if (didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    {
      if (cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError$1(e, elm);
            }
          });
        }
      }
      if ((flags & (2 | 16)) === 2) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate$1(hostRef, false);
      }
    }
  }
};
const proxyComponent$1 = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue$1(this, memberName);
          },
          set(newValue) {
            setValue$1(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      }
    });
    {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, _oldValue, newValue) {
        plt$1.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = members.filter(
        ([_, m]) => m[0] & 15
        /* MEMBER_FLAGS.HasAttribute */
      ).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512) {
          cmpMeta.$attrsToReflect$.push([propName, attrName]);
        }
        return attrName;
      });
    }
  }
  return Cstr;
};
const initializeComponent$1 = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    hostRef.$flags$ |= 32;
    {
      Cstr = elm.constructor;
      customElements.whenDefined(cmpMeta.$tagName$).then(() => hostRef.$flags$ |= 128);
    }
    if (Cstr.style) {
      let style = Cstr.style;
      if (typeof style !== "string") {
        style = style[hostRef.$modeName$ = computeMode$1(elm)];
      }
      const scopeId2 = getScopeId$1(cmpMeta, hostRef.$modeName$);
      if (!styles$1.has(scopeId2)) {
        const endRegisterStyles = createTime$1("registerStyles", cmpMeta.$tagName$);
        registerStyle$1(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate$1(hostRef, true);
  {
    schedule();
  }
};
const fireConnectedCallback$1 = (instance) => {
};
const connectedCallback$1 = (elm) => {
  if ((plt$1.$flags$ & 1) === 0) {
    const hostRef = getHostRef$1(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime$1("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      {
        if (
          // TODO(STENCIL-662): Remove code related to deprecated shadowDomShim field
          cmpMeta.$flags$ & (4 | 8)
        ) {
          setContentReference$1(elm);
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent$1(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners$1(elm, hostRef, cmpMeta.$listeners$);
      fireConnectedCallback$1(hostRef.$lazyInstance$);
    }
    endConnected();
  }
};
const setContentReference$1 = (elm) => {
  const contentRefElm = elm["s-cr"] = doc$1.createComment("");
  contentRefElm["s-cn"] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback$1 = (elm) => {
  if ((plt$1.$flags$ & 1) === 0) {
    const hostRef = getHostRef$1(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
  }
};
const proxyCustomElement$1 = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };
  {
    cmpMeta.$members$ = compactMeta[2];
  }
  {
    cmpMeta.$listeners$ = compactMeta[3];
  }
  {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }
  {
    cmpMeta.$attrsToReflect$ = [];
  }
  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost() {
      registerHost$1(this, cmpMeta);
    },
    connectedCallback() {
      connectedCallback$1(this);
      if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback() {
      disconnectedCallback$1(this);
      if (originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },
    __attachShadow() {
      {
        {
          this.attachShadow({
            mode: "open",
            delegatesFocus: !!(cmpMeta.$flags$ & 16)
          });
        }
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent$1(Cstr, cmpMeta);
};
const addHostEventListeners$1 = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget$1(elm, flags);
      const handler = hostListenerProxy$1(hostRef, method);
      const opts = hostListenerOpts$1(flags);
      plt$1.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt$1.rel(target, name, handler, opts));
    });
  }
};
const hostListenerProxy$1 = (hostRef, methodName) => (ev) => {
  try {
    if (BUILD$1.lazyLoad)
      ;
    else {
      hostRef.$hostElement$[methodName](ev);
    }
  } catch (e) {
    consoleError$1(e);
  }
};
const getHostListenerTarget$1 = (elm, flags) => {
  if (flags & 4)
    return doc$1;
  if (flags & 8)
    return win$2;
  if (flags & 16)
    return doc$1.body;
  return elm;
};
const hostListenerOpts$1 = (flags) => supportsListenerOptions$1 ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;
const hostRefs$1 = /* @__PURE__ */ new WeakMap();
const getHostRef$1 = (ref2) => hostRefs$1.get(ref2);
const registerHost$1 = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  addHostEventListeners$1(elm, hostRef, cmpMeta.$listeners$);
  return hostRefs$1.set(elm, hostRef);
};
const isMemberInElement$1 = (elm, memberName) => memberName in elm;
const consoleError$1 = (e, el) => (0, console.error)(e, el);
const styles$1 = /* @__PURE__ */ new Map();
const modeResolutionChain$1 = [];
const win$2 = {};
const doc$1 = win$2.document || { head: {} };
const H$1 = win$2.HTMLElement || class {
};
const plt$1 = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
const supportsListenerOptions$1 = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc$1.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        supportsListenerOptions2 = true;
      }
    }));
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
const promiseResolve$1 = (v) => Promise.resolve(v);
const supportsConstructableStylesheets$1 = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
const queueDomReads$1 = [];
const queueDomWrites$1 = [];
const queueTask$1 = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending$1) {
    queuePending$1 = true;
    if (write && plt$1.$flags$ & 4) {
      nextTick$1(flush$1);
    } else {
      plt$1.raf(flush$1);
    }
  }
};
const consume$1 = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError$1(e);
    }
  }
  queue.length = 0;
};
const flush$1 = () => {
  consume$1(queueDomReads$1);
  {
    consume$1(queueDomWrites$1);
    if (queuePending$1 = queueDomReads$1.length > 0) {
      plt$1.raf(flush$1);
    }
  }
};
const nextTick$1 = (cb) => promiseResolve$1().then(cb);
const readTask = /* @__PURE__ */ queueTask$1(queueDomReads$1, false);
const writeTask$1 = /* @__PURE__ */ queueTask$1(queueDomWrites$1, true);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class Config {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== void 0 ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === void 0) {
      return fallback;
    }
    if (typeof val === "string") {
      return val === "true";
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
}
const config = /* @__PURE__ */ new Config();
const getPlatforms = (win2) => setupPlatforms(win2);
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win2 = window) => {
  if (typeof win2 === "undefined") {
    return [];
  }
  win2.Ionic = win2.Ionic || {};
  let platforms = win2.Ionic.platforms;
  if (platforms == null) {
    platforms = win2.Ionic.platforms = detectPlatforms(win2);
    platforms.forEach((p) => win2.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
const detectPlatforms = (win2) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win2) : PLATFORMS_MAP[p](win2);
  });
};
const isMobileWeb = (win2) => isMobile(win2) && !isHybrid(win2);
const isIpad = (win2) => {
  if (testUserAgent(win2, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win2, /Macintosh/i) && isMobile(win2)) {
    return true;
  }
  return false;
};
const isIphone = (win2) => testUserAgent(win2, /iPhone/i);
const isIOS = (win2) => testUserAgent(win2, /iPhone|iPod/i) || isIpad(win2);
const isAndroid = (win2) => testUserAgent(win2, /android|sink/i);
const isAndroidTablet = (win2) => {
  return isAndroid(win2) && !testUserAgent(win2, /mobile/i);
};
const isPhablet = (win2) => {
  const width = win2.innerWidth;
  const height = win2.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
const isTablet = (win2) => {
  const width = win2.innerWidth;
  const height = win2.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win2) || isAndroidTablet(win2) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
const isMobile = (win2) => matchMedia(win2, "(any-pointer:coarse)");
const isDesktop = (win2) => !isMobile(win2);
const isHybrid = (win2) => isCordova(win2) || isCapacitorNative(win2);
const isCordova = (win2) => !!(win2["cordova"] || win2["phonegap"] || win2["PhoneGap"]);
const isCapacitorNative = (win2) => {
  const capacitor = win2["Capacitor"];
  return !!(capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative);
};
const isElectron = (win2) => testUserAgent(win2, /electron/i);
const isPWA = (win2) => {
  var _a;
  return !!(((_a = win2.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win2, "(display-mode: standalone)").matches) || win2.navigator.standalone);
};
const testUserAgent = (win2, expr) => expr.test(win2.navigator.userAgent);
const matchMedia = (win2, query) => {
  var _a;
  return (_a = win2.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win2, query).matches;
};
const PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
let defaultMode;
const getIonMode$2 = (ref2) => {
  return ref2 && getMode(ref2) || defaultMode;
};
const initialize = (userConfig = {}) => {
  {
    return;
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
};
const hasLazyBuild = (stencilEl) => {
  return stencilEl.componentOnReady !== void 0;
};
const inheritAttributes$2 = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const ariaAttributes = [
  "role",
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-braillelabel",
  "aria-brailleroledescription",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colindextext",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowindextext",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext"
];
const inheritAriaAttributes = (el, ignoreList) => {
  let attributesToInherit = ariaAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter((attr) => !ignoreList.includes(attr));
  }
  return inheritAttributes$2(el, attributesToInherit);
};
const addEventListener$1 = (el, eventName, callback, opts) => {
  return el.addEventListener(eventName, callback, opts);
};
const removeEventListener = (el, eventName, callback, opts) => {
  return el.removeEventListener(eventName, callback, opts);
};
const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
const raf = (h2) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h2);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h2);
  }
  return setTimeout(h2);
};
const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest("ion-item");
  if (itemEl) {
    return itemEl.querySelector("ion-label");
  }
  return null;
};
const getAriaLabel = (componentEl, inputId) => {
  let labelText;
  const labelledBy = componentEl.getAttribute("aria-labelledby");
  const componentId = componentEl.id;
  let labelId = labelledBy !== null && labelledBy.trim() !== "" ? labelledBy : inputId + "-lbl";
  let label = labelledBy !== null && labelledBy.trim() !== "" ? document.getElementById(labelledBy) : findItemLabel(componentEl);
  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }
    labelText = label.textContent;
    label.setAttribute("aria-hidden", "true");
  } else if (componentId.trim() !== "") {
    label = document.querySelector(`label[for="${componentId}"]`);
    if (label) {
      if (label.id !== "") {
        labelId = label.id;
      } else {
        label.id = labelId = `${componentId}-lbl`;
      }
      labelText = label.textContent;
    }
  }
  return { label, labelId, labelText };
};
const renderHiddenInput = (always, container, name, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector("input.aux-input");
    if (!input) {
      input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add("aux-input");
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || "";
  }
};
const clamp = (min, n, max) => {
  return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
  if (!actual) {
    const message = "ASSERT: " + reason;
    console.error(message);
    debugger;
    throw new Error(message);
  }
};
const now$1 = (ev) => {
  return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if (ev.pageX !== void 0) {
      return { x: ev.pageX, y: ev.pageY };
    }
  }
  return { x: 0, y: 0 };
};
const shallowEqualStringMap = (map1, map2) => {
  map1 !== null && map1 !== void 0 ? map1 : map1 = {};
  map2 !== null && map2 !== void 0 ? map2 : map2 = {};
  if (map1 === map2) {
    return true;
  }
  const keys1 = Object.keys(map1);
  if (keys1.length !== Object.keys(map2).length) {
    return false;
  }
  for (const k1 of keys1) {
    if (!(k1 in map2)) {
      return false;
    }
    if (map1[k1] !== map2[k1]) {
      return false;
    }
  }
  return true;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const getIconMap$1 = () => {
  {
    return /* @__PURE__ */ new Map();
  }
};
const getUrl$1 = (i) => {
  let url = getSrc$1(i.src);
  if (url) {
    return url;
  }
  url = getName$1(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl$1(url);
  }
  if (i.icon) {
    url = getSrc$1(i.icon);
    if (url) {
      return url;
    }
    url = getSrc$1(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
const getNamedUrl$1 = (iconName) => {
  const url = getIconMap$1().get(iconName);
  if (url) {
    return url;
  }
  return getAssetPath$1(`svg/${iconName}.svg`);
};
const getName$1 = (iconName, icon, mode, ios, md) => {
  mode = (mode && toLower$1(mode)) === "ios" ? "ios" : "md";
  if (ios && mode === "ios") {
    iconName = toLower$1(ios);
  } else if (md && mode === "md") {
    iconName = toLower$1(md);
  } else {
    if (!iconName && icon && !isSrc$1(icon)) {
      iconName = icon;
    }
    if (isStr$1(iconName)) {
      iconName = toLower$1(iconName);
    }
  }
  if (!isStr$1(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
const getSrc$1 = (src) => {
  if (isStr$1(src)) {
    src = src.trim();
    if (isSrc$1(src)) {
      return src;
    }
  }
  return null;
};
const isSrc$1 = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr$1 = (val) => typeof val === "string";
const toLower$1 = (val) => val.toLowerCase();
const inheritAttributes$1 = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const isRTL$2 = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};
const validateContent$1 = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid$1(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
const isValid$1 = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr$1(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid$1(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
const isSvgDataUrl$1 = (url) => url.startsWith("data:image/svg+xml");
const isEncodedDataUrl$1 = (url) => url.indexOf(";utf8,") !== -1;
const ioniconContent$1 = /* @__PURE__ */ new Map();
const requests$1 = /* @__PURE__ */ new Map();
let parser$1;
const getSvgContent$1 = (url, sanitize) => {
  let req = requests$1.get(url);
  if (!req) {
    if (typeof fetch !== "undefined" && false) {
      if (isSvgDataUrl$1(url) && isEncodedDataUrl$1(url)) {
        if (!parser$1) {
          parser$1 = new DOMParser();
        }
        const doc2 = parser$1.parseFromString(url, "text/html");
        const svg = doc2.querySelector("svg");
        if (svg) {
          ioniconContent$1.set(url, svg.outerHTML);
        }
        return Promise.resolve();
      } else {
        req = fetch(url).then((rsp) => {
          if (rsp.ok) {
            return rsp.text().then((svgContent) => {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent$1(svgContent);
              }
              ioniconContent$1.set(url, svgContent || "");
            });
          }
          ioniconContent$1.set(url, "");
        });
        requests$1.set(url, req);
      }
    } else {
      ioniconContent$1.set(url, "");
      return Promise.resolve();
    }
  }
  return req;
};
const iconCss$1 = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
const Icon$1 = /* @__PURE__ */ proxyCustomElement$1(class Icon extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.iconName = null;
    this.inheritedAttributes = {};
    this.isVisible = false;
    this.mode = getIonMode$1();
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes$1(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (this.lazy && false) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = void 0;
          cb();
        }
      }, { rootMargin });
      io.observe(el);
    } else {
      cb();
    }
  }
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl$1(this);
      if (url) {
        if (ioniconContent$1.has(url)) {
          this.svgContent = ioniconContent$1.get(url);
        } else {
          getSvgContent$1(url, this.sanitize).then(() => this.svgContent = ioniconContent$1.get(url));
        }
      }
    }
    this.iconName = getName$1(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { iconName, el, inheritedAttributes } = this;
    const mode = this.mode || "md";
    const flipRtl = this.flipRtl || iconName && (iconName.indexOf("arrow") > -1 || iconName.indexOf("chevron") > -1) && this.flipRtl !== false;
    return h$1(Host$1, Object.assign({ role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses$2(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": !!flipRtl && isRTL$2(el) }) }, inheritedAttributes), this.svgContent ? h$1("div", { class: "icon-inner", innerHTML: this.svgContent }) : h$1("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
  static get style() {
    return iconCss$1;
  }
}, [1, "ion-icon", {
  "mode": [1025],
  "color": [1],
  "ios": [1],
  "md": [1],
  "flipRtl": [4, "flip-rtl"],
  "name": [513],
  "src": [1],
  "icon": [8],
  "size": [1],
  "lazy": [4],
  "sanitize": [4],
  "svgContent": [32],
  "isVisible": [32]
}]);
const getIonMode$1 = () => "md";
const createColorClasses$2 = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
function defineCustomElement$E() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-icon":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Icon$1);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
const printIonError = (message, ...params) => {
  return console.error(`[Ionic Error]: ${message}`, ...params);
};
const printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
const Avatar = /* @__PURE__ */ proxyCustomElement$1(class Avatar2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h$1(Host$1, { class: getIonMode$2(this) }, h$1("slot", null));
  }
  static get style() {
    return {
      ios: avatarIosCss,
      md: avatarMdCss
    };
  }
}, [33, "ion-avatar"]);
function defineCustomElement$1$p() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-avatar"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-avatar":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Avatar);
        }
        break;
    }
  });
}
const defineCustomElement$D = defineCustomElement$1$p;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class GestureController {
  constructor() {
    this.gestureId = 0;
    this.requestedStart = /* @__PURE__ */ new Map();
    this.disabledGestures = /* @__PURE__ */ new Map();
    this.disabledScroll = /* @__PURE__ */ new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(config2) {
    var _a;
    return new GestureDelegate(this, this.newID(), config2.name, (_a = config2.priority) !== null && _a !== void 0 ? _a : 0, !!config2.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(opts = {}) {
    return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
  }
  start(gestureName, id, priority) {
    if (!this.canStart(gestureName)) {
      this.requestedStart.delete(id);
      return false;
    }
    this.requestedStart.set(id, priority);
    return true;
  }
  capture(gestureName, id, priority) {
    if (!this.start(gestureName, id, priority)) {
      return false;
    }
    const requestedStart = this.requestedStart;
    let maxPriority = -1e4;
    requestedStart.forEach((value) => {
      maxPriority = Math.max(maxPriority, value);
    });
    if (maxPriority === priority) {
      this.capturedId = id;
      requestedStart.clear();
      const event = new CustomEvent("ionGestureCaptured", { detail: { gestureName } });
      document.dispatchEvent(event);
      return true;
    }
    requestedStart.delete(id);
    return false;
  }
  release(id) {
    this.requestedStart.delete(id);
    if (this.capturedId === id) {
      this.capturedId = void 0;
    }
  }
  disableGesture(gestureName, id) {
    let set = this.disabledGestures.get(gestureName);
    if (set === void 0) {
      set = /* @__PURE__ */ new Set();
      this.disabledGestures.set(gestureName, set);
    }
    set.add(id);
  }
  enableGesture(gestureName, id) {
    const set = this.disabledGestures.get(gestureName);
    if (set !== void 0) {
      set.delete(id);
    }
  }
  disableScroll(id) {
    this.disabledScroll.add(id);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  }
  enableScroll(id) {
    this.disabledScroll.delete(id);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  }
  canStart(gestureName) {
    if (this.capturedId !== void 0) {
      return false;
    }
    if (this.isDisabled(gestureName)) {
      return false;
    }
    return true;
  }
  isCaptured() {
    return this.capturedId !== void 0;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(gestureName) {
    const disabled = this.disabledGestures.get(gestureName);
    if (disabled && disabled.size > 0) {
      return true;
    }
    return false;
  }
  newID() {
    this.gestureId++;
    return this.gestureId;
  }
}
class GestureDelegate {
  constructor(ctrl, id, name, priority, disableScroll) {
    this.id = id;
    this.name = name;
    this.disableScroll = disableScroll;
    this.priority = priority * 1e6 + id;
    this.ctrl = ctrl;
  }
  canStart() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  }
  start() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) {
      return false;
    }
    const captured = this.ctrl.capture(this.name, this.id, this.priority);
    if (captured && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return captured;
  }
  release() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  }
  destroy() {
    this.release();
    this.ctrl = void 0;
  }
}
class BlockerDelegate {
  constructor(ctrl, id, disable, disableScroll) {
    this.id = id;
    this.disable = disable;
    this.disableScroll = disableScroll;
    this.ctrl = ctrl;
  }
  block() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.disableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.enableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock();
    this.ctrl = void 0;
  }
}
const BACKDROP_NO_SCROLL = "backdrop-no-scroll";
const GESTURE_CONTROLLER = new GestureController();
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
const backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
const Backdrop = /* @__PURE__ */ proxyCustomElement$1(class Backdrop2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
    this.blocker = GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    this.visible = true;
    this.tappable = true;
    this.stopPropagation = true;
  }
  connectedCallback() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  }
  disconnectedCallback() {
    this.blocker.unblock();
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { tabindex: "-1", "aria-hidden": "true", class: {
      [mode]: true,
      "backdrop-hide": !this.visible,
      "backdrop-no-tappable": !this.tappable
    } });
  }
  static get style() {
    return {
      ios: backdropIosCss,
      md: backdropMdCss
    };
  }
}, [33, "ion-backdrop", {
  "visible": [4],
  "tappable": [4],
  "stopPropagation": [4, "stop-propagation"]
}, [[2, "click", "onMouseDown"]]]);
function defineCustomElement$C() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-backdrop"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-backdrop":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Backdrop);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
const createColorClasses$1 = (color, cssClassMap) => {
  return typeof color === "string" && color.length > 0 ? Object.assign({ "ion-color": true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== void 0) {
    const array = Array.isArray(classes) ? classes : classes.split(" ");
    return array.filter((c) => c != null).map((c) => c.trim()).filter((c) => c !== "");
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach((c) => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation2) => {
  if (url != null && url[0] !== "#" && !SCHEME.test(url)) {
    const router = document.querySelector("ion-router");
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation2);
    }
  }
  return false;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
const RippleEffect = /* @__PURE__ */ proxyCustomElement$1(class RippleEffect2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(x, y) {
    return new Promise((resolve) => {
      readTask(() => {
        const rect = this.el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const hypotenuse = Math.sqrt(width * width + height * height);
        const maxDim = Math.max(height, width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const finalScale = maxRadius / initialSize;
        let posX = x - rect.left;
        let posY = y - rect.top;
        if (this.unbounded) {
          posX = width * 0.5;
          posY = height * 0.5;
        }
        const styleX = posX - initialSize * 0.5;
        const styleY = posY - initialSize * 0.5;
        const moveX = width * 0.5 - posX;
        const moveY = height * 0.5 - posY;
        writeTask$1(() => {
          const div = document.createElement("div");
          div.classList.add("ripple-effect");
          const style = div.style;
          style.top = styleY + "px";
          style.left = styleX + "px";
          style.width = style.height = initialSize + "px";
          style.setProperty("--final-scale", `${finalScale}`);
          style.setProperty("--translate-end", `${moveX}px, ${moveY}px`);
          const container = this.el.shadowRoot || this.el;
          container.appendChild(div);
          setTimeout(() => {
            resolve(() => {
              removeRipple(div);
            });
          }, 225 + 100);
        });
      });
    });
  }
  get unbounded() {
    return this.type === "unbounded";
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { role: "presentation", class: {
      [mode]: true,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return rippleEffectCss;
  }
}, [1, "ion-ripple-effect", {
  "type": [1],
  "addRipple": [64]
}]);
const removeRipple = (ripple) => {
  ripple.classList.add("fade-out");
  setTimeout(() => {
    ripple.remove();
  }, 200);
};
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;
function defineCustomElement$B() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RippleEffect);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const buttonIosCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:14px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;height:3.1em;font-size:16px;font-weight:500;letter-spacing:0}:host(.in-buttons){font-size:17px;font-weight:400}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal}:host(.button-large){--border-radius:16px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:3.1em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}';
const buttonMdCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';
const Button = /* @__PURE__ */ proxyCustomElement$1(class Button2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.inheritedAttributes = {};
    this.handleClick = (ev) => {
      const { el } = this;
      if (this.type === "button") {
        openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      } else if (hasShadowDom(el)) {
        let formEl = this.findForm();
        const { form } = this;
        if (!formEl && form !== void 0) {
          if (typeof form === "string") {
            printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`, el);
          } else {
            printIonWarning(`The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.`, el);
          }
          return;
        }
        if (!formEl) {
          formEl = el.closest("form");
        }
        if (formEl) {
          ev.preventDefault();
          const fakeButton = document.createElement("button");
          fakeButton.type = this.type;
          fakeButton.style.display = "none";
          formEl.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.color = void 0;
    this.buttonType = "button";
    this.disabled = false;
    this.expand = void 0;
    this.fill = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.shape = void 0;
    this.size = void 0;
    this.strong = false;
    this.target = void 0;
    this.type = "button";
    this.form = void 0;
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest("ion-buttons");
    this.inListHeader = !!this.el.closest("ion-list-header");
    this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider");
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === void 0 || this.fill === "clear";
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return "unbounded";
    }
    return "bounded";
  }
  /**
   * Finds the form element based on the provided `form` selector
   * or element reference provided.
   */
  findForm() {
    const { form } = this;
    if (form instanceof HTMLFormElement) {
      return form;
    }
    if (typeof form === "string") {
      const el = document.getElementById(form);
      if (el instanceof HTMLFormElement) {
        return el;
      }
    }
    return null;
  }
  render() {
    const mode = getIonMode$2(this);
    const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === void 0 && this.inItem ? "small" : size;
    const TagType = href === void 0 ? "button" : "a";
    const attrs = TagType === "button" ? { type } : {
      download: this.download,
      href,
      rel,
      target
    };
    let fill = this.fill;
    if (fill == null) {
      fill = this.inToolbar || this.inListHeader ? "clear" : "solid";
    }
    return h$1(Host$1, { onClick: this.handleClick, "aria-disabled": disabled ? "true" : null, class: createColorClasses$1(color, {
      [mode]: true,
      [buttonType]: true,
      [`${buttonType}-${expand}`]: expand !== void 0,
      [`${buttonType}-${finalSize}`]: finalSize !== void 0,
      [`${buttonType}-${shape}`]: shape !== void 0,
      [`${buttonType}-${fill}`]: true,
      [`${buttonType}-strong`]: strong,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "in-buttons": hostContext("ion-buttons", this.el),
      "button-has-icon-only": hasIconOnly,
      "button-disabled": disabled,
      "ion-activatable": true,
      "ion-focusable": true
    }) }, h$1(TagType, Object.assign({}, attrs, { class: "button-native", part: "native", disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), h$1("span", { class: "button-inner" }, h$1("slot", { name: "icon-only" }), h$1("slot", { name: "start" }), h$1("slot", null), h$1("slot", { name: "end" })), mode === "md" && h$1("ion-ripple-effect", { type: this.rippleType })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: buttonIosCss,
      md: buttonMdCss
    };
  }
}, [33, "ion-button", {
  "color": [513],
  "buttonType": [1025, "button-type"],
  "disabled": [516],
  "expand": [513],
  "fill": [1537],
  "routerDirection": [1, "router-direction"],
  "routerAnimation": [16],
  "download": [1],
  "href": [1],
  "rel": [1],
  "shape": [513],
  "size": [513],
  "strong": [4],
  "target": [1],
  "type": [1],
  "form": [1]
}]);
function defineCustomElement$A() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-button", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Button);
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const defineCustomElement$z = defineCustomElement$A;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const buttonsIosCss = ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;height:32px}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}";
const buttonsMdCss = ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;height:32px}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";
const Buttons = /* @__PURE__ */ proxyCustomElement$1(class Buttons2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.collapse = false;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: {
      [mode]: true,
      ["buttons-collapse"]: this.collapse
    } });
  }
  static get style() {
    return {
      ios: buttonsIosCss,
      md: buttonsMdCss
    };
  }
}, [34, "ion-buttons", {
  "collapse": [4]
}]);
function defineCustomElement$y() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-buttons"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-buttons":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Buttons);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const defineCustomElement$x = defineCustomElement$y;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cardIosCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}";
const cardMdCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}";
const Card = /* @__PURE__ */ proxyCustomElement$1(class Card2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inheritedAriaAttributes = {};
    this.color = void 0;
    this.button = false;
    this.type = "button";
    this.disabled = false;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.target = void 0;
  }
  componentWillLoad() {
    this.inheritedAriaAttributes = inheritAttributes$2(this.el, ["aria-label"]);
  }
  isClickable() {
    return this.href !== void 0 || this.button;
  }
  renderCard(mode) {
    const clickable = this.isClickable();
    if (!clickable) {
      return [h$1("slot", null)];
    }
    const { href, routerAnimation, routerDirection, inheritedAriaAttributes } = this;
    const TagType = clickable ? href === void 0 ? "button" : "a" : "div";
    const attrs = TagType === "button" ? { type: this.type } : {
      download: this.download,
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h$1(TagType, Object.assign({}, attrs, inheritedAriaAttributes, { class: "card-native", part: "native", disabled: this.disabled, onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation) }), h$1("slot", null), clickable && mode === "md" && h$1("ion-ripple-effect", null));
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: createColorClasses$1(this.color, {
      [mode]: true,
      "card-disabled": this.disabled,
      "ion-activatable": this.isClickable()
    }) }, this.renderCard(mode));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: cardIosCss,
      md: cardMdCss
    };
  }
}, [33, "ion-card", {
  "color": [513],
  "button": [4],
  "type": [1],
  "disabled": [4],
  "download": [1],
  "href": [1],
  "rel": [1],
  "routerDirection": [1, "router-direction"],
  "routerAnimation": [16],
  "target": [1]
}]);
function defineCustomElement$1$o() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-card", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-card":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Card);
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
const defineCustomElement$w = defineCustomElement$1$o;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cardContentIosCss = "ion-card-content{display:block;position:relative}.card-content-ios{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}ion-card-header+.card-content-ios{padding-top:0}";
const cardContentMdCss = "ion-card-content{display:block;position:relative}.card-content-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}";
const CardContent = /* @__PURE__ */ proxyCustomElement$1(class CardContent2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: {
      [mode]: true,
      // Used internally for styling
      [`card-content-${mode}`]: true
    } });
  }
  static get style() {
    return {
      ios: cardContentIosCss,
      md: cardContentMdCss
    };
  }
}, [32, "ion-card-content"]);
function defineCustomElement$1$n() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-card-content"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-card-content":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, CardContent);
        }
        break;
    }
  });
}
const defineCustomElement$v = defineCustomElement$1$n;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}";
const cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";
const CardHeader = /* @__PURE__ */ proxyCustomElement$1(class CardHeader2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = void 0;
    this.translucent = false;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: createColorClasses$1(this.color, {
      "card-header-translucent": this.translucent,
      "ion-inherit-color": true,
      [mode]: true
    }) }, h$1("slot", null));
  }
  static get style() {
    return {
      ios: cardHeaderIosCss,
      md: cardHeaderMdCss
    };
  }
}, [33, "ion-card-header", {
  "color": [513],
  "translucent": [4]
}]);
function defineCustomElement$1$m() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-card-header"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-card-header":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, CardHeader);
        }
        break;
    }
  });
}
const defineCustomElement$u = defineCustomElement$1$m;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";
const cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}";
const CardSubtitle = /* @__PURE__ */ proxyCustomElement$1(class CardSubtitle2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = void 0;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { role: "heading", "aria-level": "3", class: createColorClasses$1(this.color, {
      "ion-inherit-color": true,
      [mode]: true
    }) }, h$1("slot", null));
  }
  static get style() {
    return {
      ios: cardSubtitleIosCss,
      md: cardSubtitleMdCss
    };
  }
}, [33, "ion-card-subtitle", {
  "color": [513]
}]);
function defineCustomElement$1$l() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-card-subtitle"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-card-subtitle":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, CardSubtitle);
        }
        break;
    }
  });
}
const defineCustomElement$t = defineCustomElement$1$l;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}";
const cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";
const CardTitle = /* @__PURE__ */ proxyCustomElement$1(class CardTitle2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = void 0;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { role: "heading", "aria-level": "2", class: createColorClasses$1(this.color, {
      "ion-inherit-color": true,
      [mode]: true
    }) }, h$1("slot", null));
  }
  static get style() {
    return {
      ios: cardTitleIosCss,
      md: cardTitleMdCss
    };
  }
}, [33, "ion-card-title", {
  "color": [513]
}]);
function defineCustomElement$1$k() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-card-title"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-card-title":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, CardTitle);
        }
        break;
    }
  });
}
const defineCustomElement$s = defineCustomElement$1$k;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createLegacyFormController = (el) => {
  const controlEl = el;
  let legacyControl;
  const hasLegacyControl = () => {
    if (legacyControl === void 0) {
      const hasLabelProp = controlEl.label !== void 0 || hasLabelSlot(controlEl);
      const hasAriaLabelAttribute = controlEl.hasAttribute("aria-label") || // Shadow DOM form controls cannot use aria-labelledby
      controlEl.hasAttribute("aria-labelledby") && controlEl.shadowRoot === null;
      const legacyItemLabel = findItemLabel(controlEl);
      legacyControl = controlEl.legacy === true || !hasLabelProp && !hasAriaLabelAttribute && legacyItemLabel !== null;
    }
    return legacyControl;
  };
  return { hasLegacyControl };
};
const hasLabelSlot = (controlEl) => {
  const root = controlEl.shadowRoot;
  if (root === null) {
    return false;
  }
  if (NAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName) && controlEl.querySelector('[slot="label"]') !== null) {
    return true;
  }
  if (UNNAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName) && controlEl.textContent !== "") {
    return true;
  }
  return false;
};
const NAMED_LABEL_SLOT_COMPONENTS = ["ION-RANGE"];
const UNNAMED_LABEL_SLOT_COMPONENTS = ["ION-TOGGLE", "ION-CHECKBOX", "ION-RADIO"];
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const chipCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;margin-top:4px;margin-bottom:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:14px;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}::slotted(ion-icon:first-child){-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-icon:last-child){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-avatar:last-child){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px;margin-top:-4px;margin-bottom:-4px}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}";
const Chip = /* @__PURE__ */ proxyCustomElement$1(class Chip2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = void 0;
    this.outline = false;
    this.disabled = false;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { "aria-disabled": this.disabled ? "true" : null, class: createColorClasses$1(this.color, {
      [mode]: true,
      "chip-outline": this.outline,
      "chip-disabled": this.disabled,
      "ion-activatable": true
    }) }, h$1("slot", null), mode === "md" && h$1("ion-ripple-effect", null));
  }
  static get style() {
    return chipCss;
  }
}, [1, "ion-chip", {
  "color": [513],
  "outline": [4],
  "disabled": [4]
}]);
function defineCustomElement$1$j() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-chip", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-chip":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Chip);
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
const defineCustomElement$r = defineCustomElement$1$j;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const SIZE_TO_MEDIA = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
};
const matchBreakpoint = (breakpoint) => {
  if (breakpoint === void 0 || breakpoint === "") {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
const colCss = ":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}";
const BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
const Col = /* @__PURE__ */ proxyCustomElement$1(class Col2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.offset = void 0;
    this.offsetXs = void 0;
    this.offsetSm = void 0;
    this.offsetMd = void 0;
    this.offsetLg = void 0;
    this.offsetXl = void 0;
    this.pull = void 0;
    this.pullXs = void 0;
    this.pullSm = void 0;
    this.pullMd = void 0;
    this.pullLg = void 0;
    this.pullXl = void 0;
    this.push = void 0;
    this.pushXs = void 0;
    this.pushSm = void 0;
    this.pushMd = void 0;
    this.pushLg = void 0;
    this.pushXl = void 0;
    this.size = void 0;
    this.sizeXs = void 0;
    this.sizeSm = void 0;
    this.sizeMd = void 0;
    this.sizeLg = void 0;
    this.sizeXl = void 0;
  }
  onResize() {
    forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches2 = matchBreakpoint(breakpoint);
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches2 && columns !== void 0) {
        matched = columns;
      }
    }
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns("size");
    if (!columns || columns === "") {
      return;
    }
    const colSize = columns === "auto" ? "auto" : (
      // If CSS supports variables we should use the grid columns var
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      columns / 12 * 100 + "%"
    );
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    const amount = (
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      columns > 0 && columns < 12 ? columns / 12 * 100 + "%" : "auto"
    );
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL2) {
    return this.calculatePosition("offset", isRTL2 ? "margin-right" : "margin-left");
  }
  calculatePull(isRTL2) {
    return this.calculatePosition("pull", isRTL2 ? "left" : "right");
  }
  calculatePush(isRTL2) {
    return this.calculatePosition("push", isRTL2 ? "right" : "left");
  }
  render() {
    const isRTL2 = document.dir === "rtl";
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: {
      [mode]: true
    }, style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL2)), this.calculatePull(isRTL2)), this.calculatePush(isRTL2)), this.calculateSize()) }, h$1("slot", null));
  }
  static get style() {
    return colCss;
  }
}, [1, "ion-col", {
  "offset": [1],
  "offsetXs": [1, "offset-xs"],
  "offsetSm": [1, "offset-sm"],
  "offsetMd": [1, "offset-md"],
  "offsetLg": [1, "offset-lg"],
  "offsetXl": [1, "offset-xl"],
  "pull": [1],
  "pullXs": [1, "pull-xs"],
  "pullSm": [1, "pull-sm"],
  "pullMd": [1, "pull-md"],
  "pullLg": [1, "pull-lg"],
  "pullXl": [1, "pull-xl"],
  "push": [1],
  "pushXs": [1, "push-xs"],
  "pushSm": [1, "push-sm"],
  "pushMd": [1, "push-md"],
  "pushLg": [1, "push-lg"],
  "pushXl": [1, "push-xl"],
  "size": [1],
  "sizeXs": [1, "size-xs"],
  "sizeSm": [1, "size-sm"],
  "sizeMd": [1, "size-md"],
  "sizeLg": [1, "size-lg"],
  "sizeXl": [1, "size-xl"]
}, [[9, "resize", "onResize"]]]);
function defineCustomElement$1$i() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-col"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-col":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Col);
        }
        break;
    }
  });
}
const defineCustomElement$q = defineCustomElement$1$i;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const isRTL$1 = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const contentCss = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
const Content = /* @__PURE__ */ proxyCustomElement$1(class Content2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionScrollStart = createEvent(this, "ionScrollStart", 7);
    this.ionScroll = createEvent(this, "ionScroll", 7);
    this.ionScrollEnd = createEvent(this, "ionScrollEnd", 7);
    this.watchDog = null;
    this.isScrolling = false;
    this.lastScroll = 0;
    this.queued = false;
    this.cTop = -1;
    this.cBottom = -1;
    this.isMainContent = true;
    this.resizeTimeout = null;
    this.detail = {
      scrollTop: 0,
      scrollLeft: 0,
      type: "scroll",
      event: void 0,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      velocityX: 0,
      velocityY: 0,
      deltaX: 0,
      deltaY: 0,
      currentTime: 0,
      data: void 0,
      isScrolling: true
    };
    this.color = void 0;
    this.fullscreen = false;
    this.forceOverscroll = void 0;
    this.scrollX = false;
    this.scrollY = true;
    this.scrollEvents = false;
  }
  connectedCallback() {
    this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null;
  }
  disconnectedCallback() {
    this.onScrollEnd();
  }
  onAppLoad() {
    this.resize();
  }
  /**
   * Rotating certain devices can update
   * the safe area insets. As a result,
   * the fullscreen feature on ion-content
   * needs to be recalculated.
   *
   * We listen for "resize" because we
   * do not care what the orientation of
   * the device is. Other APIs
   * such as ScreenOrientation or
   * the deviceorientation event must have
   * permission from the user first whereas
   * the "resize" event does not.
   *
   * We also throttle the callback to minimize
   * thrashing when quickly resizing a window.
   */
  onResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      if (this.el.offsetParent === null) {
        return;
      }
      this.resize();
    }, 100);
  }
  shouldForceOverscroll() {
    const { forceOverscroll } = this;
    const mode = getIonMode$2(this);
    return forceOverscroll === void 0 ? mode === "ios" && isPlatform("ios") : forceOverscroll;
  }
  resize() {
    {
      if (this.fullscreen) {
        readTask(() => this.readDimensions());
      } else if (this.cTop !== 0 || this.cBottom !== 0) {
        this.cTop = this.cBottom = 0;
        forceUpdate(this);
      }
    }
  }
  readDimensions() {
    const page = getPageElement(this.el);
    const top = Math.max(this.el.offsetTop, 0);
    const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
    const dirty = top !== this.cTop || bottom !== this.cBottom;
    if (dirty) {
      this.cTop = top;
      this.cBottom = bottom;
      forceUpdate(this);
    }
  }
  onScroll(ev) {
    const timeStamp = Date.now();
    const shouldStart = !this.isScrolling;
    this.lastScroll = timeStamp;
    if (shouldStart) {
      this.onScrollStart();
    }
    if (!this.queued && this.scrollEvents) {
      this.queued = true;
      readTask((ts) => {
        this.queued = false;
        this.detail.event = ev;
        updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
        this.ionScroll.emit(this.detail);
      });
    }
  }
  /**
   * Get the element where the actual scrolling takes place.
   * This element can be used to subscribe to `scroll` events or manually modify
   * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
   *
   * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
   * and `scrollToPoint()` to scroll the content into a certain point.
   */
  async getScrollElement() {
    if (!this.scrollEl) {
      await new Promise((resolve) => componentOnReady(this.el, resolve));
    }
    return Promise.resolve(this.scrollEl);
  }
  /**
   * Returns the background content element.
   * @internal
   */
  async getBackgroundElement() {
    if (!this.backgroundContentEl) {
      await new Promise((resolve) => componentOnReady(this.el, resolve));
    }
    return Promise.resolve(this.backgroundContentEl);
  }
  /**
   * Scroll to the top of the component.
   *
   * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
   */
  scrollToTop(duration = 0) {
    return this.scrollToPoint(void 0, 0, duration);
  }
  /**
   * Scroll to the bottom of the component.
   *
   * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
   */
  async scrollToBottom(duration = 0) {
    const scrollEl = await this.getScrollElement();
    const y = scrollEl.scrollHeight - scrollEl.clientHeight;
    return this.scrollToPoint(void 0, y, duration);
  }
  /**
   * Scroll by a specified X/Y distance in the component.
   *
   * @param x The amount to scroll by on the horizontal axis.
   * @param y The amount to scroll by on the vertical axis.
   * @param duration The amount of time to take scrolling by that amount.
   */
  async scrollByPoint(x, y, duration) {
    const scrollEl = await this.getScrollElement();
    return this.scrollToPoint(x + scrollEl.scrollLeft, y + scrollEl.scrollTop, duration);
  }
  /**
   * Scroll to a specified X/Y location in the component.
   *
   * @param x The point to scroll to on the horizontal axis.
   * @param y The point to scroll to on the vertical axis.
   * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
   */
  async scrollToPoint(x, y, duration = 0) {
    const el = await this.getScrollElement();
    if (duration < 32) {
      if (y != null) {
        el.scrollTop = y;
      }
      if (x != null) {
        el.scrollLeft = x;
      }
      return;
    }
    let resolve;
    let startTime = 0;
    const promise = new Promise((r) => resolve = r);
    const fromY = el.scrollTop;
    const fromX = el.scrollLeft;
    const deltaY = y != null ? y - fromY : 0;
    const deltaX = x != null ? x - fromX : 0;
    const step = (timeStamp) => {
      const linearTime = Math.min(1, (timeStamp - startTime) / duration) - 1;
      const easedT = Math.pow(linearTime, 3) + 1;
      if (deltaY !== 0) {
        el.scrollTop = Math.floor(easedT * deltaY + fromY);
      }
      if (deltaX !== 0) {
        el.scrollLeft = Math.floor(easedT * deltaX + fromX);
      }
      if (easedT < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };
    requestAnimationFrame((ts) => {
      startTime = ts;
      step(ts);
    });
    return promise;
  }
  onScrollStart() {
    this.isScrolling = true;
    this.ionScrollStart.emit({
      isScrolling: true
    });
    if (this.watchDog) {
      clearInterval(this.watchDog);
    }
    this.watchDog = setInterval(() => {
      if (this.lastScroll < Date.now() - 120) {
        this.onScrollEnd();
      }
    }, 100);
  }
  onScrollEnd() {
    if (this.watchDog)
      clearInterval(this.watchDog);
    this.watchDog = null;
    if (this.isScrolling) {
      this.isScrolling = false;
      this.ionScrollEnd.emit({
        isScrolling: false
      });
    }
  }
  render() {
    const { isMainContent, scrollX, scrollY, el } = this;
    const rtl = isRTL$1(el) ? "rtl" : "ltr";
    const mode = getIonMode$2(this);
    const forceOverscroll = this.shouldForceOverscroll();
    const transitionShadow = mode === "ios";
    const TagType = isMainContent ? "main" : "div";
    this.resize();
    return h$1(Host$1, { class: createColorClasses$1(this.color, {
      [mode]: true,
      "content-sizing": hostContext("ion-popover", this.el),
      overscroll: forceOverscroll,
      [`content-${rtl}`]: true
    }), style: {
      "--offset-top": `${this.cTop}px`,
      "--offset-bottom": `${this.cBottom}px`
    } }, h$1("div", { ref: (el2) => this.backgroundContentEl = el2, id: "background-content", part: "background" }), h$1(TagType, { class: {
      "inner-scroll": true,
      "scroll-x": scrollX,
      "scroll-y": scrollY,
      overscroll: (scrollX || scrollY) && forceOverscroll
    }, ref: (scrollEl) => this.scrollEl = scrollEl, onScroll: this.scrollEvents ? (ev) => this.onScroll(ev) : void 0, part: "scroll" }, h$1("slot", null)), transitionShadow ? h$1("div", { class: "transition-effect" }, h$1("div", { class: "transition-cover" }), h$1("div", { class: "transition-shadow" })) : null, h$1("slot", { name: "fixed" }));
  }
  get el() {
    return this;
  }
  static get style() {
    return contentCss;
  }
}, [1, "ion-content", {
  "color": [513],
  "fullscreen": [4],
  "forceOverscroll": [1028, "force-overscroll"],
  "scrollX": [4, "scroll-x"],
  "scrollY": [4, "scroll-y"],
  "scrollEvents": [4, "scroll-events"],
  "getScrollElement": [64],
  "getBackgroundElement": [64],
  "scrollToTop": [64],
  "scrollToBottom": [64],
  "scrollByPoint": [64],
  "scrollToPoint": [64]
}, [[8, "appload", "onAppLoad"], [9, "resize", "onResize"]]]);
const getParentElement = (el) => {
  var _a;
  if (el.parentElement) {
    return el.parentElement;
  }
  if ((_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.host) {
    return el.parentNode.host;
  }
  return null;
};
const getPageElement = (el) => {
  const tabs = el.closest("ion-tabs");
  if (tabs) {
    return tabs;
  }
  const page = el.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
  if (page) {
    return page;
  }
  return getParentElement(el);
};
const updateScrollDetail = (detail, el, timestamp, shouldStart) => {
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  const currentX = el.scrollLeft;
  const currentY = el.scrollTop;
  const timeDelta = timestamp - prevT;
  if (shouldStart) {
    detail.startTime = timestamp;
    detail.startX = currentX;
    detail.startY = currentY;
    detail.velocityX = detail.velocityY = 0;
  }
  detail.currentTime = timestamp;
  detail.currentX = detail.scrollLeft = currentX;
  detail.currentY = detail.scrollTop = currentY;
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
};
function defineCustomElement$1$h() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-content"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-content":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Content);
        }
        break;
    }
  });
}
const defineCustomElement$p = defineCustomElement$1$h;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const noteIosCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, #a6a6a6)}";
const noteMdCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);font-size:14px}";
const Note = /* @__PURE__ */ proxyCustomElement$1(class Note2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = void 0;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: createColorClasses$1(this.color, {
      [mode]: true
    }) }, h$1("slot", null));
  }
  static get style() {
    return {
      ios: noteIosCss,
      md: noteMdCss
    };
  }
}, [33, "ion-note", {
  "color": [513]
}]);
function defineCustomElement$o() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-note"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-note":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Note);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const itemIosCss = ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select.legacy-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select.legacy-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:var(--ion-text-color, #000);--background-focused:var(--ion-text-color, #000);--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--bottom-padding-start:0px;font-size:16px}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus) .item-highlight{border-top:none;border-right:none;border-left:none}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:2px;margin-bottom:2px}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){-webkit-margin-start:0px;margin-inline-start:0px}::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select.legacy-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}';
const itemMdCss = ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select.legacy-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select.legacy-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:1px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:16px;font-weight:normal;text-transform:none}:host(.item-fill-outline){--highlight-height:2px}:host(.item-fill-none.item-interactive.ion-focus) .item-highlight,:host(.item-fill-none.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-none.item-interactive.ion-focus) .item-native,:host(.item-fill-none.item-interactive.item-has-focus) .item-native,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-highlight{border-width:var(--full-highlight-height);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-native{border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-highlight,:host(.item-fill-solid.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-native,:host(.item-fill-solid.item-interactive.item-has-focus) .item-native,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-has-focus) .item-native{caret-color:var(--highlight-background)}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-fill-outline) .item-highlight{--position-offset:calc(-1 * var(--border-width));top:var(--position-offset);width:calc(100% + 2 * var(--border-width));height:calc(100% + 2 * var(--border-width));-webkit-transition:none;transition:none}@supports (inset-inline-start: 0){:host(.item-fill-outline) .item-highlight{inset-inline-start:var(--position-offset)}}@supports not (inset-inline-start: 0){:host(.item-fill-outline) .item-highlight{left:var(--position-offset)}:host-context([dir=rtl]):host(.item-fill-outline) .item-highlight,:host-context([dir=rtl]).item-fill-outline .item-highlight{left:unset;right:unset;right:var(--position-offset)}@supports selector(:dir(rtl)){:host(.item-fill-outline) .item-highlight:dir(rtl){left:unset;right:unset;right:var(--position-offset)}}}:host(.item-fill-outline.ion-focused) .item-native,:host(.item-fill-outline.item-has-focus) .item-native{border-color:transparent}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted([slot=end]){-webkit-margin-start:32px;margin-inline-start:32px}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted(ion-icon[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]:not([slot=helper]):not([slot=error])){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){-webkit-padding-end:16px;padding-inline-end:16px}::slotted(ion-note[slot=end]){-webkit-padding-start:16px;padding-inline-start:16px}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){-webkit-margin-end:16px;margin-inline-end:16px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:10px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select.legacy-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.ion-focused:not(.ion-color)) ::slotted(.label-stacked),:host(.ion-focused:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid.ion-color),:host(.item-fill-outline.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--background-hover:var(--ion-color-step-100, #e6e6e6);--background-focused:var(--ion-color-step-150, #d9d9d9);--border-width:0 0 1px 0;--inner-border-width:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid),:host-context([dir=rtl]).item-fill-solid{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.item-fill-solid):dir(rtl){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.item-fill-solid) .item-native{--border-color:var(--ion-color-step-500, gray)}:host(.item-fill-solid.ion-focused) .item-native,:host(.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}:host(.item-fill-solid.item-shape-round){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid.item-shape-round),:host-context([dir=rtl]).item-fill-solid.item-shape-round{border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.item-fill-solid.item-shape-round):dir(rtl){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}}@media (any-hover: hover){:host(.item-fill-solid:hover) .item-native{--background:var(--background-hover);--border-color:var(--ion-color-step-750, #404040)}}:host(.item-fill-outline){--ripple-color:transparent;--background-focused:transparent;--background-hover:transparent;--border-color:var(--ion-color-step-500, gray);--border-width:1px;border:none;overflow:visible}:host(.item-fill-outline) .item-native{--native-padding-left:16px;border-radius:4px}:host(.item-fill-outline.item-shape-round) .item-native{--inner-padding-start:16px;border-radius:28px}:host(.item-fill-outline.item-shape-round) .item-bottom{-webkit-padding-start:32px;padding-inline-start:32px}:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-textarea:not(:first-child)){-webkit-transform:translateY(-14px);transform:translateY(-14px)}@media (any-hover: hover){:host(.item-fill-outline:hover) .item-native{--border-color:var(--ion-color-step-750, #404040)}}.item-counter{letter-spacing:0.0333333333em}';
const Item = /* @__PURE__ */ proxyCustomElement$1(class Item2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.labelColorStyles = {};
    this.itemStyles = /* @__PURE__ */ new Map();
    this.inheritedAriaAttributes = {};
    this.multipleInputs = false;
    this.focusable = true;
    this.color = void 0;
    this.button = false;
    this.detail = void 0;
    this.detailIcon = chevronForward;
    this.disabled = false;
    this.download = void 0;
    this.fill = void 0;
    this.shape = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.lines = void 0;
    this.counter = false;
    this.routerAnimation = void 0;
    this.routerDirection = "forward";
    this.target = void 0;
    this.type = "button";
    this.counterFormatter = void 0;
    this.counterString = void 0;
  }
  counterFormatterChanged() {
    this.updateCounterOutput(this.getFirstInput());
  }
  handleIonInput(ev) {
    if (this.counter && ev.target === this.getFirstInput()) {
      this.updateCounterOutput(ev.target);
    }
  }
  labelColorChanged(ev) {
    const { color } = this;
    if (color === void 0) {
      this.labelColorStyles = ev.detail;
    }
  }
  itemStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.itemStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }
  connectedCallback() {
    if (this.counter) {
      this.updateCounterOutput(this.getFirstInput());
    }
    this.hasStartEl();
  }
  componentWillLoad() {
    this.inheritedAriaAttributes = inheritAttributes$2(this.el, ["aria-label"]);
  }
  componentDidLoad() {
    const { el, counter, counterFormatter, fill, shape } = this;
    const hasHelperSlot = el.querySelector('[slot="helper"]') !== null;
    if (hasHelperSlot) {
      printIonWarning('The "helper" slot has been deprecated in favor of using the "helperText" property on ion-input or ion-textarea.', el);
    }
    const hasErrorSlot = el.querySelector('[slot="error"]') !== null;
    if (hasErrorSlot) {
      printIonWarning('The "error" slot has been deprecated in favor of using the "errorText" property on ion-input or ion-textarea.', el);
    }
    if (counter === true) {
      printIonWarning('The "counter" property has been deprecated in favor of using the "counter" property on ion-input or ion-textarea.', el);
    }
    if (counterFormatter !== void 0) {
      printIonWarning('The "counterFormatter" property has been deprecated in favor of using the "counterFormatter" property on ion-input or ion-textarea.', el);
    }
    if (fill !== void 0) {
      printIonWarning('The "fill" property has been deprecated in favor of using the "fill" property on ion-input or ion-textarea.', el);
    }
    if (shape !== void 0) {
      printIonWarning('The "shape" property has been deprecated in favor of using the "shape" property on ion-input or ion-textarea.', el);
    }
    raf(() => {
      this.setMultipleInputs();
      this.focusable = this.isFocusable();
    });
  }
  // If the item contains multiple clickable elements and/or inputs, then the item
  // should not have a clickable input cover over the entire item to prevent
  // interfering with their individual click events
  setMultipleInputs() {
    const covers = this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio");
    const inputs = this.el.querySelectorAll("ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle");
    const clickables = this.el.querySelectorAll("ion-anchor, ion-button, a, button");
    this.multipleInputs = covers.length + inputs.length > 1 || covers.length + clickables.length > 1 || covers.length > 0 && this.isClickable();
  }
  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  hasCover() {
    const inputs = this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio");
    return inputs.length === 1 && !this.multipleInputs;
  }
  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  isClickable() {
    return this.href !== void 0 || this.button;
  }
  canActivate() {
    return this.isClickable() || this.hasCover();
  }
  isFocusable() {
    const focusableChild = this.el.querySelector(".ion-focusable");
    return this.canActivate() || focusableChild !== null;
  }
  getFirstInput() {
    const inputs = this.el.querySelectorAll("ion-input, ion-textarea");
    return inputs[0];
  }
  updateCounterOutput(inputEl) {
    var _a, _b;
    const { counter, counterFormatter, defaultCounterFormatter } = this;
    if (counter && !this.multipleInputs && (inputEl === null || inputEl === void 0 ? void 0 : inputEl.maxlength) !== void 0) {
      const length = (_b = (_a = inputEl === null || inputEl === void 0 ? void 0 : inputEl.value) === null || _a === void 0 ? void 0 : _a.toString().length) !== null && _b !== void 0 ? _b : 0;
      if (counterFormatter === void 0) {
        this.counterString = defaultCounterFormatter(length, inputEl.maxlength);
      } else {
        try {
          this.counterString = counterFormatter(length, inputEl.maxlength);
        } catch (e) {
          printIonError("Exception in provided `counterFormatter`.", e);
          this.counterString = defaultCounterFormatter(length, inputEl.maxlength);
        }
      }
    }
  }
  defaultCounterFormatter(length, maxlength) {
    return `${length} / ${maxlength}`;
  }
  hasStartEl() {
    const startEl = this.el.querySelector('[slot="start"]');
    if (startEl !== null) {
      this.el.classList.add("item-has-start-slot");
    }
  }
  render() {
    const { counterString, detail, detailIcon, download, fill, labelColorStyles, lines, disabled, href, rel, shape, target, routerAnimation, routerDirection, inheritedAriaAttributes } = this;
    const childStyles = {};
    const mode = getIonMode$2(this);
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const TagType = clickable ? href === void 0 ? "button" : "a" : "div";
    const attrs = TagType === "button" ? { type: this.type } : {
      download,
      href,
      rel,
      target
    };
    const clickFn = clickable ? {
      onClick: (ev) => {
        openURL(href, ev, routerDirection, routerAnimation);
      }
    } : {};
    const showDetail = detail !== void 0 ? detail : mode === "ios" && clickable;
    this.itemStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    const ariaDisabled = disabled || childStyles["item-interactive-disabled"] ? "true" : null;
    const fillValue = fill || "none";
    const inList = hostContext("ion-list", this.el);
    return h$1(Host$1, { "aria-disabled": ariaDisabled, class: Object.assign(Object.assign(Object.assign({}, childStyles), labelColorStyles), createColorClasses$1(this.color, {
      item: true,
      [mode]: true,
      "item-lines-default": lines === void 0,
      [`item-lines-${lines}`]: lines !== void 0,
      [`item-fill-${fillValue}`]: true,
      [`item-shape-${shape}`]: shape !== void 0,
      "item-disabled": disabled,
      "in-list": inList,
      "item-multiple-inputs": this.multipleInputs,
      "ion-activatable": canActivate,
      "ion-focusable": this.focusable,
      "item-rtl": document.dir === "rtl"
    })), role: inList ? "listitem" : null }, h$1(TagType, Object.assign({}, attrs, inheritedAriaAttributes, { class: "item-native", part: "native", disabled }, clickFn), h$1("slot", { name: "start" }), h$1("div", { class: "item-inner" }, h$1("div", { class: "input-wrapper" }, h$1("slot", null)), h$1("slot", { name: "end" }), showDetail && h$1("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon", part: "detail-icon", "aria-hidden": "true", "flip-rtl": detailIcon === chevronForward }), h$1("div", { class: "item-inner-highlight" })), canActivate && mode === "md" && h$1("ion-ripple-effect", null), h$1("div", { class: "item-highlight" })), h$1("div", { class: "item-bottom" }, h$1("slot", { name: "error" }), h$1("slot", { name: "helper" }), counterString && h$1("ion-note", { class: "item-counter" }, counterString)));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "counterFormatter": ["counterFormatterChanged"]
    };
  }
  static get style() {
    return {
      ios: itemIosCss,
      md: itemMdCss
    };
  }
}, [49, "ion-item", {
  "color": [513],
  "button": [4],
  "detail": [4],
  "detailIcon": [1, "detail-icon"],
  "disabled": [4],
  "download": [1],
  "fill": [1],
  "shape": [1],
  "href": [1],
  "rel": [1],
  "lines": [1],
  "counter": [4],
  "routerAnimation": [16],
  "routerDirection": [1, "router-direction"],
  "target": [1],
  "type": [1],
  "counterFormatter": [16],
  "multipleInputs": [32],
  "focusable": [32],
  "counterString": [32]
}, [[0, "ionInput", "handleIonInput"], [0, "ionColor", "labelColorChanged"], [0, "ionStyle", "itemStyle"]]]);
function defineCustomElement$n() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-item", "ion-icon", "ion-note", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-item":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Item);
        }
        break;
      case "ion-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement$E();
        }
        break;
      case "ion-note":
        if (!customElements.get(tagName)) {
          defineCustomElement$o();
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const labelIosCss = ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}";
const labelMdCss = '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}';
const Label = /* @__PURE__ */ proxyCustomElement$1(class Label2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.ionColor = createEvent(this, "ionColor", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inRange = false;
    this.color = void 0;
    this.position = void 0;
    this.noAnimate = false;
  }
  componentWillLoad() {
    this.inRange = !!this.el.closest("ion-range");
    this.noAnimate = this.position === "floating";
    this.emitStyle();
    this.emitColor();
  }
  componentDidLoad() {
    if (this.noAnimate) {
      setTimeout(() => {
        this.noAnimate = false;
      }, 1e3);
    }
  }
  colorChanged() {
    this.emitColor();
  }
  positionChanged() {
    this.emitStyle();
  }
  emitColor() {
    const { color } = this;
    this.ionColor.emit({
      "item-label-color": color !== void 0,
      [`ion-color-${color}`]: color !== void 0
    });
  }
  emitStyle() {
    const { inRange, position } = this;
    if (!inRange) {
      this.ionStyle.emit({
        label: true,
        [`label-${position}`]: position !== void 0
      });
    }
  }
  render() {
    const position = this.position;
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: createColorClasses$1(this.color, {
      [mode]: true,
      "in-item-color": hostContext("ion-item.ion-color", this.el),
      [`label-${position}`]: position !== void 0,
      [`label-no-animate`]: this.noAnimate,
      "label-rtl": document.dir === "rtl"
    }) });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "color": ["colorChanged"],
      "position": ["positionChanged"]
    };
  }
  static get style() {
    return {
      ios: labelIosCss,
      md: labelMdCss
    };
  }
}, [34, "ion-label", {
  "color": [513],
  "position": [1],
  "noAnimate": [32]
}]);
function defineCustomElement$m() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-label"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-label":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Label);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;
    const win2 = window;
    return win2.TapticEngine || ((_a = win2.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable("Haptics")) && win2.Capacitor.Plugins.Haptics;
  },
  available() {
    var _a;
    const win2 = window;
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    if (((_a = win2.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === "web") {
      return false;
    }
    return true;
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win2 = window;
    return !!win2.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: "light" });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
const hapticAvailable = () => {
  return HapticEngine.available();
};
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const attachComponent = async (delegate, container, component, cssClasses, componentProps, inline) => {
  var _a;
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (!inline && typeof component !== "string" && !(component instanceof HTMLElement)) {
    throw new Error("framework delegate is missing");
  }
  const el = typeof component === "string" ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
  if (cssClasses) {
    cssClasses.forEach((c) => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise((resolve) => componentOnReady(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = async (parentElement, userComponent, userComponentProps = {}, cssClasses = []) => {
    var _a, _b;
    BaseComponent = parentElement;
    if (userComponent) {
      const el = typeof userComponent === "string" ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
      cssClasses.forEach((c) => el.classList.add(c));
      Object.assign(el, userComponentProps);
      BaseComponent.appendChild(el);
      await new Promise((resolve) => componentOnReady(el, resolve));
    } else if (BaseComponent.children.length > 0 && (BaseComponent.tagName === "ION-MODAL" || BaseComponent.tagName === "ION-POPOVER")) {
      const root = BaseComponent.children[0];
      if (!root.classList.contains("ion-delegate-host")) {
        const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement("div");
        el.classList.add("ion-delegate-host");
        cssClasses.forEach((c) => el.classList.add(c));
        el.append(...BaseComponent.children);
        BaseComponent.appendChild(el);
      }
    }
    const app = document.querySelector("ion-app") || document.body;
    Reference = document.createComment("ionic teleport");
    BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
    app.appendChild(BaseComponent);
    return BaseComponent;
  };
  const removeViewFromDom = () => {
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return { attachViewToDom, removeViewFromDom };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let lastOverlayIndex = 0;
let lastId = 0;
const activeAnimations = /* @__PURE__ */ new WeakMap();
const prepareOverlay = (el) => {
  const overlayIndex = lastOverlayIndex++;
  el.overlayIndex = overlayIndex;
};
const setOverlayId = (el) => {
  if (!el.hasAttribute("id")) {
    el.id = `ion-overlay-${++lastId}`;
  }
  return el.id;
};
const focusableQueryString = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
const setRootAriaHidden = (hidden = false) => {
  const root = getAppRoot(document);
  const viewContainer = root.querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");
  if (!viewContainer) {
    return;
  }
  if (hidden) {
    viewContainer.setAttribute("aria-hidden", "true");
  } else {
    viewContainer.removeAttribute("aria-hidden");
  }
};
const present = async (overlay, name, iosEnterAnimation2, mdEnterAnimation2, opts) => {
  var _a, _b;
  if (overlay.presented) {
    return;
  }
  setRootAriaHidden(true);
  overlay.presented = true;
  overlay.willPresent.emit();
  (_a = overlay.willPresentShorthand) === null || _a === void 0 ? void 0 : _a.emit();
  const mode = getIonMode$2(overlay);
  const animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : config.get(name, mode === "ios" ? iosEnterAnimation2 : mdEnterAnimation2);
  const completed = await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
  if (completed) {
    overlay.didPresent.emit();
    (_b = overlay.didPresentShorthand) === null || _b === void 0 ? void 0 : _b.emit();
  }
  if (overlay.el.tagName !== "ION-TOAST") {
    focusPreviousElementOnDismiss(overlay.el);
  }
  if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
    overlay.el.focus();
  }
};
const focusPreviousElementOnDismiss = async (overlayEl) => {
  let previousElement = document.activeElement;
  if (!previousElement) {
    return;
  }
  const shadowRoot = previousElement === null || previousElement === void 0 ? void 0 : previousElement.shadowRoot;
  if (shadowRoot) {
    previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
  }
  await overlayEl.onDidDismiss();
  previousElement.focus();
};
const dismiss = async (overlay, data, role, name, iosLeaveAnimation2, mdLeaveAnimation2, opts) => {
  var _a, _b;
  if (!overlay.presented) {
    return false;
  }
  setRootAriaHidden(false);
  overlay.presented = false;
  try {
    overlay.el.style.setProperty("pointer-events", "none");
    overlay.willDismiss.emit({ data, role });
    (_a = overlay.willDismissShorthand) === null || _a === void 0 ? void 0 : _a.emit({ data, role });
    const mode = getIonMode$2(overlay);
    const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : config.get(name, mode === "ios" ? iosLeaveAnimation2 : mdLeaveAnimation2);
    if (role !== GESTURE) {
      await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    }
    overlay.didDismiss.emit({ data, role });
    (_b = overlay.didDismissShorthand) === null || _b === void 0 ? void 0 : _b.emit({ data, role });
    activeAnimations.delete(overlay);
    overlay.el.classList.add("overlay-hidden");
    overlay.el.style.removeProperty("pointer-events");
    if (overlay.el.lastFocus !== void 0) {
      overlay.el.lastFocus = void 0;
    }
  } catch (err) {
    console.error(err);
  }
  overlay.el.remove();
  return true;
};
const getAppRoot = (doc2) => {
  return doc2.querySelector("ion-app") || doc2.body;
};
const overlayAnimation = async (overlay, animationBuilder, baseEl, opts) => {
  baseEl.classList.remove("overlay-hidden");
  const aniRoot = overlay.el;
  const animation2 = animationBuilder(aniRoot, opts);
  if (!overlay.animated || !config.getBoolean("animated", true)) {
    animation2.duration(0);
  }
  if (overlay.keyboardClose) {
    animation2.beforeAddWrite(() => {
      const activeElement = baseEl.ownerDocument.activeElement;
      if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.matches("input,ion-input, ion-textarea")) {
        activeElement.blur();
      }
    });
  }
  const activeAni = activeAnimations.get(overlay) || [];
  activeAnimations.set(overlay, [...activeAni, animation2]);
  await animation2.play();
  return true;
};
const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise((r) => resolve = r);
  onceEvent(element, eventName, (event) => {
    resolve(event.detail);
  });
  return promise;
};
const onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    removeEventListener(element, eventName, handler);
    callback(ev);
  };
  addEventListener$1(element, eventName, handler);
};
const BACKDROP = "backdrop";
const GESTURE = "gesture";
const createTriggerController = () => {
  let destroyTriggerInteraction;
  const removeClickListener = () => {
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
      destroyTriggerInteraction = void 0;
    }
  };
  const addClickListener = (el, trigger) => {
    removeClickListener();
    const triggerEl = trigger !== void 0 ? document.getElementById(trigger) : null;
    if (!triggerEl) {
      printIonWarning(`A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
      return;
    }
    const configureTriggerInteraction = (targetEl, overlayEl) => {
      const openOverlay = () => {
        overlayEl.present();
      };
      targetEl.addEventListener("click", openOverlay);
      return () => {
        targetEl.removeEventListener("click", openOverlay);
      };
    };
    destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
  };
  return {
    addClickListener,
    removeClickListener
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
const LIFECYCLE_DID_ENTER = "ionViewDidEnter";
const LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
const LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
const LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
const iosTransitionAnimation = () => import("./_nuxt/ios.transition-95c45aa2.js");
const mdTransitionAnimation = () => import("./_nuxt/md.transition-f52d8a76.js");
const transition = (opts) => {
  return new Promise((resolve, reject) => {
    writeTask$1(() => {
      beforeTransition(opts);
      runTransition(opts).then((result) => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, (error) => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
const beforeTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add("can-go-back");
  } else {
    enteringEl.classList.remove("can-go-back");
  }
  setPageHidden(enteringEl, false);
  enteringEl.style.setProperty("pointer-events", "none");
  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty("pointer-events", "none");
  }
};
const runTransition = async (opts) => {
  const animationBuilder = await getAnimationBuilder(opts);
  const ani = animationBuilder && Build.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts);
  return ani;
};
const afterTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove("ion-page-invisible");
  enteringEl.style.removeProperty("pointer-events");
  if (leavingEl !== void 0) {
    leavingEl.classList.remove("ion-page-invisible");
    leavingEl.style.removeProperty("pointer-events");
  }
};
const getAnimationBuilder = async (opts) => {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return void 0;
  }
  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }
  const getAnimation = opts.mode === "ios" ? (await iosTransitionAnimation()).iosTransitionAnimation : (await mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
};
const animation = async (animationBuilder, opts) => {
  await waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = await playTransition(trans, opts);
  if (opts.progressCallback) {
    opts.progressCallback(void 0);
  }
  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }
  return {
    hasCompleted: didComplete,
    animation: trans
  };
};
const noAnimation = async (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  await waitForReady(opts, false);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
};
const waitForReady = async (opts, defaultDeep) => {
  const deep = opts.deepWait !== void 0 ? opts.deepWait : defaultDeep;
  if (deep) {
    await Promise.all([deepReady(opts.enteringEl), deepReady(opts.leavingEl)]);
  }
  await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
  if (viewIsReady) {
    await viewIsReady(enteringEl);
  }
};
const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise((resolve) => {
    trans.onFinish((currentStep) => resolve(currentStep === 1));
  });
  if (progressCallback) {
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    trans.play();
  }
  return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};
const waitForMount = () => {
  return new Promise((resolve) => raf(() => raf(() => resolve())));
};
const deepReady = async (el) => {
  const element = el;
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = await element.componentOnReady();
      if (stencilEl != null) {
        return;
      }
    } else if (element.__registerHost != null) {
      const waitForCustomElement = new Promise((resolve) => raf(resolve));
      await waitForCustomElement;
      return;
    }
    await Promise.all(Array.from(element.children).map(deepReady));
  }
};
const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute("aria-hidden", "true");
    el.classList.add("ion-page-hidden");
  } else {
    el.hidden = false;
    el.removeAttribute("aria-hidden");
    el.classList.remove("ion-page-hidden");
  }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== void 0) {
    enteringEl.style.zIndex = direction === "back" ? "99" : "101";
  }
  if (leavingEl !== void 0) {
    leavingEl.style.zIndex = "100";
  }
};
const getIonPageElement = (element) => {
  if (element.classList.contains("ion-page")) {
    return element;
  }
  const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  if (ionPage) {
    return ionPage;
  }
  return element;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const win$1 = void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let animationPrefix;
const processKeyframes = (keyframes) => {
  keyframes.forEach((keyframe) => {
    for (const key in keyframe) {
      if (keyframe.hasOwnProperty(key)) {
        const value = keyframe[key];
        if (key === "easing") {
          const newKey = "animation-timing-function";
          keyframe[newKey] = value;
          delete keyframe[key];
        } else {
          const newKey = convertCamelCaseToHypen(key);
          if (newKey !== key) {
            keyframe[newKey] = value;
            delete keyframe[key];
          }
        }
      }
    }
  });
  return keyframes;
};
const convertCamelCaseToHypen = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};
const getAnimationPrefix = (el) => {
  if (animationPrefix === void 0) {
    const supportsUnprefixed = el.style.animationName !== void 0;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== void 0;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? "-webkit-" : "";
  }
  return animationPrefix;
};
const setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
  element.style.setProperty(prefix + propertyName, value);
};
const removeStyleProperty = (element, propertyName) => {
  const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
  element.style.removeProperty(prefix + propertyName);
};
const animationEnd = (el, callback) => {
  let unRegTrans;
  const opts = { passive: true };
  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };
  const onTransitionEnd = (ev) => {
    if (el === ev.target) {
      unregister();
      callback(ev);
    }
  };
  if (el) {
    el.addEventListener("webkitAnimationEnd", onTransitionEnd, opts);
    el.addEventListener("animationend", onTransitionEnd, opts);
    unRegTrans = () => {
      el.removeEventListener("webkitAnimationEnd", onTransitionEnd, opts);
      el.removeEventListener("animationend", onTransitionEnd, opts);
    };
  }
  return unregister;
};
const generateKeyframeRules = (keyframes = []) => {
  return keyframes.map((keyframe) => {
    const offset = keyframe.offset;
    const frameString = [];
    for (const property in keyframe) {
      if (keyframe.hasOwnProperty(property) && property !== "offset") {
        frameString.push(`${property}: ${keyframe[property]};`);
      }
    }
    return `${offset * 100}% { ${frameString.join(" ")} }`;
  }).join(" ");
};
const keyframeIds = [];
const generateKeyframeName = (keyframeRules) => {
  let index = keyframeIds.indexOf(keyframeRules);
  if (index < 0) {
    index = keyframeIds.push(keyframeRules) - 1;
  }
  return `ion-animation-${index}`;
};
const getStyleContainer = (element) => {
  const rootNode = element.getRootNode !== void 0 ? element.getRootNode() : element;
  return rootNode.head || rootNode;
};
const createKeyframeStylesheet = (keyframeName, keyframeRules, element) => {
  var _a;
  const styleContainer = getStyleContainer(element);
  const keyframePrefix = getAnimationPrefix(element);
  const existingStylesheet = styleContainer.querySelector("#" + keyframeName);
  if (existingStylesheet) {
    return existingStylesheet;
  }
  const stylesheet = ((_a = element.ownerDocument) !== null && _a !== void 0 ? _a : document).createElement("style");
  stylesheet.id = keyframeName;
  stylesheet.textContent = `@${keyframePrefix}keyframes ${keyframeName} { ${keyframeRules} } @${keyframePrefix}keyframes ${keyframeName}-alt { ${keyframeRules} }`;
  styleContainer.appendChild(stylesheet);
  return stylesheet;
};
const addClassToArray = (classes = [], className) => {
  if (className !== void 0) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};
const createAnimation = (animationId) => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let cssAnimationsTimerFallback;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let keyframeName;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === "function" || win$1 !== void 0;
  const supportsWebAnimations = typeof Element === "function" && typeof Element.prototype.animate === "function" && supportsAnimationEffect;
  const ANIMATION_END_FALLBACK_PADDING_MS = 100;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = (clearStyleSheets) => {
    childAnimations.forEach((childAnimation) => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  const cleanUp = (clearStyleSheets) => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = void 0;
    forceDurationValue = void 0;
    forceDelayValue = void 0;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };
  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({ c: callback, o: opts });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach((animation2) => {
        animation2.cancel();
      });
      webAnimations.length = 0;
    } else {
      const elementsArray = elements.slice();
      raf(() => {
        elementsArray.forEach((element) => {
          removeStyleProperty(element, "animation-name");
          removeStyleProperty(element, "animation-duration");
          removeStyleProperty(element, "animation-timing-function");
          removeStyleProperty(element, "animation-iteration-count");
          removeStyleProperty(element, "animation-delay");
          removeStyleProperty(element, "animation-play-state");
          removeStyleProperty(element, "animation-fill-mode");
          removeStyleProperty(element, "animation-direction");
        });
      });
    }
  };
  const cleanUpStyleSheets = () => {
    stylesheets.forEach((stylesheet) => {
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = (readFn) => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = (writeFn) => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = (readFn) => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = (writeFn) => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = (className) => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = (className) => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  const beforeStyles = (styles2 = {}) => {
    beforeStylesValue = styles2;
    return ani;
  };
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = "";
    }
    return ani;
  };
  const afterAddClass = (className) => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = (className) => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles2 = {}) => {
    afterStylesValue = styles2;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = "";
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== void 0) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return "both";
  };
  const getDirection = () => {
    if (forceDirectionValue !== void 0) {
      return forceDirectionValue;
    }
    if (_direction !== void 0) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return "normal";
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return "linear";
    }
    if (_easing !== void 0) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return "linear";
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== void 0) {
      return forceDurationValue;
    }
    if (_duration !== void 0) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== void 0) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== void 0) {
      return forceDelayValue;
    }
    if (_delay !== void 0) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = (animationDirection) => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = (animationFill) => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = (animationDelay) => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = (animationEasing) => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = (animationDuration) => {
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = (animationIterations) => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = (animation2) => {
    parentAnimation = animation2;
    return ani;
  };
  const addElement = (el) => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        console.error("Invalid addElement value");
      }
    }
    return ani;
  };
  const addAnimation = (animationToAdd) => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation2 of animationToAdd) {
          animation2.parent(ani);
          childAnimations.push(animation2);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = (keyframeValues) => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  };
  const updateKeyframes = (keyframeValues) => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach((animation2) => {
        if (animation2.effect.setKeyframes) {
          animation2.effect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(animation2.effect.target, keyframeValues, animation2.effect.getTiming());
          animation2.effect = newEffect;
        }
      });
    } else {
      initializeCSSAnimation();
    }
  };
  const beforeAnimation = () => {
    _beforeAddReadFunctions.forEach((callback) => callback());
    _beforeAddWriteFunctions.forEach((callback) => callback());
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles2 = beforeStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles2) {
        if (styles2.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles2[property]);
        }
      }
    });
  };
  const afterAnimation = () => {
    clearCSSAnimationsTimeout();
    _afterAddReadFunctions.forEach((callback) => callback());
    _afterAddWriteFunctions.forEach((callback) => callback());
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles2 = afterStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles2) {
        if (styles2.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles2[property]);
        }
      }
    });
    onFinishCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeCSSAnimation = (toggleAnimationName = true) => {
    cleanUpStyleSheets();
    const processedKeyframes = processKeyframes(_keyframes);
    elements.forEach((element) => {
      if (processedKeyframes.length > 0) {
        const keyframeRules = generateKeyframeRules(processedKeyframes);
        keyframeName = animationId !== void 0 ? animationId : generateKeyframeName(keyframeRules);
        const stylesheet = createKeyframeStylesheet(keyframeName, keyframeRules, element);
        stylesheets.push(stylesheet);
        setStyleProperty(element, "animation-duration", `${getDuration()}ms`);
        setStyleProperty(element, "animation-timing-function", getEasing());
        setStyleProperty(element, "animation-delay", `${getDelay()}ms`);
        setStyleProperty(element, "animation-fill-mode", getFill());
        setStyleProperty(element, "animation-direction", getDirection());
        const iterationsCount = getIterations() === Infinity ? "infinite" : getIterations().toString();
        setStyleProperty(element, "animation-iteration-count", iterationsCount);
        setStyleProperty(element, "animation-play-state", "paused");
        if (toggleAnimationName) {
          setStyleProperty(element, "animation-name", `${stylesheet.id}-alt`);
        }
        raf(() => {
          setStyleProperty(element, "animation-name", stylesheet.id || null);
        });
      }
    });
  };
  const initializeWebAnimation = () => {
    elements.forEach((element) => {
      const animation2 = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation2.pause();
      webAnimations.push(animation2);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = (toggleAnimationName = true) => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      } else {
        initializeCSSAnimation(toggleAnimationName);
      }
    }
    initialized = true;
  };
  const setAnimationStep = (step) => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach((animation2) => {
        animation2.currentTime = animation2.effect.getComputedTiming().delay + getDuration() * step;
        animation2.pause();
      });
    } else {
      const animationDuration = `-${getDuration() * step}ms`;
      elements.forEach((element) => {
        if (_keyframes.length > 0) {
          setStyleProperty(element, "animation-delay", animationDuration);
          setStyleProperty(element, "animation-play-state", "paused");
        }
      });
    }
  };
  const updateWebAnimation = (step) => {
    webAnimations.forEach((animation2) => {
      animation2.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== void 0) {
      setAnimationStep(step);
    }
  };
  const updateCSSAnimation = (toggleAnimationName = true, step) => {
    raf(() => {
      elements.forEach((element) => {
        setStyleProperty(element, "animation-name", keyframeName || null);
        setStyleProperty(element, "animation-duration", `${getDuration()}ms`);
        setStyleProperty(element, "animation-timing-function", getEasing());
        setStyleProperty(element, "animation-delay", step !== void 0 ? `-${step * getDuration()}ms` : `${getDelay()}ms`);
        setStyleProperty(element, "animation-fill-mode", getFill() || null);
        setStyleProperty(element, "animation-direction", getDirection() || null);
        const iterationsCount = getIterations() === Infinity ? "infinite" : getIterations().toString();
        setStyleProperty(element, "animation-iteration-count", iterationsCount);
        if (toggleAnimationName) {
          setStyleProperty(element, "animation-name", `${keyframeName}-alt`);
        }
        raf(() => {
          setStyleProperty(element, "animation-name", keyframeName || null);
        });
      });
    });
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach((animation2) => {
        animation2.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    } else {
      updateCSSAnimation(toggleAnimationName, step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach((animation2) => {
      animation2.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  };
  const progressStep = (step) => {
    childAnimations.forEach((animation2) => {
      animation2.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach((animation2) => {
      animation2.progressEnd(playTo, step, dur);
    });
    if (dur !== void 0) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === "reverse" ? "normal" : "reverse";
      if (forceDirectionValue === "reverse") {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== void 0) {
      onFinish(() => {
        forceDurationValue = void 0;
        forceDirectionValue = void 0;
        forceDelayValue = void 0;
      }, {
        oneTimeCallback: true
      });
      if (!parentAnimation) {
        play();
      }
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach((animation2) => {
          animation2.pause();
        });
      } else {
        elements.forEach((element) => {
          setStyleProperty(element, "animation-play-state", "paused");
        });
      }
      paused = true;
    }
  };
  const pause = () => {
    childAnimations.forEach((animation2) => {
      animation2.pause();
    });
    pauseAnimation();
    return ani;
  };
  const onAnimationEndFallback = () => {
    cssAnimationsTimerFallback = void 0;
    animationFinish();
  };
  const clearCSSAnimationsTimeout = () => {
    if (cssAnimationsTimerFallback) {
      clearTimeout(cssAnimationsTimerFallback);
    }
  };
  const playCSSAnimations = () => {
    clearCSSAnimationsTimeout();
    raf(() => {
      elements.forEach((element) => {
        if (_keyframes.length > 0) {
          setStyleProperty(element, "animation-play-state", "running");
        }
      });
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    } else {
      const animationDelay = getDelay() || 0;
      const animationDuration = getDuration() || 0;
      const animationIterations = getIterations() || 1;
      if (isFinite(animationIterations)) {
        cssAnimationsTimerFallback = setTimeout(onAnimationEndFallback, animationDelay + animationDuration * animationIterations + ANIMATION_END_FALLBACK_PADDING_MS);
      }
      animationEnd(elements[0], () => {
        clearCSSAnimationsTimeout();
        raf(() => {
          clearCSSAnimationPlayState();
          raf(animationFinish);
        });
      });
    }
  };
  const clearCSSAnimationPlayState = () => {
    elements.forEach((element) => {
      removeStyleProperty(element, "animation-duration");
      removeStyleProperty(element, "animation-delay");
      removeStyleProperty(element, "animation-play-state");
    });
  };
  const playWebAnimations = () => {
    webAnimations.forEach((animation2) => {
      animation2.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    } else {
      updateCSSAnimation();
    }
  };
  const play = (opts) => {
    return new Promise((resolve) => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, { oneTimeCallback: true });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      onFinish(() => resolve(), { oneTimeCallback: true });
      childAnimations.forEach((animation2) => {
        animation2.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  };
  const stop = () => {
    childAnimations.forEach((animation2) => {
      animation2.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== void 0 && (firstFrame.offset === void 0 || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{ offset: 0, [property]: value }, ..._keyframes];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== void 0 && (lastFrame.offset === void 0 || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, { offset: 1, [property]: value }];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_CONTENT_TAG_NAME = "ION-CONTENT";
const ION_CONTENT_ELEMENT_SELECTOR = "ion-content";
const ION_CONTENT_CLASS_SELECTOR = ".ion-content-scroll-host";
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = (el) => el.tagName === ION_CONTENT_TAG_NAME;
const getScrollElement = async (el) => {
  if (isIonContent(el)) {
    await new Promise((resolve) => componentOnReady(el, resolve));
    return el.getScrollElement();
  }
  return el;
};
const findIonContent = (el) => {
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
const findClosestIonContent = (el) => {
  return el.closest(ION_CONTENT_SELECTOR);
};
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? "smooth" : "auto"
  }));
};
const printIonContentErrorMsg = (el) => {
  return printRequiredElementError(el, ION_CONTENT_ELEMENT_SELECTOR);
};
const disableContentScrollY = (contentEl) => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    return initialScrollY;
  } else {
    contentEl.style.setProperty("overflow", "hidden");
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty("overflow");
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var KeyboardResize;
(function(KeyboardResize2) {
  KeyboardResize2["Body"] = "body";
  KeyboardResize2["Ionic"] = "ionic";
  KeyboardResize2["Native"] = "native";
  KeyboardResize2["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
  getEngine() {
    var _a;
    return ((_a = void 0) === null || _a === void 0 ? void 0 : _a.isPluginAvailable("Keyboard")) && void 0;
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(void 0);
    }
    return engine.getResizeMode().catch((e) => {
      if (e.code === "UNIMPLEMENTED") {
        return void 0;
      }
      throw e;
    });
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createKeyboardController = async (keyboardChangeCallback) => {
  let keyboardVisible;
  const init = async () => {
    const resizeOptions = await Keyboard.getResizeMode();
    resizeOptions === void 0 ? void 0 : resizeOptions.mode;
  };
  const destroy = () => {
  };
  const isKeyboardVisible = () => keyboardVisible;
  await init();
  return { init, destroy, isKeyboardVisible };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const handleFooterFade = (scrollEl, baseEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    const fadeDuration = 10;
    const fadeStart = maxScroll - fadeDuration;
    const distanceToStart = scrollTop - fadeStart;
    const scale = clamp(0, 1 - distanceToStart / fadeDuration, 1);
    writeTask$1(() => {
      baseEl.style.setProperty("--opacity-scale", scale.toString());
    });
  });
};
const footerIosCss = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}";
const footerMdCss = 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}@supports (inset-inline-start: 0){.footer-md::before{inset-inline-start:0}}@supports not (inset-inline-start: 0){.footer-md::before{left:0}:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}[dir=rtl] .footer-md::before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.footer-md::before:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}[dir=rtl] .footer-md::before{background-position:right 0 top 0}@supports selector(:dir(rtl)){.footer-md::before:dir(rtl){background-position:right 0 top 0}}.footer-md.ion-no-border::before{display:none}';
const Footer = /* @__PURE__ */ proxyCustomElement$1(class Footer2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.keyboardCtrl = null;
    this.checkCollapsibleFooter = () => {
      const mode = getIonMode$2(this);
      if (mode !== "ios") {
        return;
      }
      const { collapse } = this;
      const hasFade = collapse === "fade";
      this.destroyCollapsibleFooter();
      if (hasFade) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        if (!contentEl) {
          printIonContentErrorMsg(this.el);
          return;
        }
        this.setupFadeFooter(contentEl);
      }
    };
    this.setupFadeFooter = async (contentEl) => {
      const scrollEl = this.scrollEl = await getScrollElement(contentEl);
      this.contentScrollCallback = () => {
        handleFooterFade(scrollEl, this.el);
      };
      scrollEl.addEventListener("scroll", this.contentScrollCallback);
      handleFooterFade(scrollEl, this.el);
    };
    this.keyboardVisible = false;
    this.collapse = void 0;
    this.translucent = false;
  }
  componentDidLoad() {
    this.checkCollapsibleFooter();
  }
  componentDidUpdate() {
    this.checkCollapsibleFooter();
  }
  async connectedCallback() {
    this.keyboardCtrl = await createKeyboardController();
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  destroyCollapsibleFooter() {
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = void 0;
    }
  }
  render() {
    const { translucent, collapse } = this;
    const mode = getIonMode$2(this);
    const tabs = this.el.closest("ion-tabs");
    const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(":scope > ion-tab-bar");
    return h$1(Host$1, { role: "contentinfo", class: {
      [mode]: true,
      // Used internally for styling
      [`footer-${mode}`]: true,
      [`footer-translucent`]: translucent,
      [`footer-translucent-${mode}`]: translucent,
      ["footer-toolbar-padding"]: !this.keyboardVisible && (!tabBar || tabBar.slot !== "bottom"),
      [`footer-collapse-${collapse}`]: collapse !== void 0
    } }, mode === "ios" && translucent && h$1("div", { class: "footer-background" }), h$1("slot", null));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: footerIosCss,
      md: footerMdCss
    };
  }
}, [36, "ion-footer", {
  "collapse": [1],
  "translucent": [4],
  "keyboardVisible": [32]
}]);
function defineCustomElement$1$g() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-footer"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-footer":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Footer);
        }
        break;
    }
  });
}
const defineCustomElement$l = defineCustomElement$1$g;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gridCss = ":host{-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;display:block;-ms-flex:1;flex:1}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";
const Grid = /* @__PURE__ */ proxyCustomElement$1(class Grid2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fixed = false;
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: {
      [mode]: true,
      "grid-fixed": this.fixed
    } }, h$1("slot", null));
  }
  static get style() {
    return gridCss;
  }
}, [1, "ion-grid", {
  "fixed": [4]
}]);
function defineCustomElement$1$f() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-grid"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-grid":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Grid);
        }
        break;
    }
  });
}
const defineCustomElement$k = defineCustomElement$1$f;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const TRANSITION = "all 0.2s ease-in-out";
const cloneElement = (tagName) => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
  if (getCachedEl !== null) {
    return getCachedEl;
  }
  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add("ion-cloned-element");
  clonedEl.style.setProperty("display", "none");
  document.body.appendChild(clonedEl);
  return clonedEl;
};
const createHeaderIndex = (headerEl) => {
  if (!headerEl) {
    return;
  }
  const toolbars = headerEl.querySelectorAll("ion-toolbar");
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map((toolbar) => {
      const ionTitleEl = toolbar.querySelector("ion-title");
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector(".toolbar-background"),
        ionTitleEl,
        innerTitleEl: ionTitleEl ? ionTitleEl.shadowRoot.querySelector(".toolbar-title") : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll("ion-buttons"))
      };
    })
  };
};
const handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = clamp(1, 1 + -scrollTop / 500, 1.1);
    const nativeRefresher = contentEl.querySelector("ion-refresher.refresher-native");
    if (nativeRefresher === null) {
      writeTask$1(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};
const setToolbarBackgroundOpacity = (headerEl, opacity) => {
  if (headerEl.collapse === "fade") {
    return;
  }
  if (opacity === void 0) {
    headerEl.style.removeProperty("--opacity-scale");
  } else {
    headerEl.style.setProperty("--opacity-scale", opacity.toString());
  }
};
const handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  const scale = ev[0].intersectionRatio > 0.9 || scrollTop <= 0 ? 0 : (1 - ev[0].intersectionRatio) * 100 / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, scale === 1 ? void 0 : scale);
};
const handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  writeTask$1(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
    if (isPageHidden || isPageTransitioning) {
      return;
    }
    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    } else {
      const hasValidIntersection = intersection.x === 0 && intersection.y === 0 || intersection.width !== 0 && intersection.height !== 0;
      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};
const setHeaderActive = (headerIndex, active = true) => {
  const headerEl = headerIndex.el;
  if (active) {
    headerEl.classList.remove("header-collapse-condense-inactive");
    headerEl.removeAttribute("aria-hidden");
  } else {
    headerEl.classList.add("header-collapse-condense-inactive");
    headerEl.setAttribute("aria-hidden", "true");
  }
};
const scaleLargeTitles = (toolbars = [], scale = 1, transition2 = false) => {
  toolbars.forEach((toolbar) => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;
    if (!ionTitle || ionTitle.size !== "large") {
      return;
    }
    titleDiv.style.transition = transition2 ? TRANSITION : "";
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};
const handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = condenseHeader ? condenseHeader.clientHeight : 0;
    if (condenseHeader !== null && scrollTop < fadeStart) {
      baseEl.style.setProperty("--opacity-scale", "0");
      scrollEl.style.setProperty("clip-path", `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }
    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = clamp(0, distanceToStart / fadeDuration, 1);
    writeTask$1(() => {
      scrollEl.style.removeProperty("clip-path");
      baseEl.style.setProperty("--opacity-scale", scale.toString());
    });
  });
};
const headerIosCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}";
const headerMdCss = 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}@supports (inset-inline-start: 0){.header-md::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.header-md::after{left:0}:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.header-md::after:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}[dir=rtl] .header-md::after{background-position:right 0 top -2px}@supports selector(:dir(rtl)){.header-md::after:dir(rtl){background-position:right 0 top -2px}}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}';
const Header = /* @__PURE__ */ proxyCustomElement$1(class Header2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.inheritedAttributes = {};
    this.setupFadeHeader = async (contentEl, condenseHeader) => {
      const scrollEl = this.scrollEl = await getScrollElement(contentEl);
      this.contentScrollCallback = () => {
        handleHeaderFade(this.scrollEl, this.el, condenseHeader);
      };
      scrollEl.addEventListener("scroll", this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    };
    this.collapse = void 0;
    this.translucent = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  async checkCollapsibleHeader() {
    const mode = getIonMode$2(this);
    if (mode !== "ios") {
      return;
    }
    const { collapse } = this;
    const hasCondense = collapse === "condense";
    const hasFade = collapse === "fade";
    this.destroyCollapsibleHeader();
    if (hasCondense) {
      const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
      const contentEl = pageEl ? findIonContent(pageEl) : null;
      writeTask$1(() => {
        const title = cloneElement("ion-title");
        title.size = "large";
        cloneElement("ion-back-button");
      });
      await this.setupCondenseHeader(contentEl, pageEl);
    } else if (hasFade) {
      const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
      const contentEl = pageEl ? findIonContent(pageEl) : null;
      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      const condenseHeader = contentEl.querySelector('ion-header[collapse="condense"]');
      await this.setupFadeHeader(contentEl, condenseHeader);
    }
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = void 0;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = void 0;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove("header-collapse-main");
      this.collapsibleMainHeader = void 0;
    }
  }
  async setupCondenseHeader(contentEl, pageEl) {
    if (!contentEl || !pageEl) {
      printIonContentErrorMsg(this.el);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    this.scrollEl = await getScrollElement(contentEl);
    const headers = pageEl.querySelectorAll("ion-header");
    this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== "condense");
    if (!this.collapsibleMainHeader) {
      return;
    }
    const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
    const scrollHeaderIndex = createHeaderIndex(this.el);
    if (!mainHeaderIndex || !scrollHeaderIndex) {
      return;
    }
    setHeaderActive(mainHeaderIndex, false);
    setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
    const toolbarIntersection = (ev) => {
      handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl);
    };
    this.intersectionObserver = new IntersectionObserver(toolbarIntersection, {
      root: contentEl,
      threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
    this.contentScrollCallback = () => {
      handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl);
    };
    this.scrollEl.addEventListener("scroll", this.contentScrollCallback);
    writeTask$1(() => {
      if (this.collapsibleMainHeader !== void 0) {
        this.collapsibleMainHeader.classList.add("header-collapse-main");
      }
    });
  }
  render() {
    const { translucent, inheritedAttributes } = this;
    const mode = getIonMode$2(this);
    const collapse = this.collapse || "none";
    const roleType = hostContext("ion-menu", this.el) ? "none" : "banner";
    return h$1(Host$1, Object.assign({ role: roleType, class: {
      [mode]: true,
      // Used internally for styling
      [`header-${mode}`]: true,
      [`header-translucent`]: this.translucent,
      [`header-collapse-${collapse}`]: true,
      [`header-translucent-${mode}`]: this.translucent
    } }, inheritedAttributes), mode === "ios" && translucent && h$1("div", { class: "header-background" }), h$1("slot", null));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: headerIosCss,
      md: headerMdCss
    };
  }
}, [36, "ion-header", {
  "collapse": [1],
  "translucent": [4]
}]);
function defineCustomElement$1$e() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-header"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-header":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Header);
        }
        break;
    }
  });
}
const defineCustomElement$j = defineCustomElement$1$e;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const defineCustomElement$i = defineCustomElement$n;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const defineCustomElement$h = defineCustomElement$m;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const listIosCss = "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-ios.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:10px}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-ios-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 0.55px 0}.list-ios-lines-inset .item-lines-default{--inner-border-width:0 0 0.55px 0;--border-width:0px}ion-card .list-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
const listMdCss = "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background, var(--ion-background-color, #fff))}@supports (inset-inline-start: 0){.list-md>.input:last-child::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.list-md>.input:last-child::after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child::after{left:unset;right:unset;right:0}[dir=rtl] .list-md>.input:last-child::after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.list-md>.input:last-child::after:dir(rtl){left:unset;right:unset;right:0}}}.list-md.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px, 2px;--border-width:0;--inner-border-width:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-md-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 1px 0}.list-md-lines-inset .item-lines-default{--inner-border-width:0 0 1px 0;--border-width:0px}ion-card .list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
const List = /* @__PURE__ */ proxyCustomElement$1(class List2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.lines = void 0;
    this.inset = false;
  }
  /**
   * If `ion-item-sliding` are used inside the list, this method closes
   * any open sliding item.
   *
   * Returns `true` if an actual `ion-item-sliding` is closed.
   */
  async closeSlidingItems() {
    const item = this.el.querySelector("ion-item-sliding");
    if (item === null || item === void 0 ? void 0 : item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    const mode = getIonMode$2(this);
    const { lines, inset } = this;
    return h$1(Host$1, { role: "list", class: {
      [mode]: true,
      // Used internally for styling
      [`list-${mode}`]: true,
      "list-inset": inset,
      [`list-lines-${lines}`]: lines !== void 0,
      [`list-${mode}-lines-${lines}`]: lines !== void 0
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: listIosCss,
      md: listMdCss
    };
  }
}, [32, "ion-list", {
  "lines": [1],
  "inset": [4],
  "closeSlidingItems": [64]
}]);
function defineCustomElement$g() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-list"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-list":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, List);
        }
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const defineCustomElement$f = defineCustomElement$g;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map((tValue) => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = 3 * p1 * Math.pow(t - 1, 2);
  const partB = -3 * p2 * t + 3 * p2 + p3 * t;
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + t * partB) - partC;
};
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter((root) => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};
const solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [
      Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3
    ];
  }
  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [
    s * Math.cos(phi / 3) - b / 3,
    s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
    s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const VIEW_STATE_NEW = 1;
const VIEW_STATE_ATTACHED = 2;
const VIEW_STATE_DESTROYED = 3;
class ViewController {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }
  async init(container) {
    this.state = VIEW_STATE_ATTACHED;
    if (!this.element) {
      const component = this.component;
      this.element = await attachComponent(this.delegate, container, component, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    assert(this.state !== VIEW_STATE_DESTROYED, "view state must be ATTACHED");
    const element = this.element;
    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      } else {
        element.remove();
      }
    }
    this.nav = void 0;
    this.state = VIEW_STATE_DESTROYED;
  }
}
const matches = (view, id, params) => {
  if (!view) {
    return false;
  }
  if (view.component !== id) {
    return false;
  }
  return shallowEqualStringMap(view.params, params);
};
const convertToView = (page, params) => {
  if (!page) {
    return null;
  }
  if (page instanceof ViewController) {
    return page;
  }
  return new ViewController(page, params);
};
const convertToViews = (pages) => {
  return pages.map((page) => {
    if (page instanceof ViewController) {
      return page;
    }
    if ("component" in page) {
      return convertToView(page.component, page.componentProps === null ? void 0 : page.componentProps);
    }
    return convertToView(page, void 0);
  }).filter((v) => v !== null);
};
const navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
const Nav = /* @__PURE__ */ proxyCustomElement$1(class Nav2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.animationEnabled = true;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.delegate = void 0;
    this.swipeGesture = void 0;
    this.animated = true;
    this.animation = void 0;
    this.rootParams = void 0;
    this.root = void 0;
  }
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }
  rootChanged() {
    if (this.root !== void 0) {
      if (!this.useRouter) {
        this.setRoot(this.root, this.rootParams);
      }
    }
  }
  componentWillLoad() {
    this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null;
    if (this.swipeGesture === void 0) {
      const mode = getIonMode$2(this);
      this.swipeGesture = config.getBoolean("swipeBackEnabled", mode === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    this.rootChanged();
    this.gesture = (await import("./_nuxt/swipe-back-e05d01b4.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
    this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = false;
  }
  disconnectedCallback() {
    for (const view of this.views) {
      lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{ component, componentProps }], opts, done);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts
    }, done);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts
    };
    if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    } else if (typeof indexOrViewCtrl === "number") {
      ti.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(ti, done);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts
    }, done);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(component, componentProps, opts, done) {
    return this.setPages([{ component, componentProps }], opts, done);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : opts = {};
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts
    }, done);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */
  setRouteId(id, params, direction, animation2) {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }
    let resolve;
    const promise = new Promise((r) => resolve = r);
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: (enteringEl) => {
        let mark;
        const p = new Promise((r) => mark = r);
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: async () => {
            mark();
            await finish;
          }
        });
        return p;
      }
    };
    if (direction === "root") {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      const viewController = this.views.find((v) => matches(v, id, params));
      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: "back", animationBuilder: animation2 }));
      } else if (direction === "forward") {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), { animationBuilder: animation2 }));
      } else if (direction === "back") {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: "back", animated: true, animationBuilder: animation2 }));
      }
    }
    return promise;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  async getRouteId() {
    const active = this.getActiveSync();
    if (active) {
      return {
        id: active.element.tagName,
        params: active.params,
        element: active.element
      };
    }
    return void 0;
  }
  /**
   * Get the active view.
   */
  async getActive() {
    return this.getActiveSync();
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */
  async getByIndex(index) {
    return this.views[index];
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  async canGoBack(view) {
    return this.canGoBackSync(view);
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  async getPrevious(view) {
    return this.getPreviousSync(view);
  }
  getLength() {
    return this.views.length;
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }
  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return void 0;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  async queueTrns(ti, done) {
    var _a, _b;
    if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
      return false;
    }
    const promise = new Promise((resolve, reject) => {
      ti.resolve = resolve;
      ti.reject = reject;
    });
    ti.done = done;
    if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const canTransition = await router.canTransition();
        if (canTransition === false) {
          return false;
        }
        if (typeof canTransition === "string") {
          router.push(canTransition, ti.opts.direction || "back");
          return false;
        }
      }
    }
    if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      ti.insertViews = void 0;
    }
    this.transInstr.push(ti);
    this.nextTrns();
    return promise;
  }
  success(result, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }
    ti.resolve(result.hasCompleted);
    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const direction = result.direction === "back" ? "back" : "forward";
        router.navChanged(direction);
      }
    }
  }
  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }
  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve(false);
    }
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning) {
      return false;
    }
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }
    this.runTransition(ti);
    return true;
  }
  /** Executes all the transition instruction from the queue. */
  async runTransition(ti) {
    try {
      this.ionNavWillChange.emit();
      this.isTransitioning = true;
      this.prepareTI(ti);
      const leavingView = this.getActiveSync();
      const enteringView = this.getEnteringView(ti, leavingView);
      if (!leavingView && !enteringView) {
        throw new Error("no views in the stack to be removed");
      }
      if (enteringView && enteringView.state === VIEW_STATE_NEW) {
        await enteringView.init(this.el);
      }
      this.postViewInit(enteringView, leavingView, ti);
      const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
      if (requiresTransition && ti.opts && leavingView) {
        const isBackDirection = ti.opts.direction === "back";
        if (isBackDirection) {
          ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
        }
        leavingView.animationBuilder = ti.opts.animationBuilder;
      }
      let result;
      if (requiresTransition) {
        result = await this.transition(enteringView, leavingView, ti);
      } else {
        result = {
          hasCompleted: true,
          requiresTransition: false
        };
      }
      this.success(result, ti);
      this.ionNavDidChange.emit();
    } catch (rejectReason) {
      this.failed(rejectReason, ti);
    }
    this.isTransitioning = false;
    this.nextTrns();
  }
  prepareTI(ti) {
    var _a, _b;
    var _c;
    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : ti.opts = {};
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : _c.delegate = this.delegate;
    if (ti.removeView !== void 0) {
      assert(ti.removeStart !== void 0, "removeView needs removeStart");
      assert(ti.removeCount !== void 0, "removeView needs removeCount");
      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error("removeView was not found");
      }
      ti.removeStart += index;
    }
    if (ti.removeStart !== void 0) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }
    if (ti.insertViews) {
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }
    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    assert(insertViews.length > 0, "length can not be zero");
    const viewControllers = convertToViews(insertViews);
    if (viewControllers.length === 0) {
      throw new Error("invalid views to insert");
    }
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error("inserted view was already inserted");
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error("inserted view was already destroyed");
      }
    }
    ti.insertViews = viewControllers;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(ti, leavingView) {
    const insertViews = ti.insertViews;
    if (insertViews !== void 0) {
      return insertViews[insertViews.length - 1];
    }
    const removeStart = ti.removeStart;
    if (removeStart !== void 0) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return void 0;
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */
  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;
    assert(leavingView || enteringView, "Both leavingView and enteringView are null");
    assert(ti.resolve, "resolve must be valid");
    assert(ti.reject, "reject must be valid");
    const opts = ti.opts;
    const { insertViews, removeStart, removeCount } = ti;
    let destroyQueue;
    if (removeStart !== void 0 && removeCount !== void 0) {
      assert(removeStart >= 0, "removeStart can not be negative");
      assert(removeCount >= 0, "removeCount can not be negative");
      destroyQueue = [];
      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];
        if (view !== void 0 && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      (_a = opts.direction) !== null && _a !== void 0 ? _a : opts.direction = "back";
    }
    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    assert(finalNumViews >= 0, "final balance can not be negative");
    if (finalNumViews === 0) {
      console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error("navigation stack needs at least one root page");
    }
    if (insertViews) {
      let insertIndex = ti.insertStart;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }
      if (ti.enteringRequiresTransition) {
        (_c = opts.direction) !== null && _c !== void 0 ? _c : opts.direction = "forward";
      }
    }
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        lifecycle(view.element, LIFECYCLE_WILL_LEAVE);
        lifecycle(view.element, LIFECYCLE_DID_LEAVE);
        lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      }
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }
  async transition(enteringView, leavingView, ti) {
    const opts = ti.opts;
    const progressCallback = opts.progressAnimation ? (ani) => this.sbAni = ani : void 0;
    const mode = getIonMode$2(this);
    const enteringEl = enteringView.element;
    const leavingEl = leavingView && leavingView.element;
    const animationOpts = Object.assign(Object.assign({
      mode,
      showGoBack: this.canGoBackSync(enteringView),
      baseEl: this.el,
      progressCallback,
      animated: this.animated && config.getBoolean("animated", true),
      enteringEl,
      leavingEl
    }, opts), { animationBuilder: opts.animationBuilder || this.animation || config.get("navAnimation") });
    const { hasCompleted } = await transition(animationOpts);
    return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
  }
  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    const activeView = hasCompleted ? enteringView : leavingView;
    if (activeView) {
      this.unmountInactiveViews(activeView);
    }
    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */
  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      assert(view.nav === this, "view is not part of the nav");
      views.splice(existingIndex, 1);
      views.splice(index, 0, view);
    } else {
      assert(!view.nav, "nav is used");
      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(view) {
    assert(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, "view state should be loaded or destroyed");
    const views = this.views;
    const index = views.indexOf(view);
    assert(index > -1, "view must be part of the stack");
    if (index >= 0) {
      views.splice(index, 1);
    }
  }
  destroyView(view) {
    view._destroy();
    this.removeView(view);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(activeView) {
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);
    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (element) {
        if (i > activeViewIndex) {
          lifecycle(element, LIFECYCLE_WILL_UNLOAD);
          this.destroyView(view);
        } else if (i < activeViewIndex) {
          setPageHidden(element, true);
        }
      }
    }
  }
  canStart() {
    return !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.animationEnabled && this.canGoBackSync();
  }
  onStart() {
    this.pop({ direction: "back", progressAnimation: true });
  }
  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }
  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.animationEnabled = false;
      this.sbAni.onFinish(() => {
        this.animationEnabled = true;
      }, { oneTimeCallback: true });
      let newStepValue = shouldComplete ? -1e-3 : 1e-3;
      if (!shouldComplete) {
        this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");
        newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      } else {
        newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }
      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    }
  }
  render() {
    return h$1("slot", null);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "root": ["rootChanged"]
    };
  }
  static get style() {
    return navCss;
  }
}, [1, "ion-nav", {
  "delegate": [16],
  "swipeGesture": [1028, "swipe-gesture"],
  "animated": [4],
  "animation": [16],
  "rootParams": [16],
  "root": [1],
  "push": [64],
  "insert": [64],
  "insertPages": [64],
  "pop": [64],
  "popTo": [64],
  "popToRoot": [64],
  "removeIndex": [64],
  "setRoot": [64],
  "setPages": [64],
  "setRouteId": [64],
  "getRouteId": [64],
  "getActive": [64],
  "getByIndex": [64],
  "canGoBack": [64],
  "getPrevious": [64]
}]);
function defineCustomElement$1$d() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-nav"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-nav":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Nav);
        }
        break;
    }
  });
}
const defineCustomElement$e = defineCustomElement$1$d;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
const Row = /* @__PURE__ */ proxyCustomElement$1(class Row2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h$1(Host$1, { class: getIonMode$2(this) }, h$1("slot", null));
  }
  static get style() {
    return rowCss;
  }
}, [1, "ion-row"]);
function defineCustomElement$1$c() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-row"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-row":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Row);
        }
        break;
    }
  });
}
const defineCustomElement$d = defineCustomElement$1$c;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const segmentIosCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";
const segmentMdCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";
const Segment = /* @__PURE__ */ proxyCustomElement$1(class Segment2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionSelect = createEvent(this, "ionSelect", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.onClick = (ev) => {
      const current = ev.target;
      const previous = this.checked;
      if (current.tagName === "ION-SEGMENT") {
        return;
      }
      this.value = current.value;
      if (current !== previous) {
        this.emitValueChange();
      }
      if (this.scrollable || !this.swipeGesture) {
        if (previous) {
          this.checkButton(previous, current);
        } else {
          this.setCheckedClasses();
        }
      }
    };
    this.getSegmentButton = (selector) => {
      var _a, _b;
      const buttons = this.getButtons().filter((button) => !button.disabled);
      const currIndex = buttons.findIndex((button) => button === document.activeElement);
      switch (selector) {
        case "first":
          return buttons[0];
        case "last":
          return buttons[buttons.length - 1];
        case "next":
          return (_a = buttons[currIndex + 1]) !== null && _a !== void 0 ? _a : buttons[0];
        case "previous":
          return (_b = buttons[currIndex - 1]) !== null && _b !== void 0 ? _b : buttons[buttons.length - 1];
        default:
          return null;
      }
    };
    this.activated = false;
    this.color = void 0;
    this.disabled = false;
    this.scrollable = false;
    this.swipeGesture = true;
    this.value = void 0;
    this.selectOnFocus = false;
  }
  colorChanged(value, oldValue) {
    if (oldValue === void 0 && value !== void 0 || oldValue !== void 0 && value === void 0) {
      this.emitStyle();
    }
  }
  swipeGestureChanged() {
    this.gestureChanged();
  }
  valueChanged(value) {
    this.ionSelect.emit({ value });
    if (this.scrollable) {
      const buttons = this.getButtons();
      const activeButton = buttons.find((button) => button.value === value);
      if (activeButton !== void 0) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          /**
           * Segment should scroll on the
           * horizontal axis. `block: 'nearest'`
           * ensures that the vertical axis
           * does not scroll if the segment
           * as a whole is already in view.
           */
          block: "nearest"
        });
      }
    }
  }
  disabledChanged() {
    this.gestureChanged();
    const buttons = this.getButtons();
    for (const button of buttons) {
      button.disabled = this.disabled;
    }
  }
  gestureChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.scrollable && !this.disabled && this.swipeGesture);
    }
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentWillLoad() {
    this.emitStyle();
  }
  async componentDidLoad() {
    this.setCheckedClasses();
    this.gesture = (await Promise.resolve().then(function() {
      return index2;
    })).createGesture({
      el: this.el,
      gestureName: "segment",
      gesturePriority: 100,
      threshold: 0,
      passive: false,
      onStart: (ev) => this.onStart(ev),
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev)
    });
    this.gestureChanged();
    if (this.disabled) {
      this.disabledChanged();
    }
  }
  onStart(detail) {
    this.valueBeforeGesture = this.value;
    this.activate(detail);
  }
  onMove(detail) {
    this.setNextIndex(detail);
  }
  onEnd(detail) {
    this.setActivated(false);
    this.setNextIndex(detail, true);
    detail.event.stopImmediatePropagation();
    const value = this.value;
    if (value !== void 0) {
      if (this.valueBeforeGesture !== value) {
        this.emitValueChange();
      }
    }
    this.valueBeforeGesture = void 0;
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    const { value } = this;
    this.ionChange.emit({ value });
  }
  getButtons() {
    return Array.from(this.el.querySelectorAll("ion-segment-button"));
  }
  get checked() {
    return this.getButtons().find((button) => button.value === this.value);
  }
  /*
   * Activate both the segment and the buttons
   * due to a bug with ::slotted in Safari
   */
  setActivated(activated) {
    const buttons = this.getButtons();
    buttons.forEach((button) => {
      if (activated) {
        button.classList.add("segment-button-activated");
      } else {
        button.classList.remove("segment-button-activated");
      }
    });
    this.activated = activated;
  }
  activate(detail) {
    const clicked = detail.event.target;
    const buttons = this.getButtons();
    const checked = buttons.find((button) => button.value === this.value);
    if (clicked.tagName !== "ION-SEGMENT-BUTTON") {
      return;
    }
    if (!checked) {
      this.value = clicked.value;
      this.setCheckedClasses();
    }
    if (this.value === clicked.value) {
      this.setActivated(true);
    }
  }
  getIndicator(button) {
    const root = button.shadowRoot || button;
    return root.querySelector(".segment-button-indicator");
  }
  checkButton(previous, current) {
    const previousIndicator = this.getIndicator(previous);
    const currentIndicator = this.getIndicator(current);
    if (previousIndicator === null || currentIndicator === null) {
      return;
    }
    const previousClientRect = previousIndicator.getBoundingClientRect();
    const currentClientRect = currentIndicator.getBoundingClientRect();
    const widthDelta = previousClientRect.width / currentClientRect.width;
    const xPosition = previousClientRect.left - currentClientRect.left;
    const transform = `translate3d(${xPosition}px, 0, 0) scaleX(${widthDelta})`;
    writeTask$1(() => {
      currentIndicator.classList.remove("segment-button-indicator-animated");
      currentIndicator.style.setProperty("transform", transform);
      currentIndicator.getBoundingClientRect();
      currentIndicator.classList.add("segment-button-indicator-animated");
      currentIndicator.style.setProperty("transform", "");
    });
    this.value = current.value;
    this.setCheckedClasses();
  }
  setCheckedClasses() {
    const buttons = this.getButtons();
    const index = buttons.findIndex((button) => button.value === this.value);
    const next = index + 1;
    for (const button of buttons) {
      button.classList.remove("segment-button-after-checked");
    }
    if (next < buttons.length) {
      buttons[next].classList.add("segment-button-after-checked");
    }
  }
  setNextIndex(detail, isEnd = false) {
    const rtl = isRTL$1(this.el);
    const activated = this.activated;
    const buttons = this.getButtons();
    const index = buttons.findIndex((button) => button.value === this.value);
    const previous = buttons[index];
    let current;
    let nextIndex;
    if (index === -1) {
      return;
    }
    const rect = previous.getBoundingClientRect();
    const left = rect.left;
    const width = rect.width;
    const currentX = detail.currentX;
    const previousY = rect.top + rect.height / 2;
    const root = this.el.getRootNode();
    const nextEl = root.elementFromPoint(currentX, previousY);
    const decreaseIndex = rtl ? currentX > left + width : currentX < left;
    const increaseIndex = rtl ? currentX < left : currentX > left + width;
    if (activated && !isEnd) {
      if (decreaseIndex) {
        const newIndex = index - 1;
        if (newIndex >= 0) {
          nextIndex = newIndex;
        }
      } else if (increaseIndex) {
        if (activated && !isEnd) {
          const newIndex = index + 1;
          if (newIndex < buttons.length) {
            nextIndex = newIndex;
          }
        }
      }
      if (nextIndex !== void 0 && !buttons[nextIndex].disabled) {
        current = buttons[nextIndex];
      }
    }
    if (!activated && isEnd) {
      current = nextEl;
    }
    if (current != null) {
      if (current.tagName === "ION-SEGMENT") {
        return false;
      }
      if (previous !== current) {
        this.checkButton(previous, current);
      }
    }
    return true;
  }
  emitStyle() {
    this.ionStyle.emit({
      segment: true
    });
  }
  onKeyDown(ev) {
    const rtl = isRTL$1(this.el);
    let keyDownSelectsButton = this.selectOnFocus;
    let current;
    switch (ev.key) {
      case "ArrowRight":
        ev.preventDefault();
        current = rtl ? this.getSegmentButton("previous") : this.getSegmentButton("next");
        break;
      case "ArrowLeft":
        ev.preventDefault();
        current = rtl ? this.getSegmentButton("next") : this.getSegmentButton("previous");
        break;
      case "Home":
        ev.preventDefault();
        current = this.getSegmentButton("first");
        break;
      case "End":
        ev.preventDefault();
        current = this.getSegmentButton("last");
        break;
      case " ":
      case "Enter":
        ev.preventDefault();
        current = document.activeElement;
        keyDownSelectsButton = true;
    }
    if (!current) {
      return;
    }
    if (keyDownSelectsButton) {
      const previous = this.checked;
      this.checkButton(previous || current, current);
      if (current !== previous) {
        this.emitValueChange();
      }
    }
    current.setFocus();
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { role: "tablist", onClick: this.onClick, class: createColorClasses$1(this.color, {
      [mode]: true,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "segment-activated": this.activated,
      "segment-disabled": this.disabled,
      "segment-scrollable": this.scrollable
    }) }, h$1("slot", null));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "color": ["colorChanged"],
      "swipeGesture": ["swipeGestureChanged"],
      "value": ["valueChanged"],
      "disabled": ["disabledChanged"]
    };
  }
  static get style() {
    return {
      ios: segmentIosCss,
      md: segmentMdCss
    };
  }
}, [33, "ion-segment", {
  "color": [513],
  "disabled": [4],
  "scrollable": [4],
  "swipeGesture": [4, "swipe-gesture"],
  "value": [1025],
  "selectOnFocus": [4, "select-on-focus"],
  "activated": [32]
}, [[0, "keydown", "onKeyDown"]]]);
function defineCustomElement$1$b() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-segment"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-segment":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Segment);
        }
        break;
    }
  });
}
const defineCustomElement$c = defineCustomElement$1$b;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const segmentButtonIosCss = ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}.segment-button-indicator{-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;left:0;right:0;top:0;bottom:0}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:var(--ion-color-contrast)}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}';
const segmentButtonMdCss = ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}';
let ids$1 = 0;
const SegmentButton = /* @__PURE__ */ proxyCustomElement$1(class SegmentButton2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.segmentEl = null;
    this.inheritedAttributes = {};
    this.updateStyle = () => {
      forceUpdate(this);
    };
    this.updateState = () => {
      const { segmentEl } = this;
      if (segmentEl) {
        this.checked = segmentEl.value === this.value;
        if (segmentEl.disabled) {
          this.disabled = true;
        }
      }
    };
    this.checked = false;
    this.disabled = false;
    this.layout = "icon-top";
    this.type = "button";
    this.value = "ion-sb-" + ids$1++;
  }
  valueChanged() {
    this.updateState();
  }
  connectedCallback() {
    const segmentEl = this.segmentEl = this.el.closest("ion-segment");
    if (segmentEl) {
      this.updateState();
      addEventListener$1(segmentEl, "ionSelect", this.updateState);
      addEventListener$1(segmentEl, "ionStyle", this.updateStyle);
    }
  }
  disconnectedCallback() {
    const segmentEl = this.segmentEl;
    if (segmentEl) {
      removeEventListener(segmentEl, "ionSelect", this.updateState);
      removeEventListener(segmentEl, "ionStyle", this.updateStyle);
      this.segmentEl = null;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, inheritAttributes$2(this.el, ["aria-label"]));
  }
  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }
  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }
  /**
   * @internal
   * Focuses the native <button> element
   * inside of ion-segment-button.
   */
  async setFocus() {
    const { nativeEl } = this;
    if (nativeEl !== void 0) {
      nativeEl.focus();
    }
  }
  render() {
    const { checked, type, disabled, hasIcon, hasLabel, layout, segmentEl } = this;
    const mode = getIonMode$2(this);
    const hasSegmentColor = () => (segmentEl === null || segmentEl === void 0 ? void 0 : segmentEl.color) !== void 0;
    return h$1(Host$1, { class: {
      [mode]: true,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "in-segment": hostContext("ion-segment", this.el),
      "in-segment-color": hasSegmentColor(),
      "segment-button-has-label": hasLabel,
      "segment-button-has-icon": hasIcon,
      "segment-button-has-label-only": hasLabel && !hasIcon,
      "segment-button-has-icon-only": hasIcon && !hasLabel,
      "segment-button-disabled": disabled,
      "segment-button-checked": checked,
      [`segment-button-layout-${layout}`]: true,
      "ion-activatable": true,
      "ion-activatable-instant": true,
      "ion-focusable": true
    } }, h$1("button", Object.assign({ "aria-selected": checked ? "true" : "false", role: "tab", ref: (el) => this.nativeEl = el, type, class: "button-native", part: "native", disabled }, this.inheritedAttributes), h$1("span", { class: "button-inner" }, h$1("slot", null)), mode === "md" && h$1("ion-ripple-effect", null)), h$1("div", { part: "indicator", class: {
      "segment-button-indicator": true,
      "segment-button-indicator-animated": true
    } }, h$1("div", { part: "indicator-background", class: "segment-button-indicator-background" })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
  static get style() {
    return {
      ios: segmentButtonIosCss,
      md: segmentButtonMdCss
    };
  }
}, [33, "ion-segment-button", {
  "disabled": [1028],
  "layout": [1],
  "type": [1],
  "value": [1],
  "checked": [32],
  "setFocus": [64]
}]);
function defineCustomElement$1$a() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-segment-button", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-segment-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, SegmentButton);
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
const defineCustomElement$b = defineCustomElement$1$a;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const addEventListener = (el, eventName, callback, opts) => {
  const listenerOpts = supportsPassive(el) ? {
    capture: !!opts.capture,
    passive: !!opts.passive
  } : !!opts.capture;
  let add;
  let remove;
  if (el["__zone_symbol__addEventListener"]) {
    add = "__zone_symbol__addEventListener";
    remove = "__zone_symbol__removeEventListener";
  } else {
    add = "addEventListener";
    remove = "removeEventListener";
  }
  el[add](eventName, callback, listenerOpts);
  return () => {
    el[remove](eventName, callback, listenerOpts);
  };
};
const supportsPassive = (node) => {
  if (_sPassive === void 0) {
    try {
      const opts = Object.defineProperty({}, "passive", {
        get: () => {
          _sPassive = true;
        }
      });
      node.addEventListener("optsTest", () => {
        return;
      }, opts);
    } catch (e) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
let _sPassive;
const MOUSE_WAIT = 2e3;
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
  let rmTouchStart;
  let rmTouchMove;
  let rmTouchEnd;
  let rmTouchCancel;
  let rmMouseStart;
  let rmMouseMove;
  let rmMouseUp;
  let lastTouchEvent = 0;
  const handleTouchStart = (ev) => {
    lastTouchEvent = Date.now() + MOUSE_WAIT;
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmTouchMove && pointerMove) {
      rmTouchMove = addEventListener(el, "touchmove", pointerMove, options);
    }
    if (!rmTouchEnd) {
      rmTouchEnd = addEventListener(ev.target, "touchend", handleTouchEnd, options);
    }
    if (!rmTouchCancel) {
      rmTouchCancel = addEventListener(ev.target, "touchcancel", handleTouchEnd, options);
    }
  };
  const handleMouseDown = (ev) => {
    if (lastTouchEvent > Date.now()) {
      return;
    }
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmMouseMove && pointerMove) {
      rmMouseMove = addEventListener(getDocument(el), "mousemove", pointerMove, options);
    }
    if (!rmMouseUp) {
      rmMouseUp = addEventListener(getDocument(el), "mouseup", handleMouseUp, options);
    }
  };
  const handleTouchEnd = (ev) => {
    stopTouch();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const handleMouseUp = (ev) => {
    stopMouse();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const stopTouch = () => {
    if (rmTouchMove) {
      rmTouchMove();
    }
    if (rmTouchEnd) {
      rmTouchEnd();
    }
    if (rmTouchCancel) {
      rmTouchCancel();
    }
    rmTouchMove = rmTouchEnd = rmTouchCancel = void 0;
  };
  const stopMouse = () => {
    if (rmMouseMove) {
      rmMouseMove();
    }
    if (rmMouseUp) {
      rmMouseUp();
    }
    rmMouseMove = rmMouseUp = void 0;
  };
  const stop = () => {
    stopTouch();
    stopMouse();
  };
  const enable = (isEnabled = true) => {
    if (!isEnabled) {
      if (rmTouchStart) {
        rmTouchStart();
      }
      if (rmMouseStart) {
        rmMouseStart();
      }
      rmTouchStart = rmMouseStart = void 0;
      stop();
    } else {
      if (!rmTouchStart) {
        rmTouchStart = addEventListener(el, "touchstart", handleTouchStart, options);
      }
      if (!rmMouseStart) {
        rmMouseStart = addEventListener(el, "mousedown", handleMouseDown, options);
      }
    }
  };
  const destroy = () => {
    enable(false);
    pointerUp = pointerMove = pointerDown = void 0;
  };
  return {
    enable,
    stop,
    destroy
  };
};
const getDocument = (node) => {
  return node instanceof Document ? node : node.ownerDocument;
};
const createPanRecognizer = (direction, thresh, maxAngle) => {
  const radians = maxAngle * (Math.PI / 180);
  const isDirX = direction === "x";
  const maxCosine = Math.cos(radians);
  const threshold = thresh * thresh;
  let startX = 0;
  let startY = 0;
  let dirty = false;
  let isPan = 0;
  return {
    start(x, y) {
      startX = x;
      startY = y;
      isPan = 0;
      dirty = true;
    },
    detect(x, y) {
      if (!dirty) {
        return false;
      }
      const deltaX = x - startX;
      const deltaY = y - startY;
      const distance = deltaX * deltaX + deltaY * deltaY;
      if (distance < threshold) {
        return false;
      }
      const hypotenuse = Math.sqrt(distance);
      const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
      if (cosine > maxCosine) {
        isPan = 1;
      } else if (cosine < -maxCosine) {
        isPan = -1;
      } else {
        isPan = 0;
      }
      dirty = false;
      return true;
    },
    isGesture() {
      return isPan !== 0;
    },
    getDirection() {
      return isPan;
    }
  };
};
const createGesture = (config2) => {
  let hasCapturedPan = false;
  let hasStartedPan = false;
  let hasFiredStart = true;
  let isMoveQueued = false;
  const finalConfig = Object.assign({ disableScroll: false, direction: "x", gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config2);
  const canStart = finalConfig.canStart;
  const onWillStart = finalConfig.onWillStart;
  const onStart = finalConfig.onStart;
  const onEnd = finalConfig.onEnd;
  const notCaptured = finalConfig.notCaptured;
  const onMove = finalConfig.onMove;
  const threshold = finalConfig.threshold;
  const passive = finalConfig.passive;
  finalConfig.blurOnStart;
  const detail = {
    type: "pan",
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: void 0,
    data: void 0
  };
  const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
  const gesture = GESTURE_CONTROLLER.createGesture({
    name: config2.gestureName,
    priority: config2.gesturePriority,
    disableScroll: config2.disableScroll
  });
  const pointerDown = (ev) => {
    const timeStamp = now(ev);
    if (hasStartedPan || !hasFiredStart) {
      return false;
    }
    updateDetail(ev, detail);
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime = timeStamp;
    detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
    detail.event = ev;
    if (canStart && canStart(detail) === false) {
      return false;
    }
    gesture.release();
    if (!gesture.start()) {
      return false;
    }
    hasStartedPan = true;
    if (threshold === 0) {
      return tryToCapturePan();
    }
    pan.start(detail.startX, detail.startY);
    return true;
  };
  const pointerMove = (ev) => {
    if (hasCapturedPan) {
      if (!isMoveQueued && hasFiredStart) {
        isMoveQueued = true;
        calcGestureData(detail, ev);
        requestAnimationFrame(fireOnMove);
      }
      return;
    }
    calcGestureData(detail, ev);
    if (pan.detect(detail.currentX, detail.currentY)) {
      if (!pan.isGesture() || !tryToCapturePan()) {
        abortGesture();
      }
    }
  };
  const fireOnMove = () => {
    if (!hasCapturedPan) {
      return;
    }
    isMoveQueued = false;
    if (onMove) {
      onMove(detail);
    }
  };
  const tryToCapturePan = () => {
    if (!gesture.capture()) {
      return false;
    }
    hasCapturedPan = true;
    hasFiredStart = false;
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime;
    if (onWillStart) {
      onWillStart(detail).then(fireOnStart);
    } else {
      fireOnStart();
    }
    return true;
  };
  const fireOnStart = () => {
    if (onStart) {
      onStart(detail);
    }
    hasFiredStart = true;
  };
  const reset = () => {
    hasCapturedPan = false;
    hasStartedPan = false;
    isMoveQueued = false;
    hasFiredStart = true;
    gesture.release();
  };
  const pointerUp = (ev) => {
    const tmpHasCaptured = hasCapturedPan;
    const tmpHasFiredStart = hasFiredStart;
    reset();
    if (!tmpHasFiredStart) {
      return;
    }
    calcGestureData(detail, ev);
    if (tmpHasCaptured) {
      if (onEnd) {
        onEnd(detail);
      }
      return;
    }
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
    capture: false,
    passive
  });
  const abortGesture = () => {
    reset();
    pointerEvents.stop();
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  return {
    enable(enable = true) {
      if (!enable) {
        if (hasCapturedPan) {
          pointerUp(void 0);
        }
        reset();
      }
      pointerEvents.enable(enable);
    },
    destroy() {
      gesture.destroy();
      pointerEvents.destroy();
    }
  };
};
const calcGestureData = (detail, ev) => {
  if (!ev) {
    return;
  }
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  updateDetail(ev, detail);
  const currentX = detail.currentX;
  const currentY = detail.currentY;
  const timestamp = detail.currentTime = now(ev);
  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  detail.event = ev;
};
const updateDetail = (ev, detail) => {
  let x = 0;
  let y = 0;
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else if (ev.pageX !== void 0) {
      x = ev.pageX;
      y = ev.pageY;
    }
  }
  detail.currentX = x;
  detail.currentY = y;
};
const now = (ev) => {
  return ev.timeStamp || Date.now();
};
const index2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  GESTURE_CONTROLLER,
  createGesture
});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const titleIosCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large) .toolbar-title:dir(rtl){-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}";
const titleMdCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}";
const ToolbarTitle = /* @__PURE__ */ proxyCustomElement$1(class ToolbarTitle2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.color = void 0;
    this.size = void 0;
  }
  sizeChanged() {
    this.emitStyle();
  }
  connectedCallback() {
    this.emitStyle();
  }
  emitStyle() {
    const size = this.getSize();
    this.ionStyle.emit({
      [`title-${size}`]: true
    });
  }
  getSize() {
    return this.size !== void 0 ? this.size : "default";
  }
  render() {
    const mode = getIonMode$2(this);
    const size = this.getSize();
    return h$1(Host$1, { class: createColorClasses$1(this.color, {
      [mode]: true,
      [`title-${size}`]: true,
      "title-rtl": document.dir === "rtl"
    }) }, h$1("div", { class: "toolbar-title" }, h$1("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "size": ["sizeChanged"]
    };
  }
  static get style() {
    return {
      ios: titleIosCss,
      md: titleMdCss
    };
  }
}, [33, "ion-title", {
  "color": [513],
  "size": [1]
}]);
function defineCustomElement$1$9() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-title"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-title":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ToolbarTitle);
        }
        break;
    }
  });
}
const defineCustomElement$a = defineCustomElement$1$9;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const toggleIosCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}:host(.legacy-toggle){width:51px;height:32px;contain:strict;overflow:hidden}.native-wrapper .toggle-icon{width:51px;height:32px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:6px;padding-bottom:5px}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:6px;padding-bottom:5px}";
const toggleMdCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}:host(.legacy-toggle){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:12px;padding-bottom:12px;cursor:pointer}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:12px;padding-bottom:12px}";
const Toggle = /* @__PURE__ */ proxyCustomElement$1(class Toggle2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inputId = `ion-tg-${toggleIds++}`;
    this.lastDrag = 0;
    this.inheritedAttributes = {};
    this.didLoad = false;
    this.hasLoggedDeprecationWarning = false;
    this.setupGesture = async () => {
      const { toggleTrack } = this;
      if (toggleTrack) {
        this.gesture = (await Promise.resolve().then(function() {
          return index2;
        })).createGesture({
          el: toggleTrack,
          gestureName: "toggle",
          gesturePriority: 100,
          threshold: 5,
          passive: false,
          onStart: () => this.onStart(),
          onMove: (ev) => this.onMove(ev),
          onEnd: (ev) => this.onEnd(ev)
        });
        this.disabledChanged();
      }
    };
    this.onClick = (ev) => {
      ev.preventDefault();
      if (this.lastDrag + 300 < Date.now()) {
        this.toggleChecked();
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.getSwitchLabelIcon = (mode, checked) => {
      if (mode === "md") {
        return checked ? checkmarkOutline : removeOutline;
      }
      return checked ? removeOutline : ellipseOutline;
    };
    this.activated = false;
    this.color = void 0;
    this.name = this.inputId;
    this.checked = false;
    this.disabled = false;
    this.value = "on";
    this.enableOnOffLabels = config.get("toggleOnOffLabels");
    this.labelPlacement = "start";
    this.legacy = void 0;
    this.justify = "space-between";
  }
  disabledChanged() {
    this.emitStyle();
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  toggleChecked() {
    const { checked, value } = this;
    const isNowChecked = !checked;
    this.checked = isNowChecked;
    this.ionChange.emit({
      checked: isNowChecked,
      value
    });
  }
  async connectedCallback() {
    this.legacyFormController = createLegacyFormController(this.el);
    if (this.didLoad) {
      this.setupGesture();
    }
  }
  componentDidLoad() {
    this.setupGesture();
    this.didLoad = true;
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  componentWillLoad() {
    this.emitStyle();
    if (!this.legacyFormController.hasLegacyControl()) {
      this.inheritedAttributes = Object.assign({}, inheritAriaAttributes(this.el));
    }
  }
  emitStyle() {
    if (this.legacyFormController.hasLegacyControl()) {
      this.ionStyle.emit({
        "interactive-disabled": this.disabled
      });
    }
  }
  onStart() {
    this.activated = true;
    this.setFocus();
  }
  onMove(detail) {
    if (shouldToggle(isRTL$1(this.el), this.checked, detail.deltaX, -10)) {
      this.toggleChecked();
      hapticSelection();
    }
  }
  onEnd(ev) {
    this.activated = false;
    this.lastDrag = Date.now();
    ev.event.preventDefault();
    ev.event.stopImmediatePropagation();
  }
  getValue() {
    return this.value || "";
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  renderOnOffSwitchLabels(mode, checked) {
    const icon = this.getSwitchLabelIcon(mode, checked);
    return h$1("ion-icon", { class: {
      "toggle-switch-icon": true,
      "toggle-switch-icon-checked": checked
    }, icon, "aria-hidden": "true" });
  }
  renderToggleControl() {
    const mode = getIonMode$2(this);
    const { enableOnOffLabels, checked } = this;
    return h$1("div", { class: "toggle-icon", part: "track", ref: (el) => this.toggleTrack = el }, enableOnOffLabels && mode === "ios" && [this.renderOnOffSwitchLabels(mode, true), this.renderOnOffSwitchLabels(mode, false)], h$1("div", { class: "toggle-icon-wrapper" }, h$1("div", { class: "toggle-inner", part: "handle" }, enableOnOffLabels && mode === "md" && this.renderOnOffSwitchLabels(mode, checked))));
  }
  get hasLabel() {
    return this.el.textContent !== "";
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyToggle() : this.renderToggle();
  }
  renderToggle() {
    const { activated, color, checked, disabled, el, justify, labelPlacement, inputId, name } = this;
    const mode = getIonMode$2(this);
    const value = this.getValue();
    const rtl = isRTL$1(el) ? "rtl" : "ltr";
    renderHiddenInput(true, el, name, checked ? value : "", disabled);
    return h$1(Host$1, { onClick: this.onClick, class: createColorClasses$1(color, {
      [mode]: true,
      "in-item": hostContext("ion-item", el),
      "toggle-activated": activated,
      "toggle-checked": checked,
      "toggle-disabled": disabled,
      [`toggle-justify-${justify}`]: true,
      [`toggle-label-placement-${labelPlacement}`]: true,
      [`toggle-${rtl}`]: true
    }) }, h$1("label", { class: "toggle-wrapper" }, h$1("input", Object.assign({ type: "checkbox", role: "switch", "aria-checked": `${checked}`, checked, disabled, id: inputId, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => this.focusEl = focusEl }, this.inheritedAttributes)), h$1("div", { class: {
      "label-text-wrapper": true,
      "label-text-wrapper-hidden": !this.hasLabel
    } }, h$1("slot", null)), h$1("div", { class: "native-wrapper" }, this.renderToggleControl())));
  }
  renderLegacyToggle() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-toggle now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-toggle>Email</ion-toggle>
Example with aria-label: <ion-toggle aria-label="Email"></ion-toggle>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-toggle is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new toggle syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { activated, color, checked, disabled, el, inputId, name } = this;
    const mode = getIonMode$2(this);
    const { label, labelId, labelText } = getAriaLabel(el, inputId);
    const value = this.getValue();
    const rtl = isRTL$1(el) ? "rtl" : "ltr";
    renderHiddenInput(true, el, name, checked ? value : "", disabled);
    return h$1(Host$1, { onClick: this.onClick, "aria-labelledby": label ? labelId : null, "aria-checked": `${checked}`, "aria-hidden": disabled ? "true" : null, role: "switch", class: createColorClasses$1(color, {
      [mode]: true,
      "in-item": hostContext("ion-item", el),
      "toggle-activated": activated,
      "toggle-checked": checked,
      "toggle-disabled": disabled,
      "legacy-toggle": true,
      interactive: true,
      [`toggle-${rtl}`]: true
    }) }, this.renderToggleControl(), h$1("label", { htmlFor: inputId }, labelText), h$1("input", { type: "checkbox", role: "switch", "aria-checked": `${checked}`, disabled, id: inputId, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => this.focusEl = focusEl }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
  static get style() {
    return {
      ios: toggleIosCss,
      md: toggleMdCss
    };
  }
}, [33, "ion-toggle", {
  "color": [513],
  "name": [1],
  "checked": [1028],
  "disabled": [4],
  "value": [1],
  "enableOnOffLabels": [4, "enable-on-off-labels"],
  "labelPlacement": [1, "label-placement"],
  "legacy": [4],
  "justify": [1],
  "activated": [32]
}]);
const shouldToggle = (rtl, checked, deltaX, margin) => {
  if (checked) {
    return !rtl && margin > deltaX || rtl && -margin < deltaX;
  } else {
    return !rtl && -margin < deltaX || rtl && margin > deltaX;
  }
};
let toggleIds = 0;
function defineCustomElement$1$8() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-toggle", "ion-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-toggle":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Toggle);
        }
        break;
      case "ion-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement$E();
        }
        break;
    }
  });
}
const defineCustomElement$9 = defineCustomElement$1$8;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}";
const toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
const Toolbar = /* @__PURE__ */ proxyCustomElement$1(class Toolbar2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.childrenStyles = /* @__PURE__ */ new Map();
    this.color = void 0;
  }
  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll("ion-buttons"));
    const firstButtons = buttons.find((button) => {
      return button.slot === "start";
    });
    if (firstButtons) {
      firstButtons.classList.add("buttons-first-slot");
    }
    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find((button) => button.slot === "end") || buttonsReversed.find((button) => button.slot === "primary") || buttonsReversed.find((button) => button.slot === "secondary");
    if (lastButtons) {
      lastButtons.classList.add("buttons-last-slot");
    }
  }
  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }
  render() {
    const mode = getIonMode$2(this);
    const childStyles = {};
    this.childrenStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    return h$1(Host$1, { class: Object.assign(Object.assign({}, childStyles), createColorClasses$1(this.color, {
      [mode]: true,
      "in-toolbar": hostContext("ion-toolbar", this.el)
    })) }, h$1("div", { class: "toolbar-background" }), h$1("div", { class: "toolbar-container" }, h$1("slot", { name: "start" }), h$1("slot", { name: "secondary" }), h$1("div", { class: "toolbar-content" }, h$1("slot", null)), h$1("slot", { name: "primary" }), h$1("slot", { name: "end" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: toolbarIosCss,
      md: toolbarMdCss
    };
  }
}, [33, "ion-toolbar", {
  "color": [513]
}, [[0, "ionStyle", "childrenStyle"]]]);
function defineCustomElement$1$7() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-toolbar"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-toolbar":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Toolbar);
        }
        break;
    }
  });
}
const defineCustomElement$8 = defineCustomElement$1$7;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const backButtonIosCss = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}';
const backButtonMdCss = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;height:48px}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}';
const BackButton = /* @__PURE__ */ proxyCustomElement$1(class BackButton2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inheritedAttributes = {};
    this.onClick = async (ev) => {
      const nav = this.el.closest("ion-nav");
      ev.preventDefault();
      if (nav && await nav.canGoBack()) {
        return nav.pop({ animationBuilder: this.routerAnimation, skipIfBusy: true });
      }
      return openURL(this.defaultHref, ev, "back", this.routerAnimation);
    };
    this.color = void 0;
    this.defaultHref = void 0;
    this.disabled = false;
    this.icon = void 0;
    this.text = void 0;
    this.type = "button";
    this.routerAnimation = void 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    if (this.defaultHref === void 0) {
      this.defaultHref = config.get("backButtonDefaultHref");
    }
  }
  get backButtonIcon() {
    const icon = this.icon;
    if (icon != null) {
      return icon;
    }
    if (getIonMode$2(this) === "ios") {
      return config.get("backButtonIcon", chevronBack);
    }
    return config.get("backButtonIcon", arrowBackSharp);
  }
  get backButtonText() {
    const defaultBackButtonText = getIonMode$2(this) === "ios" ? "Back" : null;
    return this.text != null ? this.text : config.get("backButtonText", defaultBackButtonText);
  }
  get hasIconOnly() {
    return this.backButtonIcon && !this.backButtonText;
  }
  get rippleType() {
    if (this.hasIconOnly) {
      return "unbounded";
    }
    return "bounded";
  }
  render() {
    const { color, defaultHref, disabled, type, hasIconOnly, backButtonIcon, backButtonText, icon, inheritedAttributes } = this;
    const showBackButton = defaultHref !== void 0;
    const mode = getIonMode$2(this);
    const ariaLabel = inheritedAttributes["aria-label"] || backButtonText || "back";
    return h$1(Host$1, { onClick: this.onClick, class: createColorClasses$1(color, {
      [mode]: true,
      button: true,
      "back-button-disabled": disabled,
      "back-button-has-icon-only": hasIconOnly,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "ion-activatable": true,
      "ion-focusable": true,
      "show-back-button": showBackButton
    }) }, h$1("button", { type, disabled, class: "button-native", part: "native", "aria-label": ariaLabel }, h$1("span", { class: "button-inner" }, backButtonIcon && h$1("ion-icon", { part: "icon", icon: backButtonIcon, "aria-hidden": "true", lazy: false, "flip-rtl": icon === void 0 }), backButtonText && h$1("span", { part: "text", "aria-hidden": "true", class: "button-text" }, backButtonText)), mode === "md" && h$1("ion-ripple-effect", { type: this.rippleType })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: backButtonIosCss,
      md: backButtonMdCss
    };
  }
}, [33, "ion-back-button", {
  "color": [513],
  "defaultHref": [1025, "default-href"],
  "disabled": [516],
  "icon": [1],
  "text": [1],
  "type": [1],
  "routerAnimation": [16]
}]);
function defineCustomElement$1$6() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-back-button", "ion-icon", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-back-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, BackButton);
        }
        break;
      case "ion-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement$E();
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
const defineCustomElement$7 = defineCustomElement$1$6;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const routeOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
const RouterOutlet = /* @__PURE__ */ proxyCustomElement$1(class RouterOutlet2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.gestureOrAnimationInProgress = false;
    this.mode = getIonMode$2(this);
    this.delegate = void 0;
    this.animated = true;
    this.animation = void 0;
    this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== void 0);
    }
  }
  async connectedCallback() {
    const onStart = () => {
      this.gestureOrAnimationInProgress = true;
      if (this.swipeHandler) {
        this.swipeHandler.onStart();
      }
    };
    this.gesture = (await import("./_nuxt/swipe-back-e05d01b4.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => {
      var _a;
      return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step);
    }, (shouldComplete, step, dur) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = false;
          if (this.swipeHandler) {
            this.swipeHandler.onEnd(shouldComplete);
          }
        }, { oneTimeCallback: true });
        let newStepValue = shouldComplete ? -1e-3 : 1e-3;
        if (!shouldComplete) {
          this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");
          newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        } else {
          newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
      } else {
        this.gestureOrAnimationInProgress = false;
      }
    });
    this.swipeHandlerChanged();
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /** @internal */
  async commit(enteringEl, leavingEl, opts) {
    const unlock = await this.lock();
    let changed = false;
    try {
      changed = await this.transition(enteringEl, leavingEl, opts);
    } catch (e) {
      console.error(e);
    }
    unlock();
    return changed;
  }
  /** @internal */
  async setRouteId(id, params, direction, animation2) {
    const changed = await this.setRoot(id, params, {
      duration: direction === "root" ? 0 : void 0,
      direction: direction === "back" ? "back" : "forward",
      animationBuilder: animation2
    });
    return {
      changed,
      element: this.activeEl
    };
  }
  /** @internal */
  async getRouteId() {
    const active = this.activeEl;
    return active ? {
      id: active.tagName,
      element: active,
      params: this.activeParams
    } : void 0;
  }
  async setRoot(component, params, opts) {
    if (this.activeComponent === component && shallowEqualStringMap(params, this.activeParams)) {
      return false;
    }
    const leavingEl = this.activeEl;
    const enteringEl = await attachComponent(this.delegate, this.el, component, ["ion-page", "ion-page-invisible"], params);
    this.activeComponent = component;
    this.activeEl = enteringEl;
    this.activeParams = params;
    await this.commit(enteringEl, leavingEl, opts);
    await detachComponent(this.delegate, leavingEl);
    return true;
  }
  async transition(enteringEl, leavingEl, opts = {}) {
    if (leavingEl === enteringEl) {
      return false;
    }
    this.ionNavWillChange.emit();
    const { el, mode } = this;
    const animated = this.animated && config.getBoolean("animated", true);
    const animationBuilder = opts.animationBuilder || this.animation || config.get("navAnimation");
    await transition(Object.assign(Object.assign({
      mode,
      animated,
      enteringEl,
      leavingEl,
      baseEl: el,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: hasLazyBuild(el),
      progressCallback: opts.progressAnimation ? (ani) => {
        if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
          this.gestureOrAnimationInProgress = true;
          ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
            if (this.swipeHandler) {
              this.swipeHandler.onEnd(false);
            }
          }, { oneTimeCallback: true });
          ani.progressEnd(0, 0, 0);
        } else {
          this.ani = ani;
        }
      } : void 0
    }, opts), { animationBuilder }));
    this.ionNavDidChange.emit();
    return true;
  }
  async lock() {
    const p = this.waitPromise;
    let resolve;
    this.waitPromise = new Promise((r) => resolve = r);
    if (p !== void 0) {
      await p;
    }
    return resolve;
  }
  render() {
    return h$1("slot", null);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "swipeHandler": ["swipeHandlerChanged"]
    };
  }
  static get style() {
    return routeOutletCss;
  }
}, [1, "ion-router-outlet", {
  "mode": [1025],
  "delegate": [16],
  "animated": [4],
  "animation": [16],
  "swipeHandler": [16],
  "commit": [64],
  "setRouteId": [64],
  "getRouteId": [64]
}]);
function defineCustomElement$1$5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-router-outlet"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-router-outlet":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RouterOutlet);
        }
        break;
    }
  });
}
const defineCustomElement$6 = defineCustomElement$1$5;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const tabButtonIosCss = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}';
const tabButtonMdCss = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}';
const TabButton = /* @__PURE__ */ proxyCustomElement$1(class TabButton2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionTabButtonClick = createEvent(this, "ionTabButtonClick", 7);
    this.inheritedAttributes = {};
    this.onKeyUp = (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        this.selectTab(ev);
      }
    };
    this.onClick = (ev) => {
      this.selectTab(ev);
    };
    this.disabled = false;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.layout = void 0;
    this.selected = false;
    this.tab = void 0;
    this.target = void 0;
  }
  onTabBarChanged(ev) {
    const dispatchedFrom = ev.target;
    const parent = this.el.parentElement;
    if (ev.composedPath().includes(parent) || (dispatchedFrom === null || dispatchedFrom === void 0 ? void 0 : dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.tab;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, inheritAttributes$2(this.el, ["aria-label"]));
    if (this.layout === void 0) {
      this.layout = config.get("tabButtonLayout", "icon-top");
    }
  }
  selectTab(ev) {
    if (this.tab !== void 0) {
      if (!this.disabled) {
        this.ionTabButtonClick.emit({
          tab: this.tab,
          href: this.href,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }
  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }
  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }
  render() {
    const { disabled, hasIcon, hasLabel, href, rel, target, layout, selected, tab, inheritedAttributes } = this;
    const mode = getIonMode$2(this);
    const attrs = {
      download: this.download,
      href,
      rel,
      target
    };
    return h$1(Host$1, { onClick: this.onClick, onKeyup: this.onKeyUp, id: tab !== void 0 ? `tab-button-${tab}` : null, class: {
      [mode]: true,
      "tab-selected": selected,
      "tab-disabled": disabled,
      "tab-has-label": hasLabel,
      "tab-has-icon": hasIcon,
      "tab-has-label-only": hasLabel && !hasIcon,
      "tab-has-icon-only": hasIcon && !hasLabel,
      [`tab-layout-${layout}`]: true,
      "ion-activatable": true,
      "ion-selectable": true,
      "ion-focusable": true
    } }, h$1("a", Object.assign({}, attrs, { class: "button-native", part: "native", role: "tab", "aria-selected": selected ? "true" : null, "aria-disabled": disabled ? "true" : null, tabindex: disabled ? "-1" : void 0 }, inheritedAttributes), h$1("span", { class: "button-inner" }, h$1("slot", null)), mode === "md" && h$1("ion-ripple-effect", { type: "unbounded" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: tabButtonIosCss,
      md: tabButtonMdCss
    };
  }
}, [33, "ion-tab-button", {
  "disabled": [4],
  "download": [1],
  "href": [1],
  "rel": [1],
  "layout": [1025],
  "selected": [1028],
  "tab": [1],
  "target": [1]
}, [[8, "ionTabBarChanged", "onTabBarChanged"]]]);
function defineCustomElement$1$4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-tab-button", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-tab-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabButton);
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement$B();
        }
        break;
    }
  });
}
const defineCustomElement$5 = defineCustomElement$1$4;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const tabBarIosCss = ":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}";
const tabBarMdCss = ":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}";
const TabBar = /* @__PURE__ */ proxyCustomElement$1(class TabBar2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionTabBarChanged = createEvent(this, "ionTabBarChanged", 7);
    this.keyboardCtrl = null;
    this.keyboardVisible = false;
    this.color = void 0;
    this.selectedTab = void 0;
    this.translucent = false;
  }
  selectedTabChanged() {
    if (this.selectedTab !== void 0) {
      this.ionTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillLoad() {
    this.selectedTabChanged();
  }
  async connectedCallback() {
    this.keyboardCtrl = await createKeyboardController();
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  render() {
    const { color, translucent, keyboardVisible } = this;
    const mode = getIonMode$2(this);
    const shouldHide = keyboardVisible && this.el.getAttribute("slot") !== "top";
    return h$1(Host$1, { role: "tablist", "aria-hidden": shouldHide ? "true" : null, class: createColorClasses$1(color, {
      [mode]: true,
      "tab-bar-translucent": translucent,
      "tab-bar-hidden": shouldHide
    }) }, h$1("slot", null));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "selectedTab": ["selectedTabChanged"]
    };
  }
  static get style() {
    return {
      ios: tabBarIosCss,
      md: tabBarMdCss
    };
  }
}, [33, "ion-tab-bar", {
  "color": [513],
  "selectedTab": [1, "selected-tab"],
  "translucent": [4],
  "keyboardVisible": [32]
}]);
function defineCustomElement$1$3() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-tab-bar"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-tab-bar":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabBar);
        }
        break;
    }
  });
}
const defineCustomElement$4 = defineCustomElement$1$3;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const appCss = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
const App = /* @__PURE__ */ proxyCustomElement$1(class App2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
  }
  componentDidLoad() {
    {
      rIC(async () => {
        const isHybrid2 = isPlatform(window, "hybrid");
        if (!config.getBoolean("_testing")) {
          import("./_nuxt/index9-781de4c3.js").then((module) => module.startTapClick(config));
        }
        if (config.getBoolean("statusTap", isHybrid2)) {
          import("./_nuxt/status-tap-b744b558.js").then((module) => module.startStatusTap());
        }
        if (config.getBoolean("inputShims", needInputShims())) {
          const platform = isPlatform(window, "ios") ? "ios" : "android";
          import("./_nuxt/input-shims-80154fab.js").then((module) => module.startInputShims(config, platform));
        }
        const hardwareBackButtonModule = await import("./_nuxt/hardware-back-button-b290b24e.js");
        if (config.getBoolean("hardwareBackButton", isHybrid2)) {
          hardwareBackButtonModule.startHardwareBackButton();
        } else {
          hardwareBackButtonModule.blockHardwareBackButton();
        }
        import("./_nuxt/focus-visible-1abc3ce9.js").then((module) => this.focusVisible = module.startFocusVisible());
      });
    }
  }
  /**
   * @internal
   * Used to set focus on an element that uses `ion-focusable`.
   * Do not use this if focusing the element as a result of a keyboard
   * event as the focus utility should handle this for us. This method
   * should be used when we want to programmatically focus an element as
   * a result of another user action. (Ex: We focus the first element
   * inside of a popover when the user presents it, but the popover is not always
   * presented as a result of keyboard action.)
   */
  async setFocus(elements) {
    if (this.focusVisible) {
      this.focusVisible.setFocus(elements);
    }
  }
  render() {
    const mode = getIonMode$2(this);
    return h$1(Host$1, { class: {
      [mode]: true,
      "ion-page": true,
      "force-statusbar-padding": config.getBoolean("_forceStatusbarPadding")
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return appCss;
  }
}, [0, "ion-app", {
  "setFocus": [64]
}]);
const needInputShims = () => {
  const needsShimsIOS = isPlatform(window, "ios") && isPlatform(window, "mobile");
  if (needsShimsIOS) {
    return true;
  }
  const isAndroidMobileWeb = isPlatform(window, "android") && isPlatform(window, "mobileweb");
  if (isAndroidMobileWeb) {
    return true;
  }
  return false;
};
const rIC = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, 32);
  }
};
function defineCustomElement$1$2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-app"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-app":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, App);
        }
        break;
    }
  });
}
const defineCustomElement$3 = defineCustomElement$1$2;
const BUILD = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  appendChildSlotFix: false,
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  safari10: false,
  scriptDataOpts: false,
  scopedSlotTextContentFix: false,
  shadowDomShim: false,
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  cssVarShim: false,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  dynamicImportShim: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: false,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true
};
let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queuePending = false;
const getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
const XLINK_NS = "http://www.w3.org/1999/xlink";
const EMPTY_OBJ = {};
const SVG_NS = "http://www.w3.org/2000/svg";
const HTML_NS = "http://www.w3.org/1999/xhtml";
const isDef = (v) => v != null;
const isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : void 0;
}
const h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
const newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
const convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
const convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = Object.assign({}, node.vattrs);
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
const computeMode = (elm) => modeResolutionChain.map((h2) => h2(elm)).find((m) => !!m);
const parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2) {
      return parseFloat(propValue);
    }
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
const rootAppliedStyles = /* @__PURE__ */ new WeakMap();
const registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  var _a;
  let scopeId2 = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          {
            styleElm = doc.createElement("style");
            styleElm.innerHTML = style;
          }
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
const attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (flags & 2) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
const getScopeId = (cmp, mode) => "sc-" + (mode && cmp.$flags$ & 32 ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key")
      ;
    else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (!elm.__lookupSetter__(memberName) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        2
      ) : (
        // slot element does not have fallback content
        1
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = doc.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm(oldParentVNode, newVNode2, i, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  {
    elm["s-hn"] = hostTagName;
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        putBackInOriginalLocation(oldParentVNode.$elm$, false);
      }
    }
  }
  return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1;
  const oldSlotChildNodes = parentElm.childNodes;
  for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
    const childNode = oldSlotChildNodes[i];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, referenceNode(before));
      }
    }
  }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      callNodeRefs(vnode);
      {
        checkSlotFallbackVisibility = true;
        if (elm["s-ol"]) {
          elm["s-ol"].remove();
        } else {
          putBackInOriginalLocation(elm, true);
        }
      }
      elm.remove();
    }
  }
};
const updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
const isSameVnode = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    {
      return leftVNode.$key$ === rightVNode.$key$;
    }
  }
  return false;
};
const referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
const parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
const patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot")
        ;
      else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
const updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  let childNode;
  let i;
  let ilen;
  let j;
  let slotNameAttr;
  let nodeType;
  for (i = 0, ilen = childNodes.length; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode.nodeType === 1) {
      if (childNode["s-sr"]) {
        slotNameAttr = childNode["s-sn"];
        childNode.hidden = false;
        for (j = 0; j < ilen; j++) {
          nodeType = childNodes[j].nodeType;
          if (childNodes[j]["s-hn"] !== childNode["s-hn"] || slotNameAttr !== "") {
            if (nodeType === 1 && slotNameAttr === childNodes[j].getAttribute("slot")) {
              childNode.hidden = true;
              break;
            }
          } else {
            if (nodeType === 1 || nodeType === 3 && childNodes[j].textContent.trim() !== "") {
              childNode.hidden = true;
              break;
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
  let childNode;
  let node;
  let hostContentNodes;
  let slotNameAttr;
  let relocateNodeData;
  let j;
  let i = 0;
  const childNodes = elm.childNodes;
  const ilen = childNodes.length;
  for (; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      slotNameAttr = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"]) {
          if (isNodeLocatedInSlot(node, slotNameAttr)) {
            relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotNameAttr;
            if (relocateNodeData) {
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1) {
      relocateSlotContent(childNode);
    }
  }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
  if (nodeToRelocate.nodeType === 1) {
    if (nodeToRelocate.getAttribute("slot") === null && slotNameAttr === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotNameAttr) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotNameAttr) {
    return true;
  }
  return slotNameAttr === "";
};
const callNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(callNodeRefs);
  }
};
const renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  {
    contentRef = hostElm["s-cr"];
    useNativeShadowDom = (cmpMeta.$flags$ & 1) !== 0;
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode);
  {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      relocateSlotContent(rootVnode.$elm$);
      let relocateData;
      let nodeToRelocate;
      let orgLocationNode;
      let parentNodeRef;
      let insertBeforeNode;
      let refNode;
      let i = 0;
      for (; i < relocateNodes.length; i++) {
        relocateData = relocateNodes[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          orgLocationNode = doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (i = 0; i < relocateNodes.length; i++) {
        relocateData = relocateNodes[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (relocateData.$slotRefNode$) {
          parentNodeRef = relocateData.$slotRefNode$.parentNode;
          insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
          orgLocationNode = nodeToRelocate["s-ol"];
          while (orgLocationNode = orgLocationNode.previousSibling) {
            refNode = orgLocationNode["s-nr"];
            if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
              refNode = refNode.nextSibling;
              if (!refNode || !refNode["s-nr"]) {
                insertBeforeNode = refNode;
                break;
              }
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
            }
          }
        } else {
          if (nodeToRelocate.nodeType === 1) {
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1;
    relocateNodes.length = 0;
  }
};
const attachToAncestor = (hostRef, ancestorComponent) => {
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
const dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = elm;
  let promise;
  if (isInitialLoad) {
    {
      promise = safeCall(instance, "componentWillLoad");
    }
  } else {
    {
      promise = safeCall(instance, "componentWillUpdate");
    }
  }
  {
    promise = then(promise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm);
  }
  endRender();
  endUpdate();
  {
    postUpdateComponent(hostRef);
  }
};
const callRender = (hostRef, instance, elm) => {
  const allRenderFn = false;
  const lazyLoad = false;
  const taskQueue = true;
  const updatable = true;
  try {
    renderingRef = instance;
    instance = allRenderFn ? instance.render() : instance.render && instance.render();
    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16;
    }
    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2;
    }
    if (BUILD.hasRenderFn || BUILD.reflect) {
      if (BUILD.vdomRender || BUILD.reflect) {
        if (BUILD.hydrateServerSide)
          ;
        else {
          renderVdom(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  renderingRef = null;
  return null;
};
const postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = elm;
  hostRef.$ancestorComponent$;
  {
    safeCall(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      safeCall(instance, "componentDidLoad");
    }
    endPostUpdate();
  } else {
    {
      safeCall(instance, "componentDidUpdate");
    }
    endPostUpdate();
  }
};
const safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
const then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const getValue = (ref2, propName) => getHostRef(ref2).$instanceValues$.get(propName);
const setValue = (ref2, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref2);
  const elm = ref2;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = elm;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if (didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    {
      if (cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 | 16)) === 2) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      }
    });
    {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, _oldValue, newValue) {
        plt.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = members.filter(
        ([_, m]) => m[0] & 15
        /* MEMBER_FLAGS.HasAttribute */
      ).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512) {
          cmpMeta.$attrsToReflect$.push([propName, attrName]);
        }
        return attrName;
      });
    }
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    {
      Cstr = elm.constructor;
      hostRef.$flags$ |= 32;
      customElements.whenDefined(cmpMeta.$tagName$).then(() => hostRef.$flags$ |= 128);
    }
    if (Cstr.style) {
      let style = Cstr.style;
      if (typeof style !== "string") {
        style = style[hostRef.$modeName$ = computeMode(elm)];
      }
      const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  {
    schedule();
  }
};
const fireConnectedCallback = (instance) => {
};
const connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      {
        if (cmpMeta.$flags$ & (4 | 8)) {
          setContentReference(elm);
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    endConnected();
  }
};
const setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment("");
  contentRefElm["s-cn"] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
  }
};
const proxyCustomElement = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };
  {
    cmpMeta.$members$ = compactMeta[2];
  }
  {
    cmpMeta.$listeners$ = compactMeta[3];
  }
  {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }
  {
    cmpMeta.$attrsToReflect$ = [];
  }
  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost() {
      registerHost(this, cmpMeta);
    },
    connectedCallback() {
      connectedCallback(this);
      if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback() {
      disconnectedCallback(this);
      if (originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },
    __attachShadow() {
      {
        {
          this.attachShadow({
            mode: "open",
            delegatesFocus: !!(cmpMeta.$flags$ & 16)
          });
        }
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(Cstr, cmpMeta);
};
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
  try {
    if (BUILD.lazyLoad)
      ;
    else {
      hostRef.$hostElement$[methodName](ev);
    }
  } catch (e) {
    consoleError(e);
  }
};
const getHostListenerTarget = (elm, flags) => {
  if (flags & 4)
    return doc;
  if (flags & 8)
    return win;
  if (flags & 16)
    return doc.body;
  return elm;
};
const hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;
const hostRefs = /* @__PURE__ */ new WeakMap();
const getHostRef = (ref2) => hostRefs.get(ref2);
const registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
  return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const styles = /* @__PURE__ */ new Map();
const modeResolutionChain = [];
const win = {};
const doc = win.document || { head: {} };
const H = win.HTMLElement || class {
};
const plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
const supportsListenerOptions = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        supportsListenerOptions2 = true;
      }
    }));
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
const consume = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
const flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
const nextTick = (cb) => promiseResolve().then(cb);
const writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
const getIconMap = () => {
  {
    return /* @__PURE__ */ new Map();
  }
};
const getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
const getNamedUrl = (iconName) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  return getAssetPath(`svg/${iconName}.svg`);
};
const getName = (iconName, icon, mode, ios, md) => {
  mode = (mode && toLower(mode)) === "ios" ? "ios" : "md";
  if (ios && mode === "ios") {
    iconName = toLower(ios);
  } else if (md && mode === "md") {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
const getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === "string";
const toLower = (val) => val.toLowerCase();
const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};
const validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
const isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
const isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
const ioniconContent = /* @__PURE__ */ new Map();
const requests = /* @__PURE__ */ new Map();
let parser;
const getSvgContent = (url, sanitize) => {
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== "undefined" && false) {
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          parser = new DOMParser();
        }
        const doc2 = parser.parseFromString(url, "text/html");
        const svg = doc2.querySelector("svg");
        if (svg) {
          ioniconContent.set(url, svg.outerHTML);
        }
        return Promise.resolve();
      } else {
        req = fetch(url).then((rsp) => {
          if (rsp.ok) {
            return rsp.text().then((svgContent) => {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
              }
              ioniconContent.set(url, svgContent || "");
            });
          }
          ioniconContent.set(url, "");
        });
        requests.set(url, req);
      }
    } else {
      ioniconContent.set(url, "");
      return Promise.resolve();
    }
  }
  return req;
};
const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
const Icon2 = /* @__PURE__ */ proxyCustomElement(class extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.iconName = null;
    this.inheritedAttributes = {};
    this.isVisible = false;
    this.mode = getIonMode();
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (this.lazy && false) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = void 0;
          cb();
        }
      }, { rootMargin });
      io.observe(el);
    } else {
      cb();
    }
  }
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          this.svgContent = ioniconContent.get(url);
        } else {
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }
      }
    }
    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl, iconName, inheritedAttributes, el } = this;
    const mode = this.mode || "md";
    const shouldAutoFlip = iconName ? (iconName.includes("arrow") || iconName.includes("chevron")) && flipRtl !== false : false;
    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return h(Host, Object.assign({ role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": shouldBeFlippable, "icon-rtl": shouldBeFlippable && isRTL(el) }) }, inheritedAttributes), this.svgContent ? h("div", { class: "icon-inner", innerHTML: this.svgContent }) : h("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
  static get style() {
    return iconCss;
  }
}, [1, "ion-icon", {
  "mode": [1025],
  "color": [1],
  "ios": [1],
  "md": [1],
  "flipRtl": [4, "flip-rtl"],
  "name": [513],
  "src": [1],
  "icon": [8],
  "size": [1],
  "lazy": [4],
  "sanitize": [4],
  "svgContent": [32],
  "isVisible": [32]
}]);
const getIonMode = () => "md";
const createColorClasses = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
function defineCustomElement$1$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-icon":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Icon2);
        }
        break;
    }
  });
}
const defineCustomElement$2 = defineCustomElement$1$1;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Style;
(function(Style2) {
  Style2["Dark"] = "DARK";
  Style2["Light"] = "LIGHT";
  Style2["Default"] = "DEFAULT";
})(Style || (Style = {}));
const StatusBar = {
  getEngine() {
    var _a;
    return ((_a = void 0) === null || _a === void 0 ? void 0 : _a.isPluginAvailable("StatusBar")) && void 0;
  },
  supportsDefaultStatusBarStyle() {
    var _a;
    return !!((_a = void 0) === null || _a === void 0 ? void 0 : _a.PluginHeaders);
  },
  setStyle(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.setStyle(options);
  },
  getStyle: async function() {
    const engine = this.getEngine();
    if (!engine) {
      return Style.Default;
    }
    const { style } = await engine.getInfo();
    return style;
  }
};
const getBackdropValueForSheet = (x, backdropBreakpoint) => {
  if (backdropBreakpoint === 1) {
    return 0;
  }
  const slope = 1 / (1 - backdropBreakpoint);
  const b = -(backdropBreakpoint * slope);
  return x * slope + b;
};
const setCardStatusBarDefault = (defaultStyle = Style.Default) => {
  {
    return;
  }
};
const handleCanDismiss = async (el, animation2) => {
  if (typeof el.canDismiss !== "function") {
    return;
  }
  const shouldDismiss = await el.canDismiss(void 0, GESTURE);
  if (!shouldDismiss) {
    return;
  }
  if (animation2.isRunning()) {
    animation2.onFinish(() => {
      el.dismiss(void 0, "handler");
    }, { oneTimeCallback: true });
  } else {
    el.dismiss(void 0, "handler");
  }
};
const calculateSpringStep = (t) => {
  return 255275e-8 * 2.71828 ** (-14.9619 * t) - 1.00255 * 2.71828 ** (-0.0380968 * t) + 1;
};
const SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.93
};
const createSwipeToCloseGesture = (el, animation2, statusBarStyle, onDismiss) => {
  const DISMISS_THRESHOLD = 0.5;
  const height = el.offsetHeight;
  let isOpen = false;
  let canDismissBlocksGesture = false;
  let contentEl = null;
  let scrollEl = null;
  const canDismissMaxStep = 0.2;
  let initialScrollY = true;
  let lastStep = 0;
  const getScrollY = () => {
    if (contentEl && isIonContent(contentEl)) {
      return contentEl.scrollY;
    } else {
      return true;
    }
  };
  const canStart = (detail) => {
    const target = detail.event.target;
    if (target === null || !target.closest) {
      return true;
    }
    contentEl = findClosestIonContent(target);
    if (contentEl) {
      if (isIonContent(contentEl)) {
        const root = getElementRoot(contentEl);
        scrollEl = root.querySelector(".inner-scroll");
      } else {
        scrollEl = contentEl;
      }
      const hasRefresherInContent = !!contentEl.querySelector("ion-refresher");
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    const footer = target.closest("ion-footer");
    if (footer === null) {
      return true;
    }
    return false;
  };
  const onStart = (detail) => {
    const { deltaY } = detail;
    initialScrollY = getScrollY();
    canDismissBlocksGesture = el.canDismiss !== void 0 && el.canDismiss !== true;
    if (deltaY > 0 && contentEl) {
      disableContentScrollY(contentEl);
    }
    animation2.progressStart(true, isOpen ? 1 : 0);
  };
  const onMove = (detail) => {
    const { deltaY } = detail;
    if (deltaY > 0 && contentEl) {
      disableContentScrollY(contentEl);
    }
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = clamp(1e-4, processedStep, maxStep);
    animation2.progressStep(clampedStep);
    if (clampedStep >= DISMISS_THRESHOLD && lastStep < DISMISS_THRESHOLD) {
      setCardStatusBarDefault(statusBarStyle);
    }
    lastStep = clampedStep;
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = clamp(1e-4, processedStep, maxStep);
    const threshold = (detail.deltaY + velocity * 1e3) / height;
    const shouldComplete = !isAttemptingDismissWithCanDismiss && threshold >= DISMISS_THRESHOLD;
    let newStepValue = shouldComplete ? -1e-3 : 1e-3;
    if (!shouldComplete) {
      animation2.easing("cubic-bezier(1, 0, 0.68, 0.28)");
      newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], clampedStep)[0];
    } else {
      animation2.easing("cubic-bezier(0.32, 0.72, 0, 1)");
      newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], clampedStep)[0];
    }
    const duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - clampedStep) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    if (contentEl) {
      resetContentScrollY(contentEl, initialScrollY);
    }
    animation2.onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);
    if (isAttemptingDismissWithCanDismiss && clampedStep > maxStep / 4) {
      handleCanDismiss(el, animation2);
    } else if (shouldComplete) {
      onDismiss();
    }
  };
  const gesture = createGesture({
    el,
    gestureName: "modalSwipeToClose",
    gesturePriority: 39,
    direction: "y",
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};
const computeDuration = (remaining, velocity) => {
  return clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};
const createSheetEnterAnimation = (opts) => {
  const { currentBreakpoint, backdropBreakpoint } = opts;
  const shouldShowBackdrop = backdropBreakpoint === void 0 || backdropBreakpoint < currentBreakpoint;
  const initialBackdrop = shouldShowBackdrop ? `calc(var(--backdrop-opacity) * ${currentBreakpoint})` : "0";
  const backdropAnimation = createAnimation("backdropAnimation").fromTo("opacity", 0, initialBackdrop);
  if (shouldShowBackdrop) {
    backdropAnimation.beforeStyles({
      "pointer-events": "none"
    }).afterClearStyles(["pointer-events"]);
  }
  const wrapperAnimation = createAnimation("wrapperAnimation").keyframes([
    { offset: 0, opacity: 1, transform: "translateY(100%)" },
    { offset: 1, opacity: 1, transform: `translateY(${100 - currentBreakpoint * 100}%)` }
  ]);
  return { wrapperAnimation, backdropAnimation };
};
const createSheetLeaveAnimation = (opts) => {
  const { currentBreakpoint, backdropBreakpoint } = opts;
  const backdropValue = `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(currentBreakpoint, backdropBreakpoint)})`;
  const defaultBackdrop = [
    { offset: 0, opacity: backdropValue },
    { offset: 1, opacity: 0 }
  ];
  const customBackdrop = [
    { offset: 0, opacity: backdropValue },
    { offset: backdropBreakpoint, opacity: 0 },
    { offset: 1, opacity: 0 }
  ];
  const backdropAnimation = createAnimation("backdropAnimation").keyframes(backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop);
  const wrapperAnimation = createAnimation("wrapperAnimation").keyframes([
    { offset: 0, opacity: 1, transform: `translateY(${100 - currentBreakpoint * 100}%)` },
    { offset: 1, opacity: 1, transform: `translateY(100%)` }
  ]);
  return { wrapperAnimation, backdropAnimation };
};
const createEnterAnimation$1 = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  const wrapperAnimation = createAnimation().fromTo("transform", "translateY(100vh)", "translateY(0vh)");
  return { backdropAnimation, wrapperAnimation };
};
const iosEnterAnimation = (baseEl, opts) => {
  const { presentingEl, currentBreakpoint } = opts;
  const root = getElementRoot(baseEl);
  const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== void 0 ? createSheetEnterAnimation(opts) : createEnterAnimation$1();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({ opacity: 1 });
  const baseAnimation = createAnimation("entering-base").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile2 = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
    const presentingElRoot = getElementRoot(presentingEl);
    const presentingAnimation = createAnimation().beforeStyles({
      transform: "translateY(0)",
      "transform-origin": "top center",
      overflow: "hidden"
    });
    const bodyEl = document.body;
    if (isMobile2) {
      const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
      const modalTransform = hasCardModal ? "-10px" : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.afterStyles({
        transform: finalTransform
      }).beforeAddWrite(() => bodyEl.style.setProperty("background-color", "black")).addElement(presentingEl).keyframes([
        { offset: 0, filter: "contrast(1)", transform: "translateY(0px) scale(1)", borderRadius: "0px" },
        { offset: 1, filter: "contrast(0.85)", transform: finalTransform, borderRadius: "10px 10px 0 0" }
      ]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo("opacity", "0", "1");
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector(".modal-wrapper")).keyframes([
          { offset: 0, filter: "contrast(1)", transform: "translateY(0) scale(1)" },
          { offset: 1, filter: "contrast(0.85)", transform: finalTransform }
        ]);
        const shadowAnimation = createAnimation().afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector(".modal-shadow")).keyframes([
          { offset: 0, opacity: "1", transform: "translateY(0) scale(1)" },
          { offset: 1, opacity: "0", transform: finalTransform }
        ]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
const createLeaveAnimation$1 = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", "var(--backdrop-opacity)", 0);
  const wrapperAnimation = createAnimation().fromTo("transform", "translateY(0vh)", "translateY(100vh)");
  return { backdropAnimation, wrapperAnimation };
};
const iosLeaveAnimation = (baseEl, opts, duration = 500) => {
  const { presentingEl, currentBreakpoint } = opts;
  const root = getElementRoot(baseEl);
  const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== void 0 ? createSheetLeaveAnimation(opts) : createLeaveAnimation$1();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({ opacity: 1 });
  const baseAnimation = createAnimation("leaving-base").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(duration).addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile2 = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
    const presentingElRoot = getElementRoot(presentingEl);
    const presentingAnimation = createAnimation().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((currentStep) => {
      if (currentStep !== 1) {
        return;
      }
      presentingEl.style.setProperty("overflow", "");
      const numModals = Array.from(bodyEl.querySelectorAll("ion-modal")).filter((m) => m.presentingElement !== void 0).length;
      if (numModals <= 1) {
        bodyEl.style.setProperty("background-color", "");
      }
    });
    const bodyEl = document.body;
    if (isMobile2) {
      const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
      const modalTransform = hasCardModal ? "-10px" : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.addElement(presentingEl).keyframes([
        { offset: 0, filter: "contrast(0.85)", transform: finalTransform, borderRadius: "10px 10px 0 0" },
        { offset: 1, filter: "contrast(1)", transform: "translateY(0px) scale(1)", borderRadius: "0px" }
      ]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo("opacity", "1", "0");
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.addElement(presentingElRoot.querySelector(".modal-wrapper")).afterStyles({
          transform: "translate3d(0, 0, 0)"
        }).keyframes([
          { offset: 0, filter: "contrast(0.85)", transform: finalTransform },
          { offset: 1, filter: "contrast(1)", transform: "translateY(0) scale(1)" }
        ]);
        const shadowAnimation = createAnimation().addElement(presentingElRoot.querySelector(".modal-shadow")).afterStyles({
          transform: "translateY(0) scale(1)"
        }).keyframes([
          { offset: 0, opacity: "0", transform: finalTransform },
          { offset: 1, opacity: "1", transform: "translateY(0) scale(1)" }
        ]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
const createEnterAnimation = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  const wrapperAnimation = createAnimation().keyframes([
    { offset: 0, opacity: 0.01, transform: "translateY(40px)" },
    { offset: 1, opacity: 1, transform: `translateY(0px)` }
  ]);
  return { backdropAnimation, wrapperAnimation };
};
const mdEnterAnimation = (baseEl, opts) => {
  const { currentBreakpoint } = opts;
  const root = getElementRoot(baseEl);
  const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== void 0 ? createSheetEnterAnimation(opts) : createEnterAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelector(".modal-wrapper"));
  return createAnimation().addElement(baseEl).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([backdropAnimation, wrapperAnimation]);
};
const createLeaveAnimation = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", "var(--backdrop-opacity)", 0);
  const wrapperAnimation = createAnimation().keyframes([
    { offset: 0, opacity: 0.99, transform: `translateY(0px)` },
    { offset: 1, opacity: 0, transform: "translateY(40px)" }
  ]);
  return { backdropAnimation, wrapperAnimation };
};
const mdLeaveAnimation = (baseEl, opts) => {
  const { currentBreakpoint } = opts;
  const root = getElementRoot(baseEl);
  const { wrapperAnimation, backdropAnimation } = currentBreakpoint !== void 0 ? createSheetLeaveAnimation(opts) : createLeaveAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelector(".modal-wrapper"));
  return createAnimation().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
const createSheetGesture = (baseEl, backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, animation2, breakpoints = [], getCurrentBreakpoint, onDismiss, onBreakpointChange) => {
  const defaultBackdrop = [
    { offset: 0, opacity: "var(--backdrop-opacity)" },
    { offset: 1, opacity: 0.01 }
  ];
  const customBackdrop = [
    { offset: 0, opacity: "var(--backdrop-opacity)" },
    { offset: 1 - backdropBreakpoint, opacity: 0 },
    { offset: 1, opacity: 0 }
  ];
  const SheetDefaults = {
    WRAPPER_KEYFRAMES: [
      { offset: 0, transform: "translateY(0%)" },
      { offset: 1, transform: "translateY(100%)" }
    ],
    BACKDROP_KEYFRAMES: backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop
  };
  const contentEl = baseEl.querySelector("ion-content");
  const height = wrapperEl.clientHeight;
  let currentBreakpoint = initialBreakpoint;
  let offset = 0;
  let canDismissBlocksGesture = false;
  const canDismissMaxStep = 0.95;
  const wrapperAnimation = animation2.childAnimations.find((ani) => ani.id === "wrapperAnimation");
  const backdropAnimation = animation2.childAnimations.find((ani) => ani.id === "backdropAnimation");
  const maxBreakpoint = breakpoints[breakpoints.length - 1];
  const minBreakpoint = breakpoints[0];
  const enableBackdrop = () => {
    baseEl.style.setProperty("pointer-events", "auto");
    backdropEl.style.setProperty("pointer-events", "auto");
    baseEl.classList.remove("ion-disable-focus-trap");
  };
  const disableBackdrop = () => {
    baseEl.style.setProperty("pointer-events", "none");
    backdropEl.style.setProperty("pointer-events", "none");
    baseEl.classList.add("ion-disable-focus-trap");
  };
  if (wrapperAnimation && backdropAnimation) {
    wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
    backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
    animation2.progressStart(true, 1 - currentBreakpoint);
    const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
    if (shouldEnableBackdrop) {
      enableBackdrop();
    } else {
      disableBackdrop();
    }
  }
  if (contentEl && currentBreakpoint !== maxBreakpoint) {
    contentEl.scrollY = false;
  }
  const canStart = (detail) => {
    const content = detail.event.target.closest("ion-content");
    currentBreakpoint = getCurrentBreakpoint();
    if (currentBreakpoint === 1 && content) {
      return false;
    }
    return true;
  };
  const onStart = () => {
    canDismissBlocksGesture = baseEl.canDismiss !== void 0 && baseEl.canDismiss !== true && minBreakpoint === 0;
    if (contentEl) {
      contentEl.scrollY = false;
    }
    raf(() => {
      baseEl.focus();
    });
    animation2.progressStart(true, 1 - currentBreakpoint);
  };
  const onMove = (detail) => {
    const initialStep = 1 - currentBreakpoint;
    const secondToLastBreakpoint = breakpoints.length > 1 ? 1 - breakpoints[1] : void 0;
    const step = initialStep + detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = secondToLastBreakpoint !== void 0 && step >= secondToLastBreakpoint && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss && secondToLastBreakpoint !== void 0 ? secondToLastBreakpoint + calculateSpringStep((step - secondToLastBreakpoint) / (maxStep - secondToLastBreakpoint)) : step;
    offset = clamp(1e-4, processedStep, maxStep);
    animation2.progressStep(offset);
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 350) / height;
    const diff = currentBreakpoint - threshold;
    const closest = breakpoints.reduce((a, b) => {
      return Math.abs(b - diff) < Math.abs(a - diff) ? b : a;
    });
    moveSheetToBreakpoint({
      breakpoint: closest,
      breakpointOffset: offset,
      canDismiss: canDismissBlocksGesture
    });
  };
  const moveSheetToBreakpoint = (options) => {
    const { breakpoint, canDismiss, breakpointOffset } = options;
    const shouldPreventDismiss = canDismiss && breakpoint === 0;
    const snapToBreakpoint = shouldPreventDismiss ? currentBreakpoint : breakpoint;
    const shouldRemainOpen = snapToBreakpoint !== 0;
    currentBreakpoint = 0;
    if (wrapperAnimation && backdropAnimation) {
      wrapperAnimation.keyframes([
        { offset: 0, transform: `translateY(${breakpointOffset * 100}%)` },
        { offset: 1, transform: `translateY(${(1 - snapToBreakpoint) * 100}%)` }
      ]);
      backdropAnimation.keyframes([
        {
          offset: 0,
          opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(1 - breakpointOffset, backdropBreakpoint)})`
        },
        {
          offset: 1,
          opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(snapToBreakpoint, backdropBreakpoint)})`
        }
      ]);
      animation2.progressStep(0);
    }
    gesture.enable(false);
    if (shouldPreventDismiss) {
      handleCanDismiss(baseEl, animation2);
    } else if (!shouldRemainOpen) {
      onDismiss();
    }
    return new Promise((resolve) => {
      animation2.onFinish(() => {
        if (shouldRemainOpen) {
          if (wrapperAnimation && backdropAnimation) {
            raf(() => {
              wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
              backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
              animation2.progressStart(true, 1 - snapToBreakpoint);
              currentBreakpoint = snapToBreakpoint;
              onBreakpointChange(currentBreakpoint);
              if (contentEl && currentBreakpoint === breakpoints[breakpoints.length - 1]) {
                contentEl.scrollY = true;
              }
              const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
              if (shouldEnableBackdrop) {
                enableBackdrop();
              } else {
                disableBackdrop();
              }
              gesture.enable(true);
              resolve();
            });
          } else {
            gesture.enable(true);
            resolve();
          }
        } else {
          resolve();
        }
      }, { oneTimeCallback: true }).progressEnd(1, 0, 500);
    });
  };
  const gesture = createGesture({
    el: wrapperEl,
    gestureName: "modalSheet",
    gesturePriority: 40,
    direction: "y",
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return {
    gesture,
    moveSheetToBreakpoint
  };
};
const modalIosCss = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}';
const modalMdCss = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}';
const Modal = /* @__PURE__ */ proxyCustomElement$1(class Modal2 extends H$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.didPresent = createEvent(this, "ionModalDidPresent", 7);
    this.willPresent = createEvent(this, "ionModalWillPresent", 7);
    this.willDismiss = createEvent(this, "ionModalWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionModalDidDismiss", 7);
    this.ionBreakpointDidChange = createEvent(this, "ionBreakpointDidChange", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.ionMount = createEvent(this, "ionMount", 7);
    this.triggerController = createTriggerController();
    this.coreDelegate = CoreDelegate();
    this.isSheetModal = false;
    this.inheritedAttributes = {};
    this.inline = false;
    this.gestureAnimationDismissing = false;
    this.onHandleClick = () => {
      const { sheetTransition, handleBehavior } = this;
      if (handleBehavior !== "cycle" || sheetTransition !== void 0) {
        return;
      }
      this.moveToNextBreakpoint();
    };
    this.onBackdropTap = () => {
      const { sheetTransition } = this;
      if (sheetTransition !== void 0) {
        return;
      }
      this.dismiss(void 0, BACKDROP);
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
    this.presented = false;
    this.hasController = false;
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.breakpoints = void 0;
    this.initialBreakpoint = void 0;
    this.backdropBreakpoint = 0;
    this.handle = void 0;
    this.handleBehavior = "none";
    this.component = void 0;
    this.componentProps = void 0;
    this.cssClass = void 0;
    this.backdropDismiss = true;
    this.showBackdrop = true;
    this.animated = true;
    this.presentingElement = void 0;
    this.htmlAttributes = void 0;
    this.isOpen = false;
    this.trigger = void 0;
    this.keepContentsMounted = false;
    this.canDismiss = true;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const { trigger, el, triggerController } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  breakpointsChanged(breakpoints) {
    if (breakpoints !== void 0) {
      this.sortedBreakpoints = breakpoints.sort((a, b) => a - b);
    }
  }
  connectedCallback() {
    const { el } = this;
    prepareOverlay(el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    const { breakpoints, initialBreakpoint, el } = this;
    const isSheetModal = this.isSheetModal = breakpoints !== void 0 && initialBreakpoint !== void 0;
    this.inheritedAttributes = inheritAttributes$2(el, ["aria-label", "role"]);
    if (isSheetModal) {
      this.currentBreakpoint = this.initialBreakpoint;
    }
    if (breakpoints !== void 0 && initialBreakpoint !== void 0 && !breakpoints.includes(initialBreakpoint)) {
      printIonWarning("Your breakpoints array must include the initialBreakpoint value.");
    }
    setOverlayId(el);
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.breakpointsChanged(this.breakpoints);
  }
  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */
  getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    }
    const parentEl = this.el.parentNode;
    const inline = this.inline = parentEl !== null && !this.hasController;
    const delegate = this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate;
    return { inline, delegate };
  }
  /**
   * Determines whether or not the
   * modal is allowed to dismiss based
   * on the state of the canDismiss prop.
   */
  async checkCanDismiss(data, role) {
    const { canDismiss } = this;
    if (typeof canDismiss === "function") {
      return canDismiss(data, role);
    }
    return canDismiss;
  }
  /**
   * Present the modal overlay after it has been created.
   */
  async present() {
    if (this.presented) {
      return;
    }
    const { presentingElement, el } = this;
    if (this.currentTransition !== void 0) {
      await this.currentTransition;
    }
    this.currentBreakpoint = this.initialBreakpoint;
    const { inline, delegate } = this.getDelegate(true);
    this.usersElement = await attachComponent(delegate, el, this.component, ["ion-page"], this.componentProps, inline);
    this.ionMount.emit();
    if (hasLazyBuild(el)) {
      await deepReady(this.usersElement);
    } else if (!this.keepContentsMounted) {
      await waitForMount();
    }
    writeTask$1(() => this.el.classList.add("show-modal"));
    this.currentTransition = present(this, "modalEnter", iosEnterAnimation, mdEnterAnimation, {
      presentingEl: presentingElement,
      currentBreakpoint: this.initialBreakpoint,
      backdropBreakpoint: this.backdropBreakpoint
    });
    const hasCardModal = presentingElement !== void 0;
    if (hasCardModal && getIonMode$2(this) === "ios") {
      this.statusBarStyle = await StatusBar.getStyle();
    }
    await this.currentTransition;
    if (this.isSheetModal) {
      this.initSheetGesture();
    } else if (hasCardModal) {
      this.initSwipeToClose();
    }
    this.currentTransition = void 0;
  }
  initSwipeToClose() {
    var _a;
    if (getIonMode$2(this) !== "ios") {
      return;
    }
    const { el } = this;
    const animationBuilder = this.leaveAnimation || config.get("modalLeave", iosLeaveAnimation);
    const ani = this.animation = animationBuilder(el, { presentingEl: this.presentingElement });
    const contentEl = findIonContent(el);
    if (!contentEl) {
      printIonContentErrorMsg(el);
      return;
    }
    const statusBarStyle = (_a = this.statusBarStyle) !== null && _a !== void 0 ? _a : Style.Default;
    this.gesture = createSwipeToCloseGesture(el, ani, statusBarStyle, () => {
      this.gestureAnimationDismissing = true;
      this.animation.onFinish(async () => {
        await this.dismiss(void 0, GESTURE);
        this.gestureAnimationDismissing = false;
      });
    });
    this.gesture.enable(true);
  }
  initSheetGesture() {
    const { wrapperEl, initialBreakpoint, backdropBreakpoint } = this;
    if (!wrapperEl || initialBreakpoint === void 0) {
      return;
    }
    const animationBuilder = this.enterAnimation || config.get("modalEnter", iosEnterAnimation);
    const ani = this.animation = animationBuilder(this.el, {
      presentingEl: this.presentingElement,
      currentBreakpoint: initialBreakpoint,
      backdropBreakpoint
    });
    ani.progressStart(true, 1);
    const { gesture, moveSheetToBreakpoint } = createSheetGesture(this.el, this.backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, ani, this.sortedBreakpoints, () => {
      var _a;
      return (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : 0;
    }, () => this.sheetOnDismiss(), (breakpoint) => {
      if (this.currentBreakpoint !== breakpoint) {
        this.currentBreakpoint = breakpoint;
        this.ionBreakpointDidChange.emit({ breakpoint });
      }
    });
    this.gesture = gesture;
    this.moveSheetToBreakpoint = moveSheetToBreakpoint;
    this.gesture.enable(true);
  }
  sheetOnDismiss() {
    this.gestureAnimationDismissing = true;
    this.animation.onFinish(async () => {
      this.currentBreakpoint = 0;
      this.ionBreakpointDidChange.emit({ breakpoint: this.currentBreakpoint });
      await this.dismiss(void 0, GESTURE);
      this.gestureAnimationDismissing = false;
    });
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
   */
  async dismiss(data, role) {
    var _a;
    if (this.gestureAnimationDismissing && role !== GESTURE) {
      return false;
    }
    if (role !== "handler" && !await this.checkCanDismiss(data, role)) {
      return false;
    }
    const { presentingElement } = this;
    const hasCardModal = presentingElement !== void 0;
    if (hasCardModal && getIonMode$2(this) === "ios") {
      setCardStatusBarDefault(this.statusBarStyle);
    }
    if (this.currentTransition !== void 0) {
      await this.currentTransition;
    }
    const enteringAnimation = activeAnimations.get(this) || [];
    this.currentTransition = dismiss(this, data, role, "modalLeave", iosLeaveAnimation, mdLeaveAnimation, {
      presentingEl: presentingElement,
      currentBreakpoint: (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : this.initialBreakpoint,
      backdropBreakpoint: this.backdropBreakpoint
    });
    const dismissed = await this.currentTransition;
    if (dismissed) {
      const { delegate } = this.getDelegate();
      await detachComponent(delegate, this.usersElement);
      writeTask$1(() => this.el.classList.remove("show-modal"));
      if (this.animation) {
        this.animation.destroy();
      }
      if (this.gesture) {
        this.gesture.destroy();
      }
      enteringAnimation.forEach((ani) => ani.destroy());
    }
    this.currentBreakpoint = void 0;
    this.currentTransition = void 0;
    this.animation = void 0;
    return dismissed;
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionModalDidDismiss");
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionModalWillDismiss");
  }
  /**
   * Move a sheet style modal to a specific breakpoint. The breakpoint value must
   * be a value defined in your `breakpoints` array.
   */
  async setCurrentBreakpoint(breakpoint) {
    if (!this.isSheetModal) {
      printIonWarning("setCurrentBreakpoint is only supported on sheet modals.");
      return;
    }
    if (!this.breakpoints.includes(breakpoint)) {
      printIonWarning(`Attempted to set invalid breakpoint value ${breakpoint}. Please double check that the breakpoint value is part of your defined breakpoints.`);
      return;
    }
    const { currentBreakpoint, moveSheetToBreakpoint, canDismiss, breakpoints } = this;
    if (currentBreakpoint === breakpoint) {
      return;
    }
    if (moveSheetToBreakpoint) {
      this.sheetTransition = moveSheetToBreakpoint({
        breakpoint,
        breakpointOffset: 1 - currentBreakpoint,
        canDismiss: canDismiss !== void 0 && canDismiss !== true && breakpoints[0] === 0
      });
      await this.sheetTransition;
      this.sheetTransition = void 0;
    }
  }
  /**
   * Returns the current breakpoint of a sheet style modal
   */
  async getCurrentBreakpoint() {
    return this.currentBreakpoint;
  }
  async moveToNextBreakpoint() {
    const { breakpoints, currentBreakpoint } = this;
    if (!breakpoints || currentBreakpoint == null) {
      return false;
    }
    const allowedBreakpoints = breakpoints.filter((b) => b !== 0);
    const currentBreakpointIndex = allowedBreakpoints.indexOf(currentBreakpoint);
    const nextBreakpointIndex = (currentBreakpointIndex + 1) % allowedBreakpoints.length;
    const nextBreakpoint = allowedBreakpoints[nextBreakpointIndex];
    await this.setCurrentBreakpoint(nextBreakpoint);
    return true;
  }
  render() {
    const { handle, isSheetModal, presentingElement, htmlAttributes, handleBehavior, inheritedAttributes } = this;
    const showHandle = handle !== false && isSheetModal;
    const mode = getIonMode$2(this);
    const isCardModal = presentingElement !== void 0 && mode === "ios";
    const isHandleCycle = handleBehavior === "cycle";
    return h$1(Host$1, Object.assign({ "no-router": true, tabindex: "-1" }, htmlAttributes, { style: {
      zIndex: `${2e4 + this.overlayIndex}`
    }, class: Object.assign({ [mode]: true, ["modal-default"]: !isCardModal && !isSheetModal, [`modal-card`]: isCardModal, [`modal-sheet`]: isSheetModal, "overlay-hidden": true }, getClassMap(this.cssClass)), onIonBackdropTap: this.onBackdropTap, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }), h$1("ion-backdrop", { ref: (el) => this.backdropEl = el, visible: this.showBackdrop, tappable: this.backdropDismiss, part: "backdrop" }), mode === "ios" && h$1("div", { class: "modal-shadow" }), h$1("div", Object.assign({
      /*
        role and aria-modal must be used on the
        same element. They must also be set inside the
        shadow DOM otherwise ion-button will not be highlighted
        when using VoiceOver: https://bugs.webkit.org/show_bug.cgi?id=247134
      */
      role: "dialog"
    }, inheritedAttributes, { "aria-modal": "true", class: "modal-wrapper ion-overlay-wrapper", part: "content", ref: (el) => this.wrapperEl = el }), showHandle && h$1("button", {
      class: "modal-handle",
      // Prevents the handle from receiving keyboard focus when it does not cycle
      tabIndex: !isHandleCycle ? -1 : 0,
      "aria-label": "Activate to adjust the size of the dialog overlaying the screen",
      onClick: isHandleCycle ? this.onHandleClick : void 0,
      part: "handle"
    }), h$1("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
  static get style() {
    return {
      ios: modalIosCss,
      md: modalMdCss
    };
  }
}, [33, "ion-modal", {
  "hasController": [4, "has-controller"],
  "overlayIndex": [2, "overlay-index"],
  "delegate": [16],
  "keyboardClose": [4, "keyboard-close"],
  "enterAnimation": [16],
  "leaveAnimation": [16],
  "breakpoints": [16],
  "initialBreakpoint": [2, "initial-breakpoint"],
  "backdropBreakpoint": [2, "backdrop-breakpoint"],
  "handle": [4],
  "handleBehavior": [1, "handle-behavior"],
  "component": [1],
  "componentProps": [16],
  "cssClass": [1, "css-class"],
  "backdropDismiss": [4, "backdrop-dismiss"],
  "showBackdrop": [4, "show-backdrop"],
  "animated": [4],
  "presentingElement": [16],
  "htmlAttributes": [16],
  "isOpen": [4, "is-open"],
  "trigger": [1],
  "keepContentsMounted": [4, "keep-contents-mounted"],
  "canDismiss": [4, "can-dismiss"],
  "presented": [32],
  "present": [64],
  "dismiss": [64],
  "onDidDismiss": [64],
  "onWillDismiss": [64],
  "setCurrentBreakpoint": [64],
  "getCurrentBreakpoint": [64]
}]);
const LIFECYCLE_MAP = {
  ionModalDidPresent: "ionViewDidEnter",
  ionModalWillPresent: "ionViewWillEnter",
  ionModalWillDismiss: "ionViewWillLeave",
  ionModalDidDismiss: "ionViewDidLeave"
};
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-modal", "ion-backdrop"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-modal":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Modal);
        }
        break;
      case "ion-backdrop":
        if (!customElements.get(tagName)) {
          defineCustomElement$C();
        }
        break;
    }
  });
}
const defineCustomElement = defineCustomElement$1;
const UPDATE_VALUE_EVENT = "update:modelValue";
const MODEL_VALUE = "modelValue";
const ROUTER_LINK_VALUE = "routerLink";
const NAV_MANAGER = "navManager";
const ROUTER_PROP_PREFIX = "router";
const ARIA_PROP_PREFIX = "aria";
const EMPTY_PROP = Symbol();
const DEFAULT_EMPTY_PROP = { default: EMPTY_PROP };
const getComponentClasses = (classes) => {
  return (classes === null || classes === void 0 ? void 0 : classes.split(" ")) || [];
};
const getElementClasses = (ref2, componentClasses, defaultClasses = []) => {
  var _a;
  return [...Array.from(((_a = ref2.value) === null || _a === void 0 ? void 0 : _a.classList) || []), ...defaultClasses].filter((c, i, self) => !componentClasses.has(c) && self.indexOf(c) === i);
};
const defineContainer = (name, defineCustomElement2, componentProps = [], modelProp, modelUpdateEvent, externalModelUpdateEvent) => {
  if (defineCustomElement2 !== void 0) {
    defineCustomElement2();
  }
  const Container = /* @__PURE__ */ defineComponent((props, { attrs, slots, emit }) => {
    var _a;
    let modelPropValue = props[modelProp];
    const containerRef = ref();
    const classes = new Set(getComponentClasses(attrs.class));
    const onVnodeBeforeMount = (vnode) => {
      if (vnode.el) {
        const eventsNames = Array.isArray(modelUpdateEvent) ? modelUpdateEvent : [modelUpdateEvent];
        eventsNames.forEach((eventName) => {
          vnode.el.addEventListener(eventName.toLowerCase(), (e) => {
            modelPropValue = (e === null || e === void 0 ? void 0 : e.target)[modelProp];
            emit(UPDATE_VALUE_EVENT, modelPropValue);
            if (externalModelUpdateEvent) {
              emit(externalModelUpdateEvent, e);
            }
          });
        });
      }
    };
    const currentInstance = getCurrentInstance();
    const hasRouter = (_a = currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.appContext) === null || _a === void 0 ? void 0 : _a.provides[NAV_MANAGER];
    const navManager = hasRouter ? inject(NAV_MANAGER) : void 0;
    const handleRouterLink = (ev) => {
      const { routerLink } = props;
      if (routerLink === EMPTY_PROP)
        return;
      if (navManager !== void 0) {
        let navigationPayload = { event: ev };
        for (const key in props) {
          const value = props[key];
          if (props.hasOwnProperty(key) && key.startsWith(ROUTER_PROP_PREFIX) && value !== EMPTY_PROP) {
            navigationPayload[key] = value;
          }
        }
        navManager.navigate(navigationPayload);
      } else {
        console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.");
      }
    };
    return () => {
      modelPropValue = props[modelProp];
      getComponentClasses(attrs.class).forEach((value) => {
        classes.add(value);
      });
      const oldClick = props.onClick;
      const handleClick = (ev) => {
        if (oldClick !== void 0) {
          oldClick(ev);
        }
        if (!ev.defaultPrevented) {
          handleRouterLink(ev);
        }
      };
      let propsToAdd = {
        ref: containerRef,
        class: getElementClasses(containerRef, classes),
        onClick: handleClick,
        onVnodeBeforeMount: modelUpdateEvent ? onVnodeBeforeMount : void 0
      };
      for (const key in props) {
        const value = props[key];
        if (props.hasOwnProperty(key) && value !== EMPTY_PROP || key.startsWith(ARIA_PROP_PREFIX)) {
          propsToAdd[key] = value;
        }
      }
      if (modelProp) {
        if (props[MODEL_VALUE] !== EMPTY_PROP) {
          propsToAdd = Object.assign(Object.assign({}, propsToAdd), { [modelProp]: props[MODEL_VALUE] });
        } else if (modelPropValue !== EMPTY_PROP) {
          propsToAdd = Object.assign(Object.assign({}, propsToAdd), { [modelProp]: modelPropValue });
        }
      }
      return h$2(name, propsToAdd, slots.default && slots.default());
    };
  });
  if (typeof Container !== "function") {
    Container.name = name;
    Container.props = {
      [ROUTER_LINK_VALUE]: DEFAULT_EMPTY_PROP
    };
    componentProps.forEach((componentProp) => {
      Container.props[componentProp] = DEFAULT_EMPTY_PROP;
    });
    if (modelProp) {
      Container.props[MODEL_VALUE] = DEFAULT_EMPTY_PROP;
      Container.emits = [UPDATE_VALUE_EVENT, externalModelUpdateEvent];
    }
  }
  return Container;
};
const IonAvatar = /* @__PURE__ */ defineContainer("ion-avatar", defineCustomElement$D);
const IonButton = /* @__PURE__ */ defineContainer("ion-button", defineCustomElement$z, [
  "color",
  "buttonType",
  "disabled",
  "expand",
  "fill",
  "routerDirection",
  "routerAnimation",
  "download",
  "href",
  "rel",
  "shape",
  "size",
  "strong",
  "target",
  "type",
  "form",
  "ionFocus",
  "ionBlur"
]);
const IonButtons = /* @__PURE__ */ defineContainer("ion-buttons", defineCustomElement$x, [
  "collapse"
]);
const IonCard = /* @__PURE__ */ defineContainer("ion-card", defineCustomElement$w, [
  "color",
  "button",
  "type",
  "disabled",
  "download",
  "href",
  "rel",
  "routerDirection",
  "routerAnimation",
  "target"
]);
const IonCardContent = /* @__PURE__ */ defineContainer("ion-card-content", defineCustomElement$v);
const IonCardHeader = /* @__PURE__ */ defineContainer("ion-card-header", defineCustomElement$u, [
  "color",
  "translucent"
]);
const IonCardSubtitle = /* @__PURE__ */ defineContainer("ion-card-subtitle", defineCustomElement$t, [
  "color"
]);
const IonCardTitle = /* @__PURE__ */ defineContainer("ion-card-title", defineCustomElement$s, [
  "color"
]);
const IonChip = /* @__PURE__ */ defineContainer("ion-chip", defineCustomElement$r, [
  "color",
  "outline",
  "disabled"
]);
const IonCol = /* @__PURE__ */ defineContainer("ion-col", defineCustomElement$q, [
  "offset",
  "offsetXs",
  "offsetSm",
  "offsetMd",
  "offsetLg",
  "offsetXl",
  "pull",
  "pullXs",
  "pullSm",
  "pullMd",
  "pullLg",
  "pullXl",
  "push",
  "pushXs",
  "pushSm",
  "pushMd",
  "pushLg",
  "pushXl",
  "size",
  "sizeXs",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "sizeXl"
]);
const IonContent = /* @__PURE__ */ defineContainer("ion-content", defineCustomElement$p, [
  "color",
  "fullscreen",
  "forceOverscroll",
  "scrollX",
  "scrollY",
  "scrollEvents",
  "ionScrollStart",
  "ionScroll",
  "ionScrollEnd"
]);
const IonFooter = /* @__PURE__ */ defineContainer("ion-footer", defineCustomElement$l, [
  "collapse",
  "translucent"
]);
const IonGrid = /* @__PURE__ */ defineContainer("ion-grid", defineCustomElement$k, [
  "fixed"
]);
const IonHeader = /* @__PURE__ */ defineContainer("ion-header", defineCustomElement$j, [
  "collapse",
  "translucent"
]);
const IonItem = /* @__PURE__ */ defineContainer("ion-item", defineCustomElement$i, [
  "color",
  "button",
  "detail",
  "detailIcon",
  "disabled",
  "download",
  "fill",
  "shape",
  "href",
  "rel",
  "lines",
  "counter",
  "routerAnimation",
  "routerDirection",
  "target",
  "type",
  "counterFormatter"
]);
const IonLabel = /* @__PURE__ */ defineContainer("ion-label", defineCustomElement$h, [
  "color",
  "position",
  "ionColor",
  "ionStyle"
]);
const IonList = /* @__PURE__ */ defineContainer("ion-list", defineCustomElement$f, [
  "lines",
  "inset"
]);
const IonRow = /* @__PURE__ */ defineContainer("ion-row", defineCustomElement$d);
const IonSegment = /* @__PURE__ */ defineContainer("ion-segment", defineCustomElement$c, [
  "color",
  "disabled",
  "scrollable",
  "swipeGesture",
  "value",
  "selectOnFocus",
  "ionChange",
  "ionSelect",
  "ionStyle"
], "value", "v-ion-change", "ionChange");
const IonSegmentButton = /* @__PURE__ */ defineContainer("ion-segment-button", defineCustomElement$b, [
  "disabled",
  "layout",
  "type",
  "value"
], "value", "v-ion-change", "ionChange");
const IonTitle = /* @__PURE__ */ defineContainer("ion-title", defineCustomElement$a, [
  "color",
  "size",
  "ionStyle"
]);
const IonToggle = /* @__PURE__ */ defineContainer("ion-toggle", defineCustomElement$9, [
  "color",
  "name",
  "checked",
  "disabled",
  "value",
  "enableOnOffLabels",
  "labelPlacement",
  "legacy",
  "justify",
  "ionChange",
  "ionFocus",
  "ionBlur",
  "ionStyle"
], "checked", "v-ion-change", "ionChange");
const IonToolbar = /* @__PURE__ */ defineContainer("ion-toolbar", defineCustomElement$8, [
  "color"
]);
var LifecycleHooks;
(function(LifecycleHooks2) {
  LifecycleHooks2["WillEnter"] = "onIonViewWillEnter";
  LifecycleHooks2["DidEnter"] = "onIonViewDidEnter";
  LifecycleHooks2["WillLeave"] = "onIonViewWillLeave";
  LifecycleHooks2["DidLeave"] = "onIonViewDidLeave";
})(LifecycleHooks || (LifecycleHooks = {}));
const hookNames = {
  [LIFECYCLE_WILL_ENTER]: LifecycleHooks.WillEnter,
  [LIFECYCLE_DID_ENTER]: LifecycleHooks.DidEnter,
  [LIFECYCLE_WILL_LEAVE]: LifecycleHooks.WillLeave,
  [LIFECYCLE_DID_LEAVE]: LifecycleHooks.DidLeave
};
const ids = { main: 0 };
const generateId = (type = "main") => {
  var _a;
  const id = ((_a = ids[type]) !== null && _a !== void 0 ? _a : 0) + 1;
  ids[type] = id;
  return id.toString();
};
const fireLifecycle = (vueComponent, vueInstance, lifecycle2) => {
  if (vueComponent === null || vueComponent === void 0 ? void 0 : vueComponent[lifecycle2]) {
    vueComponent[lifecycle2].bind(vueInstance === null || vueInstance === void 0 ? void 0 : vueInstance.value)();
  }
  const instance = vueInstance === null || vueInstance === void 0 ? void 0 : vueInstance.value;
  if (instance === null || instance === void 0 ? void 0 : instance[lifecycle2]) {
    instance[lifecycle2]();
  }
  if (instance) {
    const hook = hookNames[lifecycle2];
    const hooks = instance[hook];
    if (hooks) {
      hooks.forEach((hook2) => hook2());
    }
  }
};
const getConfig = () => {
  return null;
};
const injectHook = (lifecycleType, hook, component) => {
  if (component) {
    const target = component;
    const hooks = target.proxy[lifecycleType] || (target.proxy[lifecycleType] = []);
    if (target.exposed) {
      target.exposed[lifecycleType] = hooks;
    }
    const wrappedHook = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      return args ? hook(...args) : hook();
    };
    hooks.push(wrappedHook);
    return wrappedHook;
  } else {
    console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().");
  }
};
const createHook = (lifecycle2) => {
  return (hook, target = getCurrentInstance()) => injectHook(lifecycle2, hook, target);
};
createHook(LifecycleHooks.WillEnter);
createHook(LifecycleHooks.DidEnter);
createHook(LifecycleHooks.WillLeave);
createHook(LifecycleHooks.DidLeave);
const useIonRouter = () => {
  const { canGoBack, goBack, goForward, handleNavigate } = inject("navManager");
  const navigate = (location2, routerDirection, routerAction, routerAnimation) => handleNavigate(location2, routerAction, routerDirection, routerAnimation);
  const push = (location2, routerAnimation) => navigate(location2, "forward", "push", routerAnimation);
  const replace = (location2, routerAnimation) => navigate(location2, "root", "replace", routerAnimation);
  const back = (routerAnimation) => goBack(routerAnimation);
  const forward = (routerAnimation) => goForward(routerAnimation);
  return {
    canGoBack,
    push,
    replace,
    back,
    forward,
    navigate
  };
};
const toKebabCase = (eventName) => {
  const kebabConvert = (name) => name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  switch (eventName) {
    case "ionInput":
      return "v-ion-input";
    case "ionChange":
      return "v-ion-change";
    default:
      return kebabConvert(eventName);
  }
};
const getHelperFunctions = () => {
  return {
    ael: (el, eventName, cb, opts) => el.addEventListener(toKebabCase(eventName), cb, opts),
    rel: (el, eventName, cb, opts) => el.removeEventListener(toKebabCase(eventName), cb, opts),
    ce: (eventName, opts) => new CustomEvent(toKebabCase(eventName), opts)
  };
};
const IonicVue = {
  async install(_, config2 = {}) {
    const { ael, rel, ce } = getHelperFunctions();
    initialize(Object.assign(Object.assign({}, config2), { _ael: ael, _rel: rel, _ce: ce }));
  }
};
const IonBackButton = /* @__PURE__ */ defineComponent((_, { attrs, slots }) => {
  defineCustomElement$7();
  const ionRouter = inject("navManager");
  const onClick = () => {
    if (ionRouter === void 0) {
      return;
    }
    const defaultHref = attrs["default-href"] || attrs["defaultHref"];
    const routerAnimation = attrs["router-animation"] || attrs["routerAnimation"];
    ionRouter.handleNavigateBack(defaultHref, routerAnimation);
  };
  return () => {
    return h$2("ion-back-button", Object.assign({ onClick }, attrs), slots.default && slots.default());
  };
});
IonBackButton.name = "IonBackButton";
const IonPage = /* @__PURE__ */ defineComponent({
  name: "IonPage",
  props: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerIonPage: { type: Function, default: () => {
    } }
  },
  mounted() {
    this.$props.registerIonPage(this.$refs.ionPage);
  },
  setup(_, { attrs, slots }) {
    return () => {
      return h$2("div", Object.assign(Object.assign({}, attrs), { ["class"]: "ion-page", ref: "ionPage" }), slots.default && slots.default());
    };
  }
});
const isViewVisible = (enteringEl) => {
  return !enteringEl.classList.contains("ion-page-hidden") && !enteringEl.classList.contains("ion-page-invisible");
};
const viewDepthKey = Symbol(0);
const IonRouterOutlet = /* @__PURE__ */ defineComponent({
  name: "IonRouterOutlet",
  setup() {
    defineCustomElement$6();
    const injectedRoute = inject(routeLocationKey);
    const route = useRoute$1();
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => route.matched[depth]);
    let previousMatchedRouteRef;
    let previousMatchedPath;
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    const ionRouterOutlet = ref();
    const id = generateId("ion-router-outlet");
    const ionRouter = inject("navManager");
    const viewStacks = inject("viewStacks");
    const components = shallowRef([]);
    let skipTransition = false;
    let parentOutletPath;
    watch(() => [route, matchedRouteRef.value], ([currentRoute, currentMatchedRouteRef]) => {
      if (currentMatchedRouteRef !== void 0) {
        const matchedDifferentRoutes = currentMatchedRouteRef !== previousMatchedRouteRef;
        const matchedDifferentParameterRoutes = currentRoute.matched[currentRoute.matched.length - 1] === currentMatchedRouteRef && currentRoute.path !== previousMatchedPath;
        if (matchedDifferentRoutes || matchedDifferentParameterRoutes) {
          setupViewItem(matchedRouteRef);
        }
      }
      previousMatchedRouteRef = currentMatchedRouteRef;
      previousMatchedPath = currentRoute.path;
    });
    const canStart = () => {
      const config2 = getConfig();
      const swipeEnabled = config2 && config2.get("swipeBackEnabled", ionRouterOutlet.value.mode === "ios");
      if (!swipeEnabled)
        return false;
      const stack = viewStacks.getViewStack(id);
      if (!stack || stack.length <= 1)
        return false;
      const routeInfo = ionRouter.getLeavingRouteInfo();
      const enteringViewItem = viewStacks.findViewItemByRouteInfo({ pathname: routeInfo.pushedByRoute || "" }, id);
      return !!enteringViewItem;
    };
    const onStart = async () => {
      const routeInfo = ionRouter.getLeavingRouteInfo();
      const { routerAnimation } = routeInfo;
      const enteringViewItem = viewStacks.findViewItemByRouteInfo({ pathname: routeInfo.pushedByRoute || "" }, id);
      const leavingViewItem = viewStacks.findViewItemByRouteInfo(routeInfo, id);
      if (leavingViewItem) {
        let animationBuilder = routerAnimation;
        const enteringEl = enteringViewItem.ionPageElement;
        const leavingEl = leavingViewItem.ionPageElement;
        const customAnimation = enteringViewItem.routerAnimation;
        if (animationBuilder === void 0 && customAnimation !== void 0) {
          animationBuilder = customAnimation;
        }
        leavingViewItem.routerAnimation = animationBuilder;
        await transition2(enteringEl, leavingEl, "back", ionRouter.canGoBack(2), true, animationBuilder);
      }
      return Promise.resolve();
    };
    const onEnd = (shouldContinue) => {
      if (shouldContinue) {
        skipTransition = true;
        ionRouter.handleNavigateBack();
      } else {
        const routeInfo = ionRouter.getCurrentRouteInfo();
        const enteringViewItem = viewStacks.findViewItemByRouteInfo({ pathname: routeInfo.pushedByRoute || "" }, id);
        enteringViewItem.ionPageElement.setAttribute("aria-hidden", "true");
        enteringViewItem.ionPageElement.classList.add("ion-page-hidden");
      }
    };
    watch(ionRouterOutlet, () => {
      ionRouterOutlet.value.swipeHandler = {
        canStart,
        onStart,
        onEnd
      };
    });
    const transition2 = async (enteringEl, leavingEl, direction, showGoBack, progressAnimation, animationBuilder) => {
      if (skipTransition) {
        skipTransition = false;
        return Promise.resolve(false);
      }
      if (enteringEl === leavingEl) {
        return Promise.resolve(false);
      }
      enteringEl.classList.add("ion-page-invisible");
      const hasRootDirection = direction === void 0 || direction === "root" || direction === "none";
      const result = await ionRouterOutlet.value.commit(enteringEl, leavingEl, {
        /**
         * replace operations result in a direction of none.
         * These typically do not have need animations, so we set
         * the duration to 0. However, if a developer explicitly
         * passes an animationBuilder, we should assume that
         * they want an animation to be played even
         * though it is a replace operation.
         */
        duration: hasRootDirection && animationBuilder === void 0 ? 0 : void 0,
        direction,
        showGoBack,
        progressAnimation,
        animationBuilder
      });
      return result;
    };
    const handlePageTransition = async () => {
      const routeInfo = ionRouter.getCurrentRouteInfo();
      const { routerDirection, routerAction, routerAnimation, prevRouteLastPathname, delta } = routeInfo;
      const enteringViewItem = viewStacks.findViewItemByRouteInfo(routeInfo, id);
      let leavingViewItem = viewStacks.findLeavingViewItemByRouteInfo(routeInfo, id);
      const enteringEl = enteringViewItem.ionPageElement;
      if (enteringEl === void 0) {
        console.warn(`[@ionic/vue Warning]: The view you are trying to render for path ${routeInfo.pathname} does not have the required <ion-page> component. Transitions and lifecycle methods may not work as expected.

See https://ionicframework.com/docs/vue/navigation#ionpage for more information.`);
      }
      if (enteringViewItem === leavingViewItem)
        return;
      if (!leavingViewItem && prevRouteLastPathname) {
        leavingViewItem = viewStacks.findViewItemByPathname(prevRouteLastPathname, id);
      }
      if (isViewVisible(enteringEl) && (leavingViewItem === null || leavingViewItem === void 0 ? void 0 : leavingViewItem.ionPageElement) !== void 0 && !isViewVisible(leavingViewItem.ionPageElement)) {
        return;
      }
      fireLifecycle(enteringViewItem.vueComponent, enteringViewItem.vueComponentRef, LIFECYCLE_WILL_ENTER);
      if ((leavingViewItem === null || leavingViewItem === void 0 ? void 0 : leavingViewItem.ionPageElement) && enteringViewItem !== leavingViewItem) {
        let animationBuilder = routerAnimation;
        const leavingEl = leavingViewItem.ionPageElement;
        fireLifecycle(leavingViewItem.vueComponent, leavingViewItem.vueComponentRef, LIFECYCLE_WILL_LEAVE);
        const customAnimation = enteringViewItem.routerAnimation;
        if (animationBuilder === void 0 && routerDirection === "back" && customAnimation !== void 0) {
          animationBuilder = customAnimation;
        }
        leavingViewItem.routerAnimation = animationBuilder;
        await transition2(enteringEl, leavingEl, routerDirection, !!routeInfo.pushedByRoute, false, animationBuilder);
        leavingEl.classList.add("ion-page-hidden");
        leavingEl.setAttribute("aria-hidden", "true");
        const usingLinearNavigation = viewStacks.size() === 1;
        if (routerAction === "replace") {
          leavingViewItem.mount = false;
          leavingViewItem.ionPageElement = void 0;
          leavingViewItem.ionRoute = false;
        } else if (!(routerAction === "push" && routerDirection === "forward")) {
          const shouldLeavingViewBeRemoved = routerDirection !== "none" && leavingViewItem && enteringViewItem !== leavingViewItem;
          if (shouldLeavingViewBeRemoved) {
            leavingViewItem.mount = false;
            leavingViewItem.ionPageElement = void 0;
            leavingViewItem.ionRoute = false;
            if (usingLinearNavigation) {
              viewStacks.unmountLeavingViews(id, enteringViewItem, delta);
            }
          }
        } else if (usingLinearNavigation) {
          viewStacks.mountIntermediaryViews(id, leavingViewItem, delta);
        }
        fireLifecycle(leavingViewItem.vueComponent, leavingViewItem.vueComponentRef, LIFECYCLE_DID_LEAVE);
      } else {
        requestAnimationFrame(() => enteringEl.classList.remove("ion-page-invisible"));
      }
      fireLifecycle(enteringViewItem.vueComponent, enteringViewItem.vueComponentRef, LIFECYCLE_DID_ENTER);
      components.value = viewStacks.getChildrenToRender(id);
    };
    const setupViewItem = (matchedRouteRef2) => {
      const firstMatchedRoute = route.matched[0];
      if (!parentOutletPath) {
        parentOutletPath = firstMatchedRoute.path;
      }
      if (!matchedRouteRef2.value || matchedRouteRef2.value !== firstMatchedRoute && firstMatchedRoute.path !== parentOutletPath) {
        return;
      }
      const currentRoute = ionRouter.getCurrentRouteInfo();
      let enteringViewItem = viewStacks.findViewItemByRouteInfo(currentRoute, id);
      if (!enteringViewItem) {
        enteringViewItem = viewStacks.createViewItem(id, matchedRouteRef2.value.components.default, matchedRouteRef2.value, currentRoute);
        viewStacks.add(enteringViewItem);
      }
      if (!enteringViewItem.mount) {
        enteringViewItem.mount = true;
        enteringViewItem.registerCallback = () => {
          handlePageTransition();
          enteringViewItem.registerCallback = void 0;
        };
      } else {
        handlePageTransition();
      }
      components.value = viewStacks.getChildrenToRender(id);
    };
    if (matchedRouteRef.value) {
      setupViewItem(matchedRouteRef);
    }
    onUnmounted(() => viewStacks.clear(id));
    const registerIonPage = (viewItem, ionPageEl) => {
      const oldIonPageEl = viewItem.ionPageElement;
      viewStacks.registerIonPage(viewItem, ionPageEl);
      if (viewItem.registerCallback) {
        ionPageEl.classList.add("ion-page-invisible");
        viewItem.registerCallback();
      } else if (oldIonPageEl && !oldIonPageEl.classList.contains("ion-page-invisible")) {
        ionPageEl.classList.remove("ion-page-invisible");
      }
    };
    return {
      id,
      components,
      injectedRoute,
      ionRouterOutlet,
      registerIonPage
    };
  },
  render() {
    const { components, registerIonPage, injectedRoute } = this;
    return h$2("ion-router-outlet", { ref: "ionRouterOutlet" }, components && components.map((c) => {
      var _a, _b;
      let props = {
        ref: c.vueComponentRef,
        key: c.pathname,
        registerIonPage: (ionPageEl) => registerIonPage(c, ionPageEl)
      };
      const routePropsOption = (_b = (_a = c.matchedRoute) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.default;
      const getPropsFunctionResult = () => {
        var _a2;
        const cachedPropsResult = (_a2 = c.vueComponentData) === null || _a2 === void 0 ? void 0 : _a2.propsFunctionResult;
        if (cachedPropsResult) {
          return cachedPropsResult;
        } else {
          const propsFunctionResult = routePropsOption(injectedRoute);
          c.vueComponentData = Object.assign(Object.assign({}, c.vueComponentData), { propsFunctionResult });
          return propsFunctionResult;
        }
      };
      const routeProps = routePropsOption ? routePropsOption === true ? c.params : typeof routePropsOption === "function" ? getPropsFunctionResult() : routePropsOption : null;
      props = Object.assign(Object.assign({}, props), routeProps);
      return h$2(c.vueComponent, props);
    }));
  }
});
const IonTabButton = /* @__PURE__ */ defineComponent({
  name: "IonTabButton",
  props: {
    _getTabState: {
      type: Function,
      default: () => {
        return {};
      }
    },
    disabled: Boolean,
    download: String,
    href: String,
    rel: String,
    layout: String,
    selected: Boolean,
    tab: String,
    target: String
  },
  setup(props, { slots }) {
    defineCustomElement$5();
    const ionRouter = inject("navManager");
    const onClick = (ev) => {
      if (ev.cancelable) {
        ev.preventDefault();
      }
      const { tab, href, _getTabState } = props;
      const tabState = _getTabState();
      const tappedTab = tabState.tabs[tab] || {};
      const originalHref = tappedTab.originalHref || href;
      const currentHref = tappedTab.currentHref || href;
      const prevActiveTab = tabState.activeTab;
      if (prevActiveTab === tab) {
        if (originalHref !== currentHref) {
          ionRouter.resetTab(tab);
        }
      } else {
        ionRouter.changeTab(tab, currentHref);
      }
    };
    return () => {
      return h$2("ion-tab-button", Object.assign({ onClick }, props), slots.default && slots.default());
    };
  }
});
const WILL_CHANGE = "ionTabsWillChange";
const DID_CHANGE = "ionTabsDidChange";
const IonTabs = /* @__PURE__ */ defineComponent({
  name: "IonTabs",
  emits: [WILL_CHANGE, DID_CHANGE],
  render() {
    var _a;
    const { $slots: slots, $emit } = this;
    const slottedContent = slots.default && slots.default();
    let routerOutlet;
    if (slottedContent && slottedContent.length > 0) {
      routerOutlet = slottedContent.find((child) => child.type && child.type.name === "IonRouterOutlet");
    }
    if (!routerOutlet) {
      throw new Error("IonTabs must contain an IonRouterOutlet. See https://ionicframework.com/docs/vue/navigation#working-with-tabs for more information.");
    }
    let childrenToRender = [
      h$2("div", {
        class: "tabs-inner",
        style: {
          position: "relative",
          flex: "1",
          contain: "layout size style"
        }
      }, routerOutlet)
    ];
    if (slottedContent && slottedContent.length > 0) {
      const filteredContent = slottedContent.filter((child) => !child.type || child.type && child.type.name !== "IonRouterOutlet");
      const slottedTabBar = filteredContent.find((child) => child.type && child.type.name === "IonTabBar");
      const hasTopSlotTabBar = slottedTabBar && ((_a = slottedTabBar.props) === null || _a === void 0 ? void 0 : _a.slot) === "top";
      if (slottedTabBar) {
        if (!slottedTabBar.props) {
          slottedTabBar.props = {};
        }
        slottedTabBar.props._tabsWillChange = (tab) => $emit(WILL_CHANGE, { tab });
        slottedTabBar.props._tabsDidChange = (tab) => $emit(DID_CHANGE, { tab });
      }
      if (hasTopSlotTabBar) {
        childrenToRender = [...filteredContent, ...childrenToRender];
      } else {
        childrenToRender = [...childrenToRender, ...filteredContent];
      }
    }
    return h$2("ion-tabs", {
      style: {
        display: "flex",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        "flex-direction": "column",
        width: "100%",
        height: "100%",
        contain: "layout size style",
        "z-index": "0"
      }
    }, childrenToRender);
  }
});
const isTabButton = (child) => {
  var _a;
  return ((_a = child.type) === null || _a === void 0 ? void 0 : _a.name) === "IonTabButton";
};
const getTabs = (nodes) => {
  let tabs = [];
  nodes.forEach((node) => {
    if (isTabButton(node)) {
      tabs.push(node);
    } else if (Array.isArray(node.children) && node.children.length > 1) {
      const childTabs = getTabs(node.children);
      tabs = [...tabs, ...childTabs];
    }
  });
  return tabs;
};
const IonTabBar = /* @__PURE__ */ defineComponent({
  name: "IonTabBar",
  props: {
    /* eslint-disable @typescript-eslint/no-empty-function */
    _tabsWillChange: { type: Function, default: () => {
    } },
    _tabsDidChange: { type: Function, default: () => {
    } }
    /* eslint-enable @typescript-eslint/no-empty-function */
  },
  data() {
    return {
      tabState: {
        activeTab: void 0,
        tabs: {}
      },
      tabVnodes: []
    };
  },
  updated() {
    this.setupTabState(inject("navManager"));
  },
  methods: {
    setupTabState(ionRouter) {
      const tabState = this.$data.tabState;
      const currentInstance = getCurrentInstance();
      const tabs = this.$data.tabVnodes = getTabs(currentInstance.subTree.children || []);
      tabs.forEach((child) => {
        tabState.tabs[child.props.tab] = {
          originalHref: child.props.href,
          currentHref: child.props.href,
          ref: child
        };
        child.component.props._getTabState = () => tabState;
      });
      this.checkActiveTab(ionRouter);
    },
    checkActiveTab(ionRouter) {
      const currentRoute = ionRouter.getCurrentRouteInfo();
      const childNodes = this.$data.tabVnodes;
      const { tabs, activeTab: prevActiveTab } = this.$data.tabState;
      const tabState = this.$data.tabState;
      const tabKeys = Object.keys(tabs);
      const activeTab = tabKeys.find((key) => {
        const href = tabs[key].originalHref;
        return currentRoute.pathname.startsWith(href);
      });
      childNodes.forEach((child) => {
        const tab = tabs[child.props.tab];
        if (!tab || tab.originalHref !== child.props.href) {
          tabs[child.props.tab] = {
            originalHref: child.props.href,
            currentHref: child.props.href,
            ref: child
          };
        }
      });
      if (activeTab && prevActiveTab) {
        const prevHref = this.$data.tabState.tabs[prevActiveTab].currentHref;
        if (activeTab !== prevActiveTab || prevHref !== currentRoute.pathname) {
          const search = currentRoute.search ? `?${currentRoute.search}` : "";
          tabs[activeTab] = Object.assign(Object.assign({}, tabs[activeTab]), { currentHref: currentRoute.pathname + search });
        }
        if (currentRoute.routerAction === "pop" && activeTab !== prevActiveTab) {
          tabs[prevActiveTab] = Object.assign(Object.assign({}, tabs[prevActiveTab]), { currentHref: tabs[prevActiveTab].originalHref });
        }
      }
      const activeChild = childNodes.find((child) => {
        var _a;
        return isTabButton(child) && ((_a = child.props) === null || _a === void 0 ? void 0 : _a.tab) === activeTab;
      });
      const tabBar = this.$refs.ionTabBar;
      const tabDidChange = activeTab !== prevActiveTab;
      if (tabBar) {
        if (activeChild) {
          tabDidChange && this.$props._tabsWillChange(activeTab);
          ionRouter.handleSetCurrentTab(activeTab);
          tabBar.selectedTab = tabState.activeTab = activeTab;
          tabDidChange && this.$props._tabsDidChange(activeTab);
        } else {
          tabBar.selectedTab = tabState.activeTab = "";
        }
      }
    }
  },
  mounted() {
    const ionRouter = inject("navManager");
    this.setupTabState(ionRouter);
    ionRouter.registerHistoryChangeListener(() => this.checkActiveTab(ionRouter));
  },
  setup(_, { slots }) {
    defineCustomElement$4();
    return () => {
      return h$2("ion-tab-bar", { ref: "ionTabBar" }, slots.default && slots.default());
    };
  }
});
const userComponents = shallowRef([]);
const IonApp = /* @__PURE__ */ defineComponent((_, { attrs, slots }) => {
  defineCustomElement$3();
  return () => {
    return h$2("ion-app", Object.assign({}, attrs), [slots.default && slots.default(), ...userComponents.value]);
  };
});
IonApp.name = "IonApp";
const addTeleportedUserComponent = (component) => {
  userComponents.value = [...userComponents.value, component];
};
const removeTeleportedUserComponent = (component) => {
  userComponents.value = userComponents.value.filter((cmp) => cmp !== component);
};
const VueDelegate = (addFn = addTeleportedUserComponent, removeFn = removeTeleportedUserComponent) => {
  const refMap = /* @__PURE__ */ new WeakMap();
  const attachViewToDom = (parentElement, componentOrTagName, componentProps = {}, classes) => {
    const div = document.createElement("div");
    classes && div.classList.add(...classes);
    parentElement.appendChild(div);
    const hostComponent = h$2(Teleport, { to: div }, h$2(componentOrTagName, Object.assign({}, componentProps)));
    refMap.set(div, hostComponent);
    addFn(hostComponent);
    return Promise.resolve(div);
  };
  const removeViewFromDom = (_container, component) => {
    const hostComponent = refMap.get(component);
    hostComponent && removeFn(hostComponent);
    return Promise.resolve();
  };
  return { attachViewToDom, removeViewFromDom };
};
const IonNav = /* @__PURE__ */ defineComponent(() => {
  defineCustomElement$e();
  const views = shallowRef([]);
  const addView = (component) => views.value = [...views.value, component];
  const removeView = (component) => views.value = views.value.filter((cmp) => cmp !== component);
  const delegate = VueDelegate(addView, removeView);
  return () => {
    return h$2("ion-nav", { delegate }, views.value);
  };
});
IonNav.name = "IonNav";
const IonIcon = /* @__PURE__ */ defineComponent({
  name: "IonIcon",
  props: {
    color: String,
    flipRtl: Boolean,
    icon: String,
    ios: String,
    lazy: String,
    md: String,
    mode: String,
    name: String,
    size: String,
    src: String
  },
  setup(props, { slots }) {
    defineCustomElement$2();
    return () => {
      var _a, _b;
      const { icon, ios, md, mode } = props;
      let iconToUse;
      const config2 = getConfig();
      const iconMode = mode || (config2 === null || config2 === void 0 ? void 0 : config2.get("mode"));
      if (ios || md) {
        if (iconMode === "ios") {
          iconToUse = (_a = ios !== null && ios !== void 0 ? ios : md) !== null && _a !== void 0 ? _a : icon;
        } else {
          iconToUse = (_b = md !== null && md !== void 0 ? md : ios) !== null && _b !== void 0 ? _b : icon;
        }
      } else {
        iconToUse = icon;
      }
      return h$2("ion-icon", Object.assign(Object.assign({}, props), { icon: iconToUse }), slots);
    };
  }
});
const EMPTY_PROP$1 = Symbol();
const DEFAULT_EMPTY_PROP$1 = { default: EMPTY_PROP$1 };
const defineOverlayContainer = (name, defineCustomElement2, componentProps = [], hasDelegateHost, controller) => {
  const createControllerComponent = () => {
    return /* @__PURE__ */ defineComponent((props, { slots, emit }) => {
      const eventListeners = [
        { componentEv: `${name}-will-present`, frameworkEv: "willPresent" },
        { componentEv: `${name}-did-present`, frameworkEv: "didPresent" },
        { componentEv: `${name}-will-dismiss`, frameworkEv: "willDismiss" },
        { componentEv: `${name}-did-dismiss`, frameworkEv: "didDismiss" }
      ];
      if (defineCustomElement2 !== void 0) {
        defineCustomElement2();
      }
      const overlay = ref();
      const onVnodeMounted = async () => {
        const isOpen = props.isOpen;
        isOpen && await present2(props);
      };
      const onVnodeUpdated = async (node, prevNode) => {
        const isOpen = node.props.isOpen;
        const prevIsOpen = prevNode.props.isOpen;
        if (isOpen === prevIsOpen)
          return;
        if (isOpen) {
          await present2(props);
        } else {
          await dismiss2();
        }
      };
      const onVnodeBeforeUnmount = async () => {
        await dismiss2();
      };
      const dismiss2 = async () => {
        if (!overlay.value)
          return;
        await overlay.value;
        overlay.value = overlay.value.dismiss();
        await overlay.value;
        overlay.value = void 0;
      };
      const present2 = async (props2) => {
        var _a;
        if (overlay.value) {
          await overlay.value;
        }
        if ((_a = overlay.value) === null || _a === void 0 ? void 0 : _a.present) {
          await overlay.value.present();
          return;
        }
        let restOfProps = {};
        for (const key in props2) {
          const value = props2[key];
          if (props2.hasOwnProperty(key) && value !== EMPTY_PROP$1) {
            restOfProps[key] = value;
          }
        }
        delete restOfProps.onWillPresent;
        delete restOfProps.onDidPresent;
        delete restOfProps.onWillDismiss;
        delete restOfProps.onDidDismiss;
        const component = slots.default && slots.default()[0];
        overlay.value = controller.create(Object.assign(Object.assign({}, restOfProps), { component }));
        overlay.value = await overlay.value;
        eventListeners.forEach((eventListener) => {
          overlay.value.addEventListener(eventListener.componentEv, () => {
            emit(eventListener.frameworkEv);
          });
        });
        await overlay.value.present();
      };
      return () => {
        return h$2("div", {
          style: { display: "none" },
          onVnodeMounted,
          onVnodeUpdated,
          onVnodeBeforeUnmount,
          isOpen: props.isOpen === true
        });
      };
    });
  };
  const createInlineComponent = () => {
    return /* @__PURE__ */ defineComponent((props, { slots }) => {
      if (defineCustomElement2 !== void 0) {
        defineCustomElement2();
      }
      const isOpen = ref(false);
      const elementRef = ref();
      return () => {
        let restOfProps = {};
        for (const key in props) {
          const value = props[key];
          if (props.hasOwnProperty(key) && value !== EMPTY_PROP$1) {
            restOfProps[key] = value;
          }
        }
        const renderChildren = () => {
          if (hasDelegateHost) {
            return h$2("div", { className: "ion-delegate-host ion-page" }, slots);
          }
          return slots;
        };
        return h$2(name, Object.assign(Object.assign({}, restOfProps), { ref: elementRef }), isOpen.value || restOfProps.keepContentsMounted ? renderChildren() : void 0);
      };
    });
  };
  const Container = controller !== void 0 ? createControllerComponent() : createInlineComponent();
  Container.name = name;
  Container.props = {
    "isOpen": DEFAULT_EMPTY_PROP$1
  };
  componentProps.forEach((componentProp) => {
    Container.props[componentProp] = DEFAULT_EMPTY_PROP$1;
  });
  if (controller !== void 0) {
    Container.emits = ["willPresent", "didPresent", "willDismiss", "didDismiss"];
  }
  return Container;
};
const IonModal = /* @__PURE__ */ defineOverlayContainer("ion-modal", defineCustomElement, ["animated", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "enterAnimation", "handle", "handleBehavior", "htmlAttributes", "initialBreakpoint", "isOpen", "keepContentsMounted", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "trigger"], true);
const ionicVueConfig = { "mode": "ios" };
const ionic_JZxaXwxCQa = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(IonicVue, ionicVueConfig);
});
const _plugins = [
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  router_h7T2ZmMnVl,
  ionic_JZxaXwxCQa
];
const app_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ion_app = IonApp;
  const _component_ion_router_outlet = IonRouterOutlet;
  _push(ssrRenderComponent(_component_ion_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ion_router_outlet, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ion_router_outlet)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/error-component-9878bce8.js").then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/island-renderer-8b0a9e87.js").then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  IonCardContent as A,
  IonToggle as B,
  useIonRouter as C,
  IonContent as D,
  IonItem as E,
  isRTL$1 as F,
  createGesture as G,
  clamp as H,
  IonToolbar as I,
  createAnimation as J,
  getIonPageElement as K,
  now$1 as L,
  pointerCoord as M,
  readTask as N,
  findClosestIonContent as O,
  componentOnReady as P,
  writeTask$1 as Q,
  scrollToTop as R,
  Keyboard as S,
  addEventListener$1 as T,
  removeEventListener as U,
  KeyboardResize as V,
  raf as W,
  useRouter as X,
  navigateTo as Y,
  useHead as Z,
  _export_sfc as _,
  IonTabs as a,
  IonRouterOutlet as b,
  createError as c,
  IonTabBar as d,
  entry$1 as default,
  IonTabButton as e,
  IonIcon as f,
  IonLabel as g,
  IonPage as h,
  IonHeader as i,
  IonButtons as j,
  IonButton as k,
  IonCard as l,
  IonCardHeader as m,
  IonCardSubtitle as n,
  IonCardTitle as o,
  IonCol as p,
  IonGrid as q,
  IonRow as r,
  IonSegment as s,
  IonSegmentButton as t,
  IonList as u,
  IonAvatar as v,
  IonModal as w,
  IonFooter as x,
  IonChip as y,
  IonTitle as z
};
//# sourceMappingURL=server.mjs.map
