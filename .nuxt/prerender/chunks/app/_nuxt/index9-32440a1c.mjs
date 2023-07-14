import { M as now$1, N as pointerCoord } from '../server.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/mac/vyreApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/mac/vyreApp/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mac/vyreApp/node_modules/radix3/dist/index.mjs';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const startTapClick = (config) => {
  let lastTouch = -MOUSE_WAIT * 10;
  let lastActivated = 0;
  let activatableEle;
  let activeRipple;
  let activeDefer;
  const useRippleEffect = config.getBoolean("animated", true) && config.getBoolean("rippleEffect", true);
  const clearDefers = /* @__PURE__ */ new WeakMap();
  const onTouchStart = (ev) => {
    lastTouch = now$1(ev);
    pointerDown(ev);
  };
  const onTouchEnd = (ev) => {
    lastTouch = now$1(ev);
    pointerUp(ev);
  };
  const onMouseDown = (ev) => {
    if (ev.button === 2) {
      return;
    }
    const t = now$1(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerDown(ev);
    }
  };
  const onMouseUp = (ev) => {
    const t = now$1(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerUp(ev);
    }
  };
  const cancelActive = () => {
    if (activeDefer)
      clearTimeout(activeDefer);
    activeDefer = void 0;
    if (activatableEle) {
      removeActivated(false);
      activatableEle = void 0;
    }
  };
  const pointerDown = (ev) => {
    if (activatableEle) {
      return;
    }
    setActivatedElement(getActivatableTarget(ev), ev);
  };
  const pointerUp = (ev) => {
    setActivatedElement(void 0, ev);
  };
  const setActivatedElement = (el, ev) => {
    if (el && el === activatableEle) {
      return;
    }
    if (activeDefer)
      clearTimeout(activeDefer);
    activeDefer = void 0;
    const { x, y } = pointerCoord(ev);
    if (activatableEle) {
      if (clearDefers.has(activatableEle)) {
        throw new Error("internal error");
      }
      if (!activatableEle.classList.contains(ACTIVATED)) {
        addActivated(activatableEle, x, y);
      }
      removeActivated(true);
    }
    if (el) {
      const deferId = clearDefers.get(el);
      if (deferId) {
        clearTimeout(deferId);
        clearDefers.delete(el);
      }
      el.classList.remove(ACTIVATED);
      const callback = () => {
        addActivated(el, x, y);
        activeDefer = void 0;
      };
      if (isInstant(el)) {
        callback();
      } else {
        activeDefer = setTimeout(callback, ADD_ACTIVATED_DEFERS);
      }
    }
    activatableEle = el;
  };
  const addActivated = (el, x, y) => {
    lastActivated = Date.now();
    el.classList.add(ACTIVATED);
    if (!useRippleEffect)
      return;
    const rippleEffect = getRippleEffect(el);
    if (rippleEffect !== null) {
      removeRipple();
      activeRipple = rippleEffect.addRipple(x, y);
    }
  };
  const removeRipple = () => {
    if (activeRipple !== void 0) {
      activeRipple.then((remove) => remove());
      activeRipple = void 0;
    }
  };
  const removeActivated = (smooth) => {
    removeRipple();
    const active = activatableEle;
    if (!active) {
      return;
    }
    const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
    if (smooth && time > 0 && !isInstant(active)) {
      const deferId = setTimeout(() => {
        active.classList.remove(ACTIVATED);
        clearDefers.delete(active);
      }, CLEAR_STATE_DEFERS);
      clearDefers.set(active, deferId);
    } else {
      active.classList.remove(ACTIVATED);
    }
  };
  const doc = document;
  doc.addEventListener("ionGestureCaptured", cancelActive);
  doc.addEventListener("touchstart", onTouchStart, true);
  doc.addEventListener("touchcancel", onTouchEnd, true);
  doc.addEventListener("touchend", onTouchEnd, true);
  doc.addEventListener("pointercancel", cancelActive, true);
  doc.addEventListener("mousedown", onMouseDown, true);
  doc.addEventListener("mouseup", onMouseUp, true);
};
const getActivatableTarget = (ev) => {
  if (ev.composedPath !== void 0) {
    const path = ev.composedPath();
    for (let i = 0; i < path.length - 2; i++) {
      const el = path[i];
      if (!(el instanceof ShadowRoot) && el.classList.contains("ion-activatable")) {
        return el;
      }
    }
  } else {
    return ev.target.closest(".ion-activatable");
  }
};
const isInstant = (el) => {
  return el.classList.contains("ion-activatable-instant");
};
const getRippleEffect = (el) => {
  if (el.shadowRoot) {
    const ripple = el.shadowRoot.querySelector("ion-ripple-effect");
    if (ripple) {
      return ripple;
    }
  }
  return el.querySelector("ion-ripple-effect");
};
const ACTIVATED = "ion-activated";
const ADD_ACTIVATED_DEFERS = 100;
const CLEAR_STATE_DEFERS = 150;
const MOUSE_WAIT = 2500;

export { startTapClick };
//# sourceMappingURL=index9-32440a1c.mjs.map
