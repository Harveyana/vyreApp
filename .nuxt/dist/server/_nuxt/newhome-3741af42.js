import { I as IonPage, a as IonHeader, b as IonToolbar, x as IonChip, y as IonAvatar, p as IonLabel, d as IonButtons, e as IonButton, f as IonIcon, g as IonCard, h as IonCardHeader, i as IonCardSubtitle, j as IonCardTitle, k as IonCol, n as IonSegment, o as IonSegmentButton, q as IonList, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_17, a as _sfc_main$1, b as __nuxt_component_19 } from "./tabs-afb7b253.js";
import { defineComponent, ref, watch, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { u as useDarkMode } from "./useDarkMode-386da5e9.js";
import { m as moon, s as settings, e as eyeOffSharp, a as arrowUpCircleSharp, b as arrowDownCircleSharp, p as peopleCircleOutline, l as logoBitcoin, c as logoUsd, d as duplicate } from "./index-5e4492b3.js";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "newhome",
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
      const _component_ion_chip = IonChip;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_label = IonLabel;
      const _component_ion_buttons = IonButtons;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_col = IonCol;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_list = IonList;
      const _component_asset = __nuxt_component_17;
      const _component_AddAsset = _sfc_main$1;
      const _component_tabs = __nuxt_component_19;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, { class: "ion-no-border" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_chip, {
                          class: "ionchip",
                          color: "primary",
                          style: { "height": "50px", "padding": "5%", "margin-left": "5%", "margin-top": "3%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_avatar, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img alt="Silhouette of a person&#39;s head" src="https://ionicframework.com/docs/img/demos/avatar.svg" data-v-ca04fded${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        alt: "Silhouette of a person's head",
                                        src: "https://ionicframework.com/docs/img/demos/avatar.svg"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_label, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Harvey Ana`);
                                  } else {
                                    return [
                                      createTextVNode("Harvey Ana")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      alt: "Silhouette of a person's head",
                                      src: "https://ionicframework.com/docs/img/demos/avatar.svg"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Harvey Ana")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_buttons, { slot: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_button, {
                                style: { "--border-radius": "12px", "height": "50px" },
                                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      color: "primary",
                                      slot: "end",
                                      icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_icon, {
                                        color: "primary",
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
                                  style: { "--border-radius": "12px", "height": "50px" },
                                  onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      color: "primary",
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
                          createVNode(_component_ion_chip, {
                            class: "ionchip",
                            color: "primary",
                            style: { "height": "50px", "padding": "5%", "margin-left": "5%", "margin-top": "3%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    alt: "Silhouette of a person's head",
                                    src: "https://ionicframework.com/docs/img/demos/avatar.svg"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Harvey Ana")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_buttons, { slot: "primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                style: { "--border-radius": "12px", "height": "50px" },
                                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, {
                                    color: "primary",
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
                        createVNode(_component_ion_chip, {
                          class: "ionchip",
                          color: "primary",
                          style: { "height": "50px", "padding": "5%", "margin-left": "5%", "margin-top": "3%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_avatar, null, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "Silhouette of a person's head",
                                  src: "https://ionicframework.com/docs/img/demos/avatar.svg"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createTextVNode("Harvey Ana")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_buttons, { slot: "primary" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_button, {
                              style: { "--border-radius": "12px", "height": "50px" },
                              onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  color: "primary",
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
            _push2(ssrRenderComponent(_component_ion_card, {
              class: "",
              style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, {
                    button: true,
                    class: "",
                    style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "24%", "border-radius": "12px", "margin-right": "-1%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, {
                          size: "large",
                          fill: "clear"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                icon: "ioniconsSettings" in _ctx ? _ctx.ioniconsSettings : unref(settings),
                                color: "primary",
                                size: "large",
                                style: {}
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  icon: "ioniconsSettings" in _ctx ? _ctx.ioniconsSettings : unref(settings),
                                  color: "primary",
                                  size: "large",
                                  style: {}
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_button, {
                            size: "large",
                            fill: "clear"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: "ioniconsSettings" in _ctx ? _ctx.ioniconsSettings : unref(settings),
                                color: "primary",
                                size: "large",
                                style: {}
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "79%", "border-radius": "12px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_header, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`+1.12 %`);
                                  } else {
                                    return [
                                      createTextVNode("+1.12 %")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-ca04fded${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<strong style="${ssrRenderStyle({ "font-size": "115%" })}" data-v-ca04fded${_scopeId5}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                  } else {
                                    return [
                                      createVNode("strong", { style: { "font-size": "115%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                color: "primary",
                                size: "large",
                                icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                                style: { "margin-left": "10px" },
                                onClick: ($event) => hideTotal.value = !unref(hideTotal)
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
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
                                      createVNode("strong", { style: { "font-size": "115%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                        }, _parent4, _scopeId3));
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
                                createVNode(_component_ion_card_title, { color: "primary" }, {
                                  default: withCtx(() => [
                                    createVNode("strong", { style: { "font-size": "115%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card, {
                      button: true,
                      class: "",
                      style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "24%", "border-radius": "12px", "margin-right": "-1%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, {
                          size: "large",
                          fill: "clear"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: "ioniconsSettings" in _ctx ? _ctx.ioniconsSettings : unref(settings),
                              color: "primary",
                              size: "large",
                              style: {}
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      button: true,
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "79%", "border-radius": "12px" }
                    }, {
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
                              createVNode(_component_ion_card_title, { color: "primary" }, {
                                default: withCtx(() => [
                                  createVNode("strong", { style: { "font-size": "115%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_button, {
                          fill: "clear",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Send`);
                            } else {
                              return [
                                createTextVNode("Send")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_icon, {
                            color: "primary",
                            icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                            size: "large",
                            style: { "align-self": "flex-start" }
                          }, null, 8, ["icon"]),
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            onClick: ($event) => setOpen(true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Send")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_button, {
                          fill: "clear",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Recieve`);
                            } else {
                              return [
                                createTextVNode("Recieve")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_icon, {
                            color: "primary",
                            icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                            size: "large",
                            style: { "align-self": "flex-start" }
                          }, null, 8, ["icon"]),
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            onClick: ($event) => setOpen(true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Recieve")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_button, {
                          fill: "clear",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`P2P`);
                            } else {
                              return [
                                createTextVNode("P2P")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_icon, {
                            color: "primary",
                            icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                            size: "large",
                            style: { "align-self": "flex-start" }
                          }, null, 8, ["icon"]),
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            onClick: ($event) => setOpen(true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("P2P")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card, {
                      button: true,
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%", "margin-right": "-2%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_button, {
                          fill: "clear",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Send")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      button: true,
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%", "margin-right": "-2%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_button, {
                          fill: "clear",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Recieve")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      button: true,
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_button, {
                          fill: "clear",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("P2P")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "flex-start", "min-height": "16%", "max-height": "16%", "margin-top": "0px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_col, { style: { "width": "65%", "height": "90%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "flex-end", "margin-right": "-1%", "border-radius": "12px", "background": "none", "box-shadow": "none" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_segment, {
                          scrollable: true,
                          value: unref(switchAssets)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "home",
                                onClick: ($event) => switchAssets.value = "crypto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`crypto`);
                                        } else {
                                          return [
                                            createTextVNode("crypto")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      color: "primary",
                                      icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("crypto")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_icon, {
                                        color: "primary",
                                        icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin)
                                      }, null, 8, ["icon"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "heart",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`fiat`);
                                        } else {
                                          return [
                                            createTextVNode("fiat")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      color: "primary",
                                      icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("fiat")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_icon, {
                                        color: "primary",
                                        icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd)
                                      }, null, 8, ["icon"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_segment_button, {
                                  value: "home",
                                  onClick: ($event) => switchAssets.value = "crypto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("crypto")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_icon, {
                                      color: "primary",
                                      icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_ion_segment_button, {
                                  value: "heart",
                                  onClick: ($event) => switchAssets.value = "fiat"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("fiat")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_icon, {
                                      color: "primary",
                                      icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd)
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
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("crypto")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_icon, {
                                    color: "primary",
                                    icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_ion_segment_button, {
                                value: "heart",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("fiat")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_icon, {
                                    color: "primary",
                                    icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd)
                                  }, null, 8, ["icon"])
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
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "width": "30%", "height": "70%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, {
                          fill: "clear",
                          size: "large",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  size: "large",
                                  icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate)
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            size: "large",
                            onClick: ($event) => setOpen(true)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                size: "large",
                                icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_col, { style: { "width": "65%", "height": "90%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "flex-end", "margin-right": "-1%", "border-radius": "12px", "background": "none", "box-shadow": "none" } }, {
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
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("crypto")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_icon, {
                                  color: "primary",
                                  icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin)
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_ion_segment_button, {
                              value: "heart",
                              onClick: ($event) => switchAssets.value = "fiat"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("fiat")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_icon, {
                                  color: "primary",
                                  icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd)
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, { style: { "width": "30%", "height": "70%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, {
                          fill: "clear",
                          size: "large",
                          onClick: ($event) => setOpen(true)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              size: "large",
                              icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "max-height": "40%", "min-height": "40%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "border-radius": "12px" } }, {
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
                      createVNode(_component_ion_chip, {
                        class: "ionchip",
                        color: "primary",
                        style: { "height": "50px", "padding": "5%", "margin-left": "5%", "margin-top": "3%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_avatar, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                alt: "Silhouette of a person's head",
                                src: "https://ionicframework.com/docs/img/demos/avatar.svg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode("Harvey Ana")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_buttons, { slot: "primary" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            style: { "--border-radius": "12px", "height": "50px" },
                            onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                color: "primary",
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
              createVNode(_component_ion_card, {
                class: "",
                style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, {
                    button: true,
                    class: "",
                    style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "24%", "border-radius": "12px", "margin-right": "-1%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, {
                        size: "large",
                        fill: "clear"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: "ioniconsSettings" in _ctx ? _ctx.ioniconsSettings : unref(settings),
                            color: "primary",
                            size: "large",
                            style: {}
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "79%", "border-radius": "12px" }
                  }, {
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
                            createVNode(_component_ion_card_title, { color: "primary" }, {
                              default: withCtx(() => [
                                createVNode("strong", { style: { "font-size": "115%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        color: "primary",
                        icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                        size: "large",
                        style: { "align-self": "flex-start" }
                      }, null, 8, ["icon"]),
                      createVNode(_component_ion_button, {
                        fill: "clear",
                        onClick: ($event) => setOpen(true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Send")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        color: "primary",
                        icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                        size: "large",
                        style: { "align-self": "flex-start" }
                      }, null, 8, ["icon"]),
                      createVNode(_component_ion_button, {
                        fill: "clear",
                        onClick: ($event) => setOpen(true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Recieve")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "100%", "width": "30%", "border-radius": "12px", "padding": "3%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        color: "primary",
                        icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                        size: "large",
                        style: { "align-self": "flex-start" }
                      }, null, 8, ["icon"]),
                      createVNode(_component_ion_button, {
                        fill: "clear",
                        onClick: ($event) => setOpen(true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("P2P")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "flex-start", "min-height": "16%", "max-height": "16%", "margin-top": "0px" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { style: { "width": "65%", "height": "90%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "flex-end", "margin-right": "-1%", "border-radius": "12px", "background": "none", "box-shadow": "none" } }, {
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
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("crypto")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_icon, {
                                color: "primary",
                                icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_segment_button, {
                            value: "heart",
                            onClick: ($event) => switchAssets.value = "fiat"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("fiat")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_icon, {
                                color: "primary",
                                icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, { style: { "width": "30%", "height": "70%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, {
                        fill: "clear",
                        size: "large",
                        onClick: ($event) => setOpen(true)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            size: "large",
                            icon: "ioniconsDuplicate" in _ctx ? _ctx.ioniconsDuplicate : unref(duplicate)
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
              createVNode(_component_ion_card, { style: { "max-height": "40%", "min-height": "40%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "border-radius": "12px" } }, {
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
const newhome_vue_vue_type_style_index_0_scoped_ca04fded_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newhome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newhome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca04fded"]]);
export {
  newhome as default
};
//# sourceMappingURL=newhome-3741af42.js.map
