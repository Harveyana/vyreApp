<template>
    <ion-page style="">

    <ion-header class="ion-no-border" style="max-height: 60%;min-height: 60%;">
        
        
        <ion-toolbar style="min-height: 100%;max-height: 100%;">

            <myHeader/>

                <ion-card class="figureBox" :button="true" style="box-shadow: none;">
                                <ion-card-header>
                                    <!-- <ion-card-subtitle style="color: green;">+1.12 %</ion-card-subtitle>  -->
                                    <ion-label color="primary" style="font-size: 115%;">Total balance </ion-label>

                                    <div class="figureCard" style="">
                                    <ion-card-title color="primary"><strong  style="font-size: 90%;">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
                                    <ion-icon color="primary" size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                                    </div>
                                </ion-card-header>
                </ion-card>
            

                   
            <!-- header actions -->
                <ion-card style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;width: 100%;height: 5%;margin: 0px;background:none;box-shadow: none;">
                    <ion-card class="footerActions" :button="true" style="background: goldenrod;">
                                        <ion-card-header>
                                            <div class="figureCard" style="">
                                            <ion-card-title color="primary" style="font-size: 120%;">Recent</ion-card-title>
                                            <ion-icon color="primary" size="large" :icon="ioniconsChevronUpOutline" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                                            </div>
                                        </ion-card-header>
                    </ion-card>
                    <ion-card class="footerActions" :button="true" style="background: #1d3160;border: 3px solid #1d3160;">
                                        <ion-card-header>
                                            <div class="figureCard" style="">
                                            <ion-card-title color="secondary" style="font-size: 120%;">Assets</ion-card-title>
                                            <ion-icon color="secondary" size="large" :icon="ioniconsWalletSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                                            </div>
                                        </ion-card-header>
                    </ion-card>
                </ion-card>
                
                
                <ion-card style="margin: 0px;height: 8%;width: 100%;background: none;">
                        <ion-card style="background: none;border: 1px solid;">
                            <img alt="Silhouette of mountains" src="/illustration(2).svg" style="max-height:150px;"/>
                        </ion-card>
                </ion-card>

        </ion-toolbar>
    </ion-header>

    <ion-content>
                            <ion-card class="" style="width: 100%;background: none;box-shadow: none;margin: 0px;margin-bottom: -4%;margin-top: -4%;">
                                <ion-card-header>
                                    <div style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
                                        <ion-label color="primary" style="font-size: 150%;font-weight: bold;">Recents</ion-label>
                                        <ion-button style="height: 40px;--background:primary;--color:secondary;">See All</ion-button>
                                    </div>
                                    
                                </ion-card-header>
                            </ion-card>
                            
                            <ion-card class="actions" style="" >
                                
                                <ion-chip class="action" :id="action.id" v-for="action in actions" key="action.name" style="box-shadow:10px whitesmoke;border-radius: 12px;height: 15%;padding: 8%;">
                                    <ion-avatar style="--border-radius: 8px;min-width: 10%;">
                                    <img alt="Silhouette of a person's head" :src="action.img" style="scale: 1.4;"/>
                                    </ion-avatar>
                                    <div style="display: flex;flex-direction: column;align-items: start;flex-wrap:nowrap;justify-content: center;width: 100%;position: relative;left: 2%;">
                                        <ion-label color="primary" style="font-size: 90%;margin-bottom: 7px;font-weight: bold;">{{action.name}} </ion-label>
                                        <ion-label color="primary" style="font-size: 65%;">payment for goods</ion-label>
                                    </div>
                                    <div style="display: flex;flex-direction: column;align-items: end;flex-wrap:no-wrap;justify-content: center;margin-left: 5%;width: 30%;">
                                        <ion-label color="primary" style="font-size: 90%;margin-bottom: 7px;font-weight: bold;">- 600.5</ion-label>
                                        <ion-label color="primary" style="font-size: 65%;">Aug 7</ion-label>
                                    </div>
                                    
                                </ion-chip>
                            </ion-card>
    </ion-content>
    

    

    <ion-footer class="ion-no-border" style="display: flex;flex-direction: column;align-items: center;margin-bottom: 5%;">

                <tabs style="width: 90%;border-radius: 20px;"/>
                          
    </ion-footer>
    

    <!-- modal  -->

    <AddAsset :ismodal-open="isAddAssetsModalOpen" @closeModal="setAddAssetOpen(false)" />
    <AllAssets :is-all-assetmodal-open="isAllAssetsModalOpen" @closeModal="setAllAssetsOpen(false)" />
    <!-- <P2p :is-all-assetmodal-open="isP2POpen" @closeModal="setP2POpen(false)" /> -->
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

// const setP2POpen = (isOpen:boolean)=> {
//     isP2POpen.value = isOpen;
// }

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
.actions{
    width: 100%;
    margin: 0px;
    height:80%;
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
#action2{
    width:65%;
}
#action3{
    width:55%;
}
#action1 ion-label,#action2 ion-label,#action3 ion-label {
    font-size: 155%;
    margin-left: 7%;
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

/* .Actions{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */

/* .carder{
    background: tertiary;
} */

ion-toolbar,ion-footer{
    /* --ion-toolbar-background: url('~/assets/bg1.jpg') no-repeat fixed center; */
    /* background-size: cover; */
    background: primary;
    /* --background: #1B1D30; */
    /* border-bottom-right-radius:20%; */
    /* border-bottom-left-radius: 20%; */
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
    border-radius: 52px;
    margin: 0px;
    background: none;
}

.footerActions{
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
