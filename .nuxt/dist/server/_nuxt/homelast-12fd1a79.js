import { h as IonPage, i as IonHeader, I as IonToolbar, l as IonCard, v as IonChip, w as IonAvatar, g as IonLabel, k as IonButton, f as IonIcon, m as IonCardHeader, n as IonCardSubtitle, o as IonCardTitle, s as IonSegment, t as IonSegmentButton, u as IonList, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_16, a as _sfc_main$1 } from "./addAsset-55eb35ba.js";
import { _ as _sfc_main$2 } from "./allAssets-3b812e9c.js";
import { defineComponent, ref, watch, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { u as useDarkMode } from "./useDarkMode-386da5e9.js";
import { m as moon, t as thumbsUp, g as settings, e as eyeOffSharp, a as arrowUpCircleSharp, b as arrowDownCircleSharp, h as peopleCircleOutline, f as duplicate, o as open } from "./index-f41f3193.js";
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
  __name: "homelast",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    const switchAssets = ref("crypto");
    const hideTotal = ref(false);
    const isAddAssetsModalOpen = ref(false);
    const isAllAssetsModalOpen = ref(false);
    const setAddAssetOpen = (isOpen) => {
      isAddAssetsModalOpen.value = isOpen;
    };
    const setAllAssetsOpen = (isOpen) => {
      isAllAssetsModalOpen.value = isOpen;
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
      const _component_ion_card = IonCard;
      const _component_ion_chip = IonChip;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_label = IonLabel;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_list = IonList;
      const _component_asset = __nuxt_component_16;
      const _component_AddAsset = _sfc_main$1;
      const _component_AllAssets = _sfc_main$2;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, {
              class: "ion-no-border",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: { "border-bottom-right-radius": "20%", "border-bottom-left-radius": "20%", "background-image": "url('/bg1.jpg')" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card, { style: { "width": "100%", "margin-left": "0px", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "margin-top": "0px", "margin-bottom": "0px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_chip, {
                                class: "ionchip",
                                color: "",
                                style: { "height": "50px", "padding": "5%", "margin-left": "5%", "background": "none" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_avatar, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img alt="Silhouette of a person&#39;s head" src="https://ionicframework.com/docs/img/demos/avatar.svg" data-v-26a02cd5${_scopeId6}>`);
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_label, { color: "secondary" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Harvey Ana`);
                                        } else {
                                          return [
                                            createTextVNode("Harvey Ana")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                                      createVNode(_component_ion_label, { color: "secondary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Harvey Ana")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_button, {
                                fill: "clear",
                                style: { "--border-radius": "12px", "height": "40px" },
                                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      color: "secondary",
                                      slot: "end",
                                      icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_icon, {
                                        color: "secondary",
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
                                createVNode(_component_ion_chip, {
                                  class: "ionchip",
                                  color: "",
                                  style: { "height": "50px", "padding": "5%", "margin-left": "5%", "background": "none" }
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
                                    createVNode(_component_ion_label, { color: "secondary" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Harvey Ana")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_button, {
                                  fill: "clear",
                                  style: { "--border-radius": "12px", "height": "40px" },
                                  onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      color: "secondary",
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
                        _push4(ssrRenderComponent(_component_ion_label, {
                          color: "secondary",
                          style: { "margin-top": "5px", "margin-left": "8%", "font-size": "115%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Welcome Back `);
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                color: "secondary",
                                slot: "end",
                                icon: "ioniconsThumbsUp" in _ctx ? _ctx.ioniconsThumbsUp : unref(thumbsUp)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode("Welcome Back "),
                                createVNode(_component_ion_icon, {
                                  color: "secondary",
                                  slot: "end",
                                  icon: "ioniconsThumbsUp" in _ctx ? _ctx.ioniconsThumbsUp : unref(thumbsUp)
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_toolbar, { style: { "margin-bottom": "25%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                class: "",
                                style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "margin-bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card, {
                                      button: true,
                                      class: "",
                                      style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "100%", "width": "25%", "border-radius": "12px", "margin-right": "-1%" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_button, {
                                            size: "large",
                                            fill: "clear"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_icon, {
                                                  icon: "ioniconsSettings" in _ctx ? _ctx.ioniconsSettings : unref(settings),
                                                  color: "primary",
                                                  size: "large",
                                                  style: {}
                                                }, null, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_card, {
                                      button: true,
                                      style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "70%", "border-radius": "12px" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_card_header, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`+1.12 %`);
                                                    } else {
                                                      return [
                                                        createTextVNode("+1.12 %")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-26a02cd5${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-26a02cd5${_scopeId8}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                                    } else {
                                                      return [
                                                        createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_ion_icon, {
                                                  color: "primary",
                                                  size: "large",
                                                  icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                                                  style: { "margin-left": "10px" },
                                                  onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
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
                                          }, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_card, {
                                        button: true,
                                        class: "",
                                        style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "100%", "width": "25%", "border-radius": "12px", "margin-right": "-1%" }
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
                                        style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "70%", "border-radius": "12px" }
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
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card, {
                                  class: "",
                                  style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "margin-bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card, {
                                      button: true,
                                      class: "",
                                      style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "100%", "width": "25%", "border-radius": "12px", "margin-right": "-1%" }
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
                                      style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "70%", "border-radius": "12px" }
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
                          createVNode(_component_ion_card, { style: { "width": "100%", "margin-left": "0px", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "margin-top": "0px", "margin-bottom": "0px" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_chip, {
                                class: "ionchip",
                                color: "",
                                style: { "height": "50px", "padding": "5%", "margin-left": "5%", "background": "none" }
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
                                  createVNode(_component_ion_label, { color: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Harvey Ana")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_button, {
                                fill: "clear",
                                style: { "--border-radius": "12px", "height": "40px" },
                                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, {
                                    color: "secondary",
                                    slot: "end",
                                    icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_label, {
                            color: "secondary",
                            style: { "margin-top": "5px", "margin-left": "8%", "font-size": "115%" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Welcome Back "),
                              createVNode(_component_ion_icon, {
                                color: "secondary",
                                slot: "end",
                                icon: "ioniconsThumbsUp" in _ctx ? _ctx.ioniconsThumbsUp : unref(thumbsUp)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_toolbar, { style: { "margin-bottom": "25%" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                class: "",
                                style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "margin-bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card, {
                                    button: true,
                                    class: "",
                                    style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "100%", "width": "25%", "border-radius": "12px", "margin-right": "-1%" }
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
                                    style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "70%", "border-radius": "12px" }
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
                    createVNode(_component_ion_toolbar, { style: { "border-bottom-right-radius": "20%", "border-bottom-left-radius": "20%", "background-image": "url('/bg1.jpg')" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card, { style: { "width": "100%", "margin-left": "0px", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "margin-top": "0px", "margin-bottom": "0px" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_chip, {
                              class: "ionchip",
                              color: "",
                              style: { "height": "50px", "padding": "5%", "margin-left": "5%", "background": "none" }
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
                                createVNode(_component_ion_label, { color: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Harvey Ana")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_button, {
                              fill: "clear",
                              style: { "--border-radius": "12px", "height": "40px" },
                              onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  color: "secondary",
                                  slot: "end",
                                  icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_label, {
                          color: "secondary",
                          style: { "margin-top": "5px", "margin-left": "8%", "font-size": "115%" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Welcome Back "),
                            createVNode(_component_ion_icon, {
                              color: "secondary",
                              slot: "end",
                              icon: "ioniconsThumbsUp" in _ctx ? _ctx.ioniconsThumbsUp : unref(thumbsUp)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_toolbar, { style: { "margin-bottom": "25%" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, {
                              class: "",
                              style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "margin-bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card, {
                                  button: true,
                                  class: "",
                                  style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "100%", "width": "25%", "border-radius": "12px", "margin-right": "-1%" }
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
                                  style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "70%", "border-radius": "12px" }
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%", "z-index": "99", "position": "relative", "top": "-14%", "margin-left": "0px", "margin-right": "0px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, {
                          color: "primary",
                          style: { "margin-top": "17%", "margin-left": "23%", "font-size": "70%", "text-transform": "lowercase" }
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
                          createVNode(_component_ion_card_subtitle, {
                            color: "primary",
                            style: { "margin-top": "17%", "margin-left": "23%", "font-size": "70%", "text-transform": "lowercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Send")
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
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, {
                          color: "primary",
                          style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
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
                          createVNode(_component_ion_card_subtitle, {
                            color: "primary",
                            style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Recieve")
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
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "box-shadow": "20px" },
                    onClick: ($event) => _ctx.$router.push("/p2p")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, {
                          color: "primary",
                          style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`P2P ex`);
                            } else {
                              return [
                                createTextVNode("P2P ex")
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
                          createVNode(_component_ion_card_subtitle, {
                            color: "primary",
                            style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("P2P ex")
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
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_card_subtitle, {
                          color: "primary",
                          style: { "margin-top": "17%", "margin-left": "23%", "font-size": "70%", "text-transform": "lowercase" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Send")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      button: true,
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_card_subtitle, {
                          color: "primary",
                          style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Recieve")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      button: true,
                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "box-shadow": "20px" },
                      onClick: ($event) => _ctx.$router.push("/p2p")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          color: "primary",
                          icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                          size: "large",
                          style: { "align-self": "flex-start" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_card_subtitle, {
                          color: "primary",
                          style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("P2P ex")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "min-height": "16%", "max-height": "16%", "margin-top": "0px", "position": "relative", "top": "-14%" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_segment, {
                    color: "primary",
                    scrollable: true,
                    value: unref(switchAssets),
                    style: { "width": "75%", "height": "30%", "z-index": "99" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_segment_button, {
                          value: "crypto",
                          onClick: ($event) => switchAssets.value = "crypto"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_label, { style: { "font-size": "75%" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`crypto`);
                                  } else {
                                    return [
                                      createTextVNode("crypto")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("crypto")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_segment_button, {
                          value: "fiat",
                          onClick: ($event) => switchAssets.value = "fiat"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_label, { style: { "font-size": "75%" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`fiat`);
                                  } else {
                                    return [
                                      createTextVNode("fiat")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("fiat")
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
                          createVNode(_component_ion_segment_button, {
                            value: "crypto",
                            onClick: ($event) => switchAssets.value = "crypto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                                default: withCtx(() => [
                                  createTextVNode("crypto")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_segment_button, {
                            value: "fiat",
                            onClick: ($event) => switchAssets.value = "fiat"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                                default: withCtx(() => [
                                  createTextVNode("fiat")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "width": "25%", "height": "60%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_button, {
                          fill: "clear",
                          size: "large",
                          onClick: ($event) => setAddAssetOpen(true)
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
                            onClick: ($event) => setAddAssetOpen(true)
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
                    createVNode(_component_ion_segment, {
                      color: "primary",
                      scrollable: true,
                      value: unref(switchAssets),
                      style: { "width": "75%", "height": "30%", "z-index": "99" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_segment_button, {
                          value: "crypto",
                          onClick: ($event) => switchAssets.value = "crypto"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                              default: withCtx(() => [
                                createTextVNode("crypto")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_ion_segment_button, {
                          value: "fiat",
                          onClick: ($event) => switchAssets.value = "fiat"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                              default: withCtx(() => [
                                createTextVNode("fiat")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(_component_ion_card, { style: { "width": "25%", "height": "60%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_button, {
                          fill: "clear",
                          size: "large",
                          onClick: ($event) => setAddAssetOpen(true)
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "max-height": "30%", "min-height": "30%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "border-radius": "12px", "box-shadow": "none", "background": "none", "position": "relative", "top": "-14%", "margin-left": "0px", "margin-right": "0px" } }, {
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "width": "50%", "min-height": "5%", "max-height": "8%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "background": "none", "box-shadow": "none", "margin-top": "-3%", "position": "relative", "top": "-15%" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_button, {
                    fill: "clear",
                    size: "small",
                    onClick: ($event) => setAllAssetsOpen(true)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          slot: "end",
                          color: "primary",
                          icon: "ioniconsOpen" in _ctx ? _ctx.ioniconsOpen : unref(open),
                          style: { "font-size": "200%" }
                        }, null, _parent4, _scopeId3));
                        _push4(`show all assets`);
                      } else {
                        return [
                          createVNode(_component_ion_icon, {
                            slot: "end",
                            color: "primary",
                            icon: "ioniconsOpen" in _ctx ? _ctx.ioniconsOpen : unref(open),
                            style: { "font-size": "200%" }
                          }, null, 8, ["icon"]),
                          createTextVNode("show all assets")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_button, {
                      fill: "clear",
                      size: "small",
                      onClick: ($event) => setAllAssetsOpen(true)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          slot: "end",
                          color: "primary",
                          icon: "ioniconsOpen" in _ctx ? _ctx.ioniconsOpen : unref(open),
                          style: { "font-size": "200%" }
                        }, null, 8, ["icon"]),
                        createTextVNode("show all assets")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AddAsset, {
              "ismodal-open": unref(isAddAssetsModalOpen),
              onCloseModal: ($event) => setAddAssetOpen(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AllAssets, {
              "is-all-assetmodal-open": unref(isAllAssetsModalOpen),
              onCloseModal: ($event) => setAllAssetsOpen(false)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_header, {
                class: "ion-no-border",
                style: {}
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, { style: { "border-bottom-right-radius": "20%", "border-bottom-left-radius": "20%", "background-image": "url('/bg1.jpg')" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card, { style: { "width": "100%", "margin-left": "0px", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "margin-top": "0px", "margin-bottom": "0px" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_chip, {
                            class: "ionchip",
                            color: "",
                            style: { "height": "50px", "padding": "5%", "margin-left": "5%", "background": "none" }
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
                              createVNode(_component_ion_label, { color: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode("Harvey Ana")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            style: { "--border-radius": "12px", "height": "40px" },
                            onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                color: "secondary",
                                slot: "end",
                                icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_label, {
                        color: "secondary",
                        style: { "margin-top": "5px", "margin-left": "8%", "font-size": "115%" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Welcome Back "),
                          createVNode(_component_ion_icon, {
                            color: "secondary",
                            slot: "end",
                            icon: "ioniconsThumbsUp" in _ctx ? _ctx.ioniconsThumbsUp : unref(thumbsUp)
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_toolbar, { style: { "margin-bottom": "25%" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card, {
                            class: "",
                            style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "margin-bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                button: true,
                                class: "",
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "100%", "width": "25%", "border-radius": "12px", "margin-right": "-1%" }
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
                                style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "100%", "width": "70%", "border-radius": "12px" }
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
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%", "z-index": "99", "position": "relative", "top": "-14%", "margin-left": "0px", "margin-right": "0px" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        color: "primary",
                        icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                        size: "large",
                        style: { "align-self": "flex-start" }
                      }, null, 8, ["icon"]),
                      createVNode(_component_ion_card_subtitle, {
                        color: "primary",
                        style: { "margin-top": "17%", "margin-left": "23%", "font-size": "70%", "text-transform": "lowercase" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Send")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        color: "primary",
                        icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                        size: "large",
                        style: { "align-self": "flex-start" }
                      }, null, 8, ["icon"]),
                      createVNode(_component_ion_card_subtitle, {
                        color: "primary",
                        style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Recieve")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    button: true,
                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "box-shadow": "20px" },
                    onClick: ($event) => _ctx.$router.push("/p2p")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        color: "primary",
                        icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                        size: "large",
                        style: { "align-self": "flex-start" }
                      }, null, 8, ["icon"]),
                      createVNode(_component_ion_card_subtitle, {
                        color: "primary",
                        style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("P2P ex")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "min-height": "16%", "max-height": "16%", "margin-top": "0px", "position": "relative", "top": "-14%" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_segment, {
                    color: "primary",
                    scrollable: true,
                    value: unref(switchAssets),
                    style: { "width": "75%", "height": "30%", "z-index": "99" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_segment_button, {
                        value: "crypto",
                        onClick: ($event) => switchAssets.value = "crypto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                            default: withCtx(() => [
                              createTextVNode("crypto")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_ion_segment_button, {
                        value: "fiat",
                        onClick: ($event) => switchAssets.value = "fiat"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { style: { "font-size": "75%" } }, {
                            default: withCtx(() => [
                              createTextVNode("fiat")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["value"]),
                  createVNode(_component_ion_card, { style: { "width": "25%", "height": "60%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, {
                        fill: "clear",
                        size: "large",
                        onClick: ($event) => setAddAssetOpen(true)
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
              createVNode(_component_ion_card, { style: { "max-height": "30%", "min-height": "30%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "border-radius": "12px", "box-shadow": "none", "background": "none", "position": "relative", "top": "-14%", "margin-left": "0px", "margin-right": "0px" } }, {
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
              createVNode(_component_ion_card, { style: { "width": "50%", "min-height": "5%", "max-height": "8%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "background": "none", "box-shadow": "none", "margin-top": "-3%", "position": "relative", "top": "-15%" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_button, {
                    fill: "clear",
                    size: "small",
                    onClick: ($event) => setAllAssetsOpen(true)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        color: "primary",
                        icon: "ioniconsOpen" in _ctx ? _ctx.ioniconsOpen : unref(open),
                        style: { "font-size": "200%" }
                      }, null, 8, ["icon"]),
                      createTextVNode("show all assets")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_AddAsset, {
                "ismodal-open": unref(isAddAssetsModalOpen),
                onCloseModal: ($event) => setAddAssetOpen(false)
              }, null, 8, ["ismodal-open", "onCloseModal"]),
              createVNode(_component_AllAssets, {
                "is-all-assetmodal-open": unref(isAllAssetsModalOpen),
                onCloseModal: ($event) => setAllAssetsOpen(false)
              }, null, 8, ["is-all-assetmodal-open", "onCloseModal"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const homelast_vue_vue_type_style_index_0_scoped_26a02cd5_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homelast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homelast = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26a02cd5"]]);
export {
  homelast as default
};
//# sourceMappingURL=homelast-12fd1a79.js.map
