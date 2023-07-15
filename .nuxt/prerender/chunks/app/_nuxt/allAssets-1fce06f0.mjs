import { _ as _export_sfc, l as IonCard, o as IonCardTitle, n as IonCardSubtitle, f as IonIcon, w as IonModal, i as IonHeader, I as IonToolbar, s as IonSegment, t as IonSegmentButton, g as IonLabel, j as IonButtons, k as IonButton, z as IonContent, u as IonList } from '../server.mjs';
import { a as arrowUpCircleSharp, j as returnUpBack } from './addAsset-91afadc7.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, ref, openBlock, createBlock, Fragment, renderList } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mainAsset",
  __ssrInlineRender: true,
  props: {
    name: {},
    symbol: {},
    price: {},
    amount: {},
    img: {}
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
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" })}" data-v-041131ca${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: "title",
                    style: { "font-size": "150%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.symbol)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.symbol), 1)
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
                        _push4(`${ssrInterpolate(props.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "30%", "height": "100%" })}" data-v-041131ca${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    class: "arrow",
                    color: "primary",
                    icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                    style: { "font-size": "250%", "transform": "rotate(45deg)" }
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
                          createTextVNode(toDisplayString(props.symbol), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, {
                        class: "title",
                        style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.name), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "max-width": "30%", "height": "100%" } }, [
                      createVNode(_component_ion_icon, {
                        class: "arrow",
                        color: "primary",
                        icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                        style: { "font-size": "250%", "transform": "rotate(45deg)" }
                      }, null, 8, ["icon"])
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
                        _push4(`$${ssrInterpolate(props.amount)}`);
                      } else {
                        return [
                          createTextVNode("$" + toDisplayString(props.amount), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_subtitle, { style: { "font-size": "100%", "color": "red" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+6.5%`);
                      } else {
                        return [
                          createTextVNode("+6.5%")
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
                        createTextVNode("$" + toDisplayString(props.amount), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, { style: { "font-size": "100%", "color": "red" } }, {
                      default: withCtx(() => [
                        createTextVNode("+6.5%")
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
                        createTextVNode(toDisplayString(props.symbol), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_subtitle, {
                      class: "title",
                      style: { "font-size": "80%", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "max-width": "30%", "height": "100%" } }, [
                    createVNode(_component_ion_icon, {
                      class: "arrow",
                      color: "primary",
                      icon: "ioniconsArrowUpCircleSharp" in _ctx ? _ctx.ioniconsArrowUpCircleSharp : unref(arrowUpCircleSharp),
                      style: { "font-size": "250%", "transform": "rotate(45deg)" }
                    }, null, 8, ["icon"])
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
                      createTextVNode("$" + toDisplayString(props.amount), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card_subtitle, { style: { "font-size": "100%", "color": "red" } }, {
                    default: withCtx(() => [
                      createTextVNode("+6.5%")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mainAsset.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-041131ca"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "allAssets",
  __ssrInlineRender: true,
  props: {
    isAllAssetmodalOpen: { type: Boolean }
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
      const _component_ion_list = IonList;
      const _component_mainAsset = __nuxt_component_11;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isAllAssetmodalOpen
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
                          value: unref(switchAssets),
                          style: {}
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_segment_button, {
                                value: "fiat",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                      createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                    _push6(ssrRenderComponent(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                      createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                    createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                    createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                            value: unref(switchAssets),
                            style: {}
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_segment_button, {
                                value: "fiat",
                                onClick: ($event) => switchAssets.value = "fiat"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                  createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                          value: unref(switchAssets),
                          style: {}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_segment_button, {
                              value: "fiat",
                              onClick: ($event) => switchAssets.value = "fiat"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                                createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
            _push2(ssrRenderComponent(_component_ion_content, {
              class: "ion-padding content",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(switchAssets) == "crypto") {
                    _push3(`<!--[-->`);
                    ssrRenderList(cryptos, (crypto, index) => {
                      _push3(ssrRenderComponent(_component_ion_list, {
                        key: index,
                        style: { "background": "none" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_mainAsset, {
                              name: crypto.name,
                              symbol: crypto.symbol,
                              price: crypto.price,
                              amount: crypto.amount,
                              img: crypto.img
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_mainAsset, {
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
                        key: fiat.symbol,
                        style: { "background": "none" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_mainAsset, {
                              name: fiat.name,
                              symbol: fiat.symbol,
                              price: fiat.price,
                              amount: fiat.amount,
                              img: fiat.img
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_mainAsset, {
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
                      return createVNode(_component_ion_list, {
                        key: index,
                        style: { "background": "none" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_mainAsset, {
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
                        key: fiat.symbol,
                        style: { "background": "none" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_mainAsset, {
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
          } else {
            return [
              createVNode(_component_ion_header, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, { style: { "--background": "secondary" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_segment, {
                        value: unref(switchAssets),
                        style: {}
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_segment_button, {
                            value: "fiat",
                            onClick: ($event) => switchAssets.value = "fiat"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
                              createVNode(_component_ion_label, { style: { "color": "whitesmoke" } }, {
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
              createVNode(_component_ion_content, {
                class: "ion-padding content",
                style: {}
              }, {
                default: withCtx(() => [
                  unref(switchAssets) == "crypto" ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(cryptos, (crypto, index) => {
                    return createVNode(_component_ion_list, {
                      key: index,
                      style: { "background": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_mainAsset, {
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
                      key: fiat.symbol,
                      style: { "background": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_mainAsset, {
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/allAssets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e469786a"]]);

export { __nuxt_component_19 as _ };
//# sourceMappingURL=allAssets-1fce06f0.mjs.map
