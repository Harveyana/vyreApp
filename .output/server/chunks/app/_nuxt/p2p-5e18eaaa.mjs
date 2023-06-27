import { _ as _export_sfc, h as IonPage, i as IonHeader, I as IonToolbar, k as IonButton, f as IonIcon, j as IonButtons, l as IonCard, m as IonCardHeader, n as IonCardSubtitle, o as IonCardTitle, g as IonLabel, A as IonFooter, s as IonSegment, t as IonSegmentButton, u as IonList } from '../server.mjs';
import { a as _sfc_main$1, _ as __nuxt_component_16 } from './addAsset-55eb35ba.mjs';
import { useSSRContext, defineComponent, ref, watch, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { u as useDarkMode } from './useDarkMode-386da5e9.mjs';
import { j as home, m as moon, e as eyeOffSharp } from './index-f41f3193.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "p2p",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    const switchTab = ref("Orders");
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
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_buttons = IonButtons;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_label = IonLabel;
      const _component_AddAsset = _sfc_main$1;
      const _component_ion_footer = IonFooter;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_list = IonList;
      const _component_asset = __nuxt_component_16;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, { class: "ion-no-border" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, {
                          fill: "clear",
                          style: { "--border-radius": "10px" },
                          onClick: ($event) => _ctx.$router.push("/homelast")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                slot: "end",
                                icon: "ioniconsHome" in _ctx ? _ctx.ioniconsHome : unref(home)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  slot: "end",
                                  icon: "ioniconsHome" in _ctx ? _ctx.ioniconsHome : unref(home)
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_buttons, { slot: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_button, {
                                fill: "clear",
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
                                  fill: "clear",
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
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            style: { "--border-radius": "10px" },
                            onClick: ($event) => _ctx.$router.push("/homelast")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                slot: "end",
                                icon: "ioniconsHome" in _ctx ? _ctx.ioniconsHome : unref(home)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_buttons, { slot: "primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                fill: "clear",
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
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card, {
                          button: true,
                          style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`+1.12 %`);
                                        } else {
                                          return [
                                            createTextVNode("+1.12 %")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-2827dc8b${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-2827dc8b${_scopeId6}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                        } else {
                                          return [
                                            createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      color: "primary",
                                      size: "large",
                                      icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                                      style: { "margin-left": "10px" },
                                      onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                        default: withCtx(() => [
                                          createTextVNode("+1.12 %")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                        createVNode(_component_ion_card_title, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ion_icon, {
                                          color: "primary",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card_header, { style: {} }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                      default: withCtx(() => [
                                        createTextVNode("+1.12 %")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                      createVNode(_component_ion_card_title, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_icon, {
                                        color: "primary",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                button: true,
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "max-height": "100%", "width": "50%", "border-radius": "12px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-2827dc8b${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<strong style="${ssrRenderStyle({ "font-size": "50%" })}" data-v-2827dc8b${_scopeId7}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260")}</strong>`);
                                              } else {
                                                return [
                                                  createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          _push7(ssrRenderComponent(_component_ion_label, {
                                            color: "primary",
                                            style: { "font-size": "80%" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Available`);
                                              } else {
                                                return [
                                                  createTextVNode("Available")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                              createVNode(_component_ion_card_title, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode(_component_ion_label, {
                                              color: "primary",
                                              style: { "font-size": "80%" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Available")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_card_header, { style: {} }, {
                                        default: withCtx(() => [
                                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                            createVNode(_component_ion_card_title, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode(_component_ion_label, {
                                            color: "primary",
                                            style: { "font-size": "80%" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Available")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_card, {
                                button: true,
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "50%", "border-radius": "12px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-2827dc8b${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<strong style="${ssrRenderStyle({ "font-size": "50%" })}" data-v-2827dc8b${_scopeId7}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$1,260,351")}</strong>`);
                                              } else {
                                                return [
                                                  createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          _push7(ssrRenderComponent(_component_ion_label, {
                                            color: "primary",
                                            style: { "font-size": "80%" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Processing`);
                                              } else {
                                                return [
                                                  createTextVNode("Processing")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                              createVNode(_component_ion_card_title, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode(_component_ion_label, {
                                              color: "primary",
                                              style: { "font-size": "80%" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Processing")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_card_header, { style: {} }, {
                                        default: withCtx(() => [
                                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                            createVNode(_component_ion_card_title, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode(_component_ion_label, {
                                            color: "primary",
                                            style: { "font-size": "80%" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Processing")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card, {
                                  button: true,
                                  style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "max-height": "100%", "width": "50%", "border-radius": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, { style: {} }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                          createVNode(_component_ion_card_title, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_ion_label, {
                                          color: "primary",
                                          style: { "font-size": "80%" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Available")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_card, {
                                  button: true,
                                  style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "50%", "border-radius": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, { style: {} }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                          createVNode(_component_ion_card_title, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_ion_label, {
                                          color: "primary",
                                          style: { "font-size": "80%" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Processing")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card, {
                            button: true,
                            style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, { style: {} }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("+1.12 %")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                    createVNode(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx(() => [
                                        createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_icon, {
                                      color: "primary",
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
                          createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                button: true,
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "max-height": "100%", "width": "50%", "border-radius": "12px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, { style: {} }, {
                                    default: withCtx(() => [
                                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                        createVNode(_component_ion_card_title, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_ion_label, {
                                        color: "primary",
                                        style: { "font-size": "80%" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Available")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_card, {
                                button: true,
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "50%", "border-radius": "12px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, { style: {} }, {
                                    default: withCtx(() => [
                                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                        createVNode(_component_ion_card_title, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_ion_label, {
                                        color: "primary",
                                        style: { "font-size": "80%" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Processing")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, {
                          fill: "clear",
                          style: { "--border-radius": "10px" },
                          onClick: ($event) => _ctx.$router.push("/homelast")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              slot: "end",
                              icon: "ioniconsHome" in _ctx ? _ctx.ioniconsHome : unref(home)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_ion_buttons, { slot: "primary" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_button, {
                              fill: "clear",
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
                    }),
                    createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card, {
                          button: true,
                          style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card_header, { style: {} }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("+1.12 %")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                  createVNode(_component_ion_card_title, { color: "primary" }, {
                                    default: withCtx(() => [
                                      createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_icon, {
                                    color: "primary",
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
                        createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, {
                              button: true,
                              style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "max-height": "100%", "width": "50%", "border-radius": "12px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, { style: {} }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                      createVNode(_component_ion_card_title, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "80%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Available")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_card, {
                              button: true,
                              style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "50%", "border-radius": "12px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, { style: {} }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                      createVNode(_component_ion_card_title, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "80%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Processing")
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
            _push2(ssrRenderComponent(_component_ion_footer, {
              class: "ion-no-border",
              style: { "min-height": "65%", "background-image": "url('/bg1.jpg')", "border-top-left-radius": "38px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin-top": "0px", "margin-left": "0px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_segment, {
                          value: unref(switchTab),
                          style: { "width": "80%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "Orders",
                                onClick: ($event) => switchTab.value = "Orders"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Orders`);
                                        } else {
                                          return [
                                            createTextVNode("Orders")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Orders")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "Transactions",
                                onClick: ($event) => switchTab.value = "Transactions"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Transactions`);
                                        } else {
                                          return [
                                            createTextVNode("Transactions")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Transactions")
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
                                  value: "Orders",
                                  onClick: ($event) => switchTab.value = "Orders"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Orders")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_ion_segment_button, {
                                  value: "Transactions",
                                  onClick: ($event) => switchTab.value = "Transactions"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Transactions")
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
                          createVNode(_component_ion_segment, {
                            value: unref(switchTab),
                            style: { "width": "80%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_segment_button, {
                                value: "Orders",
                                onClick: ($event) => switchTab.value = "Orders"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Orders")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_ion_segment_button, {
                                value: "Transactions",
                                onClick: ($event) => switchTab.value = "Transactions"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Transactions")
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
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-7%", "box-shadow": "none" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(switchTab) == "Orders") {
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
                          unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin-top": "0px", "margin-left": "0px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_segment, {
                          value: unref(switchTab),
                          style: { "width": "80%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_segment_button, {
                              value: "Orders",
                              onClick: ($event) => switchTab.value = "Orders"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Orders")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_ion_segment_button, {
                              value: "Transactions",
                              onClick: ($event) => switchTab.value = "Transactions"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Transactions")
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
                    createVNode(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-7%", "box-shadow": "none" } }, {
                      default: withCtx(() => [
                        unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
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
              createVNode(_component_ion_header, { class: "ion-no-border" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, {
                        fill: "clear",
                        style: { "--border-radius": "10px" },
                        onClick: ($event) => _ctx.$router.push("/homelast")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            slot: "end",
                            icon: "ioniconsHome" in _ctx ? _ctx.ioniconsHome : unref(home)
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_ion_buttons, { slot: "primary" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            fill: "clear",
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
                  }),
                  createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card, {
                        button: true,
                        style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_header, { style: {} }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                default: withCtx(() => [
                                  createTextVNode("+1.12 %")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                createVNode(_component_ion_card_title, { color: "primary" }, {
                                  default: withCtx(() => [
                                    createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_icon, {
                                  color: "primary",
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
                      createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card, {
                            button: true,
                            style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "max-height": "100%", "width": "50%", "border-radius": "12px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, { style: {} }, {
                                default: withCtx(() => [
                                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                    createVNode(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx(() => [
                                        createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "80%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Available")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card, {
                            button: true,
                            style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "50%", "border-radius": "12px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, { style: {} }, {
                                default: withCtx(() => [
                                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" } }, [
                                    createVNode(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx(() => [
                                        createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "80%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Processing")
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
              createVNode(_component_ion_footer, {
                class: "ion-no-border",
                style: { "min-height": "65%", "background-image": "url('/bg1.jpg')", "border-top-left-radius": "38px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin-top": "0px", "margin-left": "0px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_segment, {
                        value: unref(switchTab),
                        style: { "width": "80%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_segment_button, {
                            value: "Orders",
                            onClick: ($event) => switchTab.value = "Orders"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Orders")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_segment_button, {
                            value: "Transactions",
                            onClick: ($event) => switchTab.value = "Transactions"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Transactions")
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
                  createVNode(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-7%", "box-shadow": "none" } }, {
                    default: withCtx(() => [
                      unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/p2p.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const p2p = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2827dc8b"]]);

export { p2p as default };
//# sourceMappingURL=p2p-5e18eaaa.mjs.map
