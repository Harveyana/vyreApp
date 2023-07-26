import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as _export_sfc, v as IonModal, i as IonContent, g as IonIcon, d as IonCard, f as IonCardTitle, t as IonCardSubtitle, o as IonAvatar, w as IonLabel, x as IonInput, l as IonButton, j as IonList, y as IonItem, z as IonSelect, A as IonSelectOption } from '../server.mjs';
import { y as closeCircleOutline, z as swapVerticalSharp, A as informationCircle } from './index-f08fc5f8.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, ref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './BTC-16888d2f.mjs';

const _imports_1 = "" + publicAssetsURL("nigeria.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "orderDetails",
  __ssrInlineRender: true,
  props: {
    isOrderDetailsModalOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_modal = IonModal;
      const _component_ion_content = IonContent;
      const _component_ion_icon = IonIcon;
      const _component_ion_card = IonCard;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_avatar = IonAvatar;
      const _component_ion_label = IonLabel;
      const _component_ion_input = IonInput;
      const _component_ion_button = IonButton;
      _push(ssrRenderComponent(_component_ion_modal, mergeProps({
        "is-open": props.isOrderDetailsModalOpen,
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
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "flex-end", "justify-content": "end", "margin-bottom": "2%" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    icon: "ioniconsCloseCircleOutline" in _ctx ? _ctx.ioniconsCloseCircleOutline : unref(closeCircleOutline),
                    style: { "font-size": "300%", "margin-right": "4%" },
                    onClick: ($event) => _ctx.$emit("closeModal")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Buy`);
                            } else {
                              return [
                                createTextVNode("Buy")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Bitcoin / Naira `);
                            } else {
                              return [
                                createTextVNode(" Bitcoin / Naira ")
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
                              createTextVNode("Buy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Bitcoin / Naira ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-5e795802${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", _imports_0)} data-v-5e795802${_scopeId3}>`);
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="asset img"${ssrRenderAttr("src", _imports_1)} data-v-5e795802${_scopeId3}>`);
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
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "7%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" })}" data-v-5e795802${_scopeId3}>`);
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
                              _push5(`NGN`);
                            } else {
                              return [
                                createTextVNode("NGN")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" })}" data-v-5e795802${_scopeId3}>`);
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
                              _push5(`BTC`);
                            } else {
                              return [
                                createTextVNode("BTC")
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
                                createTextVNode("NGN")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_ion_icon, {
                            color: "secondary",
                            icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                            style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                          }, null, 8, ["icon"]),
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
                                createTextVNode("BTC")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" })}" data-v-5e795802${_scopeId2}>`);
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
                    createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "flex-end", "justify-content": "end", "margin-bottom": "2%" } }, [
                      createVNode(_component_ion_icon, {
                        icon: "ioniconsCloseCircleOutline" in _ctx ? _ctx.ioniconsCloseCircleOutline : unref(closeCircleOutline),
                        style: { "font-size": "300%", "margin-right": "4%" },
                        onClick: ($event) => _ctx.$emit("closeModal")
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                      createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "200%", "font-weight": "bold" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Buy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Bitcoin / Naira ")
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
                            createVNode("img", {
                              alt: "asset img",
                              src: _imports_0
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_avatar, {
                          slot: "start",
                          style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              alt: "asset img",
                              src: _imports_1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "7%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
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
                              createTextVNode("NGN")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_ion_icon, {
                          color: "secondary",
                          icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                          style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                        }, null, 8, ["icon"]),
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
                              createTextVNode("BTC")
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
                  createVNode("div", { style: { "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "flex-end", "justify-content": "end", "margin-bottom": "2%" } }, [
                    createVNode(_component_ion_icon, {
                      icon: "ioniconsCloseCircleOutline" in _ctx ? _ctx.ioniconsCloseCircleOutline : unref(closeCircleOutline),
                      style: { "font-size": "300%", "margin-right": "4%" },
                      onClick: ($event) => _ctx.$emit("closeModal")
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  createVNode("div", { style: { "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" } }, [
                    createVNode(_component_ion_card, { style: { "box-shadow": "none", "background": "none", "z-index": "888", "margin": "0px", "width": "40%", "position": "relative", "bottom": "8%" } }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          color: "primary",
                          style: { "font-size": "200%", "font-weight": "bold" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Buy")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, { style: { "margin-top": "1%", "margin-left": "2%", "font-size": "100%" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Bitcoin / Naira ")
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
                          createVNode("img", {
                            alt: "asset img",
                            src: _imports_0
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_avatar, {
                        slot: "start",
                        style: { "scale": "1.3", "position": "relative", "right": "5%", "border": "3px solid #1B1D30" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "asset img",
                            src: _imports_1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_ion_card, { style: { "margin": "0px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "max-height": "30%", "min-height": "30%", "margin-top": "7%", "background": "#1d3160", "box-shadow": "none", "padding-top": "3%", "padding-bottom": "3%" } }, {
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
                            createTextVNode("NGN")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_ion_icon, {
                        color: "secondary",
                        icon: "ioniconsSwapVerticalSharp" in _ctx ? _ctx.ioniconsSwapVerticalSharp : unref(swapVerticalSharp),
                        style: { "font-size": "300%", "border-radius": "25px", "z-index": "99", "padding": "3%" }
                      }, null, 8, ["icon"]),
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
                            createTextVNode("BTC")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/orderDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5e795802"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "newOrder",
  __ssrInlineRender: true,
  props: {
    isNewOrderModalOpen: { type: Boolean }
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
        "is-open": props.isNewOrderModalOpen,
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
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "margin-top": "7%", "padding": "0 5% 0 5%" })}" data-v-167370d2${_scopeId2}>`);
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
                  _push3(`</div><div style="${ssrRenderStyle({ "max-height": "8%", "min-height": "8%", "width": "100%", "display": "flex", "flex-direction": "row", "align-items": "start", "justify-content": "start", "padding": "0 5% 0 5%" })}" data-v-167370d2${_scopeId2}>`);
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
                  _push3(`</div><div style="${ssrRenderStyle({ "margin": "0px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "background": "none" })}" data-v-167370d2${_scopeId2}>`);
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
                  _push3(`<div style="${ssrRenderStyle({ "max-width": "100%", "max-height": "100%", "min-height": "100%", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center" })}" data-v-167370d2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ion_avatar, {
                    slot: "start",
                    style: { "scale": "1.3", "border": "3px solid #1B1D30" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(baseImgUrl)) {
                          _push4(`<img alt="asset img"${ssrRenderAttr("src", unref(baseImgUrl))} data-v-167370d2${_scopeId3}>`);
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
                          _push4(`<img alt="asset img"${ssrRenderAttr("src", unref(quoteImgUrl))} data-v-167370d2${_scopeId3}>`);
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
                  _push3(`</div></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "9%", "min-height": "9%", "width": "100%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "margin-top": "7%" })}" data-v-167370d2${_scopeId2}>`);
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
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid white", "border-radius": "25px", "padding": "4%", "background": "#1d3160" })}" data-v-167370d2${_scopeId3}>`);
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
                        _push4(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "90%" })}" data-v-167370d2${_scopeId3}>`);
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
                        _push4(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-around", "max-height": "30%", "min-height": "30%", "width": "90%", "border": "1px solid goldenrod", "border-radius": "25px", "padding": "4%", "background": "goldenrod" })}" data-v-167370d2${_scopeId3}>`);
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
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "margin-top": "8%" })}" data-v-167370d2${_scopeId2}>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-167370d2"]]);

export { __nuxt_component_15 as _, __nuxt_component_16 as a };
//# sourceMappingURL=newOrder-e19ea1fe.mjs.map
