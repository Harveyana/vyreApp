import { N as readTask, O as findClosestIonContent, P as componentOnReady, Q as writeTask, R as scrollToTop } from "../server.mjs";
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
const startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-b744b558.js.map
