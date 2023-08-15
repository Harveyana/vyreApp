<template>
     <ion-page>
        <ion-content :fullscreen="true">
            <ion-card style="margin:0px;min-height: 100%;background: #E5E5E5;" v-if="!inProgress">
                <img alt="Silhouette of mountains" src="/rocket.png" style="height: 190px;transform: rotate(90deg);background-position: center;background-size: contain;margin-bottom: -3%;"/>
                <ion-card-header>
                <ion-card-title color="primary" style="font-size: 280%;">Sign Up</ion-card-title>
                <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
                
                </ion-card-header>

                <ion-card-content style="position: relative;top:-30%;">
                Enter your details below.
                <ion-input mode="md" v-bind="firstname" id="firstname" label="First Name" label-placement="floating" fill="outline" placeholder="Enter First Name" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <ion-input mode="md"  v-bind="lastname" id="lastname" label="Last Name" label-placement="floating" fill="outline" placeholder="Enter Last Name" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <ion-input mode="md" v-bind="email" error-text="Invalid email" Ref="email" id="email" type="email" label="Email Address" label-placement="floating" fill="outline" placeholder="Enter email" style="--border-radius:12px;margin-top: 4%;"></ion-input>
                <!-- <ion-input mode="md"  ref="phone" type="tel" label="Phone Number" label-placement="floating" fill="outline" placeholder="Enter Phone" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input> -->
                <ion-input mode="md" v-bind="password" id="password" type="password" label="Password" label-placement="floating" fill="outline" placeholder="six characters and above" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <ion-input mode="md" v-bind="confirmPass" id="confirmPass" type="password" label="Confirm Password" label-placement="floating" fill="outline" placeholder="repeat Password" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>

                <div style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
                    <ion-button fill="outline" size="default" style="margin-top: 4%;">Sign In</ion-button>
                    <ion-button fill="solid" size="default" style="margin-top: 4%;--background:linear-gradient(180deg, #042D64, #1B1D30);;" @click="ionRouter.push('/home2')">Create Account</ion-button>
                </div>
                </ion-card-content>
                
            </ion-card>
            <ion-card class="flex-row-center-center" style="margin:0px;min-height: 100%;background: #E5E5E5;" v-else>
              <ion-spinner name="dots" :paused="!inProgress"></ion-spinner>
            </ion-card>
        </ion-content>
     </ion-page>
</template>
<script setup lang="ts">

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
const {register} = useRealmAuth()

type userAuth = {
    firstname:string
    lastname:string
    email:string
    password:string
    confirmPass:string
  }

const { values, errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPass: yup.string().oneOf([yup.ref('password'), null], "Does not match with field1!").required('Required')
  }),
});

const firstname = defineInputBinds('firstname');
const lastname = defineInputBinds('lastname');
const email = defineInputBinds('email');
const password = defineInputBinds('password');
const confirmPass = defineInputBinds('confirmPass');

const ionRouter = useIonRouter();
const inProgress = ref<boolean>(false)


  // const validateEmail = (email:string)=>{
  //       return email.match(
  //         /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  //       );
  //   }

  // const checkEmail = ()=>{
  //   // email.value?.classList.add('.valid')
  //   validateEmail(email.value) ? emailValid.value = true : emailValid.value = false
  // }
  // const checkfirstname =()=>{
  //   firstname.value.length >= 4 ? firstNameValid.value = true : firstNameValid.value = false
  // }

  // const checklastname =()=>{
  //   lastname.value.length >= 4 ? lastNameValid.value = true : lastNameValid.value = false
  // }

  // const checkPassWord =()=>{
  //   password.value.length >= 6 ? passWordValid.value = true : passWordValid.value = false
  // }

  // const confirmPassWord =()=>{
  //   password.value === confirmPass.value ? confirmPassWordValid.value = true : confirmPassWordValid.value = false
  // }

  const onSuccess = async(values:any)=> {
  console.log(values.email)
  await register(values.email, values.password)
  console.log('email sent')
  ionRouter.push('/home2')
  }

  function onInvalidSubmit ({ values, errors }:any) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  // console.log(results); // a detailed map of field names and their validation results
 }

 const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);


</script>
<style scoped>
 ion-content.ios.content-ltr {
    position:relative;
    margin:0px;
    padding: 0px;
}
ion-card {
    position:relative;
    margin:0px;
    padding: 0px;
}
ion-spinner {
    width: 200px;
    height: 200px;
    --color: goldenrod
}
.flex-row-center-center{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.valid{
    --border-color:green;
}
.notValid{
    --color:rgb(167, 67, 67);
}
</style>