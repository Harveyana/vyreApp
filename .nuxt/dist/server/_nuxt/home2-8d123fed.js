import { I as IonPage, a as IonHeader, b as IonToolbar, d as IonCard, e as IonCardHeader, t as IonLabel, f as IonCardTitle, g as IonIcon, i as IonContent, l as IonButton, n as IonChip, o as IonAvatar, k as IonFooter, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_3, a as __nuxt_component_14 } from "./tabs-b3b23a53.js";
import { _ as _sfc_main$1 } from "./addAsset-0ea1a80a.js";
import { _ as __nuxt_component_19 } from "./allAssets-e10b1a18.js";
import { _ as __nuxt_component_17 } from "./assetpage-eb210bc7.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { j as eyeOffSharp, B as chevronUpOutline, w as walletSharp } from "./index-f08fc5f8.js";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
import "./useDarkMode-386da5e9.js";
import "./BTC-16888d2f.js";
const _imports_0 = "" + __publicAssetsURL("illustration(2).svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home2",
  __ssrInlineRender: true,
  setup(__props) {
    ref("crypto");
    const hideTotal = ref(false);
    const isAddAssetsModalOpen = ref(false);
    const isAllAssetsModalOpen = ref(false);
    const isAssetsPageOpen = ref(false);
    ref(false);
    ref(false);
    const setAssetPageOpen = (isOpen) => {
      isAssetsPageOpen.value = isOpen;
    };
    const setAddAssetOpen = (isOpen) => {
      isAddAssetsModalOpen.value = isOpen;
    };
    const setAllAssetsOpen = (isOpen) => {
      isAllAssetsModalOpen.value = isOpen;
    };
    const actions = [
      {
        name: "Receive",
        img: "/BTC.SVG",
        id: "action1"
      },
      {
        name: "Transfer",
        img: "/ETH.svg",
        id: "action1"
      },
      {
        name: "Receive",
        img: "XRP.svg",
        id: "action1"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_myHeader = __nuxt_component_3;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_label = IonLabel;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_icon = IonIcon;
      const _component_ion_content = IonContent;
      const _component_ion_button = IonButton;
      const _component_ion_chip = IonChip;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_footer = IonFooter;
      const _component_tabs = __nuxt_component_14;
      const _component_AddAsset = _sfc_main$1;
      const _component_AllAssets = __nuxt_component_19;
      const _component_Assetpage = __nuxt_component_17;
      _push(ssrRenderComponent(_component_ion_page, mergeProps({ style: {} }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, {
              class: "ion-no-border",
              style: { "max-height": "60%", "min-height": "60%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: { "min-height": "100%", "max-height": "100%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_myHeader, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card, {
                          class: "figureBox",
                          button: true,
                          style: { "box-shadow": "none" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card_header, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "115%" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Total balance `);
                                        } else {
                                          return [
                                            createTextVNode("Total balance ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-c0d1924c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<strong style="${ssrRenderStyle({ "font-size": "90%" })}" data-v-c0d1924c${_scopeId6}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                        } else {
                                          return [
                                            createVNode("strong", { style: { "font-size": "90%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                                      createVNode(_component_ion_label, {
                                        color: "primary",
                                        style: { "font-size": "115%" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Total balance ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", {
                                        class: "figureCard",
                                        style: {}
                                      }, [
                                        createVNode(_component_ion_card_title, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createVNode("strong", { style: { "font-size": "90%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                                createVNode(_component_ion_card_header, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "115%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Total balance ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", {
                                      class: "figureCard",
                                      style: {}
                                    }, [
                                      createVNode(_component_ion_card_title, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createVNode("strong", { style: { "font-size": "90%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                        _push4(ssrRenderComponent(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "width": "100%", "height": "5%", "margin": "0px", "background": "none", "box-shadow": "none" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                class: "footerActions",
                                button: true,
                                style: { "background": "goldenrod" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-c0d1924c${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_ion_card_title, {
                                            color: "primary",
                                            style: { "font-size": "120%" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Recent`);
                                              } else {
                                                return [
                                                  createTextVNode("Recent")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_icon, {
                                            color: "primary",
                                            size: "large",
                                            icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
                                            style: { "margin-left": "10px" },
                                            onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              class: "figureCard",
                                              style: {}
                                            }, [
                                              createVNode(_component_ion_card_title, {
                                                color: "primary",
                                                style: { "font-size": "120%" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Recent")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_ion_icon, {
                                                color: "primary",
                                                size: "large",
                                                icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
                                                style: { "margin-left": "10px" },
                                                onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                              }, null, 8, ["icon", "onClick"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_card_header, null, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "figureCard",
                                            style: {}
                                          }, [
                                            createVNode(_component_ion_card_title, {
                                              color: "primary",
                                              style: { "font-size": "120%" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Recent")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_ion_icon, {
                                              color: "primary",
                                              size: "large",
                                              icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_card, {
                                class: "footerActions",
                                button: true,
                                style: { "background": "#1d3160", "border": "3px solid #1d3160" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-c0d1924c${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_ion_card_title, {
                                            color: "secondary",
                                            style: { "font-size": "120%" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Assets`);
                                              } else {
                                                return [
                                                  createTextVNode("Assets")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_icon, {
                                            color: "secondary",
                                            size: "large",
                                            icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
                                            style: { "margin-left": "10px" },
                                            onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              class: "figureCard",
                                              style: {}
                                            }, [
                                              createVNode(_component_ion_card_title, {
                                                color: "secondary",
                                                style: { "font-size": "120%" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Assets")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_ion_icon, {
                                                color: "secondary",
                                                size: "large",
                                                icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
                                                style: { "margin-left": "10px" },
                                                onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                              }, null, 8, ["icon", "onClick"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_card_header, null, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "figureCard",
                                            style: {}
                                          }, [
                                            createVNode(_component_ion_card_title, {
                                              color: "secondary",
                                              style: { "font-size": "120%" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Assets")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_ion_icon, {
                                              color: "secondary",
                                              size: "large",
                                              icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card, {
                                  class: "footerActions",
                                  button: true,
                                  style: { "background": "goldenrod" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, null, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "figureCard",
                                          style: {}
                                        }, [
                                          createVNode(_component_ion_card_title, {
                                            color: "primary",
                                            style: { "font-size": "120%" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Recent")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_ion_icon, {
                                            color: "primary",
                                            size: "large",
                                            icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
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
                                createVNode(_component_ion_card, {
                                  class: "footerActions",
                                  button: true,
                                  style: { "background": "#1d3160", "border": "3px solid #1d3160" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, null, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "figureCard",
                                          style: {}
                                        }, [
                                          createVNode(_component_ion_card_title, {
                                            color: "secondary",
                                            style: { "font-size": "120%" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Assets")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_ion_icon, {
                                            color: "secondary",
                                            size: "large",
                                            icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "height": "8%", "width": "100%", "background": "none" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, { style: { "background": "none", "border": "1px solid" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img alt="Silhouette of mountains"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-height": "150px" })}" data-v-c0d1924c${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        alt: "Silhouette of mountains",
                                        src: _imports_0,
                                        style: { "max-height": "150px" }
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card, { style: { "background": "none", "border": "1px solid" } }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      alt: "Silhouette of mountains",
                                      src: _imports_0,
                                      style: { "max-height": "150px" }
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
                          createVNode(_component_myHeader),
                          createVNode(_component_ion_card, {
                            class: "figureBox",
                            button: true,
                            style: { "box-shadow": "none" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "115%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Total balance ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", {
                                    class: "figureCard",
                                    style: {}
                                  }, [
                                    createVNode(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx(() => [
                                        createVNode("strong", { style: { "font-size": "90%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                          createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "width": "100%", "height": "5%", "margin": "0px", "background": "none", "box-shadow": "none" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                class: "footerActions",
                                button: true,
                                style: { "background": "goldenrod" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "figureCard",
                                        style: {}
                                      }, [
                                        createVNode(_component_ion_card_title, {
                                          color: "primary",
                                          style: { "font-size": "120%" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Recent")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ion_icon, {
                                          color: "primary",
                                          size: "large",
                                          icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
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
                              createVNode(_component_ion_card, {
                                class: "footerActions",
                                button: true,
                                style: { "background": "#1d3160", "border": "3px solid #1d3160" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "figureCard",
                                        style: {}
                                      }, [
                                        createVNode(_component_ion_card_title, {
                                          color: "secondary",
                                          style: { "font-size": "120%" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Assets")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ion_icon, {
                                          color: "secondary",
                                          size: "large",
                                          icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
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
                          createVNode(_component_ion_card, { style: { "margin": "0px", "height": "8%", "width": "100%", "background": "none" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, { style: { "background": "none", "border": "1px solid" } }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    alt: "Silhouette of mountains",
                                    src: _imports_0,
                                    style: { "max-height": "150px" }
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
                    createVNode(_component_ion_toolbar, { style: { "min-height": "100%", "max-height": "100%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_myHeader),
                        createVNode(_component_ion_card, {
                          class: "figureBox",
                          button: true,
                          style: { "box-shadow": "none" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card_header, null, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "115%" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Total balance ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", {
                                  class: "figureCard",
                                  style: {}
                                }, [
                                  createVNode(_component_ion_card_title, { color: "primary" }, {
                                    default: withCtx(() => [
                                      createVNode("strong", { style: { "font-size": "90%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                        createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "width": "100%", "height": "5%", "margin": "0px", "background": "none", "box-shadow": "none" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, {
                              class: "footerActions",
                              button: true,
                              style: { "background": "goldenrod" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, null, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "figureCard",
                                      style: {}
                                    }, [
                                      createVNode(_component_ion_card_title, {
                                        color: "primary",
                                        style: { "font-size": "120%" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Recent")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_icon, {
                                        color: "primary",
                                        size: "large",
                                        icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
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
                            createVNode(_component_ion_card, {
                              class: "footerActions",
                              button: true,
                              style: { "background": "#1d3160", "border": "3px solid #1d3160" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, null, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "figureCard",
                                      style: {}
                                    }, [
                                      createVNode(_component_ion_card_title, {
                                        color: "secondary",
                                        style: { "font-size": "120%" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Assets")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_icon, {
                                        color: "secondary",
                                        size: "large",
                                        icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
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
                        createVNode(_component_ion_card, { style: { "margin": "0px", "height": "8%", "width": "100%", "background": "none" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, { style: { "background": "none", "border": "1px solid" } }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "Silhouette of mountains",
                                  src: _imports_0,
                                  style: { "max-height": "150px" }
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
            _push2(ssrRenderComponent(_component_ion_content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, {
                    class: "",
                    style: { "width": "100%", "background": "none", "box-shadow": "none", "margin": "0px", "margin-bottom": "-4%", "margin-top": "-4%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_header, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" })}" data-v-c0d1924c${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "150%", "font-weight": "bold" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Recents`);
                                  } else {
                                    return [
                                      createTextVNode("Recents")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_button, { style: { "height": "40px", "--background": "primary", "--color": "secondary" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`See All`);
                                  } else {
                                    return [
                                      createTextVNode("See All")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "150%", "font-weight": "bold" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Recents")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_button, { style: { "height": "40px", "--background": "primary", "--color": "secondary" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("See All")
                                    ]),
                                    _: 1
                                  })
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
                              createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                                createVNode(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "150%", "font-weight": "bold" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Recents")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_button, { style: { "height": "40px", "--background": "primary", "--color": "secondary" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("See All")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, {
                    class: "actions",
                    style: {}
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(actions, (action) => {
                          _push4(ssrRenderComponent(_component_ion_chip, {
                            class: "action",
                            id: action.id,
                            key: "action.name",
                            style: { "box-shadow": "10px whitesmoke", "border-radius": "12px", "height": "15%", "padding": "8%" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img alt="Silhouette of a person&#39;s head"${ssrRenderAttr("src", action.img)} style="${ssrRenderStyle({ "scale": "1.4" })}" data-v-c0d1924c${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          alt: "Silhouette of a person's head",
                                          src: action.img,
                                          style: { "scale": "1.4" }
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "align-items": "start", "flex-wrap": "nowrap", "justify-content": "center", "width": "100%", "position": "relative", "left": "2%" })}" data-v-c0d1924c${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(action.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(action.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "65%" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`payment for goods`);
                                    } else {
                                      return [
                                        createTextVNode("payment for goods")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "align-items": "end", "flex-wrap": "no-wrap", "justify-content": "center", "margin-left": "5%", "width": "30%" })}" data-v-c0d1924c${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`- 600.5`);
                                    } else {
                                      return [
                                        createTextVNode("- 600.5")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "65%" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Aug 7`);
                                    } else {
                                      return [
                                        createTextVNode("Aug 7")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        alt: "Silhouette of a person's head",
                                        src: action.img,
                                        style: { "scale": "1.4" }
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "start", "flex-wrap": "nowrap", "justify-content": "center", "width": "100%", "position": "relative", "left": "2%" } }, [
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(action.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "65%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("payment for goods")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "end", "flex-wrap": "no-wrap", "justify-content": "center", "margin-left": "5%", "width": "30%" } }, [
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("- 600.5")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_label, {
                                      color: "primary",
                                      style: { "font-size": "65%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Aug 7")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                            return createVNode(_component_ion_chip, {
                              class: "action",
                              id: action.id,
                              key: "action.name",
                              style: { "box-shadow": "10px whitesmoke", "border-radius": "12px", "height": "15%", "padding": "8%" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      alt: "Silhouette of a person's head",
                                      src: action.img,
                                      style: { "scale": "1.4" }
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "start", "flex-wrap": "nowrap", "justify-content": "center", "width": "100%", "position": "relative", "left": "2%" } }, [
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(action.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "65%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("payment for goods")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "end", "flex-wrap": "no-wrap", "justify-content": "center", "margin-left": "5%", "width": "30%" } }, [
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("- 600.5")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_label, {
                                    color: "primary",
                                    style: { "font-size": "65%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Aug 7")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1032, ["id"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card, {
                      class: "",
                      style: { "width": "100%", "background": "none", "box-shadow": "none", "margin": "0px", "margin-bottom": "-4%", "margin-top": "-4%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_header, null, {
                          default: withCtx(() => [
                            createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                              createVNode(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "150%", "font-weight": "bold" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Recents")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_button, { style: { "height": "40px", "--background": "primary", "--color": "secondary" } }, {
                                default: withCtx(() => [
                                  createTextVNode("See All")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, {
                      class: "actions",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                          return createVNode(_component_ion_chip, {
                            class: "action",
                            id: action.id,
                            key: "action.name",
                            style: { "box-shadow": "10px whitesmoke", "border-radius": "12px", "height": "15%", "padding": "8%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    alt: "Silhouette of a person's head",
                                    src: action.img,
                                    style: { "scale": "1.4" }
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "start", "flex-wrap": "nowrap", "justify-content": "center", "width": "100%", "position": "relative", "left": "2%" } }, [
                                createVNode(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(action.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "65%" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("payment for goods")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "end", "flex-wrap": "no-wrap", "justify-content": "center", "margin-left": "5%", "width": "30%" } }, [
                                createVNode(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("- 600.5")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_label, {
                                  color: "primary",
                                  style: { "font-size": "65%" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Aug 7")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 2
                          }, 1032, ["id"]);
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
              class: "ion-no-border",
              style: { "display": "flex", "flex-direction": "column", "align-items": "center", "margin-bottom": "5%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_tabs, { style: { "width": "90%", "border-radius": "20px" } }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_tabs, { style: { "width": "90%", "border-radius": "20px" } })
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
            _push2(ssrRenderComponent(_component_Assetpage, {
              "is-asset-page-open": unref(isAssetsPageOpen),
              onCloseModal: ($event) => setAssetPageOpen(false)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_header, {
                class: "ion-no-border",
                style: { "max-height": "60%", "min-height": "60%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, { style: { "min-height": "100%", "max-height": "100%" } }, {
                    default: withCtx(() => [
                      createVNode(_component_myHeader),
                      createVNode(_component_ion_card, {
                        class: "figureBox",
                        button: true,
                        style: { "box-shadow": "none" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_header, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "115%" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Total balance ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", {
                                class: "figureCard",
                                style: {}
                              }, [
                                createVNode(_component_ion_card_title, { color: "primary" }, {
                                  default: withCtx(() => [
                                    createVNode("strong", { style: { "font-size": "90%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                      createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "width": "100%", "height": "5%", "margin": "0px", "background": "none", "box-shadow": "none" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card, {
                            class: "footerActions",
                            button: true,
                            style: { "background": "goldenrod" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, null, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "figureCard",
                                    style: {}
                                  }, [
                                    createVNode(_component_ion_card_title, {
                                      color: "primary",
                                      style: { "font-size": "120%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Recent")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_icon, {
                                      color: "primary",
                                      size: "large",
                                      icon: "ioniconsChevronUpOutline" in _ctx ? _ctx.ioniconsChevronUpOutline : unref(chevronUpOutline),
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
                          createVNode(_component_ion_card, {
                            class: "footerActions",
                            button: true,
                            style: { "background": "#1d3160", "border": "3px solid #1d3160" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, null, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "figureCard",
                                    style: {}
                                  }, [
                                    createVNode(_component_ion_card_title, {
                                      color: "secondary",
                                      style: { "font-size": "120%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Assets")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_icon, {
                                      color: "secondary",
                                      size: "large",
                                      icon: "ioniconsWalletSharp" in _ctx ? _ctx.ioniconsWalletSharp : unref(walletSharp),
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
                      createVNode(_component_ion_card, { style: { "margin": "0px", "height": "8%", "width": "100%", "background": "none" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card, { style: { "background": "none", "border": "1px solid" } }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                alt: "Silhouette of mountains",
                                src: _imports_0,
                                style: { "max-height": "150px" }
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
              createVNode(_component_ion_content, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, {
                    class: "",
                    style: { "width": "100%", "background": "none", "box-shadow": "none", "margin": "0px", "margin-bottom": "-4%", "margin-top": "-4%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                            createVNode(_component_ion_label, {
                              color: "primary",
                              style: { "font-size": "150%", "font-weight": "bold" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Recents")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_button, { style: { "height": "40px", "--background": "primary", "--color": "secondary" } }, {
                              default: withCtx(() => [
                                createTextVNode("See All")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, {
                    class: "actions",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                        return createVNode(_component_ion_chip, {
                          class: "action",
                          id: action.id,
                          key: "action.name",
                          style: { "box-shadow": "10px whitesmoke", "border-radius": "12px", "height": "15%", "padding": "8%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "Silhouette of a person's head",
                                  src: action.img,
                                  style: { "scale": "1.4" }
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "start", "flex-wrap": "nowrap", "justify-content": "center", "width": "100%", "position": "relative", "left": "2%" } }, [
                              createVNode(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(action.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "65%" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("payment for goods")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { style: { "display": "flex", "flex-direction": "column", "align-items": "end", "flex-wrap": "no-wrap", "justify-content": "center", "margin-left": "5%", "width": "30%" } }, [
                              createVNode(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "90%", "margin-bottom": "7px", "font-weight": "bold" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("- 600.5")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_label, {
                                color: "primary",
                                style: { "font-size": "65%" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Aug 7")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 2
                        }, 1032, ["id"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_footer, {
                class: "ion-no-border",
                style: { "display": "flex", "flex-direction": "column", "align-items": "center", "margin-bottom": "5%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_tabs, { style: { "width": "90%", "border-radius": "20px" } })
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
              }, null, 8, ["is-all-assetmodal-open", "onCloseModal"]),
              createVNode(_component_Assetpage, {
                "is-asset-page-open": unref(isAssetsPageOpen),
                onCloseModal: ($event) => setAssetPageOpen(false)
              }, null, 8, ["is-asset-page-open", "onCloseModal"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const home2_vue_vue_type_style_index_0_scoped_c0d1924c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0d1924c"]]);
export {
  home2 as default
};
//# sourceMappingURL=home2-8d123fed.js.map
