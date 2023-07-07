<template>
    <ion-page style="">

    <ion-header class="ion-no-border" style="max-height: 40%;min-height: 40%;">
        
        
        <ion-toolbar class="tooba" style="min-height: 100%;max-height: 100%;">

            <ion-card class="headingCard" style="">
                <ion-chip class="ionchip" color="" style="height: 50px;padding:5%;margin-left:5%;background: none;">
                    <ion-avatar >
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </ion-avatar>
                    <ion-label color="secondary" >Harvey Ana</ion-label>
                </ion-chip>

                <!-- <ion-buttons slot="primary"> -->
                        <ion-button fill="clear" style="--border-radius: 12px;height: 40px;" @click="isDarkMode = !isDarkMode">
                            <ion-icon color="secondary" slot="end" :icon="ioniconsMoon"></ion-icon>
                        </ion-button>
                <!-- </ion-buttons> -->

            </ion-card>

            <ion-label color="secondary" style="margin-top:5px;margin-left: 8%;font-size: 115%;">Welcome Back <ion-icon color="secondary" slot="end" :icon="ioniconsThumbsUp"></ion-icon> </ion-label>
                   
                <ion-toolbar style="margin-bottom: 25%;--background:transparent;">

                    <ion-card class="" style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-between;align-items: center;background:none;min-height: 14%;max-height:14%;position:relative;bottom: -6%;margin-left: 0px;margin-right: 0px;margin-top:5%;">

                            <ion-card class="notificationBox" :button="true" style="">
                                <ion-button size="large" fill="clear"><ion-icon :icon="ioniconsNotifications" color="primary" size="large" style=""/></ion-button>
                            </ion-card>


                            <ion-card class="figureBox" :button="true" style="">
                                <ion-card-header>
                                    <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle> 

                                    <div class="figureCard" style="">
                                    <ion-card-title color="primary"><strong  style="font-size: 80%;">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
                                    <ion-icon color="primary" size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                                    </div>
                                </ion-card-header>
                            </ion-card>
                        
                    </ion-card>


                    

                </ion-toolbar>
            </ion-toolbar>
    </ion-header>

    

    <ion-card style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-around;align-items: center;background:none;min-height:16%;max-height:16%;margin-bottom: -1%;z-index: 99;position: relative;top: -12%;margin-left: 0px;margin-right: 0px;">

        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;height: 80%;width:25%;border-radius: 18px;padding: 3%;margin-right: -2%;">
            <ion-icon color="primary" :icon="ioniconsArrowUpCircleSharp" size="large" style="align-self: flex-start;"/>
            <ion-card-subtitle color="primary" style="margin-top: 17%;margin-left:23%;font-size: 70%;text-transform: lowercase;">Send</ion-card-subtitle>
        </ion-card>

        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;height: 80%;width:25%;border-radius: 18px;padding: 3%;margin-right:-2%;">
            <ion-icon color="primary" :icon="ioniconsArrowDownCircleSharp" size="large" style="align-self: flex-start;"/>
            <!-- <ion-button fill="clear" >Recieve</ion-button> -->
            <ion-card-subtitle color="primary" style="margin-top: 17%;margin-left:15%;font-size: 70%;text-transform: lowercase;">Recieve</ion-card-subtitle>
        </ion-card>

        <ion-card :button="true" style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;height: 80%;width:25%;border-radius: 18px;padding: 3%;box-shadow: 20px;" @click="setP2POpen(true)">
            <ion-icon color="primary" :icon="ioniconsPeopleCircleOutline" size="large" style="align-self: flex-start;"/>
            <ion-card-subtitle color="primary" style="margin-top: 17%;margin-left:15%;font-size: 70%;text-transform: lowercase;">P2P ex</ion-card-subtitle>
        </ion-card>

    </ion-card>



    


    <ion-card style="box-shadow: none;background: none;display: flex;flex-direction: row;justify-content: space-between;align-items: center;min-height:16%;max-height:16%;margin-top:0px;position: relative;top: -12%;">
            
                <!-- <ion-card style="width: 75%;height:90%;display: flex;flex-direction: row;justify-content: center;align-items: flex-end;margin-right:-1%;border-radius: 12px;background: none;box-shadow: none;"> -->
                    <ion-segment :scrollable="true" :value="switchAssets" style="width: 75%;height:30%;z-index: 99;">
                            <ion-segment-button value="crypto" @click="switchAssets = 'crypto'" style="">
                                <ion-label style="font-size: 75%;--color: primary;">crypto</ion-label>
                                <!-- <ion-icon color="primary" :icon="ioniconsLogoBitcoin"></ion-icon> -->
                            </ion-segment-button>

                            <ion-segment-button value="fiat" @click="switchAssets = 'fiat'" style="">
                                <ion-label style="font-size: 75%;--color: primary;">fiat</ion-label>   
                                <!-- <ion-icon color="primary" :icon="ioniconsLogoUsd"></ion-icon> -->
                            </ion-segment-button>
                    </ion-segment>

                <ion-card style="width: 25%;height:60%;border-radius: 12px;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                    <ion-button fill="clear" size="large" @click="setAddAssetOpen(true)"><ion-icon size="large" :icon="ioniconsDuplicate"></ion-icon></ion-button>
                </ion-card>
    </ion-card>
    
    <ion-card style="max-height: 30%;min-height:30%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;margin-top: -7%;border-radius: 12px;box-shadow: none;background: none;position: relative;top: -12%;margin-left: 0px;margin-right: 0px;">
        <ion-list v-for="(crypto, index) in cryptos" :key="index"  v-if="switchAssets == 'crypto'">
            <asset :name="crypto.name" :symbol="crypto.symbol" :price="crypto.price" :amount="crypto.amount" :img="crypto.img" @click="setAssetPageOpen(true)"/>
        </ion-list>

        <ion-list v-for="(fiat, index) in fiats" :key="fiat.symbol" v-else >
            <asset :name="fiat.name" :symbol="fiat.symbol" :price="fiat.price" :amount="fiat.amount" :img="fiat.img"/>
        </ion-list>
    </ion-card>

    <ion-card style="width: 50%;min-height:8%;max-height:8%;border-radius: 12px;display: flex;flex-direction: row;justify-content: center;align-items: center;background: none;box-shadow: none;margin-top: -5%;position: relative;top: -13%;">
        <ion-button fill="clear" size="small" @click="setAllAssetsOpen(true)"><ion-icon slot="end" color="primary" :icon="ioniconsOpen" style="font-size: 200%;"></ion-icon>show all assets</ion-button>
    </ion-card>

    <!-- modal  -->

    <AddAsset :ismodal-open="isAddAssetsModalOpen" @closeModal="setAddAssetOpen(false)" />
    <AllAssets :is-all-assetmodal-open="isAllAssetsModalOpen" @closeModal="setAllAssetsOpen(false)" />
    <P2p :is-all-assetmodal-open="isP2POpen" @closeModal="setP2POpen(false)" />
    <Assetpage :is-asset-page-open="isAssetsPageOpen" @closeModal="setAssetPageOpen(false)" />

    <!-- <tabs/> -->
    </ion-page>
