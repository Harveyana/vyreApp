import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as _export_sfc, p as useRoute, b as IonCard, d as IonCardTitle, e as IonCardSubtitle, m as IonAvatar, I as IonModal, a as IonContent, g as IonIcon, h as IonLabel, n as IonInput, o as IonButton, i as IonList, j as IonItem, k as IonSelect, l as IonSelectOption, q as IonPage, r as IonHeader, s as IonToolbar, t as IonCardHeader, B as IonSearchbar, v as IonFooter } from '../server.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_14 } from './tabs-bca7cd7f.mjs';
import { _ as _sfc_main$4 } from './addAsset-11c656a7.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, ref, openBlock, createBlock, Fragment, renderList, createCommentVNode, resolveComponent } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import { A as closeCircleOutline, s as swapVerticalSharp, i as informationCircle, b as searchCircle, B as filterCircle, h as happy, m as mail, a as addOutline } from './index-d43f4fcb.mjs';
import { _ as _imports_1 } from './nigeria-00f4c107.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/vyreApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/devalue/index.js';
import 'file:///Users/mac/vyreApp/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/mac/vyreApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mac/vyreApp/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-router/dist/vue-router.node.mjs';
import './useDarkMode-386da5e9.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "order",
  __ssrInlineRender: true,
  props: {
    base: {},
    quote: {},
    quantity: {},
    orderType: {},
    processPercentage: {},
    baseImgUrl: {},
    quoteImgUrl: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_avatar = IonAvatar;
      _push(ssrRenderComponent(_component_ion_card, mergeProps({
        class: "asset",
        style: {}
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_card, {
              class: "subAsset",
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" })}" data-v-6b20ed0c${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.orderType)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.orderType), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_subtitle, {
                    class: "title",
                    style: { "font-size": "60%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.base)}/${ssrInterpolate(props.quote)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.base) + "/" + toDisplayString(props.quote), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-6b20ed0c${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "0.55", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.baseImgUrl)} data-v-6b20ed0c${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "asset img",
                            src: props.baseImgUrl
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "0.55", "position": "relative", "right": "27%", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.quoteImgUrl)} data-v-6b20ed0c${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "asset img",
                            src: props.quoteImgUrl
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" } }, [
                      createVNode(_component_ion_card_title, {
                        class: "title",
                        style: { "font-size": "100%" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.orderType), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, {
                        class: "title",
                        style: { "font-size": "60%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.base) + "/" + toDisplayString(props.quote), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "0.55", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "asset img",
                            src: props.baseImgUrl
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "0.55", "position": "relative", "right": "27%", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "asset img",
                            src: props.quoteImgUrl
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, {
              class: "subAsset",
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none", "margin-top": "-2%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.quantity)} <span style="${ssrRenderStyle({ "font-size": "50%" })}" data-v-6b20ed0c${_scopeId3}>${ssrInterpolate(props.quote)}</span>`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.quantity) + " ", 1),
                          createVNode("span", { style: { "font-size": "50%" } }, toDisplayString(props.quote), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_subtitle, { style: { "font-size": "100%", "color": "green" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.processPercentage)}%`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.processPercentage) + "%", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "100%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.quantity) + " ", 1),
                        createVNode("span", { style: { "font-size": "50%" } }, toDisplayString(props.quote), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, { style: { "font-size": "100%", "color": "green" } }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.processPercentage) + "%", 1)
                      ]),
                      _: 1
                    })
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
                  createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" } }, [
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "100%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.orderType), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, {
                      class: "title",
                      style: { "font-size": "60%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.base) + "/" + toDisplayString(props.quote), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                    createVNode(_component_ion_avatar, {
                      slot: "start",
                      style: { "scale": "0.55", "border": "3px solid #1B1D30" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "asset img",
                          src: props.baseImgUrl
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_avatar, {
                      slot: "start",
                      style: { "scale": "0.55", "position": "relative", "right": "27%", "border": "3px solid #1B1D30" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "asset img",
                          src: props.quoteImgUrl
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, {
                class: "subAsset",
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none", "margin-top": "-2%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "100%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.quantity) + " ", 1),
                      createVNode("span", { style: { "font-size": "50%" } }, toDisplayString(props.quote), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card_subtitle, { style: { "font-size": "100%", "color": "green" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.processPercentage) + "%", 1)
                    ]),
                    _: 1
                  })
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/order.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6b20ed0c"]]);
const _imports_0 = "" + publicAssetsURL("BTC.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "orderDetails",
  __ssrInlineRender: true,
  props: {
    isOrderDetailsModalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_content = IonContent;
      const _component_ion_icon = IonIcon;
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_label = IonLabel;
      const _component_ion_input = IonInput;
      const _component_ion_button = IonButton;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isOrderDetailsModalOpen,
        "initial-breakpoint": 0.65,
        breakpoints: [0, 0.4, 0.5, 0.65, 0.75],
        "backdrop-dismiss": false,
        "backdrop-breakpoint": 0,
        style: { "--border-radius": "32px" },
        onDidDismiss: ($event) => _ctx.$emit("closeModal")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, {
              class: "ion-padding content",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "flex-end", "justify-content": "end", "margin-bottom": "2%" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    icon: "ioniconsCloseCircleOutline" in _ctx ? _ctx.ioniconsCloseCircleOutline : unref(closeCircleOutline),
                    style: { "font-size": "300%", "margin-right": "4%" },
                    onClick: ($event) => _ctx.$emit("closeModal")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Buy`);
                            } else {
                              return [
                                createTextVNode("Buy")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Bitcoin / Naira `);
                            } else {
                              return [
                                createTextVNode(" Bitcoin / Naira ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Buy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Bitcoin / Naira ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", _imports_0)} data-v-5e795802${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "asset img",
                            src: _imports_0
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", _imports_1)} data-v-5e795802${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "asset img",
                            src: _imports_1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "7%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" })}" data-v-5e795802${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You Send`);
                            } else {
                              return [
                                createTextVNode("You Send")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_input, {
                          label: "",
                          type: "number",
                          placeholder: "000",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`NGN`);
                            } else {
                              return [
                                createTextVNode("NGN")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" })}" data-v-5e795802${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You Get`);
                            } else {
                              return [
                                createTextVNode("You Get")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_input, {
                          label: "",
                          readonly: true,
                          type: "number",
                          placeholder: "00",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`BTC`);
                            } else {
                              return [
                                createTextVNode("BTC")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                            createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                              default: withCtx(() => [
                                createTextVNode("You Send")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_input, {
                              label: "",
                              type: "number",
                              placeholder: "000",
                              style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                            }),
                            createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                              default: withCtx(() => [
                                createTextVNode("NGN")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_ion_icon, {
                            color: "secondary",
                            icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                            style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                          }, null, 8, ["icon"]),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                            createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                              default: withCtx(() => [
                                createTextVNode("You Get")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_input, {
                              label: "",
                              readonly: true,
                              type: "number",
                              placeholder: "00",
                              style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                            }),
                            createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                              default: withCtx(() => [
                                createTextVNode("BTC")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_button, {
                    fill: "outline",
                    style: { "width": "80%", "height": "50px", "font-size": "130%" },
                    onClick: ($event) => _ctx.$emit("closeModal")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Confirm`);
                      } else {
                        return [
                          createTextVNode("Confirm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "flex-end", "justify-content": "end", "margin-bottom": "2%" } }, [
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsCloseCircleOutline" in _ctx ? _ctx.ioniconsCloseCircleOutline : unref(closeCircleOutline),
                        style: { "font-size": "300%", "margin-right": "4%" },
                        onClick: ($event) => _ctx.$emit("closeModal")
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                      createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Buy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Bitcoin / Naira ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { style: { "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              alt: "asset img",
                              src: _imports_0
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              alt: "asset img",
                              src: _imports_1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "7%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                          createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                            default: withCtx(() => [
                              createTextVNode("You Send")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_input, {
                            label: "",
                            type: "number",
                            placeholder: "000",
                            style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                          }),
                          createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                            default: withCtx(() => [
                              createTextVNode("NGN")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                        }, null, 8, ["icon"]),
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                          createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                            default: withCtx(() => [
                              createTextVNode("You Get")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_input, {
                            label: "",
                            readonly: true,
                            type: "number",
                            placeholder: "00",
                            style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                          }),
                          createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                            default: withCtx(() => [
                              createTextVNode("BTC")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" } }, [
                      createVNode(_component_ion_button, {
                        fill: "outline",
                        style: { "width": "80%", "height": "50px", "font-size": "130%" },
                        onClick: ($event) => _ctx.$emit("closeModal")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Confirm")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_content, {
                class: "ion-padding content",
                style: {}
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "flex-end", "justify-content": "end", "margin-bottom": "2%" } }, [
                    createVNode(_component_ion_icon, {
                      icon: "ioniconsCloseCircleOutline" in _ctx ? _ctx.ioniconsCloseCircleOutline : unref(closeCircleOutline),
                      style: { "font-size": "300%", "margin-right": "4%" },
                      onClick: ($event) => _ctx.$emit("closeModal")
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Buy")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Bitcoin / Naira ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "asset img",
                            src: _imports_0
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "asset img",
                            src: _imports_1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "7%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                        createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                          default: withCtx(() => [
                            createTextVNode("You Send")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_input, {
                          label: "",
                          type: "number",
                          placeholder: "000",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                        }),
                        createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                          default: withCtx(() => [
                            createTextVNode("NGN")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_ion_icon, {
                        color: "secondary",
                        icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                        style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                      }, null, 8, ["icon"]),
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                        createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                          default: withCtx(() => [
                            createTextVNode("You Get")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_input, {
                          label: "",
                          readonly: true,
                          type: "number",
                          placeholder: "00",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                        }),
                        createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                          default: withCtx(() => [
                            createTextVNode("BTC")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" } }, [
                    createVNode(_component_ion_button, {
                      fill: "outline",
                      style: { "width": "80%", "height": "50px", "font-size": "130%" },
                      onClick: ($event) => _ctx.$emit("closeModal")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Confirm")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/orderDetails.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5e795802"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "newOrder",
  __ssrInlineRender: true,
  props: {
    isNewOrderModalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const baseImgUrl = ref("");
    const quoteImgUrl = ref("");
    const base = ref("");
    const quote = ref("");
    const pair = ref("");
    const orderType = ref("Buy");
    const setOrder = (newOrder) => {
      baseImgUrl.value = newOrder.baseImgUrl;
      quoteImgUrl.value = newOrder.quoteImgUrl;
      base.value = newOrder.base;
      quote.value = newOrder.quote;
      pair.value = newOrder.name;
    };
    const setOrderType = (type) => {
      orderType.value = type;
    };
    const pairs = [
      {
        name: "Bitcoin/Naira",
        base: "BTC",
        quote: "NGN",
        baseImgUrl: "/BTC.svg",
        quoteImgUrl: "/nigeria.svg"
      },
      {
        name: "Bitcoin/Cedis",
        base: "BTC",
        quote: "GHS",
        baseImgUrl: "/BTC.svg",
        quoteImgUrl: "/ghana.svg"
      },
      {
        name: "Etheruem/Naira",
        base: "ETH",
        quote: "NGN",
        baseImgUrl: "/ETH.svg",
        quoteImgUrl: "/nigeria.svg"
      },
      {
        name: "Etheruem/Cedis",
        base: "ETH",
        quote: "GHS",
        baseImgUrl: "/ETH.svg",
        quoteImgUrl: "/ghana.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_content = IonContent;
      const _component_ion_label = IonLabel;
      const _component_ion_icon = IonIcon;
      const _component_ion_list = IonList;
      const _component_ion_item = IonItem;
      const _component_ion_select = IonSelect;
      const _component_ion_select_option = IonSelectOption;
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_input = IonInput;
      const _component_ion_button = IonButton;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isNewOrderModalOpen,
        "initial-breakpoint": 0.85,
        breakpoints: [0, 0.4, 0.5, 0.65, 0.75, 0.85],
        "backdrop-dismiss": false,
        "backdrop-breakpoint": 0,
        style: { "--border-radius": "32px" },
        onDidDismiss: ($event) => _ctx.$emit("closeModal")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, {
              class: "ion-padding content",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_label, { style: { "font-size": "190%", "color": "black", "font-weight": "bold" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`New Order`);
                      } else {
                        return [
                          createTextVNode("New Order")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    icon: "ioniconsInformationCircle" in _ctx ? _ctx.ioniconsInformationCircle : unref(informationCircle),
                    style: { "font-size": "200%", "position": "relative", "left": "45%" },
                    onClick: () => {
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "action-sheet",
                                placeholder: "Select Pair",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrder($event.detail.value)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(pairs, (pair2, index) => {
                                      _push6(ssrRenderComponent(_component_ion_select_option, {
                                        value: pair2,
                                        key: index
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(pair2.base)}/${ssrInterpolate(pair2.quote)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                        return createVNode(_component_ion_select_option, {
                                          value: pair2,
                                          key: index
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_select, {
                                  "aria-label": "Fruit",
                                  interface: "action-sheet",
                                  placeholder: "Select Pair",
                                  style: { "font-size": "120%" },
                                  onIonChange: ($event) => setOrder($event.detail.value)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                      return createVNode(_component_ion_select_option, {
                                        value: pair2,
                                        key: index
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }, 8, ["onIonChange"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "action-sheet",
                                placeholder: "Select Pair",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrder($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                    return createVNode(_component_ion_select_option, {
                                      value: pair2,
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "popover",
                                placeholder: "Order type",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrderType($event.detail.value)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_select_option, { value: "Buy" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`BUY`);
                                        } else {
                                          return [
                                            createTextVNode("BUY")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_select_option, { value: "Sell" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`SELL`);
                                        } else {
                                          return [
                                            createTextVNode("SELL")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_select_option, { value: "Buy" }, {
                                        default: withCtx(() => [
                                          createTextVNode("BUY")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_select_option, { value: "Sell" }, {
                                        default: withCtx(() => [
                                          createTextVNode("SELL")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_select, {
                                  "aria-label": "Fruit",
                                  interface: "popover",
                                  placeholder: "Order type",
                                  style: { "font-size": "120%" },
                                  onIonChange: ($event) => setOrderType($event.detail.value)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_select_option, { value: "Buy" }, {
                                      default: withCtx(() => [
                                        createTextVNode("BUY")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_select_option, { value: "Sell" }, {
                                      default: withCtx(() => [
                                        createTextVNode("SELL")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onIonChange"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "popover",
                                placeholder: "Order type",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrderType($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_select_option, { value: "Buy" }, {
                                    default: withCtx(() => [
                                      createTextVNode("BUY")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_select_option, { value: "Sell" }, {
                                    default: withCtx(() => [
                                      createTextVNode("SELL")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(orderType))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(orderType)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(pair))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(pair)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(pair)), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(baseImgUrl)) {
                          _push4(`<img alt="asset img"${ssrRenderAttr("src", unref(baseImgUrl))} data-v-167370d2${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(baseImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(baseImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(quoteImgUrl)) {
                          _push4(`<img alt="asset img"${ssrRenderAttr("src", unref(quoteImgUrl))} data-v-167370d2${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(quoteImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(quoteImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Quote Price`);
                      } else {
                        return [
                          createTextVNode("Quote Price")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_input, {
                    label: "",
                    type: "number",
                    placeholder: "000",
                    style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_label, { style: { "font-size": "100%", "color": "black" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(quote))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(quote)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "2%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" })}" data-v-167370d2${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You Send`);
                            } else {
                              return [
                                createTextVNode("You Send")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_input, {
                          label: "",
                          type: "number",
                          placeholder: "000",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(orderType) == "Buy" ? unref(quote) : unref(base))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" })}" data-v-167370d2${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`fee : 0.5%`);
                            } else {
                              return [
                                createTextVNode("fee : 0.5%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" })}" data-v-167370d2${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You Get`);
                            } else {
                              return [
                                createTextVNode("You Get")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_input, {
                          label: "",
                          readonly: true,
                          type: "number",
                          placeholder: "00",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(orderType) == "Buy" ? unref(base) : unref(quote))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                            createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                              default: withCtx(() => [
                                createTextVNode("You Send")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_input, {
                              label: "",
                              type: "number",
                              placeholder: "000",
                              style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                            }),
                            createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" } }, [
                            createVNode(_component_ion_icon, {
                              color: "secondary",
                              icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                              style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                            }, null, 8, ["icon"]),
                            createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                              default: withCtx(() => [
                                createTextVNode("fee : 0.5%")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                            createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                              default: withCtx(() => [
                                createTextVNode("You Get")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_input, {
                              label: "",
                              readonly: true,
                              type: "number",
                              placeholder: "00",
                              style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                            }),
                            createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_button, {
                    fill: "outline",
                    style: { "width": "80%", "height": "50px", "font-size": "130%" },
                    onClick: ($event) => _ctx.$emit("closeModal")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Confirm`);
                      } else {
                        return [
                          createTextVNode("Confirm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" } }, [
                      createVNode(_component_ion_label, { style: { "font-size": "190%", "color": "black", "font-weight": "bold" } }, {
                        default: withCtx(() => [
                          createTextVNode("New Order")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsInformationCircle" in _ctx ? _ctx.ioniconsInformationCircle : unref(informationCircle),
                        style: { "font-size": "200%", "position": "relative", "left": "45%" },
                        onClick: () => {
                        }
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" } }, [
                      createVNode(_component_ion_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "action-sheet",
                                placeholder: "Select Pair",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrder($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                    return createVNode(_component_ion_select_option, {
                                      value: pair2,
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "popover",
                                placeholder: "Order type",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrderType($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_select_option, { value: "Buy" }, {
                                    default: withCtx(() => [
                                      createTextVNode("BUY")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_select_option, { value: "Sell" }, {
                                    default: withCtx(() => [
                                      createTextVNode("SELL")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                      createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(pair)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { style: { "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            unref(baseImgUrl) ? (openBlock(), createBlock("img", {
                              key: 0,
                              alt: "asset img",
                              src: unref(baseImgUrl)
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            unref(quoteImgUrl) ? (openBlock(), createBlock("img", {
                              key: 0,
                              alt: "asset img",
                              src: unref(quoteImgUrl)
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" } }, [
                      createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                        default: withCtx(() => [
                          createTextVNode("Quote Price")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_input, {
                        label: "",
                        type: "number",
                        placeholder: "000",
                        style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                      }),
                      createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "black" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(quote)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "2%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                          createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                            default: withCtx(() => [
                              createTextVNode("You Send")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_input, {
                            label: "",
                            type: "number",
                            placeholder: "000",
                            style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                          }),
                          createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" } }, [
                          createVNode(_component_ion_icon, {
                            color: "secondary",
                            icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                            style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                          }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                            default: withCtx(() => [
                              createTextVNode("fee : 0.5%")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                          createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                            default: withCtx(() => [
                              createTextVNode("You Get")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_input, {
                            label: "",
                            readonly: true,
                            type: "number",
                            placeholder: "00",
                            style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                          }),
                          createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" } }, [
                      createVNode(_component_ion_button, {
                        fill: "outline",
                        style: { "width": "80%", "height": "50px", "font-size": "130%" },
                        onClick: ($event) => _ctx.$emit("closeModal")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Confirm")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_content, {
                class: "ion-padding content",
                style: {}
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" } }, [
                    createVNode(_component_ion_label, { style: { "font-size": "190%", "color": "black", "font-weight": "bold" } }, {
                      default: withCtx(() => [
                        createTextVNode("New Order")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_icon, {
                      icon: "ioniconsInformationCircle" in _ctx ? _ctx.ioniconsInformationCircle : unref(informationCircle),
                      style: { "font-size": "200%", "position": "relative", "left": "45%" },
                      onClick: () => {
                      }
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" } }, [
                    createVNode(_component_ion_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_select, {
                              "aria-label": "Fruit",
                              interface: "action-sheet",
                              placeholder: "Select Pair",
                              style: { "font-size": "120%" },
                              onIonChange: ($event) => setOrder($event.detail.value)
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                  return createVNode(_component_ion_select_option, {
                                    value: pair2,
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["onIonChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_select, {
                              "aria-label": "Fruit",
                              interface: "popover",
                              placeholder: "Order type",
                              style: { "font-size": "120%" },
                              onIonChange: ($event) => setOrderType($event.detail.value)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_select_option, { value: "Buy" }, {
                                  default: withCtx(() => [
                                    createTextVNode("BUY")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_select_option, { value: "Sell" }, {
                                  default: withCtx(() => [
                                    createTextVNode("SELL")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onIonChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(orderType)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(pair)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          unref(baseImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(baseImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          unref(quoteImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(quoteImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" } }, [
                    createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                      default: withCtx(() => [
                        createTextVNode("Quote Price")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_input, {
                      label: "",
                      type: "number",
                      placeholder: "000",
                      style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                    }),
                    createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "black" } }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(quote)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "2%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                        createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                          default: withCtx(() => [
                            createTextVNode("You Send")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_input, {
                          label: "",
                          type: "number",
                          placeholder: "000",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                        }),
                        createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" } }, [
                        createVNode(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                          default: withCtx(() => [
                            createTextVNode("fee : 0.5%")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                        createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                          default: withCtx(() => [
                            createTextVNode("You Get")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_input, {
                          label: "",
                          readonly: true,
                          type: "number",
                          placeholder: "00",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                        }),
                        createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" } }, [
                    createVNode(_component_ion_button, {
                      fill: "outline",
                      style: { "width": "80%", "height": "50px", "font-size": "130%" },
                      onClick: ($event) => _ctx.$emit("closeModal")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Confirm")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newOrder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-167370d2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "p2p",
  __ssrInlineRender: true,
  setup(__props) {
    const isOrderDetailsModalOpen = ref(false);
    const isNewOrderModalOpen = ref(false);
    const setOpenOrderDetails = (isOpen) => {
      isOrderDetailsModalOpen.value = isOpen;
    };
    const setOpenNewOrder = (isOpen) => {
      isNewOrderModalOpen.value = isOpen;
    };
    useRoute();
    ref(false);
    const switchTab = ref("Orders");
    const switchSelect = ref("home");
    const ismodalOpen = ref(false);
    const setOpen = (isOpen) => {
      ismodalOpen.value = isOpen;
    };
    const switchPage = (tab) => {
      console.log(tab);
      switchSelect.value = tab;
      switch (tab) {
        case "orders":
          setOpenNewOrder(false);
          setOpenOrderDetails(false);
          break;
        case "add":
          setOpenNewOrder(true);
      }
    };
    const actions = [
      {
        name: "Orders",
        icon: happy,
        link: "action1",
        default: true
      },
      {
        name: "market",
        icon: mail,
        link: "action1",
        default: false
      },
      {
        name: "add",
        icon: addOutline,
        link: "action1",
        default: false
      }
      // {
      //     name:'Order',
      //     icon:ioniconsExitSharp,
      //     link:'action1'
      // }
    ];
    const orders = [
      {
        base: "BTC",
        quote: "NGN",
        orderType: "BUY",
        quantity: 12e4,
        processPercentage: 60,
        baseImgUrl: "/BTC.svg",
        quoteImgUrl: "/nigeria.svg"
      },
      {
        base: "XRP",
        quote: "USD",
        orderType: "SELL",
        quantity: 14e4,
        processPercentage: 40,
        baseImgUrl: "/BTC.svg",
        quoteImgUrl: "/united states.svg"
      },
      {
        base: "ETH",
        quote: "NGN",
        orderType: "SELL",
        quantity: 14e4,
        processPercentage: 75,
        baseImgUrl: "/ETH.svg",
        quoteImgUrl: "/nigeria.svg"
      },
      {
        base: "XRP",
        quote: "GHS",
        orderType: "BUY",
        quantity: 14e4,
        processPercentage: 80,
        baseImgUrl: "/XRP.svg",
        quoteImgUrl: "/ghana.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_MyHeader = __nuxt_component_3;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_bold = resolveComponent("bold");
      const _component_ion_icon = IonIcon;
      const _component_ion_searchbar = IonSearchbar;
      const _component_AddAsset = _sfc_main$4;
      const _component_ion_content = IonContent;
      const _component_ion_list = IonList;
      const _component_order = __nuxt_component_12;
      const _component_ion_footer = IonFooter;
      const _component_Tabs = __nuxt_component_14;
      const _component_OrderDetails = __nuxt_component_15;
      const _component_NewOrder = __nuxt_component_16;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, { class: "ion-no-border" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MyHeader, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_MyHeader)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: {} }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card, { class: "actions" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(actions, (action) => {
                                _push5(ssrRenderComponent(_component_ion_card, {
                                  button: true,
                                  class: { "actionSelected": unref(switchSelect) === action.name || action.default, "action": unref(switchSelect) !== action.name || !action.default },
                                  key: "action.name",
                                  onClick: ($event) => switchPage(action.name)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" })}" data-v-0c692556${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_ion_card_title, {
                                              color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_bold, { style: { "font-size": "60%" } }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(action.name)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(action.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(action.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            _push7(ssrRenderComponent(_component_ion_icon, {
                                              color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                              size: "large",
                                              icon: action.icon,
                                              style: {}
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                                createVNode(_component_ion_card_title, {
                                                  color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(action.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              createVNode(_component_ion_icon, {
                                                color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                                size: "large",
                                                icon: action.icon,
                                                style: {}
                                              }, null, 8, ["color", "icon"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ion_card_header, { style: {} }, {
                                          default: withCtx(() => [
                                            createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                              createVNode(_component_ion_card_title, {
                                                color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(action.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            createVNode(_component_ion_icon, {
                                              color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                              size: "large",
                                              icon: action.icon,
                                              style: {}
                                            }, null, 8, ["color", "icon"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                                  return createVNode(_component_ion_card, {
                                    button: true,
                                    class: { "actionSelected": unref(switchSelect) === action.name || action.default, "action": unref(switchSelect) !== action.name || !action.default },
                                    key: "action.name",
                                    onClick: ($event) => switchPage(action.name)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_card_header, { style: {} }, {
                                        default: withCtx(() => [
                                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                            createVNode(_component_ion_card_title, {
                                              color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(action.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode(_component_ion_icon, {
                                            color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                            size: "large",
                                            icon: action.icon,
                                            style: {}
                                          }, null, 8, ["color", "icon"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card, { class: "actions" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                                return createVNode(_component_ion_card, {
                                  button: true,
                                  class: { "actionSelected": unref(switchSelect) === action.name || action.default, "action": unref(switchSelect) !== action.name || !action.default },
                                  key: "action.name",
                                  onClick: ($event) => switchPage(action.name)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, { style: {} }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                          createVNode(_component_ion_card_title, {
                                            color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(action.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode(_component_ion_icon, {
                                          color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                          size: "large",
                                          icon: action.icon,
                                          style: {}
                                        }, null, 8, ["color", "icon"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, {
                    class: "flex-row-center-center searchbox",
                    style: {}
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_searchbar, {
                          "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                          placeholder: "search",
                          style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          icon: "ioniconsFilterCircle" in _ctx ? _ctx.ioniconsFilterCircle : unref(filterCircle),
                          style: { "font-size": "250%", "color": "#1d3160" },
                          onClick: () => {
                          }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_searchbar, {
                            "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                            placeholder: "search",
                            style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                          }, null, 8, ["search-icon"]),
                          createVNode(_component_ion_icon, {
                            icon: "ioniconsFilterCircle" in _ctx ? _ctx.ioniconsFilterCircle : unref(filterCircle),
                            style: { "font-size": "250%", "color": "#1d3160" },
                            onClick: () => {
                            }
                          }, null, 8, ["icon", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_toolbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_MyHeader)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_toolbar, { style: {} }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card, { class: "actions" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                              return createVNode(_component_ion_card, {
                                button: true,
                                class: { "actionSelected": unref(switchSelect) === action.name || action.default, "action": unref(switchSelect) !== action.name || !action.default },
                                key: "action.name",
                                onClick: ($event) => switchPage(action.name)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, { style: {} }, {
                                    default: withCtx(() => [
                                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                        createVNode(_component_ion_card_title, {
                                          color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(action.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode(_component_ion_icon, {
                                        color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                        size: "large",
                                        icon: action.icon,
                                        style: {}
                                      }, null, 8, ["color", "icon"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      class: "flex-row-center-center searchbox",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_searchbar, {
                          "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                          placeholder: "search",
                          style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                        }, null, 8, ["search-icon"]),
                        createVNode(_component_ion_icon, {
                          icon: "ioniconsFilterCircle" in _ctx ? _ctx.ioniconsFilterCircle : unref(filterCircle),
                          style: { "font-size": "250%", "color": "#1d3160" },
                          onClick: () => {
                          }
                        }, null, 8, ["icon", "onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AddAsset, {
              "is-crypto": unref(switchTab),
              "ismodal-open": unref(ismodalOpen),
              onCloseModal: ($event) => setOpen(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_content, { style: {} }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, {
                    class: "orderList",
                    style: {}
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(orders, (order, index) => {
                          _push4(ssrRenderComponent(_component_ion_list, { key: index }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_order, {
                                  base: order.base,
                                  baseImgUrl: order.baseImgUrl,
                                  quote: order.quote,
                                  "quote-img-url": order.quoteImgUrl,
                                  "order-type": order.orderType,
                                  "process-percentage": order.processPercentage,
                                  quantity: order.quantity,
                                  onClick: ($event) => setOpenOrderDetails(true)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_order, {
                                    base: order.base,
                                    baseImgUrl: order.baseImgUrl,
                                    quote: order.quote,
                                    "quote-img-url": order.quoteImgUrl,
                                    "order-type": order.orderType,
                                    "process-percentage": order.processPercentage,
                                    quantity: order.quantity,
                                    onClick: ($event) => setOpenOrderDetails(true)
                                  }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity", "onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(orders, (order, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_order, {
                                  base: order.base,
                                  baseImgUrl: order.baseImgUrl,
                                  quote: order.quote,
                                  "quote-img-url": order.quoteImgUrl,
                                  "order-type": order.orderType,
                                  "process-percentage": order.processPercentage,
                                  quantity: order.quantity,
                                  onClick: ($event) => setOpenOrderDetails(true)
                                }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity", "onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card, {
                      class: "orderList",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(orders, (order, index) => {
                          return createVNode(_component_ion_list, { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_order, {
                                base: order.base,
                                baseImgUrl: order.baseImgUrl,
                                quote: order.quote,
                                "quote-img-url": order.quoteImgUrl,
                                "order-type": order.orderType,
                                "process-percentage": order.processPercentage,
                                quantity: order.quantity,
                                onClick: ($event) => setOpenOrderDetails(true)
                              }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity", "onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_footer, {
              class: "ion-no-border flex-column-center-center",
              style: { "margin-bottom": "5%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Tabs, { style: { "width": "90%", "border-radius": "20px" } }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Tabs, { style: { "width": "90%", "border-radius": "20px" } })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_OrderDetails, {
              isOrderDetailsModalOpen: unref(isOrderDetailsModalOpen),
              onCloseModal: ($event) => setOpenOrderDetails(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NewOrder, {
              isNewOrderModalOpen: unref(isNewOrderModalOpen),
              onCloseModal: ($event) => setOpenNewOrder(false)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_header, { class: "ion-no-border" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_MyHeader)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_toolbar, { style: {} }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card, { class: "actions" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                            return createVNode(_component_ion_card, {
                              button: true,
                              class: { "actionSelected": unref(switchSelect) === action.name || action.default, "action": unref(switchSelect) !== action.name || !action.default },
                              key: "action.name",
                              onClick: ($event) => switchPage(action.name)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, { style: {} }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                      createVNode(_component_ion_card_title, {
                                        color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_bold, { style: { "font-size": "60%" } }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(action.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode(_component_ion_icon, {
                                      color: unref(switchSelect) === action.name || action.default ? "primary" : "secondary",
                                      size: "large",
                                      icon: action.icon,
                                      style: {}
                                    }, null, 8, ["color", "icon"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    class: "flex-row-center-center searchbox",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_searchbar, {
                        "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                        placeholder: "search",
                        style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                      }, null, 8, ["search-icon"]),
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsFilterCircle" in _ctx ? _ctx.ioniconsFilterCircle : unref(filterCircle),
                        style: { "font-size": "250%", "color": "#1d3160" },
                        onClick: () => {
                        }
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_AddAsset, {
                "is-crypto": unref(switchTab),
                "ismodal-open": unref(ismodalOpen),
                onCloseModal: ($event) => setOpen(false)
              }, null, 8, ["is-crypto", "ismodal-open", "onCloseModal"]),
              createVNode(_component_ion_content, { style: {} }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, {
                    class: "orderList",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(orders, (order, index) => {
                        return createVNode(_component_ion_list, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_order, {
                              base: order.base,
                              baseImgUrl: order.baseImgUrl,
                              quote: order.quote,
                              "quote-img-url": order.quoteImgUrl,
                              "order-type": order.orderType,
                              "process-percentage": order.processPercentage,
                              quantity: order.quantity,
                              onClick: ($event) => setOpenOrderDetails(true)
                            }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity", "onClick"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_footer, {
                class: "ion-no-border flex-column-center-center",
                style: { "margin-bottom": "5%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_Tabs, { style: { "width": "90%", "border-radius": "20px" } })
                ]),
                _: 1
              }),
              createVNode(_component_OrderDetails, {
                isOrderDetailsModalOpen: unref(isOrderDetailsModalOpen),
                onCloseModal: ($event) => setOpenOrderDetails(false)
              }, null, 8, ["isOrderDetailsModalOpen", "onCloseModal"]),
              createVNode(_component_NewOrder, {
                isNewOrderModalOpen: unref(isNewOrderModalOpen),
                onCloseModal: ($event) => setOpenNewOrder(false)
              }, null, 8, ["isNewOrderModalOpen", "onCloseModal"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/p2p.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const p2p = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c692556"]]);

export { p2p as default };
//# sourceMappingURL=p2p-22533b7b.mjs.map
