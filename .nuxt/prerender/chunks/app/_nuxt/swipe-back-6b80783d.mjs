import { E as isRTL$1, F as createGesture, G as clamp } from '../server.mjs';
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
const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = isRTL$1(el);
  const isAtEdge = (detail) => {
    const threshold = 50;
    const { startX } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = (detail) => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = (detail) => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = (detail) => {
    rtl = isRTL$1(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = (detail) => {
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = (detail) => {
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : clamp(0, stepValue, 0.9999), realDur);
  };
  return createGesture({
    el,
    gestureName: "goback-swipe",
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};

export { createSwipeBackGesture };
//# sourceMappingURL=swipe-back-6b80783d.mjs.map
