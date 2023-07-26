<template>
    <ion-modal 
      :is-open="props.isNewOrderModalOpen"
      :initial-breakpoint="0.85"
      :breakpoints="[0, 0.4, 0.5, 0.65, 0.75, 0.85]" 
      :backdrop-dismiss="false"
      :backdrop-breakpoint="0"
      style="--border-radius: 32px;"
      @didDismiss="$emit('closeModal')"
      >

      

      <ion-content class="ion-padding content" style="">
        <!-- Title -->
        <div style="height:8%;width:100%;display: flex;flex-direction: row;align-items: start;justify-content: start;margin-top: 7%;padding: 0 5% 0 5%;">
            <ion-label style="font-size: 190%;color: black;font-weight: bold;">New Order</ion-label>
            <ion-icon :icon="ioniconsInformationCircle" style="font-size: 200%;position: relative;left:45%;" @click=""/>
        </div>
        <!-- Title -->

        <!-- Options -->
        <div style="height:8%;width:100%;display: flex;flex-direction: row;align-items: start;justify-content: start;padding: 0 5% 0 5%;">
            <ion-list>
                <ion-item>
                <ion-select aria-label="Fruit" interface="action-sheet" placeholder="Select Pair" style="font-size: 120%;" @ion-change="setOrder($event.detail.value)">
                    <ion-select-option :value="pair" v-for="(pair,index) in pairs" :key="index">
                        {{pair.base}}/{{pair.quote}}
                    </ion-select-option>
                </ion-select>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                <ion-select aria-label="Fruit" interface="popover" placeholder="Order type" style="font-size: 120%;" @ion-change="setOrderType($event.detail.value)">
                    <ion-select-option value="Buy">BUY</ion-select-option>
                    <ion-select-option value="Sell">SELL</ion-select-option>
                </ion-select>
                </ion-item>
            </ion-list>
        </div>
        <!-- Options -->

        <div style="margin: 0px;display: flex;flex-direction: row;align-items: center;justify-content: space-around;background: none;">
            <ion-card style="box-shadow: none;background: none;z-index: 888;margin: 0px;width: 40%;position: relative;bottom: 8%;">
                <ion-card-title color="primary" style="font-size: 200%;font-weight: bold;text-transform: uppercase;">{{ orderType }}</ion-card-title>
                <ion-card-subtitle style="margin-top: 1%;margin-left:2%;font-size: 100%;">
                    {{pair}}
                </ion-card-subtitle>
            </ion-card>
            
            <div style="max-width: 100%;height: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                <!-- <ion-icon class="arrow" color="primary" :icon="ioniconsArrowUpCircleSharp" style="font-size: 250%;transform: rotate(45deg);"/> -->
                <ion-avatar slot="start" style="scale:1.3;border: 3px solid #1B1D30;">
                  <img alt="asset img" :src="baseImgUrl" v-if="baseImgUrl"/>
                </ion-avatar>
                <ion-avatar slot="start" style="scale:1.3;position: relative;right:5%;border: 3px solid #1B1D30;">
                  <img alt="asset img" :src="quoteImgUrl" v-if="quoteImgUrl"/>
                </ion-avatar>
            </div>

        </div>

        <!-- Quote Price -->
        <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-around;height: 9%;width: 100%;border:1px solid black ;border-radius: 25px;padding:4%;border: 1px solid white;margin-top: 7%;">
                <ion-label style="font-size: 120%;color: black;">Quote Price</ion-label>
                <ion-input label="" type="number" placeholder="000" style="width: 50%;background: #43455838;font-size: 150%;border-radius: 12px;color: black;border: 1px solid whitesmoke;"></ion-input>
                <ion-label style="font-size: 100%;color: black;">{{ quote }}</ion-label>
        </div>
        <!-- Quote Price -->


        <!-- card -->
        <ion-card style="margin: 0px;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 30%;margin-top: 2%;background:#1d3160;box-shadow: none;padding-top: 3%;padding-bottom: 3%;">
            <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-around;height: 30%;width: 90%;border:1px solid black ;border-radius: 25px;padding:4%;background: #1d3160;border: 1px solid white;">
                <ion-label style="font-size: 150%;color: whitesmoke;">You Send</ion-label>
                <ion-input label="" type="number" placeholder="000" style="width: 50%;background: #43455838;font-size: 150%;border-radius: 12px;color: whitesmoke;border: 1px solid whitesmoke;"></ion-input>
                <ion-label style="font-size: 120%;color: whitesmoke;">{{ orderType == 'Buy' ? quote : base }}</ion-label>
            </div>
            
            <div style="display: flex;flex-direction: row;align-items: center;justify-content: center;width: 90%;">
                <ion-icon color="secondary" :icon="ioniconsSwapVerticalSharp" style="font-size: 300%;border-radius: 25px;z-index: 99;padding: 3%;margin-left: 15%;"/>
                <ion-label style="font-size: 100%;color: whitesmoke;position: relative;left: 10%;">fee : 0.5%</ion-label>
            </div>
            <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-around;height: 30%;width: 90%;border:1px solid black ;border-radius: 25px;padding:4%;background:goldenrod;border: 1px solid goldenrod;">
                <ion-label style="font-size: 150%;color: black;">You Get</ion-label>
                <ion-input label="" :readonly="true" type="number" placeholder="00" style="width: 50%;background: #43455838;font-size: 150%;border-radius: 12px;color: black;border: 1px solid whitesmoke;"></ion-input>
                <ion-label style="font-size: 120%;color: black;">{{ orderType == 'Buy' ? base : quote }}</ion-label>
            </div>

        </ion-card>

        <!-- card -->

        <!-- submit -->
        <div style="display: flex;flex-direction: row;align-items: center;justify-content: center;margin-top: 8%;">
            <ion-button fill="outline" style="width:80%;height:50px;font-size: 130%;" @click="$emit('closeModal')">Confirm</ion-button>
        </div>
        <!-- submit -->

      </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">


const props = defineProps<{
    isNewOrderModalOpen:boolean
}>()

// async function canDismiss(data?: any, role?: string) {
//     return role !== 'gesture';
//   }

type order = {
    name:string,
    base:string,
    quote:string,
    quoteImgUrl:string,
    baseImgUrl:string
}

const baseImgUrl = ref<string>('')
const quoteImgUrl = ref<string>('')
const base = ref<string>('')
const quote = ref<string>('')
const pair = ref<string>('')
const orderType = ref<string>('Buy')

const setOrder = (newOrder:order)=>{
    baseImgUrl.value = newOrder.baseImgUrl
    quoteImgUrl.value = newOrder.quoteImgUrl
    base.value = newOrder.base
    quote.value = newOrder.quote
    pair.value = newOrder.name
}

const setOrderType = (type:string)=>{
    orderType.value = type
}

const pairs:order[] = [
    {
        name:'Bitcoin/Naira',
        base:'BTC',
        quote:'NGN',
        baseImgUrl:'/BTC.svg',
        quoteImgUrl:'/nigeria.svg'
    },
    {
        name:'Bitcoin/Cedis',
        base:'BTC',
        quote:'GHS',
        baseImgUrl:'/BTC.svg',
        quoteImgUrl:'/ghana.svg'
    },
    {
        name:'Etheruem/Naira',
        base:'ETH',
        quote:'NGN',
        baseImgUrl:'/ETH.svg',
        quoteImgUrl:'/nigeria.svg'
    },
    {
        name:'Etheruem/Cedis',
        base:'ETH',
        quote:'GHS',
        baseImgUrl:'/ETH.svg',
        quoteImgUrl:'/ghana.svg'
    }
    
]
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