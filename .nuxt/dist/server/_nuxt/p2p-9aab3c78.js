import { d as IonCard, f as IonCardTitle, v as IonCardSubtitle, o as IonAvatar, _ as _export_sfc, u as useRoute, I as IonPage, a as IonHeader, b as IonToolbar, e as IonCardHeader, g as IonIcon, h as IonSearchbar, i as IonContent, j as IonList, k as IonFooter } from "../server.mjs";
import { _ as __nuxt_component_3, a as __nuxt_component_14 } from "./tabs-b3b23a53.js";
import { _ as _sfc_main$2 } from "./addAsset-0ea1a80a.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, ref, resolveComponent, unref, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_15, a as __nuxt_component_16 } from "./newOrder-0a8bd02e.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { s as searchCircle, D as filterCircle, E as happy, F as mail, G as addOutline } from "./index-f08fc5f8.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "./useDarkMode-386da5e9.js";
import "./BTC-16888d2f.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" })}" data-v-30515935${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "130%" }
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
                    style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
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
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-30515935${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "0.9", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.baseImgUrl)} data-v-30515935${_scopeId3}>`);
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
                    style: { "scale": "0.9", "position": "relative", "right": "18%", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.quoteImgUrl)} data-v-30515935${_scopeId3}>`);
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
                        style: { "font-size": "130%" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.orderType), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, {
                        class: "title",
                        style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
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
                        style: { "scale": "0.9", "border": "3px solid #1B1D30" }
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
                        style: { "scale": "0.9", "position": "relative", "right": "18%", "border": "3px solid #1B1D30" }
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
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none", "margin-top": "1%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "120%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.quantity)} <span style="${ssrRenderStyle({ "font-size": "70%" })}" data-v-30515935${_scopeId3}>${ssrInterpolate(props.quote)}</span>`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.quantity) + " ", 1),
                          createVNode("span", { style: { "font-size": "70%" } }, toDisplayString(props.quote), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_subtitle, { style: { "font-size": "120%", "color": "green" } }, {
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
                      style: { "font-size": "120%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.quantity) + " ", 1),
                        createVNode("span", { style: { "font-size": "70%" } }, toDisplayString(props.quote), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, { style: { "font-size": "120%", "color": "green" } }, {
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
                      style: { "font-size": "130%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.orderType), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, {
                      class: "title",
                      style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
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
                      style: { "scale": "0.9", "border": "3px solid #1B1D30" }
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
                      style: { "scale": "0.9", "position": "relative", "right": "18%", "border": "3px solid #1B1D30" }
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
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "0px", "background": "none", "margin-top": "1%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "120%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.quantity) + " ", 1),
                      createVNode("span", { style: { "font-size": "70%" } }, toDisplayString(props.quote), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card_subtitle, { style: { "font-size": "120%", "color": "green" } }, {
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
const order_vue_vue_type_style_index_0_scoped_30515935_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/order.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-30515935"]]);
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
      const _component_AddAsset = _sfc_main$2;
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
                                            _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" })}" data-v-76da34cb${_scopeId6}>`);
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin": "0px" } }, {
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
            _push2(ssrRenderComponent(_component_ion_content, { style: { "background": "red" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "box-shadow": "none", "background": "none", "margin-top": "0px" } }, {
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
                    createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "box-shadow": "none", "background": "none", "margin-top": "0px" } }, {
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
                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin": "0px" } }, {
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
              createVNode(_component_ion_content, { style: { "background": "red" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "box-shadow": "none", "background": "none", "margin-top": "0px" } }, {
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
                class: "ion-no-border",
                style: { "display": "flex", "flex-direction": "column", "align-items": "center", "margin-bottom": "5%" }
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
const p2p_vue_vue_type_style_index_0_scoped_76da34cb_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/p2p.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const p2p = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76da34cb"]]);
export {
  p2p as default
};
//# sourceMappingURL=p2p-9aab3c78.js.map
