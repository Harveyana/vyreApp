<template>
    <ion-modal 
      :is-open="props.isOrderDetailsModalOpen"
      :initial-breakpoint="0.65"
      :breakpoints="[0, 0.4, 0.5, 0.65, 0.75]" 
      :backdrop-dismiss="false"
      :backdrop-breakpoint="0"
      style="--border-radius: 32px;"
      @didDismiss="$emit('closeModal')"
      >

      

      <ion-content class="ion-padding content" style="">
        <div style="height:8%;width:100%;display: flex;flex-direction: row;align-items: flex-end;justify-content: end;margin-bottom: 2%;">
            <ion-icon :icon="ioniconsCloseCircleOutline" style="font-size: 300%;margin-right: 4%;" @click="$emit('closeModal')"/>
        </div>
        <div style="margin: 0px;display: flex;flex-direction: row;align-items: center;justify-content: space-around;background: none;">
            <ion-card style="box-shadow: none;background: none;z-index: 888;margin: 0px;width: 40%;position: relative;bottom: 8%;">
                <ion-card-title color="primary" style="font-size: 200%;font-weight: bold;">Buy</ion-card-title>
                <ion-card-subtitle style="margin-top: 1%;margin-left:2%;font-size: 100%;">
                    Bitcoin / Naira
                </ion-card-subtitle>
            </ion-card>
            
            <div style="max-width: 100%;height: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                <!-- <ion-icon class="arrow" color="primary" :icon="ioniconsArrowUpCircleSharp" style="font-size: 250%;transform: rotate(45deg);"/> -->
                <ion-avatar slot="start" style="scale:1.3;border: 3px solid #1B1D30;">
                  <img alt="asset img" src="/BTC.svg"/>
                </ion-avatar>
                <ion-avatar slot="start" style="scale:1.3;position: relative;right:5%;border: 3px solid #1B1D30;">
                  <img alt="asset img" src="/nigeria.svg"/>
                </ion-avatar>
            </div>

        </div>
        <ion-card style="margin: 0px;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 30%;margin-top: 7%;background:#1d3160;box-shadow: none;padding-top: 3%;padding-bottom: 3%;">
            <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-around;height: 30%;width: 90%;border:1px solid black ;border-radius: 25px;padding:4%;background: #1d3160;border: 1px solid white;">
                <ion-label style="font-size: 150%;color: whitesmoke;">You Send</ion-label>
                <ion-input label="" type="number" placeholder="000" style="width: 50%;background: #43455838;font-size: 150%;border-radius: 12px;color: whitesmoke;border: 1px solid whitesmoke;"></ion-input>
                <ion-label style="font-size: 120%;color: whitesmoke;">NGN</ion-label>
            </div>
            <ion-icon color="secondary" :icon="ioniconsSwapVerticalSharp" style="font-size: 300%;border-radius: 25px;z-index: 99;padding: 3%;"/>
            <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-around;height: 30%;width: 90%;border:1px solid black ;border-radius: 25px;padding:4%;background:goldenrod;border: 1px solid goldenrod;">
                <ion-label style="font-size: 150%;color: black;">You Get</ion-label>
                <ion-input label="" :readonly="true" type="number" placeholder="00" style="width: 50%;background: #43455838;font-size: 150%;border-radius: 12px;color: black;border: 1px solid whitesmoke;"></ion-input>
                <ion-label style="font-size: 120%;color: black;">BTC</ion-label>
            </div>

        </ion-card>

        <div style="display: flex;flex-direction: row;align-items: center;justify-content: center;margin-top: 8%;">
            <ion-button fill="outline" style="width:80%;height:50px;font-size: 130%;" @click="$emit('closeModal')">Confirm</ion-button>
        </div>
        

      </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">

const props = defineProps<{
    isOrderDetailsModalOpen:boolean
}>()

// async function canDismiss(data?: any, role?: string) {
//     return role !== 'gesture';
//   }
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