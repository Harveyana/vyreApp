<template>
    <ion-page>

    <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-chip class="ionchip" color="primary" style="height: 50px;padding:5%;margin-left:5%;margin-top: 3%;">
                <ion-avatar >
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>Harvey Ana</ion-label>
            </ion-chip>
                <ion-buttons slot="primary">
                    <ion-button style="--border-radius: 12px;height: 50px;" @click="isDarkMode = !isDarkMode">
                        <ion-icon color="primary" slot="end" :icon="ioniconsMoon"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
    </ion-header>

    <ion-card class="" style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-between;align-items: center;background:none;min-height: 16%;max-height:16%;margin-bottom: -1%;">

        <ion-card :button="true" class="" style="display: flex;flex-direction: row;justify-content: center;align-items: center;height: 100%;width:24%;border-radius: 12px;margin-right:-1%;">
            <ion-button size="large" fill="clear"><ion-icon :icon="ioniconsSettings" color="primary" size="large" style=""/></ion-button>

            <!-- <ion-card-header>
              <ion-card-subtitle style="color: green;">harvey Ana</ion-card-subtitle> 
            </ion-card-header> -->
        </ion-card>


        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: center;align-items: center;height: 100%;width: 79%;border-radius: 12px;">
            <ion-card-header>
                <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle> 

                <div style="display:flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">
                <ion-card-title color="primary"><strong  style="font-size: 115%;">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
                <ion-icon color="primary" size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                </div>
            </ion-card-header>
        </ion-card>
            
    </ion-card>




    <ion-card style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-between;align-items: center;background:none;min-height:16%;max-height:16%;margin-bottom: -1%;">

        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;height: 100%;width:30%;border-radius: 12px;padding: 3%;margin-right: -2%;">
            <ion-icon color="primary" :icon="ioniconsArrowUpCircleSharp" size="large" style="align-self: flex-start;"/>
            <ion-card-subtitle color="primary" style="margin-top: 17%;margin-left:23%">Send</ion-card-subtitle>
        </ion-card>

        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;height: 100%;width:30%;border-radius: 12px;padding: 3%;margin-right:-2%;">
            <ion-icon color="primary" :icon="ioniconsArrowDownCircleSharp" size="large" style="align-self: flex-start;"/>
            <!-- <ion-button fill="clear" >Recieve</ion-button> -->
            <ion-card-subtitle color="primary" style="margin-top: 17%;margin-left:15%">Recieve</ion-card-subtitle>
        </ion-card>

        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;height: 100%;width:30%;border-radius: 12px;padding: 3%;">
            <ion-icon color="primary" :icon="ioniconsPeopleCircleOutline" size="large" style="align-self: flex-start;"/>
            <ion-card-subtitle color="primary" style="margin-top: 17%;margin-left:15%">P2P ex</ion-card-subtitle>
        </ion-card>

    </ion-card>


    <ion-card style="box-shadow: none;background: none;display: flex;flex-direction: row;justify-content: space-between;align-items: flex-start;min-height:16%;max-height:16%;margin-top:0px;">
            
                <ion-col style="width: 65%;height:90%;display: flex;flex-direction: row;justify-content: center;align-items: flex-end;margin-right:-1%;border-radius: 12px;background: none;box-shadow: none;">
                    <ion-segment :scrollable="true" :value=switchAssets>
                            <ion-segment-button value="home" @click="switchAssets = 'crypto'">
                                <ion-label style="font-size: 75%;">crypto</ion-label>
                                <ion-icon color="primary" :icon="ioniconsLogoBitcoin"></ion-icon>
                            </ion-segment-button>

                            <ion-segment-button value="heart" @click="switchAssets = 'fiat'">
                                <ion-label style="font-size: 75%;">fiat</ion-label>   
                                <ion-icon color="primary" :icon="ioniconsLogoUsd"></ion-icon>
                            </ion-segment-button>
                    </ion-segment>
                </ion-col>

                <ion-card style="width: 30%;height:70%;border-radius: 12px;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                    <ion-button fill="clear" size="large" @click="setAddAssetOpen(true)"><ion-icon size="large" :icon="ioniconsDuplicate"></ion-icon></ion-button>
                </ion-card>
    </ion-card>
    
    <ion-card style="max-height: 30%;min-height:30%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;margin-top: -3%;border-radius: 12px;box-shadow: none;background: none;">
        <ion-list v-for="(crypto, index) in cryptos" :key="index"  v-if="switchAssets == 'crypto'">
            <asset :name="crypto.name" :symbol="crypto.symbol" :price="crypto.price" :amount="crypto.amount" :img="crypto.img"/>
        </ion-list>

        <ion-list v-for="(fiat, index) in fiats" :key="fiat.symbol" v-else >
            <asset :name="fiat.name" :symbol="fiat.symbol" :price="fiat.price" :amount="fiat.amount" :img="fiat.img"/>
        </ion-list>
    </ion-card>

    <ion-card style="width: 50%;min-height:5%;max-height:8%;border-radius: 12px;display: flex;flex-direction: row;justify-content: center;align-items: center;background: none;box-shadow: none;margin-top: -3%;">
        <ion-button fill="clear" size="small" @click="setAllAssetsOpen(true)"><ion-icon slot="end" color="primary" :icon="ioniconsOpen" style="font-size: 200%;"></ion-icon>show all assets</ion-button>
    </ion-card>

    <!-- modal  -->

    <AddAsset :ismodal-open="isAddAssetsModalOpen" @closeModal="setAddAssetOpen(false)" />
    <AllAssets :is-all-assetmodal-open="isAllAssetsModalOpen" @closeModal="setAllAssetsOpen(false)" />


    <!-- <tabs/> -->
    </ion-page>
</template>
<script setup lang="ts">

const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()
const switchAssets = ref<string>('fiat')
const hideTotal = ref<boolean>(false)
const isAddAssetsModalOpen = ref<boolean>(false)
const isAllAssetsModalOpen = ref<boolean>(false)


const setAddAssetOpen = (isOpen:boolean)=> {
    isAddAssetsModalOpen.value = isOpen;
}

const setAllAssetsOpen = (isOpen:boolean)=> {
    isAllAssetsModalOpen.value = isOpen;
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

.carder{
    background: tertiary;
}
</style>
