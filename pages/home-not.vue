<template>
    <ion-page>

    <ion-header class="ion-no-border">
        <ion-toolbar>
                <ion-buttons slot="primary">
                    <ion-button fill="solid" style="--border-radius: 10px;" @click="isDarkMode = !isDarkMode">
                        <ion-icon slot="end" :icon="ioniconsMoon"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
    </ion-header>

        <ion-card style="box-shadow:none;display: flex;flex-direction: column;justify-content: center;align-items: center;">
            <ion-card-header>
            <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle> 
            <div style="display:flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">
               <ion-card-title><strong  style="font-size: 150%;">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
               <ion-icon size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
            </div>
            
            
            </ion-card-header>
        </ion-card>
        
        <ion-card class="cardActions">

                <ion-col class="Actions">
                    <ion-button size="large"><ion-icon size="large" :icon="ioniconsArrowUpCircleSharp" ></ion-icon></ion-button>
                    <span style="font-size: x-small;color:white">Send</span>
                </ion-col>
                <ion-col class="Actions">
                    <ion-button size="large"><ion-icon size="large" :icon="ioniconsArrowDownCircleSharp" ></ion-icon></ion-button>
                    <span style="font-size: x-small;color:white">Recieve</span>
                </ion-col>
                <ion-col class="Actions">
                    <ion-button size="large"><ion-icon size="large" :icon="ioniconsWalletSharp" ></ion-icon></ion-button>
                    <span style="font-size: x-small;color:white">Buy</span>
                </ion-col>

        </ion-card>

        <ion-card style="box-shadow: none;">
            <ion-grid>
                <ion-row>
                <ion-col size="8">
                    <ion-segment :scrollable="true" :value=switchAssets>
                            <ion-segment-button value="home" @click="switchAssets = 'crypto'">
                                <ion-label>crypto</ion-label>
                                <ion-icon :icon="ioniconsLogoBitcoin"></ion-icon>
                            </ion-segment-button>

                            <ion-segment-button value="heart" @click="switchAssets = 'fiat'">
                                <ion-label>fiat</ion-label>   
                                <ion-icon :icon="ioniconsLogoUsd"></ion-icon>
                            </ion-segment-button>
                    </ion-segment>
                    <!-- <ion-button size="small" fill="clear" @click="switchAssets = true"><span style="font-size: 110%;">crypto</span></ion-button>
                    <ion-button size="small" fill="clear" @click="switchAssets = false"><span style="font-size: 110%;">fiat</span></ion-button> -->
                </ion-col>
                <ion-col></ion-col>
                <ion-col>
                    <ion-button size="small" @click="setOpen(true)"><ion-icon :icon="ioniconsDuplicate"></ion-icon></ion-button>
                </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card>
    
    <ion-card style="max-height: 40%;min-height:40%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;margin-top: -3%;box-shadow: none;">
        <ion-list v-for="(crypto, index) in cryptos" :key="index"  v-if="switchAssets == 'crypto'">
            <asset :name="crypto.name" :symbol="crypto.symbol" :price="crypto.price" :amount="crypto.amount" :img="crypto.img"/>
        </ion-list>

        <ion-list v-for="(fiat, index) in fiats" :key="fiat.symbol" v-else >
            <asset :name="fiat.name" :symbol="fiat.symbol" :price="fiat.price" :amount="fiat.amount" :img="fiat.img"/>
        </ion-list>
    </ion-card>

    <!-- modal  -->

    <AddAsset :is-crypto="switchAssets" :ismodal-open="ismodalOpen" @closeModal="setOpen(false)" />

    <!-- <tabs/> -->
    </ion-page>
</template>
<script setup lang="ts">

const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()
const switchAssets = ref<string>('fiat')
const hideTotal = ref<boolean>(false)
const ismodalOpen = ref<boolean>(false)

const setOpen = (isOpen:boolean)=> {
       ismodalOpen.value = isOpen;
    }

watch(isDarkMode,(newValue, oldValue) => {
    console.log(newValue)
   darkMode.switchMode(newValue)
})

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
    }
]
</script>
<style scoped>
.card-main{
    margin-bottom: 22%;
    margin-left:-2px;
    margin-right: 3%;
    margin-top: -8px;
    
}
.cardActions{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:83%;
    box-shadow: none;
    border-radius: 12px;
    background: #000000;
    margin-left: 9%;
    padding-top: 5%;
    padding-bottom: 5%;
    /* padding-left: 11%; */
}

.Actions{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
