import { l as IonCard, o as IonCardTitle, n as IonCardSubtitle, v as IonAvatar, _ as _export_sfc, w as IonModal, h as IonPage, i as IonHeader, I as IonToolbar, k as IonButton, f as IonIcon, j as IonButtons, m as IonCardHeader, g as IonLabel, x as IonFooter, s as IonSegment, t as IonSegmentButton, u as IonList, y as IonChip } from "../server.mjs";
import { a as _sfc_main$5, _ as __nuxt_component_17$1 } from "./addAsset-2dffe909.js";
import { _ as __nuxt_component_19$1 } from "./allAssets-6633328a.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, ref, watch, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { u as useDarkMode } from "./useDarkMode-386da5e9.js";
import { h as home, m as moon, e as eyeOffSharp, a as arrowUpCircleSharp, b as arrowDownCircleSharp, g as returnUpBack, i as peopleCircleOutline, t as thumbsUp, n as notifications, f as duplicate, o as open } from "./index-058eb3b8.js";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "70%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" })}" data-v-f697b449${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
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
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-f697b449${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "0.9", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.baseImgUrl)} data-v-f697b449${_scopeId3}>`);
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
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", props.quoteImgUrl)} data-v-f697b449${_scopeId3}>`);
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
                        style: { "font-size": "150%" }
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
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "30%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.quantity)} ${ssrInterpolate(props.quote)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.quantity) + " " + toDisplayString(props.quote), 1)
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
                      style: { "font-size": "150%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.quantity) + " " + toDisplayString(props.quote), 1)
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
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "70%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" } }, [
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "150%" }
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
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "30%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.quantity) + " " + toDisplayString(props.quote), 1)
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
const order_vue_vue_type_style_index_0_scoped_f697b449_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/order.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f697b449"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "p2p",
  __ssrInlineRender: true,
  props: {
    isAllAssetmodalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
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
      const _component_ion_modal = IonModal;
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
      const _component_AddAsset = _sfc_main$5;
      const _component_ion_footer = IonFooter;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_list = IonList;
      const _component_order = __nuxt_component_17;
      const _component_asset = __nuxt_component_17$1;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isAllAssetmodalOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_page, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_header, { class: "ion-no-border" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_button, {
                                fill: "clear",
                                style: { "--border-radius": "10px" },
                                onClick: ($event) => _ctx.$emit("closeModal")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      slot: "end",
                                      icon: "ioniconsHome" in _ctx ? _ctx.ioniconsHome : unref(home)
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_buttons, { slot: "primary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_button, {
                                      fill: "clear",
                                      style: { "--border-radius": "10px" },
                                      onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_icon, {
                                            slot: "end",
                                            icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                          }, null, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_button, {
                                  fill: "clear",
                                  style: { "--border-radius": "10px" },
                                  onClick: ($event) => _ctx.$emit("closeModal")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                button: true,
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%", "border": "1px solid black" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`+1.12 %`);
                                              } else {
                                                return [
                                                  createTextVNode("+1.12 %")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-08cbccd2${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-08cbccd2${_scopeId7}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                              } else {
                                                return [
                                                  createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_icon, {
                                            color: "primary",
                                            size: "large",
                                            icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                                            style: { "margin-left": "10px" },
                                            onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
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
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none", "border": "1px solid black" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card, {
                                      button: true,
                                      style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "max-height": "100%", "width": "50%", "border-radius": "12px" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-08cbccd2${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<strong style="${ssrRenderStyle({ "font-size": "50%" })}" data-v-08cbccd2${_scopeId8}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260")}</strong>`);
                                                    } else {
                                                      return [
                                                        createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                                _push8(ssrRenderComponent(_component_ion_label, {
                                                  color: "primary",
                                                  style: { "font-size": "80%" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Available`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Available")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_card, {
                                      button: true,
                                      style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "50%", "border-radius": "12px" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "width": "100%" })}" data-v-08cbccd2${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<strong style="${ssrRenderStyle({ "font-size": "50%" })}" data-v-08cbccd2${_scopeId8}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$1,260,351")}</strong>`);
                                                    } else {
                                                      return [
                                                        createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$1,260,351"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                                _push8(ssrRenderComponent(_component_ion_label, {
                                                  color: "primary",
                                                  style: { "font-size": "80%" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Processing`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Processing")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card, {
                                  button: true,
                                  style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%", "border": "1px solid black" }
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
                                createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none", "border": "1px solid black" } }, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                fill: "clear",
                                style: { "--border-radius": "10px" },
                                onClick: ($event) => _ctx.$emit("closeModal")
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
                                style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%", "border": "1px solid black" }
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
                              createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none", "border": "1px solid black" } }, {
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AddAsset, {
                    "is-crypto": unref(switchTab),
                    "ismodal-open": unref(ismodalOpen),
                    onCloseModal: ($event) => setOpen(false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_footer, {
                    class: "ion-no-border",
                    style: { "min-height": "65%", "border-top-left-radius": "38px", "border": "1px solid black" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "min-height": "16%", "max-height": "16%", "width": "100%", "margin-top": "0px", "margin-left": "0px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_segment, {
                                value: unref(switchTab),
                                style: { "width": "80%" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_segment_button, {
                                      value: "Orders",
                                      onClick: ($event) => switchTab.value = "Orders"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_label, { style: { "color": "whitesmoke" } }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Orders`);
                                              } else {
                                                return [
                                                  createTextVNode("Orders")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
                                              default: withCtx(() => [
                                                createTextVNode("Orders")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_segment_button, {
                                      value: "Transactions",
                                      onClick: ($event) => switchTab.value = "Transactions"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_label, { style: { "color": "whitesmoke" } }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Transactions`);
                                              } else {
                                                return [
                                                  createTextVNode("Transactions")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
                                              default: withCtx(() => [
                                                createTextVNode("Transactions")
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
                                      createVNode(_component_ion_segment_button, {
                                        value: "Orders",
                                        onClick: ($event) => switchTab.value = "Orders"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                          createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                              }, _parent5, _scopeId4));
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
                                        createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                        createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none", "background": "none", "position": "relative", "bottom": "7%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(switchTab) == "Orders") {
                                _push5(`<!--[-->`);
                                ssrRenderList(orders, (order, index) => {
                                  _push5(ssrRenderComponent(_component_ion_list, { key: index }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_order, {
                                          base: order.base,
                                          baseImgUrl: order.baseImgUrl,
                                          quote: order.quote,
                                          "quote-img-url": order.quoteImgUrl,
                                          "order-type": order.orderType,
                                          "process-percentage": order.processPercentage,
                                          quantity: order.quantity
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_order, {
                                            base: order.base,
                                            baseImgUrl: order.baseImgUrl,
                                            quote: order.quote,
                                            "quote-img-url": order.quoteImgUrl,
                                            "order-type": order.orderType,
                                            "process-percentage": order.processPercentage,
                                            quantity: order.quantity
                                          }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!--[-->`);
                                ssrRenderList(fiats, (fiat, index) => {
                                  _push5(ssrRenderComponent(_component_ion_list, {
                                    key: fiat.symbol
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_asset, {
                                          name: fiat.name,
                                          symbol: fiat.symbol,
                                          price: fiat.price,
                                          amount: fiat.amount,
                                          img: fiat.img
                                        }, null, _parent6, _scopeId5));
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
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              }
                            } else {
                              return [
                                unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(orders, (order, index) => {
                                  return createVNode(_component_ion_list, { key: index }, {
                                    default: withCtx(() => [
                                      createVNode(_component_order, {
                                        base: order.base,
                                        baseImgUrl: order.baseImgUrl,
                                        quote: order.quote,
                                        "quote-img-url": order.quoteImgUrl,
                                        "order-type": order.orderType,
                                        "process-percentage": order.processPercentage,
                                        quantity: order.quantity
                                      }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity"])
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
                        }, _parent4, _scopeId3));
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
                                      createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                      createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                          createVNode(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none", "background": "none", "position": "relative", "bottom": "7%" } }, {
                            default: withCtx(() => [
                              unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(orders, (order, index) => {
                                return createVNode(_component_ion_list, { key: index }, {
                                  default: withCtx(() => [
                                    createVNode(_component_order, {
                                      base: order.base,
                                      baseImgUrl: order.baseImgUrl,
                                      quote: order.quote,
                                      "quote-img-url": order.quoteImgUrl,
                                      "order-type": order.orderType,
                                      "process-percentage": order.processPercentage,
                                      quantity: order.quantity
                                    }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_header, { class: "ion-no-border" }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_button, {
                              fill: "clear",
                              style: { "--border-radius": "10px" },
                              onClick: ($event) => _ctx.$emit("closeModal")
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
                              style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%", "border": "1px solid black" }
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
                            createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none", "border": "1px solid black" } }, {
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
                      style: { "min-height": "65%", "border-top-left-radius": "38px", "border": "1px solid black" }
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
                                    createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                    createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                        createVNode(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none", "background": "none", "position": "relative", "bottom": "7%" } }, {
                          default: withCtx(() => [
                            unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(orders, (order, index) => {
                              return createVNode(_component_ion_list, { key: index }, {
                                default: withCtx(() => [
                                  createVNode(_component_order, {
                                    base: order.base,
                                    baseImgUrl: order.baseImgUrl,
                                    quote: order.quote,
                                    "quote-img-url": order.quoteImgUrl,
                                    "order-type": order.orderType,
                                    "process-percentage": order.processPercentage,
                                    quantity: order.quantity
                                  }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_page, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_header, { class: "ion-no-border" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            fill: "clear",
                            style: { "--border-radius": "10px" },
                            onClick: ($event) => _ctx.$emit("closeModal")
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
                            style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "height": "100%", "width": "91%", "border-radius": "12px", "margin-bottom": "-10%", "border": "1px solid black" }
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
                          createVNode(_component_ion_card, { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "20%", "width": "100%", "border-radius": "12px", "margin-left": "0px", "box-shadow": "none", "border": "1px solid black" } }, {
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
                    style: { "min-height": "65%", "border-top-left-radius": "38px", "border": "1px solid black" }
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
                                  createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                  createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                      createVNode(_component_ion_card, { style: { "max-height": "63%", "min-height": "63%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none", "background": "none", "position": "relative", "bottom": "7%" } }, {
                        default: withCtx(() => [
                          unref(switchTab) == "Orders" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(orders, (order, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_order, {
                                  base: order.base,
                                  baseImgUrl: order.baseImgUrl,
                                  quote: order.quote,
                                  "quote-img-url": order.quoteImgUrl,
                                  "order-type": order.orderType,
                                  "process-percentage": order.processPercentage,
                                  quantity: order.quantity
                                }, null, 8, ["base", "baseImgUrl", "quote", "quote-img-url", "order-type", "process-percentage", "quantity"])
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
const p2p_vue_vue_type_style_index_0_scoped_08cbccd2_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/p2p.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_18 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-08cbccd2"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "transaction",
  __ssrInlineRender: true,
  props: {
    transactionType: {},
    amount: {},
    time: {},
    reciepient: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_icon = IonIcon;
      _push(ssrRenderComponent(_component_ion_card, mergeProps({
        class: "asset",
        style: {}
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_card, {
              class: "subAsset",
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "70%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" })}" data-v-c38ea1b8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.transactionType)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.transactionType), 1)
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
                        _push4(`${ssrInterpolate(props.reciepient)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.reciepient), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-c38ea1b8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    icon: props.transactionType === "sent" ? "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp) : "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                    style: { "font-size": "350%", "transform": "rotate(45deg)" },
                    class: props.transactionType === "sent" ? "red" : "green"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" } }, [
                      createVNode(_component_ion_card_title, {
                        class: "title",
                        style: { "font-size": "150%" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.transactionType), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, {
                        class: "title",
                        style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.reciepient), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                      createVNode(_component_ion_icon, {
                        icon: props.transactionType === "sent" ? "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp) : "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                        style: { "font-size": "350%", "transform": "rotate(45deg)" },
                        class: props.transactionType === "sent" ? "red" : "green"
                      }, null, 8, ["icon", "class"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card, {
              class: "subAsset",
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "30%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.amount)} BTC`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.amount) + " BTC", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_subtitle, { style: { "font-size": "120%", "color": "green" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.time)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.time), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "150%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.amount) + " BTC", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, { style: { "font-size": "120%", "color": "green" } }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.time), 1)
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
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "70%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" } }, [
                    createVNode(_component_ion_card_title, {
                      class: "title",
                      style: { "font-size": "150%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.transactionType), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, {
                      class: "title",
                      style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.reciepient), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                    createVNode(_component_ion_icon, {
                      icon: props.transactionType === "sent" ? "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp) : "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                      style: { "font-size": "350%", "transform": "rotate(45deg)" },
                      class: props.transactionType === "sent" ? "red" : "green"
                    }, null, 8, ["icon", "class"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, {
                class: "subAsset",
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "30%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.amount) + " BTC", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card_subtitle, { style: { "font-size": "120%", "color": "green" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.time), 1)
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
const transaction_vue_vue_type_style_index_0_scoped_c38ea1b8_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transaction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c38ea1b8"]]);
const _imports_0 = "" + __publicAssetsURL("BTC.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "assetpage",
  __ssrInlineRender: true,
  props: {
    isAssetPageOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    const switchAssets = ref("crypto");
    const hideTotal = ref(false);
    const isAddAssetsModalOpen = ref(false);
    const isAllAssetsModalOpen = ref(false);
    const isP2POpen = ref(false);
    const setP2POpen = (isOpen) => {
      isP2POpen.value = isOpen;
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
    const transactions = [
      {
        transactionType: "recieved",
        amount: 0.03,
        time: "2 july 2023 11:30",
        reciepient: "you"
      },
      {
        transactionType: "sent",
        amount: 0.01,
        time: "7 july 2023 9:30",
        reciepient: "Anayo Obi"
      },
      {
        transactionType: "sent",
        amount: 0.01,
        time: "7 july 2023 9:30",
        reciepient: "Harvey Ana"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_card = IonCard;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_label = IonLabel;
      const _component_ion_list = IonList;
      const _component_Transaction = __nuxt_component_13;
      const _component_AddAsset = _sfc_main$5;
      const _component_AllAssets = __nuxt_component_19$1;
      const _component_P2p = __nuxt_component_18;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isAssetPageOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_page, { style: {} }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_header, {
                    class: "ion-no-border",
                    style: { "max-height": "40%", "min-height": "40%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_toolbar, {
                          class: "tooba",
                          style: { "min-height": "100%", "max-height": "100%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card, {
                                class: "headingCard",
                                style: {}
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_button, {
                                      fill: "clear",
                                      style: { "--border-radius": "10px" },
                                      onClick: ($event) => _ctx.$emit("closeModal")
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_icon, {
                                            slot: "end",
                                            icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                            style: { "font-size": "200%" }
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ion_icon, {
                                              slot: "end",
                                              icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                              style: { "font-size": "200%" }
                                            }, null, 8, ["icon"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_button, {
                                      fill: "clear",
                                      style: { "--border-radius": "12px", "height": "40px" },
                                      onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_icon, {
                                            color: "secondary",
                                            slot: "end",
                                            icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon)
                                          }, null, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_button, {
                                        fill: "clear",
                                        style: { "--border-radius": "10px" },
                                        onClick: ($event) => _ctx.$emit("closeModal")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_icon, {
                                            slot: "end",
                                            icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                            style: { "font-size": "200%" }
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "none", "border": "1px solid black,display: flex", "flex-direction": "column", "justify-content": "center", "height": "20%", "align-items": "center" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_card, {
                                      class: "",
                                      style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "45%", "max-height": "45%", "margin": "0px" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_card, {
                                            class: "notificationBox",
                                            style: {}
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<img alt="asset img"${ssrRenderAttr("src", _imports_0)} data-v-4a08bbc7${_scopeId8}>`);
                                                    } else {
                                                      return [
                                                        createVNode("img", {
                                                          alt: "asset img",
                                                          src: _imports_0
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                                    default: withCtx(() => [
                                                      createVNode("img", {
                                                        alt: "asset img",
                                                        src: _imports_0
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_card, {
                                            class: "figureBox",
                                            button: true,
                                            style: {}
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_card_header, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_ion_card_subtitle, { style: { "color": "green" } }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`+1.12 %`);
                                                          } else {
                                                            return [
                                                              createTextVNode("+1.12 %")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-4a08bbc7${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-4a08bbc7${_scopeId9}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
                                                          } else {
                                                            return [
                                                              createVNode("strong", { style: { "font-size": "80%" } }, toDisplayString(unref(hideTotal) ? "***********" : "$2,260,351.77"), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_ion_icon, {
                                                        color: "primary",
                                                        size: "large",
                                                        icon: "ioniconsEyeOffSharp" in _ctx ? _ctx.ioniconsEyeOffSharp : unref(eyeOffSharp),
                                                        style: { "margin-left": "10px" },
                                                        onClick: ($event) => hideTotal.value = !unref(hideTotal)
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`</div>`);
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
                                                }, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ion_card, {
                                              class: "notificationBox",
                                              style: {}
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      alt: "asset img",
                                                      src: _imports_0
                                                    })
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "50%", "max-height": "50%", "z-index": "99", "margin": "0px", "padding": "0px", "position": "relative", "top": "-32px" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ion_card, {
                                            button: true,
                                            style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_icon, {
                                                  color: "primary",
                                                  icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                                                  size: "large",
                                                  style: { "align-self": "flex-start" }
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_ion_card_subtitle, {
                                                  color: "primary",
                                                  style: { "margin-top": "17%", "margin-left": "23%", "font-size": "70%", "text-transform": "lowercase" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Send`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Send")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_card, {
                                            button: true,
                                            style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_icon, {
                                                  color: "primary",
                                                  icon: "ioniconsArrowDownCircleSharp" in _ctx ? _ctx.ioniconsArrowDownCircleSharp : unref(arrowDownCircleSharp),
                                                  size: "large",
                                                  style: { "align-self": "flex-start" }
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_ion_card_subtitle, {
                                                  color: "primary",
                                                  style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Recieve`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Recieve")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ion_card, {
                                            button: true,
                                            style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "box-shadow": "20px" },
                                            onClick: ($event) => setP2POpen(true)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_ion_icon, {
                                                  color: "primary",
                                                  icon: "ioniconsPeopleCircleOutline" in _ctx ? _ctx.ioniconsPeopleCircleOutline : unref(peopleCircleOutline),
                                                  size: "large",
                                                  style: { "align-self": "flex-start" }
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_ion_card_subtitle, {
                                                  color: "primary",
                                                  style: { "margin-top": "17%", "margin-left": "15%", "font-size": "70%", "text-transform": "lowercase" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`P2P ex`);
                                                    } else {
                                                      return [
                                                        createTextVNode("P2P ex")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                          }, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_card, {
                                        class: "",
                                        style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "45%", "max-height": "45%", "margin": "0px" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_card, {
                                            class: "notificationBox",
                                            style: {}
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    alt: "asset img",
                                                    src: _imports_0
                                                  })
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
                                      }),
                                      createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "50%", "max-height": "50%", "z-index": "99", "margin": "0px", "padding": "0px", "position": "relative", "top": "-32px" } }, {
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
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card, {
                                  class: "headingCard",
                                  style: {}
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_button, {
                                      fill: "clear",
                                      style: { "--border-radius": "10px" },
                                      onClick: ($event) => _ctx.$emit("closeModal")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_icon, {
                                          slot: "end",
                                          icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                          style: { "font-size": "200%" }
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
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
                                createVNode(_component_ion_toolbar, { style: { "--background": "none", "border": "1px solid black,display: flex", "flex-direction": "column", "justify-content": "center", "height": "20%", "align-items": "center" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card, {
                                      class: "",
                                      style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "45%", "max-height": "45%", "margin": "0px" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_card, {
                                          class: "notificationBox",
                                          style: {}
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  alt: "asset img",
                                                  src: _imports_0
                                                })
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
                                    }),
                                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "50%", "max-height": "50%", "z-index": "99", "margin": "0px", "padding": "0px", "position": "relative", "top": "-32px" } }, {
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
                                  createVNode(_component_ion_button, {
                                    fill: "clear",
                                    style: { "--border-radius": "10px" },
                                    onClick: ($event) => _ctx.$emit("closeModal")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, {
                                        slot: "end",
                                        icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                        style: { "font-size": "200%" }
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
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
                              createVNode(_component_ion_toolbar, { style: { "--background": "none", "border": "1px solid black,display: flex", "flex-direction": "column", "justify-content": "center", "height": "20%", "align-items": "center" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card, {
                                    class: "",
                                    style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "45%", "max-height": "45%", "margin": "0px" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_card, {
                                        class: "notificationBox",
                                        style: {}
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                alt: "asset img",
                                                src: _imports_0
                                              })
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
                                  }),
                                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "50%", "max-height": "50%", "z-index": "99", "margin": "0px", "padding": "0px", "position": "relative", "top": "-32px" } }, {
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
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "position": "relative", "top": "1%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_label, {
                          color: "primary",
                          style: { "font-size": "185%", "font-weight": "bold" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Transactions`);
                            } else {
                              return [
                                createTextVNode("Transactions")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_label, {
                            color: "primary",
                            style: { "font-size": "185%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Transactions")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<footer class="ion-no-border" style="${ssrRenderStyle({ "height": "50%", "border-top-left-radius": "38px", "padding": "2%", "padding-top": "-4%" })}" data-v-4a08bbc7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "border-radius": "24px", "box-shadow": "none", "--background": "linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6)", "position": "relative", "top": "-1%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px", "border": "1px solid black" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(switchAssets) == "crypto") {
                          _push4(`<!--[-->`);
                          ssrRenderList(transactions, (transaction, index) => {
                            _push4(ssrRenderComponent(_component_ion_list, { key: index }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Transaction, {
                                    "transaction-type": transaction.transactionType,
                                    amount: transaction.amount,
                                    time: transaction.time,
                                    reciepient: transaction.reciepient
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Transaction, {
                                      "transaction-type": transaction.transactionType,
                                      amount: transaction.amount,
                                      time: transaction.time,
                                      reciepient: transaction.reciepient
                                    }, null, 8, ["transaction-type", "amount", "time", "reciepient"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(transactions, (transaction, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_Transaction, {
                                  "transaction-type": transaction.transactionType,
                                  amount: transaction.amount,
                                  time: transaction.time,
                                  reciepient: transaction.reciepient
                                }, null, 8, ["transaction-type", "amount", "time", "reciepient"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</footer>`);
                  _push3(ssrRenderComponent(_component_AddAsset, {
                    "ismodal-open": unref(isAddAssetsModalOpen),
                    onCloseModal: ($event) => setAddAssetOpen(false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AllAssets, {
                    "is-all-assetmodal-open": unref(isAllAssetsModalOpen),
                    onCloseModal: ($event) => setAllAssetsOpen(false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_P2p, {
                    "is-all-assetmodal-open": unref(isP2POpen),
                    onCloseModal: ($event) => setP2POpen(false)
                  }, null, _parent3, _scopeId2));
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
                                createVNode(_component_ion_button, {
                                  fill: "clear",
                                  style: { "--border-radius": "10px" },
                                  onClick: ($event) => _ctx.$emit("closeModal")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      slot: "end",
                                      icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                      style: { "font-size": "200%" }
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
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
                            createVNode(_component_ion_toolbar, { style: { "--background": "none", "border": "1px solid black,display: flex", "flex-direction": "column", "justify-content": "center", "height": "20%", "align-items": "center" } }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card, {
                                  class: "",
                                  style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "45%", "max-height": "45%", "margin": "0px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card, {
                                      class: "notificationBox",
                                      style: {}
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              alt: "asset img",
                                              src: _imports_0
                                            })
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
                                }),
                                createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "50%", "max-height": "50%", "z-index": "99", "margin": "0px", "padding": "0px", "position": "relative", "top": "-32px" } }, {
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "position": "relative", "top": "1%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, {
                          color: "primary",
                          style: { "font-size": "185%", "font-weight": "bold" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Transactions")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("footer", {
                      class: "ion-no-border",
                      style: { "height": "50%", "border-top-left-radius": "38px", "padding": "2%", "padding-top": "-4%" }
                    }, [
                      createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "border-radius": "24px", "box-shadow": "none", "--background": "linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6)", "position": "relative", "top": "-1%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px", "border": "1px solid black" } }, {
                        default: withCtx(() => [
                          unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(transactions, (transaction, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_Transaction, {
                                  "transaction-type": transaction.transactionType,
                                  amount: transaction.amount,
                                  time: transaction.time,
                                  reciepient: transaction.reciepient
                                }, null, 8, ["transaction-type", "amount", "time", "reciepient"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_AddAsset, {
                      "ismodal-open": unref(isAddAssetsModalOpen),
                      onCloseModal: ($event) => setAddAssetOpen(false)
                    }, null, 8, ["ismodal-open", "onCloseModal"]),
                    createVNode(_component_AllAssets, {
                      "is-all-assetmodal-open": unref(isAllAssetsModalOpen),
                      onCloseModal: ($event) => setAllAssetsOpen(false)
                    }, null, 8, ["is-all-assetmodal-open", "onCloseModal"]),
                    createVNode(_component_P2p, {
                      "is-all-assetmodal-open": unref(isP2POpen),
                      onCloseModal: ($event) => setP2POpen(false)
                    }, null, 8, ["is-all-assetmodal-open", "onCloseModal"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_page, { style: {} }, {
                default: withCtx(() => [
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
                              createVNode(_component_ion_button, {
                                fill: "clear",
                                style: { "--border-radius": "10px" },
                                onClick: ($event) => _ctx.$emit("closeModal")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, {
                                    slot: "end",
                                    icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                    style: { "font-size": "200%" }
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
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
                          createVNode(_component_ion_toolbar, { style: { "--background": "none", "border": "1px solid black,display: flex", "flex-direction": "column", "justify-content": "center", "height": "20%", "align-items": "center" } }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, {
                                class: "",
                                style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "background": "none", "min-height": "45%", "max-height": "45%", "margin": "0px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card, {
                                    class: "notificationBox",
                                    style: {}
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_avatar, { style: { "scale": "1.6", "border": "3px solid #1B1D30" } }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            alt: "asset img",
                                            src: _imports_0
                                          })
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
                              }),
                              createVNode(_component_ion_card, { style: { "box-shadow": "none", "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "background": "none", "min-height": "50%", "max-height": "50%", "z-index": "99", "margin": "0px", "padding": "0px", "position": "relative", "top": "-32px" } }, {
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
                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "position": "relative", "top": "1%" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, {
                        color: "primary",
                        style: { "font-size": "185%", "font-weight": "bold" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Transactions")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("footer", {
                    class: "ion-no-border",
                    style: { "height": "50%", "border-top-left-radius": "38px", "padding": "2%", "padding-top": "-4%" }
                  }, [
                    createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "border-radius": "24px", "box-shadow": "none", "--background": "linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6)", "position": "relative", "top": "-1%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px", "border": "1px solid black" } }, {
                      default: withCtx(() => [
                        unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(transactions, (transaction, index) => {
                          return createVNode(_component_ion_list, { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_Transaction, {
                                "transaction-type": transaction.transactionType,
                                amount: transaction.amount,
                                time: transaction.time,
                                reciepient: transaction.reciepient
                              }, null, 8, ["transaction-type", "amount", "time", "reciepient"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_AddAsset, {
                    "ismodal-open": unref(isAddAssetsModalOpen),
                    onCloseModal: ($event) => setAddAssetOpen(false)
                  }, null, 8, ["ismodal-open", "onCloseModal"]),
                  createVNode(_component_AllAssets, {
                    "is-all-assetmodal-open": unref(isAllAssetsModalOpen),
                    onCloseModal: ($event) => setAllAssetsOpen(false)
                  }, null, 8, ["is-all-assetmodal-open", "onCloseModal"]),
                  createVNode(_component_P2p, {
                    "is-all-assetmodal-open": unref(isP2POpen),
                    onCloseModal: ($event) => setP2POpen(false)
                  }, null, 8, ["is-all-assetmodal-open", "onCloseModal"])
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
const assetpage_vue_vue_type_style_index_0_scoped_4a08bbc7_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/assetpage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a08bbc7"]]);
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
      const _component_asset = __nuxt_component_17$1;
      const _component_AddAsset = _sfc_main$5;
      const _component_AllAssets = __nuxt_component_19$1;
      const _component_P2p = __nuxt_component_18;
      const _component_Assetpage = __nuxt_component_19;
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
                                          _push7(`<img alt="Silhouette of a person&#39;s head" src="https://ionicframework.com/docs/img/demos/avatar.svg" data-v-652c28b8${_scopeId6}>`);
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
                                                _push8(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-652c28b8${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-652c28b8${_scopeId8}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
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
            _push2(ssrRenderComponent(_component_P2p, {
              "is-all-assetmodal-open": unref(isP2POpen),
              onCloseModal: ($event) => setP2POpen(false)
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
              createVNode(_component_P2p, {
                "is-all-assetmodal-open": unref(isP2POpen),
                onCloseModal: ($event) => setP2POpen(false)
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
const homelast_vue_vue_type_style_index_0_scoped_652c28b8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homelast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homelast = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-652c28b8"]]);
export {
  homelast as default
};
//# sourceMappingURL=homelast-cbee43dc.js.map
