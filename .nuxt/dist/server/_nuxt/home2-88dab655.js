import { q as IonPage, r as IonHeader, s as IonToolbar, b as IonCard, t as IonCardHeader, h as IonLabel, d as IonCardTitle, g as IonIcon, a as IonContent, o as IonButton, f as IonChip, m as IonAvatar, v as IonFooter } from "../server.mjs";
import { _ as __nuxt_component_3, a as __nuxt_component_14 } from "./tabs-8b38b157.js";
import { _ as _sfc_main$1 } from "./addAsset-1b5d2898.js";
import { _ as __nuxt_component_19 } from "./allAssets-e3c316d4.js";
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { e as eyeOffSharp, E as chevronUpOutline, v as walletSharp } from "./index-d43f4fcb.js";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./rocket-4a2e16df.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
import "realm-web";
import "@capacitor/app";
import "./useDarkMode-386da5e9.js";
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
      const _component_Assetpage = resolveComponent("Assetpage");
      _push(ssrRenderComponent(_component_ion_page, mergeProps({ style: {} }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, { class: "ion-no-border header" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, { class: "toolbar" }, {
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
                                    _push6(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-0016f516${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<strong style="${ssrRenderStyle({ "font-size": "90%" })}" class="" data-v-0016f516${_scopeId6}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                        } else {
                                          return [
                                            createVNode("strong", {
                                              style: { "font-size": "90%" },
                                              class: ""
                                            }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                                            createVNode("strong", {
                                              style: { "font-size": "90%" },
                                              class: ""
                                            }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                                          createVNode("strong", {
                                            style: { "font-size": "90%" },
                                            class: ""
                                          }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                        _push4(ssrRenderComponent(_component_ion_card, { class: "flex-column-center-space-around headerActions" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                class: "headerAction",
                                button: true,
                                style: { "background": "goldenrod", "z-index": "999" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="figureCard" data-v-0016f516${_scopeId6}>`);
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
                                            createVNode("div", { class: "figureCard" }, [
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
                                          createVNode("div", { class: "figureCard" }, [
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
                                class: "headerAction",
                                button: true,
                                style: { "background": "#1d3160", "border": "3px solid #1d3160", "z-index": "999" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="figureCard" data-v-0016f516${_scopeId6}>`);
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
                                            createVNode("div", { class: "figureCard" }, [
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
                                          createVNode("div", { class: "figureCard" }, [
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
                                  class: "headerAction",
                                  button: true,
                                  style: { "background": "goldenrod", "z-index": "999" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "figureCard" }, [
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
                                  class: "headerAction",
                                  button: true,
                                  style: { "background": "#1d3160", "border": "3px solid #1d3160", "z-index": "999" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "figureCard" }, [
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
                                        createVNode("strong", {
                                          style: { "font-size": "90%" },
                                          class: ""
                                        }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                          createVNode(_component_ion_card, { class: "flex-column-center-space-around headerActions" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                class: "headerAction",
                                button: true,
                                style: { "background": "goldenrod", "z-index": "999" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "figureCard" }, [
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
                                class: "headerAction",
                                button: true,
                                style: { "background": "#1d3160", "border": "3px solid #1d3160", "z-index": "999" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "figureCard" }, [
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_toolbar, { class: "toolbar" }, {
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
                                      createVNode("strong", {
                                        style: { "font-size": "90%" },
                                        class: ""
                                      }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                        createVNode(_component_ion_card, { class: "flex-column-center-space-around headerActions" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, {
                              class: "headerAction",
                              button: true,
                              style: { "background": "goldenrod", "z-index": "999" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "figureCard" }, [
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
                              class: "headerAction",
                              button: true,
                              style: { "background": "#1d3160", "border": "3px solid #1d3160", "z-index": "999" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "figureCard" }, [
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
                  _push3(`<div class="flex-row-center-center" style="${ssrRenderStyle({ "border": "1px solid black" })}" data-v-0016f516${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, {
                    class: "flex-row-center-center",
                    style: { "height": "80%", "width": "70%", "margin": "0px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="advert"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "70%", "height": "100%" })}" data-v-0016f516${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "advert",
                            src: _imports_0,
                            style: { "width": "70%", "height": "100%" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ion_card, { class: "recentBoxHeader" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_header, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex-column-center-space-between" data-v-0016f516${_scopeId4}>`);
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
                                createVNode("div", { class: "flex-column-center-space-between" }, [
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
                              createVNode("div", { class: "flex-column-center-space-between" }, [
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
                  _push3(ssrRenderComponent(_component_ion_card, { class: "recents" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(actions, (action) => {
                          _push4(ssrRenderComponent(_component_ion_chip, {
                            class: "recent",
                            id: "action1",
                            key: "action.name",
                            style: {}
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%", "height": "fit-content" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img alt="coin"${ssrRenderAttr("src", action.img)} style="${ssrRenderStyle({ "scale": "1.4" })}" data-v-0016f516${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          alt: "coin",
                                          src: action.img,
                                          style: { "scale": "1.4" }
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex-column-start-center" style="${ssrRenderStyle({ "width": "100%", "position": "relative", "left": "2%" })}" data-v-0016f516${_scopeId4}>`);
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
                                _push5(`</div><div class="flex-column-end-center" style="${ssrRenderStyle({ "margin-left": "5%", "width": "35%" })}" data-v-0016f516${_scopeId4}>`);
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
                                  createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%", "height": "fit-content" } }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        alt: "coin",
                                        src: action.img,
                                        style: { "scale": "1.4" }
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", {
                                    class: "flex-column-start-center",
                                    style: { "width": "100%", "position": "relative", "left": "2%" }
                                  }, [
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
                                  createVNode("div", {
                                    class: "flex-column-end-center",
                                    style: { "margin-left": "5%", "width": "35%" }
                                  }, [
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
                              class: "recent",
                              id: "action1",
                              key: "action.name",
                              style: {}
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%", "height": "fit-content" } }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      alt: "coin",
                                      src: action.img,
                                      style: { "scale": "1.4" }
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", {
                                  class: "flex-column-start-center",
                                  style: { "width": "100%", "position": "relative", "left": "2%" }
                                }, [
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
                                createVNode("div", {
                                  class: "flex-column-end-center",
                                  style: { "margin-left": "5%", "width": "35%" }
                                }, [
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
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", {
                      class: "flex-row-center-center",
                      style: { "border": "1px solid black" }
                    }, [
                      createVNode(_component_ion_card, {
                        class: "flex-row-center-center",
                        style: { "height": "80%", "width": "70%", "margin": "0px" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "advert",
                            src: _imports_0,
                            style: { "width": "70%", "height": "100%" }
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ion_card, { class: "recentBoxHeader" }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_header, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex-column-center-space-between" }, [
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
                    createVNode(_component_ion_card, { class: "recents" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                          return createVNode(_component_ion_chip, {
                            class: "recent",
                            id: "action1",
                            key: "action.name",
                            style: {}
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%", "height": "fit-content" } }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    alt: "coin",
                                    src: action.img,
                                    style: { "scale": "1.4" }
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", {
                                class: "flex-column-start-center",
                                style: { "width": "100%", "position": "relative", "left": "2%" }
                              }, [
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
                              createVNode("div", {
                                class: "flex-column-end-center",
                                style: { "margin-left": "5%", "width": "35%" }
                              }, [
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
              createVNode(_component_ion_header, { class: "ion-no-border header" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, { class: "toolbar" }, {
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
                                    createVNode("strong", {
                                      style: { "font-size": "90%" },
                                      class: ""
                                    }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
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
                      createVNode(_component_ion_card, { class: "flex-column-center-space-around headerActions" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card, {
                            class: "headerAction",
                            button: true,
                            style: { "background": "goldenrod", "z-index": "999" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "figureCard" }, [
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
                            class: "headerAction",
                            button: true,
                            style: { "background": "#1d3160", "border": "3px solid #1d3160", "z-index": "999" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "figureCard" }, [
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
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_content, null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "flex-row-center-center",
                    style: { "border": "1px solid black" }
                  }, [
                    createVNode(_component_ion_card, {
                      class: "flex-row-center-center",
                      style: { "height": "80%", "width": "70%", "margin": "0px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "advert",
                          src: _imports_0,
                          style: { "width": "70%", "height": "100%" }
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_ion_card, { class: "recentBoxHeader" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex-column-center-space-between" }, [
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
                  createVNode(_component_ion_card, { class: "recents" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                        return createVNode(_component_ion_chip, {
                          class: "recent",
                          id: "action1",
                          key: "action.name",
                          style: {}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%", "height": "fit-content" } }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "coin",
                                  src: action.img,
                                  style: { "scale": "1.4" }
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", {
                              class: "flex-column-start-center",
                              style: { "width": "100%", "position": "relative", "left": "2%" }
                            }, [
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
                            createVNode("div", {
                              class: "flex-column-end-center",
                              style: { "margin-left": "5%", "width": "35%" }
                            }, [
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
const home2_vue_vue_type_style_index_0_scoped_0016f516_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0016f516"]]);
export {
  home2 as default
};
//# sourceMappingURL=home2-88dab655.js.map
