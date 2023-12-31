import { q as IonPage, r as IonHeader, s as IonToolbar, b as IonCard, f as IonChip, m as IonAvatar, h as IonLabel, o as IonButton, g as IonIcon, t as IonCardHeader, e as IonCardSubtitle, d as IonCardTitle, G as IonSegment, H as IonSegmentButton, i as IonList } from '../server.mjs';
import { _ as __nuxt_component_17 } from './asset-daf87120.mjs';
import { _ as _sfc_main$1 } from './addAsset-1b5d2898.mjs';
import { _ as __nuxt_component_19 } from './allAssets-e3c316d4.mjs';
import { useSSRContext, defineComponent, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { u as useDarkMode } from './useDarkMode-386da5e9.mjs';
import { g as moon, t as thumbsUp, q as notifications, e as eyeOffSharp, j as arrowUpCircleSharp, k as arrowDownCircleSharp, r as peopleCircleOutline, p as duplicate, u as open } from './index-d43f4fcb.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/realm-web/dist/bundle.cjs.js';
import 'file:///Users/mac/vyreApp/node_modules/@capacitor/app/dist/plugin.cjs.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/mac/vyreApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/mac/vyreApp/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mac/vyreApp/node_modules/radix3/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    const switchAssets = ref("crypto");
    const hideTotal = ref(false);
    const isAddAssetsModalOpen = ref(false);
    const isAllAssetsModalOpen = ref(false);
    const isAssetsPageOpen = ref(false);
    const isP2POpen = ref(false);
    const setP2POpen = (isOpen) => {
      isP2POpen.value = isOpen;
    };
    const setAssetPageOpen = (isOpen) => {
      isAssetsPageOpen.value = isOpen;
    };
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
      const _component_asset = __nuxt_component_17;
      const _component_AddAsset = _sfc_main$1;
      const _component_AllAssets = __nuxt_component_19;
      const _component_Assetpage = resolveComponent("Assetpage");
      _push(ssrRenderComponent(_component_ion_page, mergeProps({ style: {} }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, {
              class: "ion-no-border",
              style: { "max-height": "40%", "min-height": "40%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, {
                    class: "tooba",
                    style: { "min-height": "100%", "max-height": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card, {
                          class: "headingCard",
                          style: {}
                        }, {
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
                                          _push7(`<img alt="Silhouette of a person&#39;s head" src="https://ionicframework.com/docs/img/demos/avatar.svg" data-v-0f748486${_scopeId6}>`);
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
                        _push4(ssrRenderComponent(_component_ion_toolbar, { style: { "margin-bottom": "25%", "--background": "transparent" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                class: "",
                                style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "position": "relative", "bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "5%" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card, {
                                      class: "notificationBox",
                                      button: true,
                                      style: {}
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
                                                  icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
                                                  color: "primary",
                                                  size: "large",
                                                  style: {}
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_ion_icon, {
                                                    icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                                  icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                      class: "figureBox",
                                      button: true,
                                      style: {}
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
                                                _push8(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-0f748486${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-0f748486${_scopeId8}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
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
                                                  createVNode("div", {
                                                    class: "figureCard",
                                                    style: {}
                                                  }, [
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
                                                createVNode("div", {
                                                  class: "figureCard",
                                                  style: {}
                                                }, [
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
                                        class: "notificationBox",
                                        button: true,
                                        style: {}
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_button, {
                                            size: "large",
                                            fill: "clear"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ion_icon, {
                                                icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                        class: "figureBox",
                                        button: true,
                                        style: {}
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
                                              createVNode("div", {
                                                class: "figureCard",
                                                style: {}
                                              }, [
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
                                  style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "position": "relative", "bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "5%" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card, {
                                      class: "notificationBox",
                                      button: true,
                                      style: {}
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_button, {
                                          size: "large",
                                          fill: "clear"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_icon, {
                                              icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                      class: "figureBox",
                                      button: true,
                                      style: {}
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
                                            createVNode("div", {
                                              class: "figureCard",
                                              style: {}
                                            }, [
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
                          createVNode(_component_ion_card, {
                            class: "headingCard",
                            style: {}
                          }, {
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
                          createVNode(_component_ion_toolbar, { style: { "margin-bottom": "25%", "--background": "transparent" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                class: "",
                                style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "position": "relative", "bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "5%" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card, {
                                    class: "notificationBox",
                                    button: true,
                                    style: {}
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_button, {
                                        size: "large",
                                        fill: "clear"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_icon, {
                                            icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                    class: "figureBox",
                                    button: true,
                                    style: {}
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
                                          createVNode("div", {
                                            class: "figureCard",
                                            style: {}
                                          }, [
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
                    createVNode(_component_ion_toolbar, {
                      class: "tooba",
                      style: { "min-height": "100%", "max-height": "100%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card, {
                          class: "headingCard",
                          style: {}
                        }, {
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
                        createVNode(_component_ion_toolbar, { style: { "margin-bottom": "25%", "--background": "transparent" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, {
                              class: "",
                              style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "position": "relative", "bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "5%" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card, {
                                  class: "notificationBox",
                                  button: true,
                                  style: {}
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_button, {
                                      size: "large",
                                      fill: "clear"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_icon, {
                                          icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                  class: "figureBox",
                                  button: true,
                                  style: {}
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
                                        createVNode("div", {
                                          class: "figureCard",
                                          style: {}
                                        }, [
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%", "z-index": "99", "position": "relative", "top": "-12%", "margin-left": "0px", "margin-right": "0px" } }, {
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
                    onClick: ($event) => setP2POpen(true)
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
                      onClick: ($event) => setP2POpen(true)
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "min-height": "16%", "max-height": "16%", "margin-top": "0px", "position": "relative", "top": "-12%" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_segment, {
                    scrollable: true,
                    value: unref(switchAssets),
                    style: { "width": "75%", "height": "30%", "z-index": "99" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_segment_button, {
                          value: "crypto",
                          onClick: ($event) => switchAssets.value = "crypto",
                          style: {}
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                                createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                          onClick: ($event) => switchAssets.value = "fiat",
                          style: {}
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                                createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                            onClick: ($event) => switchAssets.value = "crypto",
                            style: {}
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                            onClick: ($event) => switchAssets.value = "fiat",
                            style: {}
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                      scrollable: true,
                      value: unref(switchAssets),
                      style: { "width": "75%", "height": "30%", "z-index": "99" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_segment_button, {
                          value: "crypto",
                          onClick: ($event) => switchAssets.value = "crypto",
                          style: {}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                          onClick: ($event) => switchAssets.value = "fiat",
                          style: {}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "max-height": "30%", "min-height": "30%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-7%", "border-radius": "12px", "box-shadow": "none", "background": "none", "position": "relative", "top": "-12%", "margin-left": "0px", "margin-right": "0px" } }, {
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
                              img: crypto.img,
                              onClick: ($event) => setAssetPageOpen(true)
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_asset, {
                                name: crypto.name,
                                symbol: crypto.symbol,
                                price: crypto.price,
                                amount: crypto.amount,
                                img: crypto.img,
                                onClick: ($event) => setAssetPageOpen(true)
                              }, null, 8, ["name", "symbol", "price", "amount", "img", "onClick"])
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
                            img: crypto.img,
                            onClick: ($event) => setAssetPageOpen(true)
                          }, null, 8, ["name", "symbol", "price", "amount", "img", "onClick"])
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "width": "50%", "min-height": "8%", "max-height": "8%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "background": "none", "box-shadow": "none", "margin-top": "-5%", "position": "relative", "top": "-13%" } }, {
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
            _push2(ssrRenderComponent(_component_Assetpage, {
              "is-asset-page-open": unref(isAssetsPageOpen),
              onCloseModal: ($event) => setAssetPageOpen(false)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_header, {
                class: "ion-no-border",
                style: { "max-height": "40%", "min-height": "40%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, {
                    class: "tooba",
                    style: { "min-height": "100%", "max-height": "100%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card, {
                        class: "headingCard",
                        style: {}
                      }, {
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
                      createVNode(_component_ion_toolbar, { style: { "margin-bottom": "25%", "--background": "transparent" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card, {
                            class: "",
                            style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "14%", "max-height": "14%", "position": "relative", "bottom": "-6%", "margin-left": "0px", "margin-right": "0px", "margin-top": "5%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                class: "notificationBox",
                                button: true,
                                style: {}
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_button, {
                                    size: "large",
                                    fill: "clear"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, {
                                        icon: "ioniconsNotifications" in _ctx ? _ctx.ioniconsNotifications : unref(notifications),
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
                                class: "figureBox",
                                button: true,
                                style: {}
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
                                      createVNode("div", {
                                        class: "figureCard",
                                        style: {}
                                      }, [
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
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "16%", "max-height": "16%", "margin-bottom": "-1%", "z-index": "99", "position": "relative", "top": "-12%", "margin-left": "0px", "margin-right": "0px" } }, {
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
                    onClick: ($event) => setP2POpen(true)
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
              createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "min-height": "16%", "max-height": "16%", "margin-top": "0px", "position": "relative", "top": "-12%" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_segment, {
                    scrollable: true,
                    value: unref(switchAssets),
                    style: { "width": "75%", "height": "30%", "z-index": "99" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_segment_button, {
                        value: "crypto",
                        onClick: ($event) => switchAssets.value = "crypto",
                        style: {}
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
                        onClick: ($event) => switchAssets.value = "fiat",
                        style: {}
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { style: { "font-size": "75%", "--color": "primary" } }, {
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
              createVNode(_component_ion_card, { style: { "max-height": "30%", "min-height": "30%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-7%", "border-radius": "12px", "box-shadow": "none", "background": "none", "position": "relative", "top": "-12%", "margin-left": "0px", "margin-right": "0px" } }, {
                default: withCtx(() => [
                  unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                    return createVNode(_component_ion_list, { key: index }, {
                      default: withCtx(() => [
                        createVNode(_component_asset, {
                          name: crypto.name,
                          symbol: crypto.symbol,
                          price: crypto.price,
                          amount: crypto.amount,
                          img: crypto.img,
                          onClick: ($event) => setAssetPageOpen(true)
                        }, null, 8, ["name", "symbol", "price", "amount", "img", "onClick"])
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
              createVNode(_component_ion_card, { style: { "width": "50%", "min-height": "8%", "max-height": "8%", "border-radius": "12px", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "background": "none", "box-shadow": "none", "margin-top": "-5%", "position": "relative", "top": "-13%" } }, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f748486"]]);

export { home as default };
//# sourceMappingURL=home-84a7259f.mjs.map
