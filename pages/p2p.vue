<template>
    <ion-page>

    <ion-header class="ion-no-border" >
        <ion-toolbar style="--background: secondary">
                <ion-button fill="clear" style="--border-radius: 10px;" @click="$router.push('/homelast')">
                    <ion-icon slot="end" :icon="ioniconsHome"></ion-icon>
                </ion-button>
                <ion-buttons slot="primary">
                    <ion-button fill="clear" style="--border-radius: 10px;" @click="isDarkMode = !isDarkMode">
                        <ion-icon slot="end" :icon="ioniconsMoon"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-toolbar style="--background: secondary">

                <ion-card :button="true" style="display: flex;flex-direction: row;justify-content: center;align-items: center;height: 100%;width: 91%;border-radius: 12px;margin-bottom: -10%;">
                    <ion-card-header style="">
                        <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle> 

                        <div style="display:flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">
                        <ion-card-title color="primary"><strong  style="font-size: 80%;">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
                        <ion-icon color="primary" size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                        </div>
                    </ion-card-header>
                </ion-card>

                <ion-card style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;height: 20%;width: 100%;border-radius: 12px;margin-left: 0px;box-shadow: none;">
                    
                    <ion-card :button="true" style="display: flex;flex-direction: row;justify-content: center;align-items: center;max-height: 100%;width: 50%;border-radius: 12px;">
                        <ion-card-header style="">
                            <!-- <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle> -->
                            <div style="display:flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">
                            <ion-card-title color="primary"><strong  style="font-size: 50%;">{{ hideTotal ? '***********' : '$2,260'}}</strong></ion-card-title>
                            </div>
                            <ion-label  color="primary" style="font-size: 80%;">Available</ion-label>
                        </ion-card-header>
                    </ion-card>

                    <ion-card :button="true" style="display: flex;flex-direction: row;justify-content: center;align-items: center;height: 100%;width: 50%;border-radius: 12px;">
                        <ion-card-header style="">
                            <!-- <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle>  -->

                            <div style="display:flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">
                            <ion-card-title color="primary"><strong  style="font-size: 50%;">{{ hideTotal ? '***********' : '$1,260,351'}}</strong></ion-card-title>
                            </div>
                            <ion-label  color="primary" style="font-size: 80%;">Processing</ion-label>
                        </ion-card-header>
                    </ion-card>
                </ion-card>
            </ion-toolbar>
    </ion-header>

    <!-- <ion-toolbar style="display: flex;flex-direction: row;justify-content: center;align-items: center;border-radius: 12px;border:1px solid gold"> -->

        <!-- <ion-card class="" style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-between;align-items: center;background:none;min-height: 14%;max-height:14%;margin-bottom: -6%;margin-left: 0px;margin-right: 0px;margin-top:0px;"> -->

                <!-- <ion-card :button="true" class="" style="display: flex;flex-direction: row;justify-content: center;align-items: center;min-height: 100%;width:25%;border-radius: 12px;margin-right:-1%;">
                    <ion-button size="large" fill="clear"><ion-icon :icon="ioniconsSettings" color="primary" size="large" style=""/></ion-button>
                </ion-card> -->


                

                
            
        <!-- </ion-card> -->

    <!-- </ion-toolbar> -->
        
        <!-- <ion-card class="cardActions">

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

        </ion-card> -->

        
    
    

    <!-- modal  -->

    <AddAsset :is-crypto="switchTab" :ismodal-open="ismodalOpen" @closeModal="setOpen(false)" />

    <!-- <tabs/> -->
    <ion-footer class="ion-no-border" style="min-height:65%;background-image: url('/bg1.jpg');border-top-left-radius: 38px;">
    <!-- <ion-toolbar style="box-shadow: none;background: none;display: flex;flex-direction: column;justify-content:center;align-items: center;border: 1px solid gold;"> -->

      <ion-card style="box-shadow: none;background: none;display: flex;flex-direction: row;justify-content:center;align-items: center;min-height:16%;max-height:16%;width:100%;margin-top:0px;margin-left: 0px;">
    
                    <ion-segment :value=switchTab style="width: 80%;">
                            <ion-segment-button value="Orders" @click="switchTab = 'Orders'">
                                <ion-label>Orders</ion-label>
                            </ion-segment-button>

                            <ion-segment-button value="Transactions" @click="switchTab = 'Transactions'">
                                <ion-label>Transactions</ion-label>   
                            </ion-segment-button>
                    </ion-segment>
                    
        </ion-card>

        <ion-card style="max-height:63%;min-height:63%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;margin-top: -7%;box-shadow: none;">
            <ion-list v-for="(crypto, index) in cryptos" :key="index"  v-if="switchTab == 'Orders'">
                <asset :name="crypto.name" :symbol="crypto.symbol" :price="crypto.price" :amount="crypto.amount" :img="crypto.img"/>
            </ion-list>

            <ion-list v-for="(fiat, index) in fiats" :key="fiat.symbol" v-else >
                <asset :name="fiat.name" :symbol="fiat.symbol" :price="fiat.price" :amount="fiat.amount" :img="fiat.img"/>
            </ion-list>
        </ion-card>

    <!-- </ion-toolbar> -->
  </ion-footer>
    </ion-page>
</template>
<script setup lang="ts">

const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()
const switchTab = ref<string>('Orders')
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
