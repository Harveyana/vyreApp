import { I as IonModal, a as IonContent, b as IonCard, d as IonCardTitle, e as IonCardSubtitle, f as IonChip, g as IonIcon, h as IonLabel, i as IonList, j as IonItem, k as IonSelect, l as IonSelectOption, m as IonAvatar, n as IonInput, o as IonButton, u as useIonRouter, p as useRoute, q as IonPage, r as IonHeader, s as IonToolbar, t as IonCardHeader, v as IonFooter } from "../server.mjs";
import { _ as __nuxt_component_3, a as __nuxt_component_14 } from "./tabs-8b38b157.js";
import { m as mail, l as logoBitcoin, c as cash, w as wallet, i as informationCircle, s as swapVerticalSharp, e as eyeOffSharp, h as happy, a as addOutline } from "./index-d43f4fcb.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, unref, createCommentVNode, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { _ as _imports_1 } from "./nigeria-00f4c107.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "realm-web";
import "@capacitor/app";
import "./useDarkMode-386da5e9.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Transfer",
  __ssrInlineRender: true,
  props: {
    isTransferModalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const sendChoices = [
      {
        name: "Email",
        description: "Instant transfer to users registered on Vyre (no fees charged)",
        icon: mail,
        default: true
      },
      {
        name: "Blockchain Address",
        description: "Transfer to blockchain address (includes transaction fees)",
        icon: logoBitcoin,
        default: false
      },
      {
        name: "Mobile Money",
        description: "Transfer to MTN Mobile Money wallet",
        icon: cash,
        default: false
      },
      {
        name: "Bank Account",
        description: "Transfer to bank account (incurs charges)",
        icon: wallet,
        default: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_content = IonContent;
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_chip = IonChip;
      const _component_ion_icon = IonIcon;
      const _component_ion_label = IonLabel;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isTransferModalOpen,
        "initial-breakpoint": 0.65,
        breakpoints: [0, 0.4, 0.5, 0.65, 0.75],
        "backdrop-dismiss": false,
        "backdrop-breakpoint": 0,
        style: { "--border-radius": "32px" },
        onDidDismiss: ($event) => _ctx.$emit("closeModal")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, {
              class: "ion-padding content",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-row" style="${ssrRenderStyle({ "margin": "5%", "background": "none" })}" data-v-001af80b${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "100%", "position": "relative", "bottom": "8%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Transfer`);
                            } else {
                              return [
                                createTextVNode("Transfer")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%", "text-transform": "lowercase" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Select transfer type `);
                            } else {
                              return [
                                createTextVNode(" Select transfer type ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Transfer")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%", "text-transform": "lowercase" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Select transfer type ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ion_card, {
                    class: "flex-column-center",
                    style: { "margin": "0px", "background": "none", "box-shadow": "none", "padding-bottom": "3%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(sendChoices, (choice) => {
                          _push4(ssrRenderComponent(_component_ion_chip, {
                            style: { "height": "85px", "width": "85%", "padding": "8%", "padding-left": "10%" },
                            key: choice.name
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ion_icon, {
                                  icon: choice.icon,
                                  style: { "scale": "2.9", "color": "black" }
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="flex-column-start" style="${ssrRenderStyle({ "padding": "6%" })}" data-v-001af80b${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ion_label, { style: { "font-size": "larger", "margin-left": "6%", "font-weight": "bold", "margin": "6px" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(choice.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(choice.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_label, { style: { "font-size": "x-small", "margin-left": "6%" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(choice.description)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(choice.description), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_ion_icon, {
                                    icon: choice.icon,
                                    style: { "scale": "2.9", "color": "black" }
                                  }, null, 8, ["icon"]),
                                  createVNode("div", {
                                    class: "flex-column-start",
                                    style: { "padding": "6%" }
                                  }, [
                                    createVNode(_component_ion_label, { style: { "font-size": "larger", "margin-left": "6%", "font-weight": "bold", "margin": "6px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(choice.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_ion_label, { style: { "font-size": "x-small", "margin-left": "6%" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(choice.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                          (openBlock(), createBlock(Fragment, null, renderList(sendChoices, (choice) => {
                            return createVNode(_component_ion_chip, {
                              style: { "height": "85px", "width": "85%", "padding": "8%", "padding-left": "10%" },
                              key: choice.name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  icon: choice.icon,
                                  style: { "scale": "2.9", "color": "black" }
                                }, null, 8, ["icon"]),
                                createVNode("div", {
                                  class: "flex-column-start",
                                  style: { "padding": "6%" }
                                }, [
                                  createVNode(_component_ion_label, { style: { "font-size": "larger", "margin-left": "6%", "font-weight": "bold", "margin": "6px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(choice.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_label, { style: { "font-size": "x-small", "margin-left": "6%" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(choice.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
                      class: "flex-row",
                      style: { "margin": "5%", "background": "none" }
                    }, [
                      createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "100%", "position": "relative", "bottom": "8%" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Transfer")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%", "text-transform": "lowercase" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Select transfer type ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ion_card, {
                      class: "flex-column-center",
                      style: { "margin": "0px", "background": "none", "box-shadow": "none", "padding-bottom": "3%" }
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(sendChoices, (choice) => {
                          return createVNode(_component_ion_chip, {
                            style: { "height": "85px", "width": "85%", "padding": "8%", "padding-left": "10%" },
                            key: choice.name
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: choice.icon,
                                style: { "scale": "2.9", "color": "black" }
                              }, null, 8, ["icon"]),
                              createVNode("div", {
                                class: "flex-column-start",
                                style: { "padding": "6%" }
                              }, [
                                createVNode(_component_ion_label, { style: { "font-size": "larger", "margin-left": "6%", "font-weight": "bold", "margin": "6px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(choice.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ion_label, { style: { "font-size": "x-small", "margin-left": "6%" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(choice.description), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
          } else {
            return [
              createVNode(_component_ion_content, {
                class: "ion-padding content",
                style: {}
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "flex-row",
                    style: { "margin": "5%", "background": "none" }
                  }, [
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "100%", "position": "relative", "bottom": "8%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Transfer")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%", "text-transform": "lowercase" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Select transfer type ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_ion_card, {
                    class: "flex-column-center",
                    style: { "margin": "0px", "background": "none", "box-shadow": "none", "padding-bottom": "3%" }
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(sendChoices, (choice) => {
                        return createVNode(_component_ion_chip, {
                          style: { "height": "85px", "width": "85%", "padding": "8%", "padding-left": "10%" },
                          key: choice.name
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: choice.icon,
                              style: { "scale": "2.9", "color": "black" }
                            }, null, 8, ["icon"]),
                            createVNode("div", {
                              class: "flex-column-start",
                              style: { "padding": "6%" }
                            }, [
                              createVNode(_component_ion_label, { style: { "font-size": "larger", "margin-left": "6%", "font-weight": "bold", "margin": "6px" } }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(choice.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ion_label, { style: { "font-size": "x-small", "margin-left": "6%" } }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(choice.description), 1)
                                ]),
                                _: 2
                              }, 1024)
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Transfer_vue_vue_type_style_index_0_scoped_001af80b_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Transfer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-001af80b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Receive",
  __ssrInlineRender: true,
  props: {
    isReceiveModalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const baseImgUrl = ref("");
    const quoteImgUrl = ref("");
    const base = ref("");
    const quote = ref("");
    const pair = ref("");
    const orderType = ref("Buy");
    const setOrder = (newOrder) => {
      baseImgUrl.value = newOrder.baseImgUrl;
      quoteImgUrl.value = newOrder.quoteImgUrl;
      base.value = newOrder.base;
      quote.value = newOrder.quote;
      pair.value = newOrder.name;
    };
    const setOrderType = (type) => {
      orderType.value = type;
    };
    const pairs = [
      {
        name: "Bitcoin/Naira",
        base: "BTC",
        quote: "NGN",
        baseImgUrl: "/BTC.svg",
        quoteImgUrl: "/nigeria.svg"
      },
      {
        name: "Bitcoin/Cedis",
        base: "BTC",
        quote: "GHS",
        baseImgUrl: "/BTC.svg",
        quoteImgUrl: "/ghana.svg"
      },
      {
        name: "Etheruem/Naira",
        base: "ETH",
        quote: "NGN",
        baseImgUrl: "/ETH.svg",
        quoteImgUrl: "/nigeria.svg"
      },
      {
        name: "Etheruem/Cedis",
        base: "ETH",
        quote: "GHS",
        baseImgUrl: "/ETH.svg",
        quoteImgUrl: "/ghana.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_content = IonContent;
      const _component_ion_label = IonLabel;
      const _component_ion_icon = IonIcon;
      const _component_ion_list = IonList;
      const _component_ion_item = IonItem;
      const _component_ion_select = IonSelect;
      const _component_ion_select_option = IonSelectOption;
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_input = IonInput;
      const _component_ion_button = IonButton;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isReceiveModalOpen,
        "initial-breakpoint": 0.85,
        breakpoints: [0, 0.4, 0.5, 0.65, 0.75, 0.85],
        "backdrop-dismiss": false,
        "backdrop-breakpoint": 0,
        style: { "--border-radius": "32px" },
        onDidDismiss: ($event) => _ctx.$emit("closeModal")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, {
              class: "ion-padding content",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" })}" data-v-ef6da7df${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_label, { style: { "font-size": "190%", "color": "black", "font-weight": "bold" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`New Order`);
                      } else {
                        return [
                          createTextVNode("New Order")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    icon: "ioniconsInformationCircle" in _ctx ? _ctx.ioniconsInformationCircle : unref(informationCircle),
                    style: { "font-size": "200%", "position": "relative", "left": "45%" },
                    onClick: () => {
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" })}" data-v-ef6da7df${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "action-sheet",
                                placeholder: "Select Pair",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrder($event.detail.value)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(pairs, (pair2, index) => {
                                      _push6(ssrRenderComponent(_component_ion_select_option, {
                                        value: pair2,
                                        key: index
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(pair2.base)}/${ssrInterpolate(pair2.quote)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                        return createVNode(_component_ion_select_option, {
                                          value: pair2,
                                          key: index
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_select, {
                                  "aria-label": "Fruit",
                                  interface: "action-sheet",
                                  placeholder: "Select Pair",
                                  style: { "font-size": "120%" },
                                  onIonChange: ($event) => setOrder($event.detail.value)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                      return createVNode(_component_ion_select_option, {
                                        value: pair2,
                                        key: index
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }, 8, ["onIonChange"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "action-sheet",
                                placeholder: "Select Pair",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrder($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                    return createVNode(_component_ion_select_option, {
                                      value: pair2,
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "popover",
                                placeholder: "Order type",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrderType($event.detail.value)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ion_select_option, { value: "Buy" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`BUY`);
                                        } else {
                                          return [
                                            createTextVNode("BUY")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ion_select_option, { value: "Sell" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`SELL`);
                                        } else {
                                          return [
                                            createTextVNode("SELL")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ion_select_option, { value: "Buy" }, {
                                        default: withCtx(() => [
                                          createTextVNode("BUY")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ion_select_option, { value: "Sell" }, {
                                        default: withCtx(() => [
                                          createTextVNode("SELL")
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
                                createVNode(_component_ion_select, {
                                  "aria-label": "Fruit",
                                  interface: "popover",
                                  placeholder: "Order type",
                                  style: { "font-size": "120%" },
                                  onIonChange: ($event) => setOrderType($event.detail.value)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_select_option, { value: "Buy" }, {
                                      default: withCtx(() => [
                                        createTextVNode("BUY")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_select_option, { value: "Sell" }, {
                                      default: withCtx(() => [
                                        createTextVNode("SELL")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onIonChange"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "popover",
                                placeholder: "Order type",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrderType($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_select_option, { value: "Buy" }, {
                                    default: withCtx(() => [
                                      createTextVNode("BUY")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_select_option, { value: "Sell" }, {
                                    default: withCtx(() => [
                                      createTextVNode("SELL")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" })}" data-v-ef6da7df${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(orderType))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(orderType)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(pair))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(pair)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(pair)), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-ef6da7df${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(baseImgUrl)) {
                          _push4(`<img alt="asset img"${ssrRenderAttr("src", unref(baseImgUrl))} data-v-ef6da7df${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(baseImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(baseImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(quoteImgUrl)) {
                          _push4(`<img alt="asset img"${ssrRenderAttr("src", unref(quoteImgUrl))} data-v-ef6da7df${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(quoteImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(quoteImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" })}" data-v-ef6da7df${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Quote Price`);
                      } else {
                        return [
                          createTextVNode("Quote Price")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_input, {
                    label: "",
                    type: "number",
                    placeholder: "000",
                    style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_label, { style: { "font-size": "100%", "color": "black" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(quote))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(quote)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "2%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" })}" data-v-ef6da7df${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You Send`);
                            } else {
                              return [
                                createTextVNode("You Send")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_input, {
                          label: "",
                          type: "number",
                          placeholder: "000",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(orderType) == "Buy" ? unref(quote) : unref(base))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" })}" data-v-ef6da7df${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`fee : 0.5%`);
                            } else {
                              return [
                                createTextVNode("fee : 0.5%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" })}" data-v-ef6da7df${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You Get`);
                            } else {
                              return [
                                createTextVNode("You Get")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_input, {
                          label: "",
                          readonly: true,
                          type: "number",
                          placeholder: "00",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(orderType) == "Buy" ? unref(base) : unref(quote))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                            createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                              default: withCtx(() => [
                                createTextVNode("You Send")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_input, {
                              label: "",
                              type: "number",
                              placeholder: "000",
                              style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                            }),
                            createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" } }, [
                            createVNode(_component_ion_icon, {
                              color: "secondary",
                              icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                              style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                            }, null, 8, ["icon"]),
                            createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                              default: withCtx(() => [
                                createTextVNode("fee : 0.5%")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                            createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                              default: withCtx(() => [
                                createTextVNode("You Get")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_input, {
                              label: "",
                              readonly: true,
                              type: "number",
                              placeholder: "00",
                              style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                            }),
                            createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" })}" data-v-ef6da7df${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_button, {
                    fill: "outline",
                    style: { "width": "80%", "height": "50px", "font-size": "130%" },
                    onClick: ($event) => _ctx.$emit("closeModal")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Confirm`);
                      } else {
                        return [
                          createTextVNode("Confirm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" } }, [
                      createVNode(_component_ion_label, { style: { "font-size": "190%", "color": "black", "font-weight": "bold" } }, {
                        default: withCtx(() => [
                          createTextVNode("New Order")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsInformationCircle" in _ctx ? _ctx.ioniconsInformationCircle : unref(informationCircle),
                        style: { "font-size": "200%", "position": "relative", "left": "45%" },
                        onClick: () => {
                        }
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" } }, [
                      createVNode(_component_ion_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "action-sheet",
                                placeholder: "Select Pair",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrder($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                    return createVNode(_component_ion_select_option, {
                                      value: pair2,
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_select, {
                                "aria-label": "Fruit",
                                interface: "popover",
                                placeholder: "Order type",
                                style: { "font-size": "120%" },
                                onIonChange: ($event) => setOrderType($event.detail.value)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_select_option, { value: "Buy" }, {
                                    default: withCtx(() => [
                                      createTextVNode("BUY")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_select_option, { value: "Sell" }, {
                                    default: withCtx(() => [
                                      createTextVNode("SELL")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onIonChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                      createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(pair)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { style: { "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            unref(baseImgUrl) ? (openBlock(), createBlock("img", {
                              key: 0,
                              alt: "asset img",
                              src: unref(baseImgUrl)
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            unref(quoteImgUrl) ? (openBlock(), createBlock("img", {
                              key: 0,
                              alt: "asset img",
                              src: unref(quoteImgUrl)
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" } }, [
                      createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                        default: withCtx(() => [
                          createTextVNode("Quote Price")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_input, {
                        label: "",
                        type: "number",
                        placeholder: "000",
                        style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                      }),
                      createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "black" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(quote)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "2%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                          createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                            default: withCtx(() => [
                              createTextVNode("You Send")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_input, {
                            label: "",
                            type: "number",
                            placeholder: "000",
                            style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                          }),
                          createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" } }, [
                          createVNode(_component_ion_icon, {
                            color: "secondary",
                            icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                            style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                          }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                            default: withCtx(() => [
                              createTextVNode("fee : 0.5%")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                          createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                            default: withCtx(() => [
                              createTextVNode("You Get")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_input, {
                            label: "",
                            readonly: true,
                            type: "number",
                            placeholder: "00",
                            style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                          }),
                          createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" } }, [
                      createVNode(_component_ion_button, {
                        fill: "outline",
                        style: { "width": "80%", "height": "50px", "font-size": "130%" },
                        onClick: ($event) => _ctx.$emit("closeModal")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Confirm")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
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
                  createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" } }, [
                    createVNode(_component_ion_label, { style: { "font-size": "190%", "color": "black", "font-weight": "bold" } }, {
                      default: withCtx(() => [
                        createTextVNode("New Order")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_icon, {
                      icon: "ioniconsInformationCircle" in _ctx ? _ctx.ioniconsInformationCircle : unref(informationCircle),
                      style: { "font-size": "200%", "position": "relative", "left": "45%" },
                      onClick: () => {
                      }
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" } }, [
                    createVNode(_component_ion_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_select, {
                              "aria-label": "Fruit",
                              interface: "action-sheet",
                              placeholder: "Select Pair",
                              style: { "font-size": "120%" },
                              onIonChange: ($event) => setOrder($event.detail.value)
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(pairs, (pair2, index) => {
                                  return createVNode(_component_ion_select_option, {
                                    value: pair2,
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(pair2.base) + "/" + toDisplayString(pair2.quote), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["onIonChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_select, {
                              "aria-label": "Fruit",
                              interface: "popover",
                              placeholder: "Order type",
                              style: { "font-size": "120%" },
                              onIonChange: ($event) => setOrderType($event.detail.value)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_select_option, { value: "Buy" }, {
                                  default: withCtx(() => [
                                    createTextVNode("BUY")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ion_select_option, { value: "Sell" }, {
                                  default: withCtx(() => [
                                    createTextVNode("SELL")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onIonChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold", "text-transform": "uppercase" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(orderType)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(pair)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" } }, [
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          unref(baseImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(baseImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          unref(quoteImgUrl) ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "asset img",
                            src: unref(quoteImgUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" } }, [
                    createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                      default: withCtx(() => [
                        createTextVNode("Quote Price")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_input, {
                      label: "",
                      type: "number",
                      placeholder: "000",
                      style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                    }),
                    createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "black" } }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(quote)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "2%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" } }, [
                        createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "whitesmoke" } }, {
                          default: withCtx(() => [
                            createTextVNode("You Send")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_input, {
                          label: "",
                          type: "number",
                          placeholder: "000",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "whitesmoke", "border": "1px solid whitesmoke" }
                        }),
                        createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "whitesmoke" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(quote) : unref(base)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" } }, [
                        createVNode(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%", "margin-left": "15%" }
                        }, null, 8, ["icon"]),
                        createVNode(_component_ion_label, { style: { "font-size": "100%", "color": "whitesmoke", "position": "relative", "left": "10%" } }, {
                          default: withCtx(() => [
                            createTextVNode("fee : 0.5%")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" } }, [
                        createVNode(_component_ion_label, { style: { "font-size": "150%", "color": "black" } }, {
                          default: withCtx(() => [
                            createTextVNode("You Get")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_input, {
                          label: "",
                          readonly: true,
                          type: "number",
                          placeholder: "00",
                          style: { "width": "50%", "background": "#43455838", "font-size": "150%", "border-radius": "12px", "color": "black", "border": "1px solid whitesmoke" }
                        }),
                        createVNode(_component_ion_label, { style: { "font-size": "120%", "color": "black" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(orderType) == "Buy" ? unref(base) : unref(quote)), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" } }, [
                    createVNode(_component_ion_button, {
                      fill: "outline",
                      style: { "width": "80%", "height": "50px", "font-size": "130%" },
                      onClick: ($event) => _ctx.$emit("closeModal")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Confirm")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
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
const Receive_vue_vue_type_style_index_0_scoped_ef6da7df_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Receive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ef6da7df"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[assetId]",
  __ssrInlineRender: true,
  setup(__props) {
    useIonRouter();
    useRoute();
    ref("");
    const hideTotal = ref(false);
    const isTransferModalOpen = ref(false);
    const isReceiveModalOpen = ref(false);
    const setTransferModal = (isOpen) => {
      isTransferModalOpen.value = isOpen;
    };
    const setReceiveModal = (isOpen) => {
      isReceiveModalOpen.value = isOpen;
    };
    const switchSelect = ref("");
    const switchPage = (tab) => {
      switchSelect.value = tab;
      switch (tab) {
        case "Transfer":
          setTransferModal(true);
          break;
        case "Receive":
          setReceiveModal(true);
      }
    };
    const recents = [
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
    const actionLinks = [
      {
        name: "Transfer",
        icon: happy,
        link: "action1"
      },
      {
        name: "Receive",
        icon: mail,
        link: "action1"
      },
      {
        name: "Extra",
        icon: addOutline,
        link: "action1"
      }
      // {
      //     name:'Order',
      //     icon:ioniconsExitSharp,
      //     link:'action1'
      // }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_myHeader = __nuxt_component_3;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_label = IonLabel;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_icon = IonIcon;
      const _component_bold = resolveComponent("bold");
      const _component_ion_content = IonContent;
      const _component_ion_button = IonButton;
      const _component_ion_chip = IonChip;
      const _component_ion_footer = IonFooter;
      const _component_Tabs = __nuxt_component_14;
      const _component_Transfer = __nuxt_component_15;
      const _component_Receive = __nuxt_component_16;
      _push(ssrRenderComponent(_component_ion_page, mergeProps({ style: {} }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, {
              class: "ion-no-border",
              style: {}
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, {
                    class: "tooba",
                    style: {}
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_myHeader, { "show-back-button": true }, null, _parent4, _scopeId3));
                        _push4(`<div class="topheader" style="${ssrRenderStyle({})}" data-v-e1cc5d39${_scopeId3}><div class="imageBox"${ssrRenderAttr("button", true)} style="${ssrRenderStyle({ "box-shadow": "none" })}" data-v-e1cc5d39${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.5", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img alt="asset img"${ssrRenderAttr("src", _imports_1)} data-v-e1cc5d39${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  alt: "asset img",
                                  src: _imports_1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
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
                                          _push7(`Balance `);
                                        } else {
                                          return [
                                            createTextVNode("Balance ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="figureCard" style="${ssrRenderStyle({})}" data-v-e1cc5d39${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_ion_card_title, { color: "primary" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<strong style="${ssrRenderStyle({ "font-size": "90%" })}" class="" data-v-e1cc5d39${_scopeId6}>${ssrInterpolate(unref(hideTotal) ? "***********" : "$2,260,351.77")}</strong>`);
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
                                          createTextVNode("Balance ")
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
                                        createTextVNode("Balance ")
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
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_ion_card, {
                          class: "actions",
                          style: { "margin": "0px", "margin-top": "2%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(actionLinks, (action) => {
                                _push5(ssrRenderComponent(_component_ion_card, {
                                  button: true,
                                  class: { "actionSelected": unref(switchSelect) === action.name, "action": unref(switchSelect) !== action.name },
                                  key: action.name,
                                  onClick: ($event) => switchPage(action.name)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ion_card_header, { style: {} }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" })}" data-v-e1cc5d39${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_ion_card_title, {
                                              color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_bold, { style: { "font-size": "50%" } }, {
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
                                                    createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                              color: unref(switchSelect) === action.name ? "primary" : "secondary",
                                              size: "large",
                                              icon: action.icon,
                                              style: {}
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                                createVNode(_component_ion_card_title, {
                                                  color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                                color: unref(switchSelect) === action.name ? "primary" : "secondary",
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
                                                color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                              color: unref(switchSelect) === action.name ? "primary" : "secondary",
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
                                (openBlock(), createBlock(Fragment, null, renderList(actionLinks, (action) => {
                                  return createVNode(_component_ion_card, {
                                    button: true,
                                    class: { "actionSelected": unref(switchSelect) === action.name, "action": unref(switchSelect) !== action.name },
                                    key: action.name,
                                    onClick: ($event) => switchPage(action.name)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_card_header, { style: {} }, {
                                        default: withCtx(() => [
                                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                            createVNode(_component_ion_card_title, {
                                              color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                            color: unref(switchSelect) === action.name ? "primary" : "secondary",
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
                          createVNode(_component_myHeader, { "show-back-button": true }),
                          createVNode("div", {
                            class: "topheader",
                            style: {}
                          }, [
                            createVNode("div", {
                              class: "imageBox",
                              button: true,
                              style: { "box-shadow": "none" }
                            }, [
                              createVNode(_component_ion_avatar, {
                                slot: "start",
                                style: { "scale": "1.5", "border": "3px solid #1B1D30" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    alt: "asset img",
                                    src: _imports_1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
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
                                        createTextVNode("Balance ")
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
                            })
                          ]),
                          createVNode(_component_ion_card, {
                            class: "actions",
                            style: { "margin": "0px", "margin-top": "2%" }
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(actionLinks, (action) => {
                                return createVNode(_component_ion_card, {
                                  button: true,
                                  class: { "actionSelected": unref(switchSelect) === action.name, "action": unref(switchSelect) !== action.name },
                                  key: action.name,
                                  onClick: ($event) => switchPage(action.name)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_header, { style: {} }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                          createVNode(_component_ion_card_title, {
                                            color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                          color: unref(switchSelect) === action.name ? "primary" : "secondary",
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
                } else {
                  return [
                    createVNode(_component_ion_toolbar, {
                      class: "tooba",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_myHeader, { "show-back-button": true }),
                        createVNode("div", {
                          class: "topheader",
                          style: {}
                        }, [
                          createVNode("div", {
                            class: "imageBox",
                            button: true,
                            style: { "box-shadow": "none" }
                          }, [
                            createVNode(_component_ion_avatar, {
                              slot: "start",
                              style: { "scale": "1.5", "border": "3px solid #1B1D30" }
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "asset img",
                                  src: _imports_1
                                })
                              ]),
                              _: 1
                            })
                          ]),
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
                                      createTextVNode("Balance ")
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
                          })
                        ]),
                        createVNode(_component_ion_card, {
                          class: "actions",
                          style: { "margin": "0px", "margin-top": "2%" }
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(actionLinks, (action) => {
                              return createVNode(_component_ion_card, {
                                button: true,
                                class: { "actionSelected": unref(switchSelect) === action.name, "action": unref(switchSelect) !== action.name },
                                key: action.name,
                                onClick: ($event) => switchPage(action.name)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_header, { style: {} }, {
                                    default: withCtx(() => [
                                      createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                        createVNode(_component_ion_card_title, {
                                          color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                        color: unref(switchSelect) === action.name ? "primary" : "secondary",
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
                    class: "recentHeaderBox",
                    style: {}
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_header, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex-row-center-space-between" data-v-e1cc5d39${_scopeId4}>`);
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
                                createVNode("div", { class: "flex-row-center-space-between" }, [
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
                              createVNode("div", { class: "flex-row-center-space-between" }, [
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
                        ssrRenderList(recents, (action) => {
                          _push4(ssrRenderComponent(_component_ion_chip, {
                            class: "recent",
                            id: action.id,
                            key: action.name,
                            style: {}
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img alt="coin"${ssrRenderAttr("src", action.img)} style="${ssrRenderStyle({ "scale": "1.4" })}" data-v-e1cc5d39${_scopeId5}>`);
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
                                _push5(`<div class="flex-column-start-center" style="${ssrRenderStyle({ "width": "100%", "position": "relative", "left": "2%" })}" data-v-e1cc5d39${_scopeId4}>`);
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
                                _push5(`</div><div class="flex-column-end-center" style="${ssrRenderStyle({ "margin-left": "5%", "width": "30%" })}" data-v-e1cc5d39${_scopeId4}>`);
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
                                    style: { "margin-left": "5%", "width": "30%" }
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
                          (openBlock(), createBlock(Fragment, null, renderList(recents, (action) => {
                            return createVNode(_component_ion_chip, {
                              class: "recent",
                              id: action.id,
                              key: action.name,
                              style: {}
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
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
                                  style: { "margin-left": "5%", "width": "30%" }
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
                      class: "recentHeaderBox",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_header, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex-row-center-space-between" }, [
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
                        (openBlock(), createBlock(Fragment, null, renderList(recents, (action) => {
                          return createVNode(_component_ion_chip, {
                            class: "recent",
                            id: action.id,
                            key: action.name,
                            style: {}
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
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
                                style: { "margin-left": "5%", "width": "30%" }
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
              class: "ion-no-border flex-column-center-center",
              style: { "margin-bottom": "5%" }
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
            _push2(ssrRenderComponent(_component_Transfer, {
              isTransferModalOpen: unref(isTransferModalOpen),
              onCloseModal: ($event) => setTransferModal(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Receive, {
              isReceiveModalOpen: unref(isReceiveModalOpen),
              onCloseModal: ($event) => setReceiveModal(false)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_header, {
                class: "ion-no-border",
                style: {}
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, {
                    class: "tooba",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_myHeader, { "show-back-button": true }),
                      createVNode("div", {
                        class: "topheader",
                        style: {}
                      }, [
                        createVNode("div", {
                          class: "imageBox",
                          button: true,
                          style: { "box-shadow": "none" }
                        }, [
                          createVNode(_component_ion_avatar, {
                            slot: "start",
                            style: { "scale": "1.5", "border": "3px solid #1B1D30" }
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                alt: "asset img",
                                src: _imports_1
                              })
                            ]),
                            _: 1
                          })
                        ]),
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
                                    createTextVNode("Balance ")
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
                        })
                      ]),
                      createVNode(_component_ion_card, {
                        class: "actions",
                        style: { "margin": "0px", "margin-top": "2%" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(actionLinks, (action) => {
                            return createVNode(_component_ion_card, {
                              button: true,
                              class: { "actionSelected": unref(switchSelect) === action.name, "action": unref(switchSelect) !== action.name },
                              key: action.name,
                              onClick: ($event) => switchPage(action.name)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_header, { style: {} }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%" } }, [
                                      createVNode(_component_ion_card_title, {
                                        color: unref(switchSelect) === action.name ? "primary" : "secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_bold, { style: { "font-size": "50%" } }, {
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
                                      color: unref(switchSelect) === action.name ? "primary" : "secondary",
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
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_content, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, {
                    class: "recentHeaderBox",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex-row-center-space-between" }, [
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
                      (openBlock(), createBlock(Fragment, null, renderList(recents, (action) => {
                        return createVNode(_component_ion_chip, {
                          class: "recent",
                          id: action.id,
                          key: action.name,
                          style: {}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_avatar, { style: { "--border-radius": "8px", "min-width": "10%" } }, {
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
                              style: { "margin-left": "5%", "width": "30%" }
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
                        }, 1032, ["id"]);
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
                  createVNode(_component_Tabs, { style: { "width": "90%", "border-radius": "20px" } })
                ]),
                _: 1
              }),
              createVNode(_component_Transfer, {
                isTransferModalOpen: unref(isTransferModalOpen),
                onCloseModal: ($event) => setTransferModal(false)
              }, null, 8, ["isTransferModalOpen", "onCloseModal"]),
              createVNode(_component_Receive, {
                isReceiveModalOpen: unref(isReceiveModalOpen),
                onCloseModal: ($event) => setReceiveModal(false)
              }, null, 8, ["isReceiveModalOpen", "onCloseModal"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _assetId__vue_vue_type_style_index_0_scoped_e1cc5d39_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/assetPage/[assetId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _assetId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1cc5d39"]]);
export {
  _assetId_ as default
};
//# sourceMappingURL=_assetId_-6a75dc0b.js.map
