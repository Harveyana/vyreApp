<template>
    <ion-page style="">

        <ion-header class="ion-no-border header">
            
            
            <ion-toolbar class="toolbar">

                <myHeader/>

                <ion-card class="figureBox" :button="true" style="box-shadow: none;">
                    <ion-card-header>
                        <ion-label color="primary" style="font-size: 115%;">Total balance </ion-label>

                        <div class="figureCard" style="">
                            <ion-card-title color="primary"><strong  style="font-size: 90%;" class="">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
                            <ion-icon color="primary" size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                        </div>
                    </ion-card-header>
                </ion-card>
                

                    
                <!-- header actions -->
                <ion-card class="flex-column-center-space-around headerActions">
                    <ion-card class="headerAction" :button="true" style="background: goldenrod;z-index: 999;">
                        <ion-card-header>
                            <div class="figureCard">
                                <ion-card-title color="primary" style="font-size: 120%;">Recent</ion-card-title>
                                <ion-icon color="primary" size="large" :icon="ioniconsChevronUpOutline" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                            </div>
                        </ion-card-header>
                    </ion-card>

                    <ion-card class="headerAction" :button="true" style="background: #1d3160;border: 3px solid #1d3160;z-index: 999;">
                        <ion-card-header>
                            <div class="figureCard">
                                <ion-card-title color="secondary" style="font-size: 120%;">Assets</ion-card-title>
                                <ion-icon color="secondary" size="large" :icon="ioniconsWalletSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                            </div>
                        </ion-card-header>
                    </ion-card>
                </ion-card>
                    
                    
                    

            </ion-toolbar>
            
        </ion-header>

        <ion-content>
            <div class="flex-row-center-center" style="border: 1px solid black;">
                <ion-card class="flex-row-center-center" style="height:80%;width:70%;margin:0px">
                    <img alt="advert" src="/rocket.png" style="width: 70%;height: 100%;"/>
                </ion-card>
            </div>

            <ion-card class="recentBoxHeader">
                <ion-card-header>
                    <div class="flex-column-center-space-between" >
                        <ion-label color="primary" style="font-size: 150%;font-weight: bold;">Recents</ion-label>
                        <ion-button style="height: 40px;--background:primary;--color:secondary;">See All</ion-button>
                    </div>                                 
                </ion-card-header>
            </ion-card>
                                
            <ion-card class="recents">
                                        
                <ion-chip class="recent" id="action1" v-for="action in actions" key="action.name" style="">
                    <ion-avatar style="--border-radius: 8px;min-width: 10%;height: fit-content;">
                        <img alt="coin" :src="action.img" style="scale: 1.4;"/>
                    </ion-avatar>
                    <div class="flex-column-start-center" style="width: 100%;position: relative;left: 2%;">
                        <ion-label color="primary" style="font-size: 90%;margin-bottom: 7px;font-weight: bold;">{{action.name}} </ion-label>
                        <ion-label color="primary" style="font-size: 65%;">payment for goods</ion-label>
                    </div>
                    <div class="flex-column-end-center" style="margin-left: 5%;width: 35%;">
                        <ion-label color="primary" style="font-size: 90%;margin-bottom: 7px;font-weight: bold;">- 600.5</ion-label>
                        <ion-label color="primary" style="font-size: 65%;">Aug 7</ion-label>
                    </div>
                                            
                </ion-chip>
            </ion-card>
            
        </ion-content>
        

        

        <ion-footer class="ion-no-border flex-column-center-center" style="margin-bottom: 5%;">

            <tabs style="width: 90%;border-radius: 20px;"/>
                            
        </ion-footer>
        

        <!-- modals  -->

        <AddAsset :ismodal-open="isAddAssetsModalOpen" @closeModal="setAddAssetOpen(false)" />
        <AllAssets :is-all-assetmodal-open="isAllAssetsModalOpen" @closeModal="setAllAssetsOpen(false)" />
        <Assetpage :is-asset-page-open="isAssetsPageOpen" @closeModal="setAssetPageOpen(false)" />

    
    </ion-page>
</template>
<script setup lang="ts">


const switchAssets = ref<string>('crypto')
const hideTotal = ref<boolean>(false)
const isAddAssetsModalOpen = ref<boolean>(false)
const isAllAssetsModalOpen = ref<boolean>(false)
const isAssetsPageOpen = ref<boolean>(false)

const ishome = ref<boolean>(false)
const isP2p = ref<boolean>(false)

const setAssetPageOpen = (isOpen:boolean)=> {
    isAssetsPageOpen.value = isOpen;
}

const setAddAssetOpen = (isOpen:boolean)=> {
    isAddAssetsModalOpen.value = isOpen;
}

const setAllAssetsOpen = (isOpen:boolean)=> {
    isAllAssetsModalOpen.value = isOpen;
}    



const actions:{name:string,id:string,img:string}[]=[
    {
        name:'Receive',
        img:'/BTC.SVG',
        id:'action1'
    },
    {
        name:'Transfer',
        img:'/ETH.svg',
        id:'action1'
    },
    {
        name:'Receive',
        img:'XRP.svg',
        id:'action1'
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
    }
]
</script>
<style scoped>
.header{
    /* max-height: 33%; */
    min-height: 30%;
}
.toolbar{
    min-height: 100%;
    /* max-height: 100%; */
}
.recentBoxHeader{
    width: 100%;
    background: none;
    box-shadow: none;
    margin: 0px;
    margin-bottom: -4%;
    margin-top: -4%;
}
.recent{
    box-shadow:10px whitesmoke;
    border-radius: 12px;
    padding: 8%;
    background:rgba(0, 0, 0, 0.039);
}
.flex-column-center-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.recents{
    width: 100%;
    margin: 0px;
    /* height:80%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: none;
    box-shadow: none;
}
#action1{
    width:88%;
}

/* .cardActions{
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
/* } */

.flex-column-center-space-around{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.flex-column-center-space-between{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.flex-column-start-center{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap:nowrap;
    justify-content: center
}

.flex-column-end-center{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap:nowrap;
    justify-content: center
}

.flex-row-center-center{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

ion-toolbar,ion-footer{
    background: primary;
}

.figureBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    min-height: 100%;
    max-height: 100%;
    border-radius: 52px;
    margin: 0px;
    background: none;
}

.headerActions{
    width: 100%;
    height: 5%;
    margin: 0px;
    background:none;
    box-shadow: none;
    z-index: 999;
}
.headerAction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 80%;
    width: 40%;
    /* min-height: 100%;
    max-height: 100%; */
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 52px;
    border: 1px solid #1d3160;
    box-shadow: none;
    margin: 0px;
}
.figureCard{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0px;
    /* margin-bottom: 5%; */
}

/* .notificationBox{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width:25%;
    border-radius: 12px;
    margin-right:-1%;
} */

</style>
