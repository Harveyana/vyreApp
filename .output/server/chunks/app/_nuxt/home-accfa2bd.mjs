import { _ as _export_sfc, I as IonItem, a as IonAvatar, b as IonCol, d as IonCardTitle, e as IonModal, f as IonHeader, g as IonToolbar, h as IonSegment, i as IonSegmentButton, j as IonLabel, k as IonButtons, l as IonButton, m as IonContent, n as IonCard, o as IonCardHeader, p as IonCardContent, q as IonList, w as IonPage, v as IonIcon, x as IonCardSubtitle, y as IonGrid, z as IonRow, r as IonTabs, s as IonRouterOutlet, t as IonTabBar, u as IonTabButton } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString, ref, unref, createTextVNode, openBlock, createBlock, Fragment, renderList, watch } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { m as moon, e as eyeOffSharp, a as arrowUpCircleSharp, b as arrowDownCircleSharp, w as walletSharp, l as logoBitcoin, c as logoUsd, d as duplicate, p as playCircle, r as radio, f as library, s as search } from './index-2d204393.mjs';
import { u as useDarkMode } from './useDarkMode-386da5e9.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_item = IonItem;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_col = IonCol;
      const _component_ion_card_title = IonCardTitle;
      _push(ssrRenderComponent(_component_ion_item, mergeProps({
        button: "",
        detail: false,
        style: { "--border-radius": "13px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_avatar, { slot: "start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="asset img"${ssrRenderAttr("src", _ctx.$props.img)} data-v-4285d1d0${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "asset img",
                      src: _ctx.$props.img
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_col, { style: { "--ion-grid-column-padding-xs": "none" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<strong data-v-4285d1d0${_scopeId3}>${ssrInterpolate(_ctx.$props.symbol)}</strong>`);
                      } else {
                        return [
                          createVNode("strong", null, toDisplayString(_ctx.$props.symbol), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" })}" data-v-4285d1d0${_scopeId2}><span style="${ssrRenderStyle({ "font-size": "small", "margin-right": "5px" })}" data-v-4285d1d0${_scopeId2}>$${ssrInterpolate(_ctx.$props.price)}</span><span style="${ssrRenderStyle({ "font-size": "x-small", "color": "red" })}" data-v-4285d1d0${_scopeId2}>-0.89%</span></div>`);
                } else {
                  return [
                    createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
                      default: withCtx(() => [
                        createVNode("strong", null, toDisplayString(_ctx.$props.symbol), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" } }, [
                      createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$" + toDisplayString(_ctx.$props.price), 1),
                      createVNode("span", { style: { "font-size": "x-small", "color": "red" } }, "-0.89%")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "start", "align-items": "flex-end" })}" data-v-4285d1d0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<strong style="${ssrRenderStyle({ "font-size": "medium" })}" data-v-4285d1d0${_scopeId2}>${ssrInterpolate(_ctx.$props.amount)}</strong>`);
                } else {
                  return [
                    createVNode("strong", { style: { "font-size": "medium" } }, toDisplayString(_ctx.$props.amount), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-4285d1d0${_scopeId}><span style="${ssrRenderStyle({ "font-size": "small", "margin-right": "5px" })}" data-v-4285d1d0${_scopeId}>$ ${ssrInterpolate(_ctx.$props.amount * _ctx.$props.price)}</span></div></div>`);
          } else {
            return [
              createVNode(_component_ion_avatar, { slot: "start" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "asset img",
                    src: _ctx.$props.img
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(_component_ion_col, { style: { "--ion-grid-column-padding-xs": "none" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
                    default: withCtx(() => [
                      createVNode("strong", null, toDisplayString(_ctx.$props.symbol), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" } }, [
                    createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$" + toDisplayString(_ctx.$props.price), 1),
                    createVNode("span", { style: { "font-size": "x-small", "color": "red" } }, "-0.89%")
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "start", "align-items": "flex-end" } }, [
                createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
                  default: withCtx(() => [
                    createVNode("strong", { style: { "font-size": "medium" } }, toDisplayString(_ctx.$props.amount), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                  createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$ " + toDisplayString(_ctx.$props.amount * _ctx.$props.price), 1)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/asset.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4285d1d0"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "addAsset",
  __ssrInlineRender: true,
  props: {
    ismodalOpen: { type: Boolean },
    isCrypto: {}
  },
  setup(__props) {
    const props = __props;
    const switchAssets = ref("fiat");
    const cryptos = [
      {
        name: "Ripple",
        img: "/ripple.svg",
        symbol: "XRP",
        price: 0.42,
        amount: 367
      },
      {
        name: "Solana",
        img: "/solana.svg",
        symbol: "Solana",
        price: 138,
        amount: 567
      },
      {
        name: "Tether",
        img: "/tether.svg",
        symbol: "USDT",
        price: 1,
        amount: 670
      },
      {
        name: "Tron",
        img: "/tron.svg",
        symbol: "TRON",
        price: 0.08,
        amount: 8367
      },
      {
        name: "Solana",
        img: "/solana.svg",
        symbol: "Solana",
        price: 138,
        amount: 567
      },
      {
        name: "Tether",
        img: "/tether.svg",
        symbol: "USDT",
        price: 1,
        amount: 670
      },
      {
        name: "Tron",
        img: "/tron.svg",
        symbol: "TRON",
        price: 0.08,
        amount: 8367
      },
      {
        name: "Solana",
        img: "/solana.svg",
        symbol: "Solana",
        price: 138,
        amount: 567
      },
      {
        name: "Tether",
        img: "/tether.svg",
        symbol: "USDT",
        price: 1,
        amount: 670
      },
      {
        name: "Tron",
        img: "/tron.svg",
        symbol: "TRON",
        price: 0.08,
        amount: 8367
      }
    ];
    const fiats = [
      {
        name: "United States Dollar",
        img: "/ripple.svg",
        symbol: "USD",
        price: 0.42,
        amount: 367
      },
      {
        name: "Euros",
        img: "/ripple.svg",
        symbol: "EUR",
        price: 0.42,
        amount: 367
      },
      {
        name: "British Pounds",
        img: "/ripple.svg",
        symbol: "GBP",
        price: 0.42,
        amount: 367
      },
      {
        name: "Nigerian Naira",
        img: "/ripple.svg",
        symbol: "NGN",
        price: 0.42,
        amount: 367
      },
      {
        name: "United States Dollar",
        img: "/ripple.svg",
        symbol: "USD",
        price: 0.42,
        amount: 367
      },
      {
        name: "British Pounds",
        img: "/ripple.svg",
        symbol: "GBP",
        price: 0.42,
        amount: 367
      },
      {
        name: "Euros",
        img: "/ripple.svg",
        symbol: "EUR",
        price: 0.42,
        amount: 367
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_label = IonLabel;
      const _component_ion_buttons = IonButtons;
      const _component_ion_button = IonButton;
      const _component_ion_content = IonContent;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_content = IonCardContent;
      const _component_ion_list = IonList;
      const _component_asset = __nuxt_component_16;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.ismodalOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_segment, { value: unref(switchAssets) }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "fiat",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Fiat`);
                                        } else {
                                          return [
                                            createTextVNode("Fiat")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Fiat")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "crypto",
                                onClick: ($event) => switchAssets.value = "crypto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Crypto`);
                                        } else {
                                          return [
                                            createTextVNode("Crypto")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Crypto")
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
                                createVNode(_component_ion_segment_button, {
                                  value: "fiat",
                                  onClick: ($event) => switchAssets.value = "fiat"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Fiat")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_ion_segment_button, {
                                  value: "crypto",
                                  onClick: ($event) => switchAssets.value = "crypto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Crypto")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_segment, { value: unref(switchAssets) }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_segment_button, {
                                value: "fiat",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Fiat")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_ion_segment_button, {
                                value: "crypto",
                                onClick: ($event) => switchAssets.value = "crypto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Crypto")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_buttons, { slot: "start" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_button, {
                                onClick: ($event) => _ctx.$emit("closeModal")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Cancel`);
                                  } else {
                                    return [
                                      createTextVNode("Cancel")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_button, {
                                  onClick: ($event) => _ctx.$emit("closeModal")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_buttons, { slot: "start" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                onClick: ($event) => _ctx.$emit("closeModal")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_toolbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_segment, { value: unref(switchAssets) }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_segment_button, {
                              value: "fiat",
                              onClick: ($event) => switchAssets.value = "fiat"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Fiat")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_ion_segment_button, {
                              value: "crypto",
                              onClick: ($event) => switchAssets.value = "crypto"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Crypto")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_toolbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_buttons, { slot: "start" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_button, {
                              onClick: ($event) => _ctx.$emit("closeModal")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_content, { class: "ion-padding" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="coin"${ssrRenderAttr("src", unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg")} style="${ssrRenderStyle({ "width": "40%" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_card_header, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Add asset wallet`);
                                  } else {
                                    return [
                                      createTextVNode("Add asset wallet")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add asset wallet")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_content, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Become truly borderless,ablilty to bank with multiple currencies. `);
                            } else {
                              return [
                                createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("img", {
                            alt: "coin",
                            src: unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg",
                            style: { "width": "40%" }
                          }, null, 8, ["src"]),
                          createVNode(_component_ion_card_header, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                                default: withCtx(() => [
                                  createTextVNode("Add asset wallet")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_content, null, {
                            default: withCtx(() => [
                              createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "50%", "min-height": "50%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(switchAssets) == "crypto") {
                          _push4(`<!--[-->`);
                          ssrRenderList(cryptos, (crypto, index) => {
                            _push4(ssrRenderComponent(_component_ion_list, { key: index }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_asset, {
                                    name: crypto.name,
                                    symbol: crypto.symbol,
                                    price: crypto.price,
                                    amount: crypto.amount,
                                    img: crypto.img
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_asset, {
                                      name: crypto.name,
                                      symbol: crypto.symbol,
                                      price: crypto.price,
                                      amount: crypto.amount,
                                      img: crypto.img
                                    }, null, 8, ["name", "symbol", "price", "amount", "img"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!--[-->`);
                          ssrRenderList(fiats, (fiat, index) => {
                            _push4(ssrRenderComponent(_component_ion_list, {
                              key: fiat.symbol
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_asset, {
                                    name: fiat.name,
                                    symbol: fiat.symbol,
                                    price: fiat.price,
                                    amount: fiat.amount,
                                    img: fiat.img
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_asset, {
                                      name: fiat.name,
                                      symbol: fiat.symbol,
                                      price: fiat.price,
                                      amount: fiat.amount,
                                      img: fiat.img
                                    }, null, 8, ["name", "symbol", "price", "amount", "img"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_asset, {
                                  name: crypto.name,
                                  symbol: crypto.symbol,
                                  price: crypto.price,
                                  amount: crypto.amount,
                                  img: crypto.img
                                }, null, 8, ["name", "symbol", "price", "amount", "img"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, renderList(fiats, (fiat, index) => {
                            return createVNode(_component_ion_list, {
                              key: fiat.symbol
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_asset, {
                                  name: fiat.name,
                                  symbol: fiat.symbol,
                                  price: fiat.price,
                                  amount: fiat.amount,
                                  img: fiat.img
                                }, null, 8, ["name", "symbol", "price", "amount", "img"])
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none" } }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "coin",
                          src: unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg",
                          style: { "width": "40%" }
                        }, null, 8, ["src"]),
                        createVNode(_component_ion_card_header, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                              default: withCtx(() => [
                                createTextVNode("Add asset wallet")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_content, null, {
                          default: withCtx(() => [
                            createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, { style: { "max-height": "50%", "min-height": "50%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none" } }, {
                      default: withCtx(() => [
                        unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                          return createVNode(_component_ion_list, { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_asset, {
                                name: crypto.name,
                                symbol: crypto.symbol,
                                price: crypto.price,
                                amount: crypto.amount,
                                img: crypto.img
                              }, null, 8, ["name", "symbol", "price", "amount", "img"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, renderList(fiats, (fiat, index) => {
                          return createVNode(_component_ion_list, {
                            key: fiat.symbol
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_asset, {
                                name: fiat.name,
                                symbol: fiat.symbol,
                                price: fiat.price,
                                amount: fiat.amount,
                                img: fiat.img
                              }, null, 8, ["name", "symbol", "price", "amount", "img"])
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
          } else {
            return [
              createVNode(_component_ion_header, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_segment, { value: unref(switchAssets) }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_segment_button, {
                            value: "fiat",
                            onClick: ($event) => switchAssets.value = "fiat"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Fiat")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_segment_button, {
                            value: "crypto",
                            onClick: ($event) => switchAssets.value = "crypto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Crypto")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_buttons, { slot: "start" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            onClick: ($event) => _ctx.$emit("closeModal")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_content, { class: "ion-padding" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "box-shadow": "none" } }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        alt: "coin",
                        src: unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg",
                        style: { "width": "40%" }
                      }, null, 8, ["src"]),
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                            default: withCtx(() => [
                              createTextVNode("Add asset wallet")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_content, null, {
                        default: withCtx(() => [
                          createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, { style: { "max-height": "50%", "min-height": "50%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none" } }, {
                    default: withCtx(() => [
                      unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                        return createVNode(_component_ion_list, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_asset, {
                              name: crypto.name,
                              symbol: crypto.symbol,
                              price: crypto.price,
                              amount: crypto.amount,
                              img: crypto.img
                            }, null, 8, ["name", "symbol", "price", "amount", "img"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, renderList(fiats, (fiat, index) => {
                        return createVNode(_component_ion_list, {
                          key: fiat.symbol
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_asset, {
                              name: fiat.name,
                              symbol: fiat.symbol,
                              price: fiat.price,
                              amount: fiat.amount,
                              img: fiat.img
                            }, null, 8, ["name", "symbol", "price", "amount", "img"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/addAsset.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ion_toolbar = IonToolbar;
  const _component_ion_tabs = IonTabs;
  const _component_ion_router_outlet = IonRouterOutlet;
  const _component_ion_tab_bar = IonTabBar;
  const _component_ion_tab_button = IonTabButton;
  const _component_ion_icon = IonIcon;
  const _component_ion_label = IonLabel;
  _push(ssrRenderComponent(_component_ion_toolbar, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ion_tabs, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ion_router_outlet, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ion_tab_bar, {
                slot: "bottom",
                style: { "--border": "none", "--background": "#000000", "--color": "#ffff" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "home",
                      href: "/home"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsPlayCircle" in _ctx ? _ctx.ioniconsPlayCircle : unref(playCircle) }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ion_label, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Listen now`);
                              } else {
                                return [
                                  createTextVNode("Listen now")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ion_icon, { icon: "ioniconsPlayCircle" in _ctx ? _ctx.ioniconsPlayCircle : unref(playCircle) }, null, 8, ["icon"]),
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createTextVNode("Listen now")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "radio",
                      href: "/intro"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsRadio" in _ctx ? _ctx.ioniconsRadio : unref(radio) }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ion_label, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Radio`);
                              } else {
                                return [
                                  createTextVNode("Radio")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ion_icon, { icon: "ioniconsRadio" in _ctx ? _ctx.ioniconsRadio : unref(radio) }, null, 8, ["icon"]),
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createTextVNode("Radio")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "library",
                      href: "/home"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsLibrary" in _ctx ? _ctx.ioniconsLibrary : unref(library) }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ion_label, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Library`);
                              } else {
                                return [
                                  createTextVNode("Library")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ion_icon, { icon: "ioniconsLibrary" in _ctx ? _ctx.ioniconsLibrary : unref(library) }, null, 8, ["icon"]),
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createTextVNode("Library")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "search",
                      href: "/intro"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsSearch" in _ctx ? _ctx.ioniconsSearch : unref(search) }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ion_label, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Search`);
                              } else {
                                return [
                                  createTextVNode("Search")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ion_icon, { icon: "ioniconsSearch" in _ctx ? _ctx.ioniconsSearch : unref(search) }, null, 8, ["icon"]),
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createTextVNode("Search")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ion_tab_button, {
                        class: "ion-tab-button",
                        tab: "home",
                        href: "/home"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, { icon: "ioniconsPlayCircle" in _ctx ? _ctx.ioniconsPlayCircle : unref(playCircle) }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode("Listen now")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_tab_button, {
                        class: "ion-tab-button",
                        tab: "radio",
                        href: "/intro"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, { icon: "ioniconsRadio" in _ctx ? _ctx.ioniconsRadio : unref(radio) }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode("Radio")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_tab_button, {
                        class: "ion-tab-button",
                        tab: "library",
                        href: "/home"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, { icon: "ioniconsLibrary" in _ctx ? _ctx.ioniconsLibrary : unref(library) }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode("Library")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_tab_button, {
                        class: "ion-tab-button",
                        tab: "search",
                        href: "/intro"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, { icon: "ioniconsSearch" in _ctx ? _ctx.ioniconsSearch : unref(search) }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode("Search")
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ion_router_outlet),
                createVNode(_component_ion_tab_bar, {
                  slot: "bottom",
                  style: { "--border": "none", "--background": "#000000", "--color": "#ffff" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "home",
                      href: "/home"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, { icon: "ioniconsPlayCircle" in _ctx ? _ctx.ioniconsPlayCircle : unref(playCircle) }, null, 8, ["icon"]),
                        createVNode(_component_ion_label, null, {
                          default: withCtx(() => [
                            createTextVNode("Listen now")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "radio",
                      href: "/intro"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, { icon: "ioniconsRadio" in _ctx ? _ctx.ioniconsRadio : unref(radio) }, null, 8, ["icon"]),
                        createVNode(_component_ion_label, null, {
                          default: withCtx(() => [
                            createTextVNode("Radio")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "library",
                      href: "/home"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, { icon: "ioniconsLibrary" in _ctx ? _ctx.ioniconsLibrary : unref(library) }, null, 8, ["icon"]),
                        createVNode(_component_ion_label, null, {
                          default: withCtx(() => [
                            createTextVNode("Library")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_tab_button, {
                      class: "ion-tab-button",
                      tab: "search",
                      href: "/intro"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, { icon: "ioniconsSearch" in _ctx ? _ctx.ioniconsSearch : unref(search) }, null, 8, ["icon"]),
                        createVNode(_component_ion_label, null, {
                          default: withCtx(() => [
                            createTextVNode("Search")
                          ]),
                          _: 1
                        })
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ion_tabs, null, {
            default: withCtx(() => [
              createVNode(_component_ion_router_outlet),
              createVNode(_component_ion_tab_bar, {
                slot: "bottom",
                style: { "--border": "none", "--background": "#000000", "--color": "#ffff" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_tab_button, {
                    class: "ion-tab-button",
                    tab: "home",
                    href: "/home"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, { icon: "ioniconsPlayCircle" in _ctx ? _ctx.ioniconsPlayCircle : unref(playCircle) }, null, 8, ["icon"]),
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => [
                          createTextVNode("Listen now")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_tab_button, {
                    class: "ion-tab-button",
                    tab: "radio",
                    href: "/intro"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, { icon: "ioniconsRadio" in _ctx ? _ctx.ioniconsRadio : unref(radio) }, null, 8, ["icon"]),
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => [
                          createTextVNode("Radio")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_tab_button, {
                    class: "ion-tab-button",
                    tab: "library",
                    href: "/home"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, { icon: "ioniconsLibrary" in _ctx ? _ctx.ioniconsLibrary : unref(library) }, null, 8, ["icon"]),
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => [
                          createTextVNode("Library")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_tab_button, {
                    class: "ion-tab-button",
                    tab: "search",
                    href: "/intro"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, { icon: "ioniconsSearch" in _ctx ? _ctx.ioniconsSearch : unref(search) }, null, 8, ["icon"]),
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => [
                          createTextVNode("Search")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_18 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-acb77c59"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    const switchAssets = ref("fiat");
    const hideTotal = ref(false);
    const ismodalOpen = ref(false);
    const setOpen = (isOpen) => {
      ismodalOpen.value = isOpen;
    };
    watch(isDarkMode, (newValue, oldValue) => {
      console.log(newValue);
      darkMode.switchMode(newValue);
    });
    const cryptos = [
      {
        name: "Ripple",
        img: "/ripple.svg",
        symbol: "XRP",
        price: 0.42,
        amount: 367
      },
      {
        name: "Solana",
        img: "/solana.svg",
        symbol: "Solana",
        price: 138,
        amount: 567
      },
      {
        name: "Tether",
        img: "/tether.svg",
        symbol: "USDT",
        price: 1,
        amount: 670
      },
      {
        name: "Tron",
        img: "/tron.svg",
        symbol: "TRON",
        price: 0.08,
        amount: 8367
      },
      {
        name: "Solana",
        img: "/solana.svg",
        symbol: "Solana",
        price: 138,
        amount: 567
      },
      {
        name: "Tether",
        img: "/tether.svg",
        symbol: "USDT",
        price: 1,
        amount: 670
      },
      {
        name: "Tron",
        img: "/tron.svg",
        symbol: "TRON",
        price: 0.08,
        amount: 8367
      },
      {
        name: "Solana",
        img: "/solana.svg",
        symbol: "Solana",
        price: 138,
        amount: 567
      },
      {
        name: "Tether",
        img: "/tether.svg",
        symbol: "USDT",
        price: 1,
        amount: 670
      },
      {
        name: "Tron",
        img: "/tron.svg",
        symbol: "TRON",
        price: 0.08,
        amount: 8367
      }
    ];
    const fiats = [
      {
        name: "United States Dollar",
        img: "/ripple.svg",
        symbol: "USD",
        price: 0.42,
        amount: 367
      },
      {
        name: "Euros",
        img: "/ripple.svg",
        symbol: "EUR",
        price: 0.42,
        amount: 367
      },
      {
        name: "British Pounds",
        img: "/ripple.svg",
        symbol: "GBP",
        price: 0.42,
        amount: 367
      },
      {
        name: "Nigerian Naira",
        img: "/ripple.svg",
        symbol: "NGN",
        price: 0.42,
        amount: 367
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_buttons = IonButtons;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_col = IonCol;
      const _component_ion_grid = IonGrid;
      const _component_ion_row = IonRow;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_list = IonList;
      const _component_asset = __nuxt_component_16;
      const _component_AddAsset = _sfc_main$2;
      const _component_tabs = __nuxt_component_18;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, { class: "ion-no-border" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_buttons, { slot: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_button, {
                                fill: "solid",
                                style: { "--border-radius": "10px" },
                                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      slot: "end",
                                      icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_icon, {
                                        slot: "end",
                                        icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                      }, null, 8, ["icon"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_button, {
                                  fill: "solid",
                                  style: { "--border-radius": "10px" },
                                  onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      slot: "end",
                                      icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_buttons, { slot: "primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                fill: "solid",
                                style: { "--border-radius": "10px" },
                                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, {
                                    slot: "end",
                                    icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_toolbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_buttons, { slot: "primary" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_button, {
                              fill: "solid",
                              style: { "--border-radius": "10px" },
                              onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  slot: "end",
                                  icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_header, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`+1.12 %`);
                            } else {
                              return [
                                createTextVNode("+1.12 %")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-d3c9ed47${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_card_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<strong style="${ssrRenderStyle({ "font-size": "150%" })}" data-v-d3c9ed47${_scopeId4}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                            } else {
                              return [
                                createVNode("strong", { style: { "font-size": "150%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          size: "large",
                          icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                          style: { "margin-left": "10px" },
                          onClick: ($event) => hideTotal.value = !unref(hideTotal)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                            default: withCtx(() => [
                              createTextVNode("+1.12 %")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                            createVNode(_component_ion_card_title, null, {
                              default: withCtx(() => [
                                createVNode("strong", { style: { "font-size": "150%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_icon, {
                              size: "large",
                              icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                              style: { "margin-left": "10px" },
                              onClick: ($event) => hideTotal.value = !unref(hideTotal)
                            }, null, 8, ["icon", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card_header, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                          default: withCtx(() => [
                            createTextVNode("+1.12 %")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                          createVNode(_component_ion_card_title, null, {
                            default: withCtx(() => [
                              createVNode("strong", { style: { "font-size": "150%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_icon, {
                            size: "large",
                            icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                            style: { "margin-left": "10px" },
                            onClick: ($event) => hideTotal.value = !unref(hideTotal)
                          }, null, 8, ["icon", "onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { class: "cardActions" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_col, { class: "Actions" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, { size: "large" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  size: "large",
                                  icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp)
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "x-small", "color": "white" })}" data-v-d3c9ed47${_scopeId3}>Send</span>`);
                      } else {
                        return [
                          createVNode(_component_ion_button, { size: "large" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Send")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_col, { class: "Actions" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, { size: "large" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  size: "large",
                                  icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp)
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "x-small", "color": "white" })}" data-v-d3c9ed47${_scopeId3}>Recieve</span>`);
                      } else {
                        return [
                          createVNode(_component_ion_button, { size: "large" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Recieve")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_col, { class: "Actions" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, { size: "large" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  size: "large",
                                  icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp)
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "x-small", "color": "white" })}" data-v-d3c9ed47${_scopeId3}>Buy</span>`);
                      } else {
                        return [
                          createVNode(_component_ion_button, { size: "large" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Buy")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_col, { class: "Actions" }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, { size: "large" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              size: "large",
                              icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Send")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_col, { class: "Actions" }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, { size: "large" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              size: "large",
                              icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Recieve")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_col, { class: "Actions" }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, { size: "large" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              size: "large",
                              icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Buy")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_grid, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_col, { size: "8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_segment, {
                                      scrollable: true,
                                      value: unref(switchAssets)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_segment_button, {
                                            value: "home",
                                            onClick: ($event) => switchAssets.value = "crypto"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_segment_button, {
                                            value: "heart",
                                            onClick: ($event) => switchAssets.value = "fiat"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ion_segment_button, {
                                              value: "home",
                                              onClick: ($event) => switchAssets.value = "crypto"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(_component_ion_segment_button, {
                                              value: "heart",
                                              onClick: ($event) => switchAssets.value = "fiat"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_segment, {
                                        scrollable: true,
                                        value: unref(switchAssets)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_segment_button, {
                                            value: "home",
                                            onClick: ($event) => switchAssets.value = "crypto"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(_component_ion_segment_button, {
                                            value: "heart",
                                            onClick: ($event) => switchAssets.value = "fiat"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }, 8, ["value"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_col, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_button, {
                                      size: "small",
                                      onClick: ($event) => setOpen(true)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, 8, ["icon"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_button, {
                                        size: "small",
                                        onClick: ($event) => setOpen(true)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_col, { size: "8" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_segment, {
                                      scrollable: true,
                                      value: unref(switchAssets)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_segment_button, {
                                          value: "home",
                                          onClick: ($event) => switchAssets.value = "crypto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_ion_segment_button, {
                                          value: "heart",
                                          onClick: ($event) => switchAssets.value = "fiat"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }, 8, ["value"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_col),
                                createVNode(_component_ion_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_button, {
                                      size: "small",
                                      onClick: ($event) => setOpen(true)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, 8, ["icon"])
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_col, { size: "8" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_segment, {
                                    scrollable: true,
                                    value: unref(switchAssets)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_segment_button, {
                                        value: "home",
                                        onClick: ($event) => switchAssets.value = "crypto"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_ion_segment_button, {
                                        value: "heart",
                                        onClick: ($event) => switchAssets.value = "fiat"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }, 8, ["value"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_col),
                              createVNode(_component_ion_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_button, {
                                    size: "small",
                                    onClick: ($event) => setOpen(true)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_grid, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_col, { size: "8" }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_segment, {
                                  scrollable: true,
                                  value: unref(switchAssets)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_segment_button, {
                                      value: "home",
                                      onClick: ($event) => switchAssets.value = "crypto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_ion_segment_button, {
                                      value: "heart",
                                      onClick: ($event) => switchAssets.value = "fiat"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_col),
                            createVNode(_component_ion_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_ion_button, {
                                  size: "small",
                                  onClick: ($event) => setOpen(true)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "max-height": "40%", "min-height": "40%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "box-shadow": "none", "border": "1px solid black" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(switchAssets) == "crypto") {
                    _push3(`<!--[-->`);
                    ssrRenderList(cryptos, (crypto, index) => {
                      _push3(ssrRenderComponent(_component_ion_list, { key: index }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_asset, {
                              name: crypto.name,
                              symbol: crypto.symbol,
                              price: crypto.price,
                              amount: crypto.amount,
                              img: crypto.img
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_asset, {
                                name: crypto.name,
                                symbol: crypto.symbol,
                                price: crypto.price,
                                amount: crypto.amount,
                                img: crypto.img
                              }, null, 8, ["name", "symbol", "price", "amount", "img"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!--[-->`);
                    ssrRenderList(fiats, (fiat, index) => {
                      _push3(ssrRenderComponent(_component_ion_list, {
                        key: fiat.symbol
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_asset, {
                              name: fiat.name,
                              symbol: fiat.symbol,
                              price: fiat.price,
                              amount: fiat.amount,
                              img: fiat.img
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_asset, {
                                name: fiat.name,
                                symbol: fiat.symbol,
                                price: fiat.price,
                                amount: fiat.amount,
                                img: fiat.img
                              }, null, 8, ["name", "symbol", "price", "amount", "img"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                      return createVNode(_component_ion_list, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_asset, {
                            name: crypto.name,
                            symbol: crypto.symbol,
                            price: crypto.price,
                            amount: crypto.amount,
                            img: crypto.img
                          }, null, 8, ["name", "symbol", "price", "amount", "img"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, renderList(fiats, (fiat, index) => {
                      return createVNode(_component_ion_list, {
                        key: fiat.symbol
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_asset, {
                            name: fiat.name,
                            symbol: fiat.symbol,
                            price: fiat.price,
                            amount: fiat.amount,
                            img: fiat.img
                          }, null, 8, ["name", "symbol", "price", "amount", "img"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AddAsset, {
              "is-crypto": unref(switchAssets),
              "ismodal-open": unref(ismodalOpen),
              onCloseModal: ($event) => setOpen(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_tabs, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_header, { class: "ion-no-border" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_buttons, { slot: "primary" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            fill: "solid",
                            style: { "--border-radius": "10px" },
                            onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                slot: "end",
                                icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_header, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                        default: withCtx(() => [
                          createTextVNode("+1.12 %")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                        createVNode(_component_ion_card_title, null, {
                          default: withCtx(() => [
                            createVNode("strong", { style: { "font-size": "150%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_icon, {
                          size: "large",
                          icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                          style: { "margin-left": "10px" },
                          onClick: ($event) => hideTotal.value = !unref(hideTotal)
                        }, null, 8, ["icon", "onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { class: "cardActions" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { class: "Actions" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, { size: "large" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            size: "large",
                            icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp)
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Send")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_col, { class: "Actions" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, { size: "large" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            size: "large",
                            icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp)
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Recieve")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_col, { class: "Actions" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, { size: "large" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            size: "large",
                            icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp)
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { style: { "font-size": "x-small", "color": "white" } }, "Buy")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { style: { "box-shadow": "none" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_grid, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, { size: "8" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_segment, {
                                scrollable: true,
                                value: unref(switchAssets)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_segment_button, {
                                    value: "home",
                                    onClick: ($event) => switchAssets.value = "crypto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_ion_segment_button, {
                                    value: "heart",
                                    onClick: ($event) => switchAssets.value = "fiat"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_col),
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                size: "small",
                                onClick: ($event) => setOpen(true)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, { icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate) }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { style: { "max-height": "40%", "min-height": "40%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "box-shadow": "none", "border": "1px solid black" } }, {
                default: withCtx(() => [
                  unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                    return createVNode(_component_ion_list, { key: index }, {
                      default: withCtx(() => [
                        createVNode(_component_asset, {
                          name: crypto.name,
                          symbol: crypto.symbol,
                          price: crypto.price,
                          amount: crypto.amount,
                          img: crypto.img
                        }, null, 8, ["name", "symbol", "price", "amount", "img"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, renderList(fiats, (fiat, index) => {
                    return createVNode(_component_ion_list, {
                      key: fiat.symbol
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_asset, {
                          name: fiat.name,
                          symbol: fiat.symbol,
                          price: fiat.price,
                          amount: fiat.amount,
                          img: fiat.img
                        }, null, 8, ["name", "symbol", "price", "amount", "img"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(_component_AddAsset, {
                "is-crypto": unref(switchAssets),
                "ismodal-open": unref(ismodalOpen),
                onCloseModal: ($event) => setOpen(false)
              }, null, 8, ["is-crypto", "ismodal-open", "onCloseModal"]),
              createVNode(_component_tabs)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3c9ed47"]]);

export { home as default };
//# sourceMappingURL=home-accfa2bd.mjs.map
