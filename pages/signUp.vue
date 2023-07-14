<template>
     <ion-page>
        <ion-content :fullscreen="true">
            <ion-card style="margin:0px;min-height: 100%;background: #E5E5E5;">
                <img alt="Silhouette of mountains" src="/rocket.png" style="height: 190px;transform: rotate(90deg);background-position: center;background-size: contain;margin-bottom: -3%;"/>
                <ion-card-header>
                <ion-card-title color="primary" style="font-size: 280%;">Sign Up</ion-card-title>
                <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
                
                </ion-card-header>

                <ion-card-content style="position: relative;top:-30%;">
                Enter your details below.
                <ion-input mode="md" @ionInput="checkfirstname" v-model="firstname" :class="(firstNameValid ? 'valid':'notValid')" id="firstname" label="First Name" label-placement="floating" fill="outline" placeholder="Enter First Name" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <ion-input mode="md" @ionInput="checklastname" v-model="lastname" :class="(lastNameValid ? 'valid':'notValid')" id="lastname" label="Last Name" label-placement="floating" fill="outline" placeholder="Enter Last Name" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <ion-input mode="md" @ionInput="checkEmail" v-model="email" :class="(emailValid ? 'valid':'notValid')" error-text="Invalid email" Ref="email" id="email" type="email" label="Email Address" label-placement="floating" fill="outline" placeholder="Enter email" style="--border-radius:12px;margin-top: 4%;"></ion-input>
                <!-- <ion-input mode="md"  ref="phone" type="tel" label="Phone Number" label-placement="floating" fill="outline" placeholder="Enter Phone" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input> -->
                <ion-input mode="md" @ion-input="checkPassWord" v-model="password" :class="(passWordValid ? 'valid':'notValid')" id="password" type="password" label="Password" label-placement="floating" fill="outline" placeholder="six characters and above" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <ion-input mode="md" @ion-input="confirmPassWord" v-model="confirmPass" :class="(confirmPassWordValid ? 'valid':'notValid')" id="confirmPass" type="password" label="Confirm Password" label-placement="floating" fill="outline" placeholder="repeat Password" style="--color:#1B1D30;--border-radius:12px;margin-top: 4%;"></ion-input>
                <div style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
                    <ion-button fill="outline" size="default" style="margin-top: 4%;">Sign In</ion-button>
                    <ion-button fill="solid" size="default" style="margin-top: 4%;--background:linear-gradient(180deg, #042D64, #1B1D30);;" @click="submit()">Create Account</ion-button>
                </div>
                </ion-card-content>
                
            </ion-card>
        </ion-content>
     </ion-page>
</template>
<script setup lang="ts">

const ionRouter = useIonRouter();

 const firstname = ref<string>('')
 const lastname = ref<string>('')
  const email = ref<string>('')
  const password = ref<string>('')
  const confirmPass = ref<string>('')

 const firstNameValid = ref<boolean>(false)
  const lastNameValid = ref<boolean>(false)
    const emailValid = ref<boolean>(false)
      const passWordValid = ref<boolean>(false)
        const confirmPassWordValid = ref<boolean>(false)




  const validateEmail = (email:string)=>{
        return email.match(
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    }

  const checkEmail = ()=>{
    // email.value?.classList.add('.valid')
    validateEmail(email.value) ? emailValid.value = true : emailValid.value = false
  }
  const checkfirstname =()=>{
    firstname.value.length >= 4 ? firstNameValid.value = true : firstNameValid.value = false
  }

  const checklastname =()=>{
    lastname.value.length >= 4 ? lastNameValid.value = true : lastNameValid.value = false
  }

  const checkPassWord =()=>{
    password.value.length >= 6 ? passWordValid.value = true : passWordValid.value = false
  }

  const confirmPassWord =()=>{
    password.value === confirmPass.value ? confirmPassWordValid.value = true : confirmPassWordValid.value = false
  }

  const submit = ()=>{
    // if (firstNameValid && lastNameValid && emailValid && passWordValid && confirmPassWordValid) {


      
    // }

    ionRouter.push('/home')
  }
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

.valid{
    --border-color:green;
}
.notValid{
    --color:rgb(167, 67, 67);
}
</style>