</template>
<script setup lang="ts">

const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()
const switchAssets = ref<string>('crypto')
const hideTotal = ref<boolean>(false)
const isAddAssetsModalOpen = ref<boolean>(false)
const isAllAssetsModalOpen = ref<boolean>(false)
const isAssetsPageOpen = ref<boolean>(false)

const isP2POpen = ref<boolean>(false)

const setP2POpen = (isOpen:boolean)=> {
    isP2POpen.value = isOpen;
}

const setAssetPageOpen = (isOpen:boolean)=> {
    isAssetsPageOpen.value = isOpen;
}

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

/* .carder{
    background: tertiary;
} */

ion-toolbar {
    /* --ion-toolbar-background: url('~/assets/bg1.jpg') no-repeat fixed center; */
    /* background-size: cover; */
    --background: linear-gradient(180deg, #042D64, #1B1D30);
    /* --background: #1B1D30; */
    border-bottom-right-radius:20%;
    border-bottom-left-radius: 20%;
}



.headingCard{
    width:100%;
    margin-left:0px;
    background:none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
    box-shadow: none;
}

.figureBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70%;
    min-height: 100%;
    max-height: 100%;
    border-radius: 12px;
}

.figureCard{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.notificationBox{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width:25%;
    border-radius: 12px;
    margin-right:-1%;
}

</style>
