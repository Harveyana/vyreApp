import { h as IonPage, i as IonHeader, I as IonToolbar, z as IonTitle, l as IonCard, m as IonCardHeader, o as IonCardTitle, n as IonCardSubtitle, A as IonCardContent, k as IonButton, B as IonToggle, x as IonFooter } from '../server.mjs';
import { u as useDarkMode } from './useDarkMode-386da5e9.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

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
//# sourceMappingURL=index-1c2e3680.mjs.map
