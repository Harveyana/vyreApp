import { _ as _export_sfc, D as IonModal, i as IonHeader, I as IonToolbar, s as IonSegment, t as IonSegmentButton, g as IonLabel, j as IonButtons, k as IonButton, f as IonIcon, C as IonContent, l as IonCard, m as IonCardHeader, o as IonCardTitle, y as IonCardContent, u as IonList, E as IonItem, w as IonAvatar, p as IonCol } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { i as returnUpBack, j as addCircle } from './index-e93fec01.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "asset",
  __ssrInlineRender: true,
  props: {
    name: {},
    symbol: {},
    price: {},
    amount: {},
    img: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_item = IonItem;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_col = IonCol;
      const _component_ion_card_title = IonCardTitle;
      _push(ssrRenderComponent(_component_ion_item, mergeProps({
        button: "",
        detail: false,
        style: { "--border-radius": "13px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_avatar, { slot: "start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="asset img"${ssrRenderAttr("src", _ctx.$props.img)} data-v-53d54ebd${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "asset img",
                      src: _ctx.$props.img
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_col, { style: { "--ion-grid-column-padding-xs": "none" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, { style: { "margin-bottom": "9px", "font-size": "80%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$props.symbol)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$props.symbol), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" })}" data-v-53d54ebd${_scopeId2}><span style="${ssrRenderStyle({ "font-size": "small", "margin-right": "5px" })}" data-v-53d54ebd${_scopeId2}>$${ssrInterpolate(_ctx.$props.price)}</span><span style="${ssrRenderStyle({ "font-size": "x-small", "color": "red" })}" data-v-53d54ebd${_scopeId2}>-0.89%</span></div>`);
                } else {
                  return [
                    createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px", "font-size": "80%" } }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$props.symbol), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" } }, [
                      createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$" + toDisplayString(_ctx.$props.price), 1),
                      createVNode("span", { style: { "font-size": "x-small", "color": "red" } }, "-0.89%")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "start", "align-items": "flex-end" })}" data-v-53d54ebd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<strong style="${ssrRenderStyle({ "font-size": "50%" })}" data-v-53d54ebd${_scopeId2}>${ssrInterpolate(_ctx.$props.amount)}</strong>`);
                } else {
                  return [
                    createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(_ctx.$props.amount), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-53d54ebd${_scopeId}><span style="${ssrRenderStyle({ "font-size": "small", "margin-right": "5px" })}" data-v-53d54ebd${_scopeId}>$ ${ssrInterpolate(_ctx.$props.amount * _ctx.$props.price)}</span></div></div>`);
          } else {
            return [
              createVNode(_component_ion_avatar, { slot: "start" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "asset img",
                    src: _ctx.$props.img
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(_component_ion_col, { style: { "--ion-grid-column-padding-xs": "none" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px", "font-size": "80%" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$props.symbol), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" } }, [
                    createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$" + toDisplayString(_ctx.$props.price), 1),
                    createVNode("span", { style: { "font-size": "x-small", "color": "red" } }, "-0.89%")
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "start", "align-items": "flex-end" } }, [
                createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px" } }, {
                  default: withCtx(() => [
                    createVNode("strong", { style: { "font-size": "50%" } }, toDisplayString(_ctx.$props.amount), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                  createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$ " + toDisplayString(_ctx.$props.amount * _ctx.$props.price), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/asset.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-53d54ebd"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tempAsset",
  __ssrInlineRender: true,
  props: {
    name: {},
    symbol: {},
    price: {},
    amount: {},
    img: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_item = IonItem;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_col = IonCol;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_icon = IonIcon;
      _push(ssrRenderComponent(_component_ion_item, mergeProps({
        button: "",
        detail: false,
        style: { "--border-radius": "13px", "margin-bottom": "2%", "padding-top": "3%" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_avatar, { slot: "start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="asset img"${ssrRenderAttr("src", _ctx.$props.img)} data-v-a5f4c585${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "asset img",
                      src: _ctx.$props.img
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_col, { style: { "--ion-grid-column-padding-xs": "none" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, { style: { "margin-bottom": "9px", "font-size": "100%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<strong data-v-a5f4c585${_scopeId3}>${ssrInterpolate(_ctx.$props.symbol)}</strong>`);
                      } else {
                        return [
                          createVNode("strong", null, toDisplayString(_ctx.$props.symbol), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" })}" data-v-a5f4c585${_scopeId2}><span style="${ssrRenderStyle({ "font-size": "small", "margin-right": "5px" })}" data-v-a5f4c585${_scopeId2}>$${ssrInterpolate(_ctx.$props.price)}</span><span style="${ssrRenderStyle({ "font-size": "x-small", "color": "red" })}" data-v-a5f4c585${_scopeId2}>-0.89%</span></div>`);
                } else {
                  return [
                    createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px", "font-size": "100%" } }, {
                      default: withCtx(() => [
                        createVNode("strong", null, toDisplayString(_ctx.$props.symbol), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" } }, [
                      createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$" + toDisplayString(_ctx.$props.price), 1),
                      createVNode("span", { style: { "font-size": "x-small", "color": "red" } }, "-0.89%")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "start", "align-items": "flex-end" })}" data-v-a5f4c585${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ion_icon, {
              color: "primary",
              icon: "ioniconsAddCircle" in _ctx ? _ctx.ioniconsAddCircle : unref(addCircle),
              style: { "font-size": "200%" }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_ion_avatar, { slot: "start" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "asset img",
                    src: _ctx.$props.img
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(_component_ion_col, { style: { "--ion-grid-column-padding-xs": "none" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, { style: { "margin-bottom": "9px", "font-size": "100%" } }, {
                    default: withCtx(() => [
                      createVNode("strong", null, toDisplayString(_ctx.$props.symbol), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "start", "align-items": "center" } }, [
                    createVNode("span", { style: { "font-size": "small", "margin-right": "5px" } }, "$" + toDisplayString(_ctx.$props.price), 1),
                    createVNode("span", { style: { "font-size": "x-small", "color": "red" } }, "-0.89%")
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { style: { "display": "flex", "flex-direction": "column", "justify-content": "start", "align-items": "flex-end" } }, [
                createVNode(_component_ion_icon, {
                  color: "primary",
                  icon: "ioniconsAddCircle" in _ctx ? _ctx.ioniconsAddCircle : unref(addCircle),
                  style: { "font-size": "200%" }
                }, null, 8, ["icon"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tempAsset.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a5f4c585"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addAsset",
  __ssrInlineRender: true,
  props: {
    ismodalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const switchAssets = ref("fiat");
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
      },
      {
        name: "United States Dollar",
        img: "/ripple.svg",
        symbol: "USD",
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
        name: "Euros",
        img: "/ripple.svg",
        symbol: "EUR",
        price: 0.42,
        amount: 367
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_segment = IonSegment;
      const _component_ion_segment_button = IonSegmentButton;
      const _component_ion_label = IonLabel;
      const _component_ion_buttons = IonButtons;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_content = IonContent;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_content = IonCardContent;
      const _component_ion_list = IonList;
      const _component_tempAsset = __nuxt_component_15;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.ismodalOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_segment, {
                          color: "primary",
                          value: unref(switchAssets)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "fiat",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Fiat`);
                                        } else {
                                          return [
                                            createTextVNode("Fiat")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Fiat")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "crypto",
                                onClick: ($event) => switchAssets.value = "crypto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Crypto`);
                                        } else {
                                          return [
                                            createTextVNode("Crypto")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Crypto")
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
                                  value: "fiat",
                                  onClick: ($event) => switchAssets.value = "fiat"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Fiat")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_ion_segment_button, {
                                  value: "crypto",
                                  onClick: ($event) => switchAssets.value = "crypto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Crypto")
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
                            color: "primary",
                            value: unref(switchAssets)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_segment_button, {
                                value: "fiat",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Fiat")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_ion_segment_button, {
                                value: "crypto",
                                onClick: ($event) => switchAssets.value = "crypto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Crypto")
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
                  _push3(ssrRenderComponent(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_buttons, { slot: "start" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_button, {
                                onClick: ($event) => _ctx.$emit("closeModal")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_icon, {
                                      slot: "start",
                                      color: "primary",
                                      icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                      style: { "font-size": "200%" }
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Back`);
                                  } else {
                                    return [
                                      createVNode(_component_ion_icon, {
                                        slot: "start",
                                        color: "primary",
                                        icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                        style: { "font-size": "200%" }
                                      }, null, 8, ["icon"]),
                                      createTextVNode("Back")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_button, {
                                  onClick: ($event) => _ctx.$emit("closeModal")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      slot: "start",
                                      color: "primary",
                                      icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                      style: { "font-size": "200%" }
                                    }, null, 8, ["icon"]),
                                    createTextVNode("Back")
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
                          createVNode(_component_ion_buttons, { slot: "start" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                onClick: ($event) => _ctx.$emit("closeModal")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, {
                                    slot: "start",
                                    color: "primary",
                                    icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                    style: { "font-size": "200%" }
                                  }, null, 8, ["icon"]),
                                  createTextVNode("Back")
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
                    createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_segment, {
                          color: "primary",
                          value: unref(switchAssets)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_segment_button, {
                              value: "fiat",
                              onClick: ($event) => switchAssets.value = "fiat"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Fiat")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_ion_segment_button, {
                              value: "crypto",
                              onClick: ($event) => switchAssets.value = "crypto"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Crypto")
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
                    createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_buttons, { slot: "start" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_button, {
                              onClick: ($event) => _ctx.$emit("closeModal")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  slot: "start",
                                  color: "primary",
                                  icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                  style: { "font-size": "200%" }
                                }, null, 8, ["icon"]),
                                createTextVNode("Back")
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
            _push2(ssrRenderComponent(_component_ion_content, { class: "ion-padding" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="coin"${ssrRenderAttr("src", unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg")} style="${ssrRenderStyle({ "width": "40%" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_card_header, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Add asset wallet`);
                                  } else {
                                    return [
                                      createTextVNode("Add asset wallet")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add asset wallet")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_content, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Become truly borderless,ablilty to bank with multiple currencies. `);
                            } else {
                              return [
                                createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("img", {
                            alt: "coin",
                            src: unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg",
                            style: { "width": "40%" }
                          }, null, 8, ["src"]),
                          createVNode(_component_ion_card_header, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                                default: withCtx(() => [
                                  createTextVNode("Add asset wallet")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_content, null, {
                            default: withCtx(() => [
                              createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "50%", "min-height": "50%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(switchAssets) == "crypto") {
                          _push4(`<!--[-->`);
                          ssrRenderList(cryptos, (crypto, index) => {
                            _push4(ssrRenderComponent(_component_ion_list, { key: index }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_tempAsset, {
                                    name: crypto.name,
                                    symbol: crypto.symbol,
                                    price: crypto.price,
                                    amount: crypto.amount,
                                    img: crypto.img
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_tempAsset, {
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
                                  _push5(ssrRenderComponent(_component_tempAsset, {
                                    name: fiat.name,
                                    symbol: fiat.symbol,
                                    price: fiat.price,
                                    amount: fiat.amount,
                                    img: fiat.img
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_tempAsset, {
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
                          unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                            return createVNode(_component_ion_list, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_tempAsset, {
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
                                createVNode(_component_tempAsset, {
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none" } }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "coin",
                          src: unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg",
                          style: { "width": "40%" }
                        }, null, 8, ["src"]),
                        createVNode(_component_ion_card_header, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                              default: withCtx(() => [
                                createTextVNode("Add asset wallet")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_content, null, {
                          default: withCtx(() => [
                            createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card, { style: { "max-height": "50%", "min-height": "50%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none" } }, {
                      default: withCtx(() => [
                        unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                          return createVNode(_component_ion_list, { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_tempAsset, {
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
                              createVNode(_component_tempAsset, {
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
              createVNode(_component_ion_header, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_segment, {
                        color: "primary",
                        value: unref(switchAssets)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_segment_button, {
                            value: "fiat",
                            onClick: ($event) => switchAssets.value = "fiat"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Fiat")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_segment_button, {
                            value: "crypto",
                            onClick: ($event) => switchAssets.value = "crypto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createTextVNode("Crypto")
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
                  createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_buttons, { slot: "start" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            onClick: ($event) => _ctx.$emit("closeModal")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                slot: "start",
                                color: "primary",
                                icon: "ioniconsReturnUpBack" in _ctx ? _ctx.ioniconsReturnUpBack : unref(returnUpBack),
                                style: { "font-size": "200%" }
                              }, null, 8, ["icon"]),
                              createTextVNode("Back")
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
              createVNode(_component_ion_content, { class: "ion-padding" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "box-shadow": "none" } }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        alt: "coin",
                        src: unref(switchAssets) == "crypto" ? "/coin_top.svg" : "/compass_top.svg",
                        style: { "width": "40%" }
                      }, null, 8, ["src"]),
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, { style: { "font-size": "200%" } }, {
                            default: withCtx(() => [
                              createTextVNode("Add asset wallet")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_content, null, {
                        default: withCtx(() => [
                          createTextVNode(" Become truly borderless,ablilty to bank with multiple currencies. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card, { style: { "max-height": "50%", "min-height": "50%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "box-shadow": "none" } }, {
                    default: withCtx(() => [
                      unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                        return createVNode(_component_ion_list, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_tempAsset, {
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
                            createVNode(_component_tempAsset, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/addAsset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_17 as _, _sfc_main as a };
//# sourceMappingURL=addAsset-599346af.mjs.map
