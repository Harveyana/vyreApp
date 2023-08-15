import { _ as _export_sfc, q as IonPage, r as IonHeader, s as IonToolbar, C as IonButtons, o as IonButton, g as IonIcon, b as IonCard, t as IonCardHeader, e as IonCardSubtitle, d as IonCardTitle, D as IonCol, E as IonGrid, F as IonRow, G as IonSegment, H as IonSegmentButton, h as IonLabel, i as IonList } from '../server.mjs';
import { _ as __nuxt_component_17 } from './asset-9c1fd7b2.mjs';
import { _ as _sfc_main$1 } from './addAsset-11c656a7.mjs';
import { useSSRContext, defineComponent, ref, watch, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { u as useDarkMode } from './useDarkMode-386da5e9.mjs';
import { g as moon, e as eyeOffSharp, j as arrowUpCircleSharp, k as arrowDownCircleSharp, n as walletSharp, l as logoBitcoin, o as logoUsd, p as duplicate } from './index-d43f4fcb.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ufo/dist/index.mjs';
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
  __name: "home-not",
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
      const _component_ion_label = IonLabel;
      const _component_ion_list = IonList;
      const _component_asset = __nuxt_component_17;
      const _component_AddAsset = _sfc_main$1;
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
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-3cafc23f${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_card_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<strong style="${ssrRenderStyle({ "font-size": "150%" })}" data-v-3cafc23f${_scopeId4}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
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
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "x-small", "color": "white" })}" data-v-3cafc23f${_scopeId3}>Send</span>`);
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
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "x-small", "color": "white" })}" data-v-3cafc23f${_scopeId3}>Recieve</span>`);
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
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "x-small", "color": "white" })}" data-v-3cafc23f${_scopeId3}>Buy</span>`);
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
                                                _push8(ssrRenderComponent(_component_ion_label, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`crypto`);
                                                    } else {
                                                      return [
                                                        createTextVNode("crypto")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_ion_label, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("crypto")
                                                    ]),
                                                    _: 1
                                                  }),
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
                                                _push8(ssrRenderComponent(_component_ion_label, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`fiat`);
                                                    } else {
                                                      return [
                                                        createTextVNode("fiat")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_ion_icon, { icon: "ioniconsLogoUsd" in _ctx ? _ctx.ioniconsLogoUsd : unref(logoUsd) }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_ion_label, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("fiat")
                                                    ]),
                                                    _: 1
                                                  }),
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
                                                createVNode(_component_ion_label, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("crypto")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
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
                                              createVNode(_component_ion_label, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("crypto")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
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
                                            createVNode(_component_ion_label, null, {
                                              default: withCtx(() => [
                                                createTextVNode("crypto")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
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
                                          createVNode(_component_ion_label, null, {
                                            default: withCtx(() => [
                                              createTextVNode("crypto")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
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
                                        createVNode(_component_ion_label, null, {
                                          default: withCtx(() => [
                                            createTextVNode("crypto")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
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
            _push2(ssrRenderComponent(_component_ion_card, { style: { "max-height": "40%", "min-height": "40%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "box-shadow": "none" } }, {
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
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("crypto")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_icon, { icon: "ioniconsLogoBitcoin" in _ctx ? _ctx.ioniconsLogoBitcoin : unref(logoBitcoin) }, null, 8, ["icon"])
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
              createVNode(_component_ion_card, { style: { "max-height": "40%", "min-height": "40%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "margin-top": "-3%", "box-shadow": "none" } }, {
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
              }, null, 8, ["is-crypto", "ismodal-open", "onCloseModal"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-not.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeNot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3cafc23f"]]);

export { homeNot as default };
//# sourceMappingURL=home-not-877153a7.mjs.map
