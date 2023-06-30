<template>
    <ion-modal :is-open="props.isAllAssetmodalOpen">
      <ion-header>
        <ion-toolbar style="--background: secondary">
      <ion-segment :value=switchAssets style="">

        <ion-segment-button value="fiat" @click="switchAssets = 'fiat'">
          <ion-label style="color: whitesmoke;">Fiat</ion-label>
        </ion-segment-button>

        <ion-segment-button value="crypto" @click="switchAssets = 'crypto'">
          <ion-label style="color: whitesmoke;">Crypto</ion-label>
        </ion-segment-button>

      </ion-segment>
    </ion-toolbar>
        <ion-toolbar style="--background: secondary">
          <ion-buttons slot="start">
            <ion-button @click="$emit('closeModal')"><ion-icon slot="start" color="primary" :icon="ioniconsReturnUpBack" style="font-size: 200%;"></ion-icon>Back</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding content" style="">

        

        <!-- <ion-card style="box-shadow: none;">
            <img alt="coin" :src="switchAssets == 'crypto' ? '/coin_top.svg':'/compass_top.svg'" style="width:40%;"/>
            <ion-card-header>
            <ion-card-title style="font-size:200%;">Add asset wallet</ion-card-title>
            </ion-card-header>

            <ion-card-content>Become truly borderless,ablilty to bank with multiple currencies.</ion-card-content>
        </ion-card> -->

        <!-- <ion-card style="max-height: 50%;min-height:50%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;box-shadow: none;"> -->
            <ion-list v-for="(crypto, index) in cryptos" :key="index"  v-if="switchAssets == 'crypto'" style="background: none;">
                <mainAsset :name="crypto.name" :symbol="crypto.symbol" :price="crypto.price" :amount="crypto.amount" :img="crypto.img"/>
            </ion-list>

            <ion-list v-for="(fiat, index) in fiats" :key="fiat.symbol" style="background: none;" v-else >
                <mainAsset :name="fiat.name" :symbol="fiat.symbol" :price="fiat.price" :amount="fiat.amount" :img="fiat.img"/>
            </ion-list>
        <!-- </ion-card> -->

      </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">

const props = defineProps<{
    isAllAssetmodalOpen:boolean
}>()

const switchAssets = ref<string>('fiat')

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
 ion-content {
    /* --background: url('~/assets/bg1.jpg') no-repeat fixed center; */
    --background: linear-gradient(45deg, rgba(255,0,0,0), #1B1D30);
	/* background-size: auto; */
 }
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