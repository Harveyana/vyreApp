import { B as useIonRouter, k as IonButton, h as IonPage, i as IonHeader, I as IonToolbar, j as IonButtons, f as IonIcon, C as IonContent, l as IonCard, m as IonCardHeader, o as IonCardTitle, y as IonCardContent, _ as _export_sfc } from "../server.mjs";
import { useSwiper, Swiper, SwiperSlide } from "swiper/vue";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext, ref, watch, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useDarkMode } from "./useDarkMode-386da5e9.js";
import { m as moon } from "./index-f41f3193.js";
import { EffectCreative, Pagination } from "swiper";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "swiperControl",
  __ssrInlineRender: true,
  props: {
    showPrev: { type: Boolean },
    isFinalSlide: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const Swiper2 = useSwiper();
    const ionRouter = useIonRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_button = IonButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center", "margin-top": "5%" } }, _attrs))}>`);
      if (props.showPrev && !props.isFinalSlide) {
        _push(ssrRenderComponent(_component_ion_button, {
          color: "medium",
          onClick: ($event) => unref(Swiper2).slidePrev(2e3)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Previous`);
            } else {
              return [
                createTextVNode("Previous")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ion_button, {
        color: "primary",
        onClick: ($event) => props.isFinalSlide ? unref(ionRouter).push("/home") : unref(Swiper2).slideNext(2e3)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "padding-left": "15px", "padding-right": "15px" })}"${_scopeId}>${ssrInterpolate(props.isFinalSlide ? "Get Started" : "Next")}</span>`);
          } else {
            return [
              createVNode("span", { style: { "padding-left": "15px", "padding-right": "15px" } }, toDisplayString(props.isFinalSlide ? "Get Started" : "Next"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/swiperControl.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "intro",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    watch(isDarkMode, (newValue, oldValue) => {
      console.log(newValue);
      darkMode.switchMode(newValue);
    });
    const slides = [
      {
        title: "A crypto wallet you'll love",
        img: "/coin_top.svg",
        content: "makes it safe & easy for you to store, send, receive, stake, and swap tokens on the Solana blockchain"
      },
      {
        title: "NFTs and Collectibles",
        img: "/illustration (2).svg",
        content: "We’ve taken special care to make sure your NFTs look great!"
      },
      {
        title: "Your privacy is respected",
        img: "/illustration (1).svg",
        content: "wallet doesn’t track any personal identifiable information, your account addresses or asset balances."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_buttons = IonButtons;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_content = IonContent;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_content = IonCardContent;
      const _component_SwiperControl = _sfc_main$1;
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
            _push2(ssrRenderComponent(_component_ion_content, { fullscreen: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Swiper, {
                    style: { "padding-bottom": "25px" },
                    class: "Swiper",
                    pagination: true,
                    modules: ["SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
                    "slides-per-view": 1,
                    effect: "creative",
                    "creative-effect": {
                      prev: {
                        shadow: false,
                        translate: ["-100%", 0, 0]
                      },
                      next: {
                        translate: ["100%", 0, 0]
                      }
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(slides, (slide, index) => {
                          _push4(ssrRenderComponent(_component_SwiperSlide, {
                            class: "SwiperSlide",
                            key: index
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ion_card, { style: { "box-shadow": "none", "padding-top": "25px", "padding-bottom": "25px", "margin-top": "20%" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img alt="Silhouette of mountains"${ssrRenderAttr("src", slide.img)} data-v-4947feb0${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ion_card_header, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(slide.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(slide.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(slide.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_ion_card_content, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(slide.content)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(slide.content), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_SwiperControl, {
                                        "show-prev": index == 0 ? false : true,
                                        isFinalSlide: index == slides.length - 1 ? true : false
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("img", {
                                          alt: "Silhouette of mountains",
                                          src: slide.img
                                        }, null, 8, ["src"]),
                                        createVNode(_component_ion_card_header, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(slide.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_ion_card_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(slide.content), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_SwiperControl, {
                                          "show-prev": index == 0 ? false : true,
                                          isFinalSlide: index == slides.length - 1 ? true : false
                                        }, null, 8, ["show-prev", "isFinalSlide"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ion_card, { style: { "box-shadow": "none", "padding-top": "25px", "padding-bottom": "25px", "margin-top": "20%" } }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        alt: "Silhouette of mountains",
                                        src: slide.img
                                      }, null, 8, ["src"]),
                                      createVNode(_component_ion_card_header, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(slide.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_ion_card_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(slide.content), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_SwiperControl, {
                                        "show-prev": index == 0 ? false : true,
                                        isFinalSlide: index == slides.length - 1 ? true : false
                                      }, null, 8, ["show-prev", "isFinalSlide"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(slides, (slide, index) => {
                            return createVNode(_component_SwiperSlide, {
                              class: "SwiperSlide",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card, { style: { "box-shadow": "none", "padding-top": "25px", "padding-bottom": "25px", "margin-top": "20%" } }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      alt: "Silhouette of mountains",
                                      src: slide.img
                                    }, null, 8, ["src"]),
                                    createVNode(_component_ion_card_header, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(slide.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_ion_card_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(slide.content), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_SwiperControl, {
                                      "show-prev": index == 0 ? false : true,
                                      isFinalSlide: index == slides.length - 1 ? true : false
                                    }, null, 8, ["show-prev", "isFinalSlide"])
                                  ]),
                                  _: 2
                                }, 1024)
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
                    createVNode(_component_Swiper, {
                      style: { "padding-bottom": "25px" },
                      class: "Swiper",
                      pagination: true,
                      modules: ["SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
                      "slides-per-view": 1,
                      effect: "creative",
                      "creative-effect": {
                        prev: {
                          shadow: false,
                          translate: ["-100%", 0, 0]
                        },
                        next: {
                          translate: ["100%", 0, 0]
                        }
                      }
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(slides, (slide, index) => {
                          return createVNode(_component_SwiperSlide, {
                            class: "SwiperSlide",
                            key: index
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card, { style: { "box-shadow": "none", "padding-top": "25px", "padding-bottom": "25px", "margin-top": "20%" } }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    alt: "Silhouette of mountains",
                                    src: slide.img
                                  }, null, 8, ["src"]),
                                  createVNode(_component_ion_card_header, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(slide.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_card_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.content), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_SwiperControl, {
                                    "show-prev": index == 0 ? false : true,
                                    isFinalSlide: index == slides.length - 1 ? true : false
                                  }, null, 8, ["show-prev", "isFinalSlide"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["modules"])
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
              createVNode(_component_ion_content, { fullscreen: true }, {
                default: withCtx(() => [
                  createVNode(_component_Swiper, {
                    style: { "padding-bottom": "25px" },
                    class: "Swiper",
                    pagination: true,
                    modules: ["SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
                    "slides-per-view": 1,
                    effect: "creative",
                    "creative-effect": {
                      prev: {
                        shadow: false,
                        translate: ["-100%", 0, 0]
                      },
                      next: {
                        translate: ["100%", 0, 0]
                      }
                    }
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(slides, (slide, index) => {
                        return createVNode(_component_SwiperSlide, {
                          class: "SwiperSlide",
                          key: index
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card, { style: { "box-shadow": "none", "padding-top": "25px", "padding-bottom": "25px", "margin-top": "20%" } }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "Silhouette of mountains",
                                  src: slide.img
                                }, null, 8, ["src"]),
                                createVNode(_component_ion_card_header, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_card_title, { style: { "font-size": "30px", "font-weight": "800" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(slide.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ion_card_content, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.content), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_SwiperControl, {
                                  "show-prev": index == 0 ? false : true,
                                  isFinalSlide: index == slides.length - 1 ? true : false
                                }, null, 8, ["show-prev", "isFinalSlide"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["modules"])
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
const intro_vue_vue_type_style_index_0_scoped_4947feb0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/intro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4947feb0"]]);
export {
  intro as default
};
//# sourceMappingURL=intro-0b754246.js.map