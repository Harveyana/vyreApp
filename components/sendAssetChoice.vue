<template>
    <ion-modal 
      :is-open="props.isSendAssetChoiceModalOpen"
      :initial-breakpoint="0.65"
      :breakpoints="[0, 0.4, 0.5, 0.65, 0.75]" 
      :backdrop-dismiss="false"
      :backdrop-breakpoint="0"
      :can-dismiss="canDismiss"
      style="--border-radius: 32px;"
      >

      

      <ion-content class="ion-padding content" style="">

        <ion-card style="box-shadow: none;background: none;z-index: 888;margin-bottom: 0px;margin-top: 8%;">
            <ion-card-title color="primary" style="font-size: 170%;font-weight: bold;">Transfer Asset</ion-card-title>
            <ion-card-subtitle style="margin-top: 1%;margin-left:2%;text-transform: lowercase;">
                Select transfer method
            </ion-card-subtitle>
        </ion-card>

        <!-- <ion-card style="max-height: 50%;min-height:50%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;box-shadow: none;"> -->
            <ion-list v-for="(choice, index) in sendChoices" :key="index" style="background: none;">
                <SendChoice :name="choice.name" :description="choice.description" :default="choice.default" @click="$emit('closeModal')"/>
            </ion-list>
        <!-- </ion-card> -->

      </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">

const props = defineProps<{
    isSendAssetChoiceModalOpen:boolean
}>()

async function canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
const sendChoices:{name:string,description:string,default:boolean}[] = [
    {
        name:'Email',
        description:'Instant transfer to users registered on Vyre (no fees charged)',
        default:true
    },
    {
        name:'Blockchain Address',
        description:'Transfer to blockchain address (includes transaction fees)',
        default:false
    }
]
const cryptos:{name:string,symbol:string,price:number,amount:number,img:string}[] = [
    {
        name:'Ripple',
        img:'/ripple.svg',
        symbol:'XRP',
        price: 0.42,
        amount:367
    },
    {
        name:'Solana',
        img:'/solana.svg',
        symbol:'Solana',
        price: 138,
        amount:567
    },
    {
        name:'Tether',
        img:'/tether.svg',
        symbol:'USDT',
        price: 1,
        amount:670
    },
    {
        name:'Tron',
        img:'/tron.svg',
        symbol:'TRON',
        price: 0.08,
        amount:8367
    },
    {
        name:'Solana',
        img:'/solana.svg',
        symbol:'Solana',
        price: 138,
        amount:567
    },
    {
        name:'Tether',
        img:'/tether.svg',
        symbol:'USDT',
        price: 1,
        amount:670
    },
    {
        name:'Tron',
        img:'/tron.svg',
        symbol:'TRON',
        price: 0.08,
        amount:8367
    },
    {
        name:'Solana',
        img:'/solana.svg',
        symbol:'Solana',
        price: 138,
        amount:567
    },
    {
        name:'Tether',
        img:'/tether.svg',
        symbol:'USDT',
        price: 1,
        amount:670
    },
    {
        name:'Tron',
        img:'/tron.svg',
        symbol:'TRON',
        price: 0.08,
        amount:8367
    }
]

const fiats:{name:string,symbol:string,price:number,amount:number,img:string}[] = [
    {
        name:'United States Dollar',
        img:'/ripple.svg',
        symbol:'USD',
        price: 0.42,
        amount:367
    },
    {
        name:'Euros',
        img:'/ripple.svg',
        symbol:'EUR',
        price: 0.42,
        amount:367
    },
    {
        name:'British Pounds',
        img:'/ripple.svg',
        symbol:'GBP',
        price: 0.42,
        amount:367
    },
    {
        name:'Nigerian Naira',
        img:'/ripple.svg',
        symbol:'NGN',
        price: 0.42,
        amount:367
    },
    {
        name:'United States Dollar',
        img:'/ripple.svg',
        symbol:'USD',
        price: 0.42,
        amount:367
    },
    {
        name:'British Pounds',
        img:'/ripple.svg',
        symbol:'GBP',
        price: 0.42,
        amount:367
    },
    {
        name:'Euros',
        img:'/ripple.svg',
        symbol:'EUR',
        price: 0.42,
        amount:367
    },
]
</script>
<style scoped>
 /* ion-content {
    --background: linear-gradient(45deg, rgba(255,0,0,0), #1B1D30);
 } */
 ion-segment {
    --background: rgba(66, 65, 65, 0.446);
} 
ion-segment-button::part(indicator-background) {
    background: #1B1D30;
}
  .segment-button-checked.ios::part(native) {
    color:#1B1D30;
} 
</style>