import { q as IonPage, r as IonHeader, s as IonToolbar, b as IonCard, t as IonCardHeader, d as IonCardTitle, g as IonIcon, B as IonSearchbar, a as IonContent, i as IonList, v as IonFooter } from '../server.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_14 } from './tabs-8b38b157.mjs';
import { _ as __nuxt_component_17 } from './asset-daf87120.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { b as searchCircle, d as addCircleOutline, l as logoBitcoin, f as cashSharp } from './index-d43f4fcb.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
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
import '../../renderer.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/vyreApp/node_modules/devalue/index.js';
import './useDarkMode-386da5e9.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "assets",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref("Orders");
    const switchSelect = ref("crypto");
    ref(false);
    const switchPage = (tab) => {
      console.log(tab);
      switchSelect.value = tab;
    };
    const actions = [
      {
        name: "crypto",
        icon: logoBitcoin,
        link: "action1",
        default: false
      },
      {
        name: "fiat",
        icon: cashSharp,
        link: "action1",
        default: false
      }
      // {
      //     name:'Order',
      //     icon:ioniconsExitSharp,
      //     link:'action1'
      // }
    ];
    const cryptos = [
      {
        name: "Bitcoin",
        img: "/BTC.svg",
        symbol: "BTC",
        price: 0.42,
        amount: 367
      },
      {
        name: "Ethereum",
        img: "/ETH.svg",
        symbol: "ETH",
        price: 0.42,
        amount: 367
      },
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
      const _component_ion_content = IonContent;
      const _component_ion_list = IonList;
      const _component_Asset = __nuxt_component_17;
      const _component_ion_footer = IonFooter;
      const _component_Tabs = __nuxt_component_14;
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
                                            _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" })}" data-v-dad3f3ac${_scopeId6}>`);
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
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin": "0px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_searchbar, {
                          "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                          placeholder: "search",
                          style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          icon: "ioniconsAddCircleOutline" in _ctx ? _ctx.ioniconsAddCircleOutline : unref(addCircleOutline),
                          style: { "font-size": "350%", "color": "#1d3160" },
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
                            icon: "ioniconsAddCircleOutline" in _ctx ? _ctx.ioniconsAddCircleOutline : unref(addCircleOutline),
                            style: { "font-size": "350%", "color": "#1d3160" },
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin": "0px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_searchbar, {
                          "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                          placeholder: "search",
                          style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                        }, null, 8, ["search-icon"]),
                        createVNode(_component_ion_icon, {
                          icon: "ioniconsAddCircleOutline" in _ctx ? _ctx.ioniconsAddCircleOutline : unref(addCircleOutline),
                          style: { "font-size": "350%", "color": "#1d3160" },
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
            _push2(ssrRenderComponent(_component_ion_content, { style: {} }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "box-shadow": "none", "background": "none", "margin-top": "0px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(cryptos, (crypto, index) => {
                          _push4(ssrRenderComponent(_component_ion_list, { key: index }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Asset, {
                                  name: crypto.name,
                                  symbol: crypto.symbol,
                                  img: crypto.img,
                                  amount: crypto.amount,
                                  price: crypto.price
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Asset, {
                                    name: crypto.name,
                                    symbol: crypto.symbol,
                                    img: crypto.img,
                                    amount: crypto.amount,
                                    price: crypto.price
                                  }, null, 8, ["name", "symbol", "img", "amount", "price"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(cryptos, (crypto, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_Asset, {
                                  name: crypto.name,
                                  symbol: crypto.symbol,
                                  img: crypto.img,
                                  amount: crypto.amount,
                                  price: crypto.price
                                }, null, 8, ["name", "symbol", "img", "amount", "price"])
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
                    createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "box-shadow": "none", "background": "none", "margin-top": "0px" } }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(cryptos, (crypto, index) => {
                          return createVNode(_component_ion_list, { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_Asset, {
                                name: crypto.name,
                                symbol: crypto.symbol,
                                img: crypto.img,
                                amount: crypto.amount,
                                price: crypto.price
                              }, null, 8, ["name", "symbol", "img", "amount", "price"])
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
              class: "ion-no-border",
              style: { "display": "flex", "flex-direction": "column", "align-items": "center", "margin-bottom": "5%" }
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
                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin": "0px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_searchbar, {
                        "search-icon": "ioniconsSearchCircle" in _ctx ? _ctx.ioniconsSearchCircle : unref(searchCircle),
                        placeholder: "search",
                        style: { "--icon-colour": "#1d3160", "margin": "0px", "width": "80%" }
                      }, null, 8, ["search-icon"]),
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsAddCircleOutline" in _ctx ? _ctx.ioniconsAddCircleOutline : unref(addCircleOutline),
                        style: { "font-size": "350%", "color": "#1d3160" },
                        onClick: () => {
                        }
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_content, { style: {} }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "box-shadow": "none", "background": "none", "margin-top": "0px" } }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(cryptos, (crypto, index) => {
                        return createVNode(_component_ion_list, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_Asset, {
                              name: crypto.name,
                              symbol: crypto.symbol,
                              img: crypto.img,
                              amount: crypto.amount,
                              price: crypto.price
                            }, null, 8, ["name", "symbol", "img", "amount", "price"])
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
                class: "ion-no-border",
                style: { "display": "flex", "flex-direction": "column", "align-items": "center", "margin-bottom": "5%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_Tabs, { style: { "width": "90%", "border-radius": "20px" } })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/assets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const assets = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dad3f3ac"]]);

export { assets as default };
//# sourceMappingURL=assets-35679911.mjs.map
