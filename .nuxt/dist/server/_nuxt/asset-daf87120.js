import { u as useIonRouter, b as IonCard, m as IonAvatar, d as IonCardTitle, e as IonCardSubtitle, g as IonIcon } from "../server.mjs";
import { q as arrowForwardCircle } from "./index-d43f4fcb.js";
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "asset",
  __ssrInlineRender: true,
  props: {
    name: {},
    symbol: {},
    price: {},
    amount: {},
    img: {}
  },
  setup(__props) {
    const props = __props;
    const ionRouter = useIonRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_card = IonCard;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_icon = IonIcon;
      _push(ssrRenderComponent(_component_ion_card, mergeProps({
        class: "asset",
        style: {},
        onClick: ($event) => unref(ionRouter).push(`/assetpage/${props.name}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_card, {
              class: "subAsset",
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "z-index": "99" })}" data-v-5fc44548${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "0.8", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.img)} data-v-5fc44548${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "asset img",
                            src: props.img
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "40%", "height": "100%", "position": "relative", "right": "24%" })}" data-v-5fc44548${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.symbol)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.symbol), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_subtitle, {
                    class: "title",
                    style: { "font-size": "50%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "80%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.amount)} <span style="${ssrRenderStyle({ "font-size": "60%" })}" data-v-5fc44548${_scopeId3}>${ssrInterpolate(props.symbol)}</span>`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.amount) + " ", 1),
                          createVNode("span", { style: { "font-size": "60%" } }, toDisplayString(props.symbol), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-5fc44548${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    icon: "ioniconsArrowForwardCircle" in _ctx ? _ctx.ioniconsArrowForwardCircle : unref(arrowForwardCircle),
                    style: { "font-size": "250%", "color": "#1d3160" },
                    onClick: () => {
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "z-index": "99" } }, [
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "0.8", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "asset img",
                            src: props.img
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "40%", "height": "100%", "position": "relative", "right": "24%" } }, [
                      createVNode(_component_ion_card_title, {
                        class: "title",
                        style: { "font-size": "100%" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.symbol), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, {
                        class: "title",
                        style: { "font-size": "50%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.name), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_title, {
                        class: "title",
                        style: { "font-size": "80%" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.amount) + " ", 1),
                          createVNode("span", { style: { "font-size": "60%" } }, toDisplayString(props.symbol), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsArrowForwardCircle" in _ctx ? _ctx.ioniconsArrowForwardCircle : unref(arrowForwardCircle),
                        style: { "font-size": "250%", "color": "#1d3160" },
                        onClick: () => {
                        }
                      }, null, 8, ["icon", "onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_card, {
                class: "subAsset",
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "z-index": "99" } }, [
                    createVNode(_component_ion_avatar, {
                      slot: "start",
                      style: { "scale": "0.8", "border": "3px solid #1B1D30" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "asset img",
                          src: props.img
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "40%", "height": "100%", "position": "relative", "right": "24%" } }, [
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "100%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.symbol), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, {
                      class: "title",
                      style: { "font-size": "50%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "80%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.amount) + " ", 1),
                        createVNode("span", { style: { "font-size": "60%" } }, toDisplayString(props.symbol), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                    createVNode(_component_ion_icon, {
                      icon: "ioniconsArrowForwardCircle" in _ctx ? _ctx.ioniconsArrowForwardCircle : unref(arrowForwardCircle),
                      style: { "font-size": "250%", "color": "#1d3160" },
                      onClick: () => {
                      }
                    }, null, 8, ["icon", "onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const asset_vue_vue_type_style_index_0_scoped_5fc44548_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/asset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5fc44548"]]);
export {
  __nuxt_component_17 as _
};
//# sourceMappingURL=asset-daf87120.js.map
