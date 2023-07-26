import { d as IonCard, f as IonCardTitle, v as IonCardSubtitle, g as IonIcon, _ as _export_sfc, e as IonCardHeader, H as IonCardContent, w as IonModal, i as IonContent, j as IonList, I as IonPage, a as IonHeader, b as IonToolbar, l as IonButton, o as IonAvatar, t as IonLabel } from "../server.mjs";
import { k as arrowUpCircleSharp, o as arrowDownCircleSharp, A as arrowForwardCircleSharp, u as returnUpBack, m as moon, j as eyeOffSharp, y as peopleCircleOutline } from "./index-f08fc5f8.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext, openBlock, createBlock, Fragment, renderList, ref, watch, resolveComponent, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./addAsset-0ea1a80a.js";
import { _ as __nuxt_component_19 } from "./allAssets-e10b1a18.js";
import { u as useDarkMode } from "./useDarkMode-386da5e9.js";
import { _ as _imports_0 } from "./BTC-16888d2f.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "70%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "3%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "flex-start", "max-width": "30%", "height": "100%" })}" data-v-40a8e53d${_scopeId2}>`);
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
                  _push3(`</div><div style="${ssrRenderStyle({ "max-width": "100%", "height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-40a8e53d${_scopeId2}>`);
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
              style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "30%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "3%" }
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
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "70%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "3%" }
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
                style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "height": "30%", "width": "100%", "border-radius": "12px", "padding-left": "5%", "padding-right": "5%", "box-shadow": "none", "margin": "3%" }
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
const transaction_vue_vue_type_style_index_0_scoped_40a8e53d_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transaction.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-40a8e53d"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "sendChoice",
  __ssrInlineRender: true,
  props: {
    name: {},
    description: {},
    default: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_icon = IonIcon;
      const _component_ion_card_content = IonCardContent;
      _push(ssrRenderComponent(_component_ion_card, mergeProps({
        button: true,
        class: ["asset", props.default ? "default" : "notDefault"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_card_header, { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_title, {
                    class: ["title", props.default ? "defaultTitle" : "notDefaultTitle"],
                    style: { "font-size": "170%" }
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
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    color: props.default ? "secondary" : "primary",
                    icon: "ioniconsArrowForwardCircleSharp" in _ctx ? _ctx.ioniconsArrowForwardCircleSharp : unref(arrowForwardCircleSharp),
                    size: "large",
                    style: {}
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card_title, {
                      class: ["title", props.default ? "defaultTitle" : "notDefaultTitle"],
                      style: { "font-size": "170%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.name), 1)
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(_component_ion_icon, {
                      color: props.default ? "secondary" : "primary",
                      icon: "ioniconsArrowForwardCircleSharp" in _ctx ? _ctx.ioniconsArrowForwardCircleSharp : unref(arrowForwardCircleSharp),
                      size: "large",
                      style: {}
                    }, null, 8, ["color", "icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_card_content, {
              class: ["title", props.default ? "defaultTitle" : "notDefaultTitle"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_card_header, { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, {
                    class: ["title", props.default ? "defaultTitle" : "notDefaultTitle"],
                    style: { "font-size": "170%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.name), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_ion_icon, {
                    color: props.default ? "secondary" : "primary",
                    icon: "ioniconsArrowForwardCircleSharp" in _ctx ? _ctx.ioniconsArrowForwardCircleSharp : unref(arrowForwardCircleSharp),
                    size: "large",
                    style: {}
                  }, null, 8, ["color", "icon"])
                ]),
                _: 1
              }),
              createVNode(_component_ion_card_content, {
                class: ["title", props.default ? "defaultTitle" : "notDefaultTitle"]
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.description), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const sendChoice_vue_vue_type_style_index_0_scoped_d6ef4f6e_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sendChoice.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d6ef4f6e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "sendAssetChoice",
  __ssrInlineRender: true,
  props: {
    isSendAssetChoiceModalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    async function canDismiss(data, role) {
      return role !== "gesture";
    }
    const sendChoices = [
      {
        name: "Email",
        description: "Instant transfer to users registered on Vyre (no fees charged)",
        default: true
      },
      {
        name: "Blockchain Address",
        description: "Transfer to blockchain address (includes transaction fees)",
        default: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_content = IonContent;
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_list = IonList;
      const _component_SendChoice = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isSendAssetChoiceModalOpen,
        "initial-breakpoint": 0.65,
        breakpoints: [0, 0.4, 0.5, 0.65, 0.75],
        "backdrop-dismiss": false,
        "backdrop-breakpoint": 0,
        "can-dismiss": canDismiss,
        style: { "--border-radius": "32px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, {
              class: "ion-padding content",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin-bottom": "0px", "margin-top": "8%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "170%", "font-weight": "bold" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Transfer Asset`);
                            } else {
                              return [
                                createTextVNode("Transfer Asset")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "text-transform": "lowercase" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Select transfer method `);
                            } else {
                              return [
                                createTextVNode(" Select transfer method ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "170%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Transfer Asset")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "text-transform": "lowercase" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Select transfer method ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(sendChoices, (choice, index) => {
                    _push3(ssrRenderComponent(_component_ion_list, {
                      key: index,
                      style: { "background": "none" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_SendChoice, {
                            name: choice.name,
                            description: choice.description,
                            default: choice.default,
                            onClick: ($event) => _ctx.$emit("closeModal")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_SendChoice, {
                              name: choice.name,
                              description: choice.description,
                              default: choice.default,
                              onClick: ($event) => _ctx.$emit("closeModal")
                            }, null, 8, ["name", "description", "default", "onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin-bottom": "0px", "margin-top": "8%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "170%", "font-weight": "bold" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Transfer Asset")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "text-transform": "lowercase" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Select transfer method ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(), createBlock(Fragment, null, renderList(sendChoices, (choice, index) => {
                      return createVNode(_component_ion_list, {
                        key: index,
                        style: { "background": "none" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SendChoice, {
                            name: choice.name,
                            description: choice.description,
                            default: choice.default,
                            onClick: ($event) => _ctx.$emit("closeModal")
                          }, null, 8, ["name", "description", "default", "onClick"])
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
              createVNode(_component_ion_content, {
                class: "ion-padding content",
                style: {}
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin-bottom": "0px", "margin-top": "8%" } }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_title, {
                        color: "primary",
                        style: { "font-size": "170%", "font-weight": "bold" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Transfer Asset")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "text-transform": "lowercase" } }, {
                        default: withCtx(() => [
                          createTextVNode(" Select transfer method ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  (openBlock(), createBlock(Fragment, null, renderList(sendChoices, (choice, index) => {
                    return createVNode(_component_ion_list, {
                      key: index,
                      style: { "background": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SendChoice, {
                          name: choice.name,
                          description: choice.description,
                          default: choice.default,
                          onClick: ($event) => _ctx.$emit("closeModal")
                        }, null, 8, ["name", "description", "default", "onClick"])
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
const sendAssetChoice_vue_vue_type_style_index_0_scoped_2271b289_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sendAssetChoice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2271b289"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const isSendAssetChoiceModalOpen = ref(false);
    const isP2POpen = ref(false);
    const setP2POpen = (isOpen) => {
      isP2POpen.value = isOpen;
    };
    const setSendAssetChoice = (isOpen) => {
      isSendAssetChoiceModalOpen.value = isOpen;
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
      const _component_AddAsset = _sfc_main$4;
      const _component_AllAssets = __nuxt_component_19;
      const _component_P2p = resolveComponent("P2p");
      const _component_SendAssetChoice = __nuxt_component_16;
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
                                                      _push9(`<img alt="asset img"${ssrRenderAttr("src", _imports_0)} data-v-521627d2${_scopeId8}>`);
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
                                                      _push9(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-521627d2${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<strong style="${ssrRenderStyle({ "font-size": "80%" })}" data-v-521627d2${_scopeId9}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
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
                                            style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                            onClick: ($event) => setSendAssetChoice(true)
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
                                              style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                              onClick: ($event) => setSendAssetChoice(true)
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
                                            }, 8, ["onClick"]),
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
                                            style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                            onClick: ($event) => setSendAssetChoice(true)
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
                                          }, 8, ["onClick"]),
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
                                          style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                          onClick: ($event) => setSendAssetChoice(true)
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
                                        }, 8, ["onClick"]),
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
                                        style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                        onClick: ($event) => setSendAssetChoice(true)
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
                                      }, 8, ["onClick"]),
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
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "position": "relative", "top": "1%", "z-index": "888" } }, {
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
                  _push3(`<footer class="ion-no-border" style="${ssrRenderStyle({ "height": "50%", "border-top-left-radius": "38px", "padding": "2%", "padding-top": "-4%", "border": "1px solid black", "margin": "0px" })}" data-v-521627d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "border-radius": "24px", "box-shadow": "none", "--background": "linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6)", "position": "relative", "top": "-1%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" } }, {
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
                  _push3(ssrRenderComponent(_component_SendAssetChoice, {
                    "is-send-asset-choice-modal-open": unref(isSendAssetChoiceModalOpen),
                    onCloseModal: ($event) => setSendAssetChoice(false)
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
                                      style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                      onClick: ($event) => setSendAssetChoice(true)
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
                                    }, 8, ["onClick"]),
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
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "position": "relative", "top": "1%", "z-index": "888" } }, {
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
                      style: { "height": "50%", "border-top-left-radius": "38px", "padding": "2%", "padding-top": "-4%", "border": "1px solid black", "margin": "0px" }
                    }, [
                      createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "border-radius": "24px", "box-shadow": "none", "--background": "linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6)", "position": "relative", "top": "-1%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" } }, {
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
                    }, null, 8, ["is-all-assetmodal-open", "onCloseModal"]),
                    createVNode(_component_SendAssetChoice, {
                      "is-send-asset-choice-modal-open": unref(isSendAssetChoiceModalOpen),
                      onCloseModal: ($event) => setSendAssetChoice(false)
                    }, null, 8, ["is-send-asset-choice-modal-open", "onCloseModal"])
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
                                    style: { "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center", "height": "80%", "width": "25%", "border-radius": "18px", "padding": "3%", "margin-right": "-2%" },
                                    onClick: ($event) => setSendAssetChoice(true)
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
                                  }, 8, ["onClick"]),
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
                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "position": "relative", "top": "1%", "z-index": "888" } }, {
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
                    style: { "height": "50%", "border-top-left-radius": "38px", "padding": "2%", "padding-top": "-4%", "border": "1px solid black", "margin": "0px" }
                  }, [
                    createVNode(_component_ion_card, { style: { "max-height": "100%", "min-height": "100%", "overflow-y": "scroll", "scroll-behavior": "smooth", "padding-bottom": "3%", "border-radius": "24px", "box-shadow": "none", "--background": "linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6)", "position": "relative", "top": "-1%", "margin-left": "0px", "margin-right": "0px", "margin-top": "0px" } }, {
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
                  }, null, 8, ["is-all-assetmodal-open", "onCloseModal"]),
                  createVNode(_component_SendAssetChoice, {
                    "is-send-asset-choice-modal-open": unref(isSendAssetChoiceModalOpen),
                    onCloseModal: ($event) => setSendAssetChoice(false)
                  }, null, 8, ["is-send-asset-choice-modal-open", "onCloseModal"])
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
const assetpage_vue_vue_type_style_index_0_scoped_521627d2_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/assetpage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-521627d2"]]);
export {
  __nuxt_component_17 as _
};
//# sourceMappingURL=assetpage-eb210bc7.js.map
