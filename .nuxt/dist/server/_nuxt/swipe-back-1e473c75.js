import { A as isRTL, B as clamp } from "../server.mjs";
import { createGesture } from "./index2-cf5f2b6f.js";
import "vue";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "klona";
import "vue/server-renderer";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = isRTL(el);
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
    rtl = isRTL(el);
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
export {
  createSwipeBackGesture
};
//# sourceMappingURL=swipe-back-1e473c75.js.map
