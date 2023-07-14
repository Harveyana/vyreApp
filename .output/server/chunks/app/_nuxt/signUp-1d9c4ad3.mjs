import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, D as useIonRouter, h as IonPage, z as IonContent, l as IonCard, m as IonCardHeader, o as IonCardTitle, y as IonCardContent, F as IonInput, k as IonButton } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createTextVNode, createVNode, unref, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("rocket.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signUp",
  __ssrInlineRender: true,
  setup(__props) {
    const ionRouter = useIonRouter();
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPass = ref("");
    const firstNameValid = ref(false);
    const lastNameValid = ref(false);
    const emailValid = ref(false);
    const passWordValid = ref(false);
    const confirmPassWordValid = ref(false);
    const validateEmail = (email2) => {
      return email2.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    };
    const checkEmail = () => {
      validateEmail(email.value) ? emailValid.value = true : emailValid.value = false;
    };
    const checkfirstname = () => {
      firstname.value.length >= 4 ? firstNameValid.value = true : firstNameValid.value = false;
    };
    const checklastname = () => {
      lastname.value.length >= 4 ? lastNameValid.value = true : lastNameValid.value = false;
    };
    const checkPassWord = () => {
      password.value.length >= 6 ? passWordValid.value = true : passWordValid.value = false;
    };
    const confirmPassWord = () => {
      password.value === confirmPass.value ? confirmPassWordValid.value = true : confirmPassWordValid.value = false;
    };
    const submit = () => {
      ionRouter.push("/home");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_page = IonPage;
      const _component_ion_content = IonContent;
      const _component_ion_card = IonCard;
      const _component_ion_card_header = IonCardHeader;
      const _component_ion_card_title = IonCardTitle;
      const _component_ion_card_content = IonCardContent;
      const _component_ion_input = IonInput;
      const _component_ion_button = IonButton;
      _push(ssrRenderComponent(_component_ion_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ion_content, { fullscreen: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ion_card, { style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="Silhouette of mountains"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "height": "190px", "transform": "rotate(90deg)", "background-position": "center", "background-size": "contain", "margin-bottom": "-3%" })}" data-v-edcb952c${_scopeId3}>`);
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
                              _push5(ssrRenderComponent(_component_ion_input, {
                                mode: "md",
                                onIonInput: checkfirstname,
                                modelValue: unref(firstname),
                                "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                class: unref(firstNameValid) ? "valid" : "notValid",
                                id: "firstname",
                                label: "First Name",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "Enter First Name",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_input, {
                                mode: "md",
                                onIonInput: checklastname,
                                modelValue: unref(lastname),
                                "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                class: unref(lastNameValid) ? "valid" : "notValid",
                                id: "lastname",
                                label: "Last Name",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "Enter Last Name",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_input, {
                                mode: "md",
                                onIonInput: checkEmail,
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                class: unref(emailValid) ? "valid" : "notValid",
                                "error-text": "Invalid email",
                                Ref: "email",
                                id: "email",
                                type: "email",
                                label: "Email Address",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "Enter email",
                                style: { "--border-radius": "12px", "margin-top": "4%" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_input, {
                                mode: "md",
                                onIonInput: checkPassWord,
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                class: unref(passWordValid) ? "valid" : "notValid",
                                id: "password",
                                type: "password",
                                label: "Password",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "six characters and above",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ion_input, {
                                mode: "md",
                                onIonInput: confirmPassWord,
                                modelValue: unref(confirmPass),
                                "onUpdate:modelValue": ($event) => isRef(confirmPass) ? confirmPass.value = $event : null,
                                class: unref(confirmPassWordValid) ? "valid" : "notValid",
                                id: "confirmPass",
                                type: "password",
                                label: "Confirm Password",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "repeat Password",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, _parent5, _scopeId4));
                              _push5(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" })}" data-v-edcb952c${_scopeId4}>`);
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
                                onClick: ($event) => submit()
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
                                createVNode(_component_ion_input, {
                                  mode: "md",
                                  onIonInput: checkfirstname,
                                  modelValue: unref(firstname),
                                  "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                  class: unref(firstNameValid) ? "valid" : "notValid",
                                  id: "firstname",
                                  label: "First Name",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter First Name",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                createVNode(_component_ion_input, {
                                  mode: "md",
                                  onIonInput: checklastname,
                                  modelValue: unref(lastname),
                                  "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                  class: unref(lastNameValid) ? "valid" : "notValid",
                                  id: "lastname",
                                  label: "Last Name",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter Last Name",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                createVNode(_component_ion_input, {
                                  mode: "md",
                                  onIonInput: checkEmail,
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  class: unref(emailValid) ? "valid" : "notValid",
                                  "error-text": "Invalid email",
                                  Ref: "email",
                                  id: "email",
                                  type: "email",
                                  label: "Email Address",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "Enter email",
                                  style: { "--border-radius": "12px", "margin-top": "4%" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                createVNode(_component_ion_input, {
                                  mode: "md",
                                  onIonInput: checkPassWord,
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  class: unref(passWordValid) ? "valid" : "notValid",
                                  id: "password",
                                  type: "password",
                                  label: "Password",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "six characters and above",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                createVNode(_component_ion_input, {
                                  mode: "md",
                                  onIonInput: confirmPassWord,
                                  modelValue: unref(confirmPass),
                                  "onUpdate:modelValue": ($event) => isRef(confirmPass) ? confirmPass.value = $event : null,
                                  class: unref(confirmPassWordValid) ? "valid" : "notValid",
                                  id: "confirmPass",
                                  type: "password",
                                  label: "Confirm Password",
                                  "label-placement": "floating",
                                  fill: "outline",
                                  placeholder: "repeat Password",
                                  style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
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
                                    onClick: ($event) => submit()
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
                              createVNode(_component_ion_input, {
                                mode: "md",
                                onIonInput: checkfirstname,
                                modelValue: unref(firstname),
                                "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                class: unref(firstNameValid) ? "valid" : "notValid",
                                id: "firstname",
                                label: "First Name",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "Enter First Name",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_ion_input, {
                                mode: "md",
                                onIonInput: checklastname,
                                modelValue: unref(lastname),
                                "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                class: unref(lastNameValid) ? "valid" : "notValid",
                                id: "lastname",
                                label: "Last Name",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "Enter Last Name",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_ion_input, {
                                mode: "md",
                                onIonInput: checkEmail,
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                class: unref(emailValid) ? "valid" : "notValid",
                                "error-text": "Invalid email",
                                Ref: "email",
                                id: "email",
                                type: "email",
                                label: "Email Address",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "Enter email",
                                style: { "--border-radius": "12px", "margin-top": "4%" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_ion_input, {
                                mode: "md",
                                onIonInput: checkPassWord,
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                class: unref(passWordValid) ? "valid" : "notValid",
                                id: "password",
                                type: "password",
                                label: "Password",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "six characters and above",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_ion_input, {
                                mode: "md",
                                onIonInput: confirmPassWord,
                                modelValue: unref(confirmPass),
                                "onUpdate:modelValue": ($event) => isRef(confirmPass) ? confirmPass.value = $event : null,
                                class: unref(confirmPassWordValid) ? "valid" : "notValid",
                                id: "confirmPass",
                                type: "password",
                                label: "Confirm Password",
                                "label-placement": "floating",
                                fill: "outline",
                                placeholder: "repeat Password",
                                style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
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
                                  onClick: ($event) => submit()
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
                  return [
                    createVNode(_component_ion_card, { style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" } }, {
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
                            createVNode(_component_ion_input, {
                              mode: "md",
                              onIonInput: checkfirstname,
                              modelValue: unref(firstname),
                              "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                              class: unref(firstNameValid) ? "valid" : "notValid",
                              id: "firstname",
                              label: "First Name",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter First Name",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_ion_input, {
                              mode: "md",
                              onIonInput: checklastname,
                              modelValue: unref(lastname),
                              "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                              class: unref(lastNameValid) ? "valid" : "notValid",
                              id: "lastname",
                              label: "Last Name",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter Last Name",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_ion_input, {
                              mode: "md",
                              onIonInput: checkEmail,
                              modelValue: unref(email),
                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                              class: unref(emailValid) ? "valid" : "notValid",
                              "error-text": "Invalid email",
                              Ref: "email",
                              id: "email",
                              type: "email",
                              label: "Email Address",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter email",
                              style: { "--border-radius": "12px", "margin-top": "4%" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_ion_input, {
                              mode: "md",
                              onIonInput: checkPassWord,
                              modelValue: unref(password),
                              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                              class: unref(passWordValid) ? "valid" : "notValid",
                              id: "password",
                              type: "password",
                              label: "Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "six characters and above",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_ion_input, {
                              mode: "md",
                              onIonInput: confirmPassWord,
                              modelValue: unref(confirmPass),
                              "onUpdate:modelValue": ($event) => isRef(confirmPass) ? confirmPass.value = $event : null,
                              class: unref(confirmPassWordValid) ? "valid" : "notValid",
                              id: "confirmPass",
                              type: "password",
                              label: "Confirm Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "repeat Password",
                              style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
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
                                onClick: ($event) => submit()
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ion_content, { fullscreen: true }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { style: { "margin": "0px", "min-height": "100%", "background": "#E5E5E5" } }, {
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
                          createVNode(_component_ion_input, {
                            mode: "md",
                            onIonInput: checkfirstname,
                            modelValue: unref(firstname),
                            "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                            class: unref(firstNameValid) ? "valid" : "notValid",
                            id: "firstname",
                            label: "First Name",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "Enter First Name",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_ion_input, {
                            mode: "md",
                            onIonInput: checklastname,
                            modelValue: unref(lastname),
                            "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                            class: unref(lastNameValid) ? "valid" : "notValid",
                            id: "lastname",
                            label: "Last Name",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "Enter Last Name",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_ion_input, {
                            mode: "md",
                            onIonInput: checkEmail,
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            class: unref(emailValid) ? "valid" : "notValid",
                            "error-text": "Invalid email",
                            Ref: "email",
                            id: "email",
                            type: "email",
                            label: "Email Address",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "Enter email",
                            style: { "--border-radius": "12px", "margin-top": "4%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_ion_input, {
                            mode: "md",
                            onIonInput: checkPassWord,
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            class: unref(passWordValid) ? "valid" : "notValid",
                            id: "password",
                            type: "password",
                            label: "Password",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "six characters and above",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_ion_input, {
                            mode: "md",
                            onIonInput: confirmPassWord,
                            modelValue: unref(confirmPass),
                            "onUpdate:modelValue": ($event) => isRef(confirmPass) ? confirmPass.value = $event : null,
                            class: unref(confirmPassWordValid) ? "valid" : "notValid",
                            id: "confirmPass",
                            type: "password",
                            label: "Confirm Password",
                            "label-placement": "floating",
                            fill: "outline",
                            placeholder: "repeat Password",
                            style: { "--color": "#1B1D30", "--border-radius": "12px", "margin-top": "4%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
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
                              onClick: ($event) => submit()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-edcb952c"]]);

export { signUp as default };
//# sourceMappingURL=signUp-1d9c4ad3.mjs.map
