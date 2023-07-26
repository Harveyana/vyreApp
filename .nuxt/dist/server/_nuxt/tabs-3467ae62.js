import { d as IonCard, l as IonButton, g as IonIcon, m as IonBadge, n as IonChip, o as IonAvatar, _ as _export_sfc, u as useRoute, b as IonToolbar, p as IonTabs, q as IonRouterOutlet, r as IonTabBar, s as IonTabButton } from "../server.mjs";
import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, computed } from "vue";
import { u as useDarkMode } from "./useDarkMode-386da5e9.js";
import { m as moon, n as notificationsCircle, p as prismSharp, b as cubeSharp, d as diamondSharp, e as settingsOutline } from "./index-f08fc5f8.js";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import "hookable";
import "destr";
import "devalue";
import "klona";
const _imports_0 = "" + __publicAssetsURL("harveyana.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "myHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const darkMode = useDarkMode();
    watch(isDarkMode, (newValue, oldValue) => {
      console.log(newValue);
      darkMode.switchMode(newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_card = IonCard;
      const _component_ion_button = IonButton;
      const _component_ion_icon = IonIcon;
      const _component_ion_badge = IonBadge;
      const _component_ion_chip = IonChip;
      const _component_ion_avatar = IonAvatar;
      _push(ssrRenderComponent(_component_ion_card, mergeProps({
        class: "headingCard",
        style: {}
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_button, {
              fill: "clear",
              style: { "border-radius": "10px", "height": "30px", "background": "#1d3160" },
              onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    color: "secondary",
                    slot: "end",
                    icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon),
                    style: { "font-size": "100%" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_icon, {
                      color: "secondary",
                      slot: "end",
                      icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon),
                      style: { "font-size": "100%" }
                    }, null, 8, ["icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "width": "50%" })}" data-v-b81d6666${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ion_button, {
              fill: "clear",
              style: { "border-radius": "12px", "height": "40px" },
              onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_icon, {
                    color: "secondary",
                    slot: "end",
                    icon: "ioniconsNotificationsCircle" in _ctx ? _ctx.ioniconsNotificationsCircle : unref(notificationsCircle),
                    style: { "font-size": "200%", "background": "#1d3160", "border-radius": "50px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_badge, {
                    slot: "end",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`1`);
                      } else {
                        return [
                          createTextVNode("1")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_icon, {
                      color: "secondary",
                      slot: "end",
                      icon: "ioniconsNotificationsCircle" in _ctx ? _ctx.ioniconsNotificationsCircle : unref(notificationsCircle),
                      style: { "font-size": "200%", "background": "#1d3160", "border-radius": "50px" }
                    }, null, 8, ["icon"]),
                    createVNode(_component_ion_badge, {
                      slot: "end",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("1")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_chip, {
              class: "ionchip",
              color: "",
              style: { "height": "50px", "width": "30%", "padding": "5%", "margin-left": "5%", "background": "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_avatar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="profilePic"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "scale": "1.6" })}" data-v-b81d6666${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "profilePic",
                            src: _imports_0,
                            style: { "scale": "1.6" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_avatar, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "profilePic",
                          src: _imports_0,
                          style: { "scale": "1.6" }
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_ion_button, {
                fill: "clear",
                style: { "border-radius": "10px", "height": "30px", "background": "#1d3160" },
                onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    color: "secondary",
                    slot: "end",
                    icon: "ioniconsMoon" in _ctx ? _ctx.ioniconsMoon : unref(moon),
                    style: { "font-size": "100%" }
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { style: { "display": "flex", "justify-content": "center", "align-items": "center", "width": "50%" } }, [
                createVNode(_component_ion_button, {
                  fill: "clear",
                  style: { "border-radius": "12px", "height": "40px" },
                  onClick: ($event) => isDarkMode.value = !unref(isDarkMode)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_icon, {
                      color: "secondary",
                      slot: "end",
                      icon: "ioniconsNotificationsCircle" in _ctx ? _ctx.ioniconsNotificationsCircle : unref(notificationsCircle),
                      style: { "font-size": "200%", "background": "#1d3160", "border-radius": "50px" }
                    }, null, 8, ["icon"]),
                    createVNode(_component_ion_badge, {
                      slot: "end",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("1")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_ion_chip, {
                  class: "ionchip",
                  color: "",
                  style: { "height": "50px", "width": "30%", "padding": "5%", "margin-left": "5%", "background": "none" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_avatar, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "profilePic",
                          src: _imports_0,
                          style: { "scale": "1.6" }
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const myHeader_vue_vue_type_style_index_0_scoped_b81d6666_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/myHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b81d6666"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tabs",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref();
    const route = useRoute();
    computed(() => {
      return route.name;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_tabs = IonTabs;
      const _component_ion_router_outlet = IonRouterOutlet;
      const _component_ion_tab_bar = IonTabBar;
      const _component_ion_tab_button = IonTabButton;
      const _component_ion_icon = IonIcon;
      _push(ssrRenderComponent(_component_ion_toolbar, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_tabs, {
              style: {},
              onIonTabsWillChange: ($event) => selected.value = "home2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_router_outlet, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_tab_bar, {
                    slot: "bottom",
                    style: { "padding": "1% 1% 1% 1%", "--background": "#1d3160" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "home2",
                          href: "/home2",
                          onClick: ($event) => _ctx.$router.push("/home2"),
                          "router-direction": "back",
                          style: {}
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                icon: "ioniconsPrismSharp" in _ctx ? _ctx.ioniconsPrismSharp : unref(prismSharp),
                                style: { "font-size": "300%" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  icon: "ioniconsPrismSharp" in _ctx ? _ctx.ioniconsPrismSharp : unref(prismSharp),
                                  style: { "font-size": "300%" }
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "p2p",
                          href: "/p2p",
                          onClick: ($event) => _ctx.$router.push("/p2p"),
                          "router-direction": "forward"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                icon: "ioniconsCubeSharp" in _ctx ? _ctx.ioniconsCubeSharp : unref(cubeSharp),
                                style: { "font-size": "350%" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  icon: "ioniconsCubeSharp" in _ctx ? _ctx.ioniconsCubeSharp : unref(cubeSharp),
                                  style: { "font-size": "350%" }
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "assets",
                          href: "/assets"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                icon: "ioniconsDiamondSharp" in _ctx ? _ctx.ioniconsDiamondSharp : unref(diamondSharp),
                                style: { "font-size": "300%" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  icon: "ioniconsDiamondSharp" in _ctx ? _ctx.ioniconsDiamondSharp : unref(diamondSharp),
                                  style: { "font-size": "300%" }
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "search",
                          href: "/intro"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ion_icon, {
                                icon: "ioniconsSettingsOutline" in _ctx ? _ctx.ioniconsSettingsOutline : unref(settingsOutline),
                                style: { "font-size": "300%" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ion_icon, {
                                  icon: "ioniconsSettingsOutline" in _ctx ? _ctx.ioniconsSettingsOutline : unref(settingsOutline),
                                  style: { "font-size": "300%" }
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_tab_button, {
                            class: "notSelected",
                            tab: "home2",
                            href: "/home2",
                            onClick: ($event) => _ctx.$router.push("/home2"),
                            "router-direction": "back",
                            style: {}
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: "ioniconsPrismSharp" in _ctx ? _ctx.ioniconsPrismSharp : unref(prismSharp),
                                style: { "font-size": "300%" }
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_tab_button, {
                            class: "notSelected",
                            tab: "p2p",
                            href: "/p2p",
                            onClick: ($event) => _ctx.$router.push("/p2p"),
                            "router-direction": "forward"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: "ioniconsCubeSharp" in _ctx ? _ctx.ioniconsCubeSharp : unref(cubeSharp),
                                style: { "font-size": "350%" }
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_ion_tab_button, {
                            class: "notSelected",
                            tab: "assets",
                            href: "/assets"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: "ioniconsDiamondSharp" in _ctx ? _ctx.ioniconsDiamondSharp : unref(diamondSharp),
                                style: { "font-size": "300%" }
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_tab_button, {
                            class: "notSelected",
                            tab: "search",
                            href: "/intro"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: "ioniconsSettingsOutline" in _ctx ? _ctx.ioniconsSettingsOutline : unref(settingsOutline),
                                style: { "font-size": "300%" }
                              }, null, 8, ["icon"])
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
                    createVNode(_component_ion_router_outlet),
                    createVNode(_component_ion_tab_bar, {
                      slot: "bottom",
                      style: { "padding": "1% 1% 1% 1%", "--background": "#1d3160" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "home2",
                          href: "/home2",
                          onClick: ($event) => _ctx.$router.push("/home2"),
                          "router-direction": "back",
                          style: {}
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: "ioniconsPrismSharp" in _ctx ? _ctx.ioniconsPrismSharp : unref(prismSharp),
                              style: { "font-size": "300%" }
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "p2p",
                          href: "/p2p",
                          onClick: ($event) => _ctx.$router.push("/p2p"),
                          "router-direction": "forward"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: "ioniconsCubeSharp" in _ctx ? _ctx.ioniconsCubeSharp : unref(cubeSharp),
                              style: { "font-size": "350%" }
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "assets",
                          href: "/assets"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: "ioniconsDiamondSharp" in _ctx ? _ctx.ioniconsDiamondSharp : unref(diamondSharp),
                              style: { "font-size": "300%" }
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_tab_button, {
                          class: "notSelected",
                          tab: "search",
                          href: "/intro"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: "ioniconsSettingsOutline" in _ctx ? _ctx.ioniconsSettingsOutline : unref(settingsOutline),
                              style: { "font-size": "300%" }
                            }, null, 8, ["icon"])
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
              createVNode(_component_ion_tabs, {
                style: {},
                onIonTabsWillChange: ($event) => selected.value = "home2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_router_outlet),
                  createVNode(_component_ion_tab_bar, {
                    slot: "bottom",
                    style: { "padding": "1% 1% 1% 1%", "--background": "#1d3160" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_tab_button, {
                        class: "notSelected",
                        tab: "home2",
                        href: "/home2",
                        onClick: ($event) => _ctx.$router.push("/home2"),
                        "router-direction": "back",
                        style: {}
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: "ioniconsPrismSharp" in _ctx ? _ctx.ioniconsPrismSharp : unref(prismSharp),
                            style: { "font-size": "300%" }
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_ion_tab_button, {
                        class: "notSelected",
                        tab: "p2p",
                        href: "/p2p",
                        onClick: ($event) => _ctx.$router.push("/p2p"),
                        "router-direction": "forward"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: "ioniconsCubeSharp" in _ctx ? _ctx.ioniconsCubeSharp : unref(cubeSharp),
                            style: { "font-size": "350%" }
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_ion_tab_button, {
                        class: "notSelected",
                        tab: "assets",
                        href: "/assets"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: "ioniconsDiamondSharp" in _ctx ? _ctx.ioniconsDiamondSharp : unref(diamondSharp),
                            style: { "font-size": "300%" }
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_tab_button, {
                        class: "notSelected",
                        tab: "search",
                        href: "/intro"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: "ioniconsSettingsOutline" in _ctx ? _ctx.ioniconsSettingsOutline : unref(settingsOutline),
                            style: { "font-size": "300%" }
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onIonTabsWillChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const tabs_vue_vue_type_style_index_0_scoped_259af033_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-259af033"]]);
export {
  __nuxt_component_3 as _,
  __nuxt_component_14 as a
};
//# sourceMappingURL=tabs-3467ae62.js.map
