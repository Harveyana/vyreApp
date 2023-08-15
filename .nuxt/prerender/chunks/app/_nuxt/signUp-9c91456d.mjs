import { _ as _export_sfc, u as useIonRouter, q as IonPage, a as IonContent, b as IonCard, t as IonCardHeader, d as IonCardTitle, J as IonCardContent, n as IonInput, o as IonButton, M as IonSpinner } from '../server.mjs';
import * as Realm from 'file:///Users/mac/vyreApp/node_modules/realm-web/dist/bundle.cjs.js';
import { useSSRContext, defineComponent, ref, withCtx, unref, createTextVNode, createVNode, mergeProps, openBlock, createBlock } from 'file:///Users/mac/vyreApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/mac/vyreApp/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './rocket-4a2e16df.mjs';
import { useForm } from 'file:///Users/mac/vyreApp/node_modules/vee-validate/dist/vee-validate.js';
import * as yup from 'file:///Users/mac/vyreApp/node_modules/yup/index.js';
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
import '../../renderer.mjs';
import 'file:///Users/mac/vyreApp/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/vyreApp/node_modules/devalue/index.js';

const useRealmAuth = () => {
  const app = new Realm.App({ id: "vyre-ixkvi" });
  const register = async (email, password) => {
    await app.emailPasswordAuth.registerUser({ email, password });
  };
  const confirmUser = async (token, tokenId) => {
    await app.emailPasswordAuth.confirmUser({ token, tokenId });
  };
  return {
    register,
    confirmUser
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signUp",
  __ssrInlineRender: true,
  setup(__props) {
    const { register } = useRealmAuth();
    const { values, errors, handleSubmit, defineInputBinds } = useForm({
      validationSchema: yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        confirmPass: yup.string().oneOf([yup.ref("password"), null], "Does not match with field1!").required("Required")
      })
    });
    const firstname = defineInputBinds("firstname");
    const lastname = defineInputBinds("lastname");
    const email = defineInputBinds("email");
    const password = defineInputBinds("password");
    const confirmPass = defineInputBinds("confirmPass");
    const ionRouter = useIonRouter();
    const inProgress = ref(false);
    const onSuccess = async (values2) => {
      console.log(values2.email);
      await register(values2.email, values2.password);
      console.log("email sent");
      ionRouter.push("/home2");
    };
    function onInvalidSubmit({ values: values2, errors: errors2 }) {
      console.log(values2);
      console.log(errors2);
    }
    handleSubmit(onSuccess, onInvalidSubmit);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_content = IonContent;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_content = IonCardContent;
      const _component_ion_input = IonInput;
      const _component_ion_button = IonButton;
      const _component_ion_spinner = IonSpinner;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, { fullscreen: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(inProgress)) {
                    _push3(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img alt="Silhouette of mountains"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "height": "190px", "transform": "rotate(90deg)", "background-position": "center", "background-size": "contain", "margin-bottom": "-3%" })}" data-v-465abe50${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ion_card_header, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ion_card_title, {
                                  color: "primary",
                                  style: { "font-size": "280%" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Sign Up`);
                                    } else {
                                      return [
                                        createTextVNode("Sign Up")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ion_card_title, {
                                    color: "primary",
                                    style: { "font-size": "280%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Sign Up")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ion_card_content, { style: { "position": "relative", "top": "-30%" } }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Enter your details below. `);
                                _push5(ssrRenderComponent(_component_ion_input, mergeProps({ mode: "md" }, unref(firstname), {
                                  id: "firstname",
                                  label: "First Name",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter First Name",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_input, mergeProps({ mode: "md" }, unref(lastname), {
                                  id: "lastname",
                                  label: "Last Name",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter Last Name",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_input, mergeProps({ mode: "md" }, unref(email), {
                                  "error-text": "Invalid email",
                                  Ref: "email",
                                  id: "email",
                                  type: "email",
                                  label: "Email Address",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter email",
                                  style: { "--border-radius": "12px", "margin-top": "4%" }
                                }), null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_input, mergeProps({ mode: "md" }, unref(password), {
                                  id: "password",
                                  type: "password",
                                  label: "Password",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "six characters and above",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_input, mergeProps({ mode: "md" }, unref(confirmPass), {
                                  id: "confirmPass",
                                  type: "password",
                                  label: "Confirm Password",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "repeat Password",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, _parent5, _scopeId4));
                                _push5(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" })}" data-v-465abe50${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ion_button, {
                                  fill: "outline",
                                  size: "default",
                                  style: { "margin-top": "4%" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Sign In`);
                                    } else {
                                      return [
                                        createTextVNode("Sign In")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ion_button, {
                                  fill: "solid",
                                  size: "default",
                                  style: { "margin-top": "4%", "--background": "linear-gradient(180deg, #042D64, #1B1D30)" },
                                  onClick: ($event) => unref(ionRouter).push("/home2")
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Create Account`);
                                    } else {
                                      return [
                                        createTextVNode("Create Account")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createTextVNode(" Enter your details below. "),
                                  createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(firstname), {
                                    id: "firstname",
                                    label: "First Name",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "Enter First Name",
                                    style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                  }), null, 16),
                                  createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(lastname), {
                                    id: "lastname",
                                    label: "Last Name",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "Enter Last Name",
                                    style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                  }), null, 16),
                                  createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(email), {
                                    "error-text": "Invalid email",
                                    Ref: "email",
                                    id: "email",
                                    type: "email",
                                    label: "Email Address",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "Enter email",
                                    style: { "--border-radius": "12px", "margin-top": "4%" }
                                  }), null, 16),
                                  createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(password), {
                                    id: "password",
                                    type: "password",
                                    label: "Password",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "six characters and above",
                                    style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                  }), null, 16),
                                  createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(confirmPass), {
                                    id: "confirmPass",
                                    type: "password",
                                    label: "Confirm Password",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "repeat Password",
                                    style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                  }), null, 16),
                                  createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                                    createVNode(_component_ion_button, {
                                      fill: "outline",
                                      size: "default",
                                      style: { "margin-top": "4%" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Sign In")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ion_button, {
                                      fill: "solid",
                                      size: "default",
                                      style: { "margin-top": "4%", "--background": "linear-gradient(180deg, #042D64, #1B1D30)" },
                                      onClick: ($event) => unref(ionRouter).push("/home2")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Create Account")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("img", {
                              alt: "Silhouette of mountains",
                              src: _imports_0,
                              style: { "height": "190px", "transform": "rotate(90deg)", "background-position": "center", "background-size": "contain", "margin-bottom": "-3%" }
                            }),
                            createVNode(_component_ion_card_header, null, {
                              default: withCtx(() => [
                                createVNode(_component_ion_card_title, {
                                  color: "primary",
                                  style: { "font-size": "280%" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Sign Up")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_card_content, { style: { "position": "relative", "top": "-30%" } }, {
                              default: withCtx(() => [
                                createTextVNode(" Enter your details below. "),
                                createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(firstname), {
                                  id: "firstname",
                                  label: "First Name",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter First Name",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, 16),
                                createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(lastname), {
                                  id: "lastname",
                                  label: "Last Name",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter Last Name",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, 16),
                                createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(email), {
                                  "error-text": "Invalid email",
                                  Ref: "email",
                                  id: "email",
                                  type: "email",
                                  label: "Email Address",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter email",
                                  style: { "--border-radius": "12px", "margin-top": "4%" }
                                }), null, 16),
                                createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(password), {
                                  id: "password",
                                  type: "password",
                                  label: "Password",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "six characters and above",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, 16),
                                createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(confirmPass), {
                                  id: "confirmPass",
                                  type: "password",
                                  label: "Confirm Password",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "repeat Password",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }), null, 16),
                                createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                                  createVNode(_component_ion_button, {
                                    fill: "outline",
                                    size: "default",
                                    style: { "margin-top": "4%" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Sign In")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ion_button, {
                                    fill: "solid",
                                    size: "default",
                                    style: { "margin-top": "4%", "--background": "linear-gradient(180deg, #042D64, #1B1D30)" },
                                    onClick: ($event) => unref(ionRouter).push("/home2")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Create Account")
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_ion_card, {
                      class: "flex-row-center-center",
                      style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ion_spinner, {
                            name: "dots",
                            paused: !unref(inProgress)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ion_spinner, {
                              name: "dots",
                              paused: !unref(inProgress)
                            }, null, 8, ["paused"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    !unref(inProgress) ? (openBlock(), createBlock(_component_ion_card, {
                      key: 0,
                      style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: "Silhouette of mountains",
                          src: _imports_0,
                          style: { "height": "190px", "transform": "rotate(90deg)", "background-position": "center", "background-size": "contain", "margin-bottom": "-3%" }
                        }),
                        createVNode(_component_ion_card_header, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_card_title, {
                              color: "primary",
                              style: { "font-size": "280%" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Sign Up")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_card_content, { style: { "position": "relative", "top": "-30%" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Enter your details below. "),
                            createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(firstname), {
                              id: "firstname",
                              label: "First Name",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter First Name",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }), null, 16),
                            createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(lastname), {
                              id: "lastname",
                              label: "Last Name",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter Last Name",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }), null, 16),
                            createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(email), {
                              "error-text": "Invalid email",
                              Ref: "email",
                              id: "email",
                              type: "email",
                              label: "Email Address",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter email",
                              style: { "--border-radius": "12px", "margin-top": "4%" }
                            }), null, 16),
                            createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(password), {
                              id: "password",
                              type: "password",
                              label: "Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "six characters and above",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }), null, 16),
                            createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(confirmPass), {
                              id: "confirmPass",
                              type: "password",
                              label: "Confirm Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "repeat Password",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }), null, 16),
                            createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                              createVNode(_component_ion_button, {
                                fill: "outline",
                                size: "default",
                                style: { "margin-top": "4%" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Sign In")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ion_button, {
                                fill: "solid",
                                size: "default",
                                style: { "margin-top": "4%", "--background": "linear-gradient(180deg, #042D64, #1B1D30)" },
                                onClick: ($event) => unref(ionRouter).push("/home2")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Create Account")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_ion_card, {
                      key: 1,
                      class: "flex-row-center-center",
                      style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_spinner, {
                          name: "dots",
                          paused: !unref(inProgress)
                        }, null, 8, ["paused"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_content, { fullscreen: true }, {
                default: withCtx(() => [
                  !unref(inProgress) ? (openBlock(), createBlock(_component_ion_card, {
                    key: 0,
                    style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" }
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        alt: "Silhouette of mountains",
                        src: _imports_0,
                        style: { "height": "190px", "transform": "rotate(90deg)", "background-position": "center", "background-size": "contain", "margin-bottom": "-3%" }
                      }),
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_title, {
                            color: "primary",
                            style: { "font-size": "280%" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Sign Up")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_card_content, { style: { "position": "relative", "top": "-30%" } }, {
                        default: withCtx(() => [
                          createTextVNode(" Enter your details below. "),
                          createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(firstname), {
                            id: "firstname",
                            label: "First Name",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "Enter First Name",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }), null, 16),
                          createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(lastname), {
                            id: "lastname",
                            label: "Last Name",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "Enter Last Name",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }), null, 16),
                          createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(email), {
                            "error-text": "Invalid email",
                            Ref: "email",
                            id: "email",
                            type: "email",
                            label: "Email Address",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "Enter email",
                            style: { "--border-radius": "12px", "margin-top": "4%" }
                          }), null, 16),
                          createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(password), {
                            id: "password",
                            type: "password",
                            label: "Password",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "six characters and above",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }), null, 16),
                          createVNode(_component_ion_input, mergeProps({ mode: "md" }, unref(confirmPass), {
                            id: "confirmPass",
                            type: "password",
                            label: "Confirm Password",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "repeat Password",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }), null, 16),
                          createVNode("div", { style: { "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } }, [
                            createVNode(_component_ion_button, {
                              fill: "outline",
                              size: "default",
                              style: { "margin-top": "4%" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Sign In")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_button, {
                              fill: "solid",
                              size: "default",
                              style: { "margin-top": "4%", "--background": "linear-gradient(180deg, #042D64, #1B1D30)" },
                              onClick: ($event) => unref(ionRouter).push("/home2")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Create Account")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_ion_card, {
                    key: 1,
                    class: "flex-row-center-center",
                    style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_spinner, {
                        name: "dots",
                        paused: !unref(inProgress)
                      }, null, 8, ["paused"])
                    ]),
                    _: 1
                  }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-465abe50"]]);

export { signUp as default };
//# sourceMappingURL=signUp-9c91456d.mjs.map
