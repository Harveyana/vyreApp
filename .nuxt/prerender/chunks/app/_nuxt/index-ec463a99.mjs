import { I as IonPage, a as IonHeader, b as IonToolbar, r as IonTitle, g as IonCard, h as IonCardHeader, j as IonCardTitle, i as IonCardSubtitle, s as IonCardContent, e as IonButton, t as IonToggle, u as IonFooter } from '../server.mjs';
import { u as useDarkMode } from './useDarkMode-386da5e9.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mac/vyreApp/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const darkMode = useDarkMode();
    const toggle = (checked) => {
      darkMode.switchMode(checked);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_header = IonHeader;
      const _component_ion_toolbar = IonToolbar;
      const _component_ion_title = IonTitle;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_subtitle = IonCardSubtitle;
      const _component_ion_card_content = IonCardContent;
      const _component_ion_button = IonButton;
      const _component_ion_toggle = IonToggle;
      const _component_ion_footer = IonFooter;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_header, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Header Toolbar`);
                            } else {
                              return [
                                createTextVNode("Header Toolbar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Header Toolbar")
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
                        createVNode(_component_ion_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Header Toolbar")
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
            _push2(ssrRenderComponent(_component_ion_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card_header, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_card_title, { class: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Card Title`);
                            } else {
                              return [
                                createTextVNode("Card Title")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ion_card_subtitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Card Subtitle`);
                            } else {
                              return [
                                createTextVNode("Card Subtitle")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_card_title, { class: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("Card Title")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ion_card_subtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Card Subtitle")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_card_content, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Here&#39;s a small text description for the card content. Nothing more, nothing less. `);
                      } else {
                        return [
                          createTextVNode(" Here's a small text description for the card content. Nothing more, nothing less. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_button, {
                    color: "primary",
                    "router-link": "/intro"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Intro`);
                      } else {
                        return [
                          createTextVNode("Intro")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_toggle, {
                    onIonChange: ($event) => toggle($event.detail.checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ion_button, { color: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Action 2`);
                      } else {
                        return [
                          createTextVNode("Action 2")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ion_card_header, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, { class: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode("Card Title")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_subtitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Card Subtitle")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_card_content, null, {
                      default: withCtx(() => [
                        createTextVNode(" Here's a small text description for the card content. Nothing more, nothing less. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_button, {
                      color: "primary",
                      "router-link": "/intro"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Intro")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_toggle, {
                      onIonChange: ($event) => toggle($event.detail.checked)
                    }, null, 8, ["onIonChange"]),
                    createVNode(_component_ion_button, { color: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("Action 2")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ion_footer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ion_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Footer Toolbar`);
                            } else {
                              return [
                                createTextVNode("Footer Toolbar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ion_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Footer Toolbar")
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
                        createVNode(_component_ion_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Footer Toolbar")
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
              createVNode(_component_ion_header, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Header Toolbar")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_header, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_title, { class: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("Card Title")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_subtitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Card Subtitle")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_card_content, null, {
                    default: withCtx(() => [
                      createTextVNode(" Here's a small text description for the card content. Nothing more, nothing less. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_button, {
                    color: "primary",
                    "router-link": "/intro"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Intro")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_toggle, {
                    onIonChange: ($event) => toggle($event.detail.checked)
                  }, null, 8, ["onIonChange"]),
                  createVNode(_component_ion_button, { color: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("Action 2")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_footer, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Footer Toolbar")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ec463a99.mjs.map
