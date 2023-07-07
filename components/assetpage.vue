<template>
    <ion-modal :is-open="props.isAssetPageOpen">
    <ion-page style="">

    <ion-header class="ion-no-border" style="max-height: 40%;min-height: 40%;">
        
        
        <ion-toolbar class="tooba" style="min-height: 100%;max-height: 100%;">

            <ion-card class="headingCard" style="">
                <ion-button fill="clear" style="--border-radius: 10px;" @click="$emit('closeModal')">
                    <ion-icon slot="end" :icon="ioniconsReturnUpBack" style="font-size: 200%;"></ion-icon>
                </ion-button>

                <!-- <ion-buttons slot="primary"> -->
                        <ion-button fill="clear" style="--border-radius: 12px;height: 40px;" @click="isDarkMode = !isDarkMode">
                            <ion-icon color="secondary" slot="end" :icon="ioniconsMoon"></ion-icon>
                        </ion-button>
                <!-- </ion-buttons> -->

            </ion-card>

                   
                <ion-toolbar style="--background:none;border:1px solid black,display: flex;flex-direction: column;justify-content: center;height:20%;align-items: center;">

                    <ion-card class="" style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-between;align-items: center;background:none;min-height: 45%;max-height:45%;margin: 0px;">

                            <ion-card class="notificationBox" style="">
                                <ion-avatar style="scale:1.6;border: 3px solid #1B1D30;">
                                    <img alt="asset img" src="/BTC.svg"/>
                                </ion-avatar>
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


                    <ion-card style="box-shadow:none;display: flex;flex-direction: row;justify-content: space-around;align-items: center;background:none;min-height:50%;max-height:50%;z-index: 99;margin: 0px;padding:0px;position:relative;top:-19px;">

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

                </ion-toolbar>

                

            </ion-toolbar>
    </ion-header>

    

    <ion-card style="box-shadow: none;background: none;position: relative;top:3%;">
        <ion-label color="primary" style="font-size: 185%;font-weight: bold;">Transactions</ion-label>
    </ion-card>

    
    <footer class="ion-no-border" style="height:50%;border-top-left-radius: 38px;padding:2%;">
   
        <ion-card style="max-height: 100%;min-height:100%;overflow-y: scroll;scroll-behavior: smooth;padding-bottom: 3%;border-radius: 24px;box-shadow: none;--background: linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6);;position: relative;top: -1%;margin-left: 0px;margin-right: 0px;margin-top: 0px;">
            <ion-list v-for="(transaction, index) in transactions" :key="index"  v-if="switchAssets == 'crypto'">
                <Transaction :transaction-type="transaction.transactionType" :amount="transaction.amount" :time="transaction.time" :reciepient="transaction.reciepient"/>
            </ion-list>
        </ion-card>


    </footer>
    <!-- modal  -->

    <AddAsset :ismodal-open="isAddAssetsModalOpen" @closeModal="setAddAssetOpen(false)" />
    <AllAssets :is-all-assetmodal-open="isAllAssetsModalOpen" @closeModal="setAllAssetsOpen(false)" />
    <P2p :is-all-assetmodal-open="isP2POpen" @closeModal="setP2POpen(false)" />

    <!-- <tabs/> -->
    </ion-page>
    </ion-modal>
</template>
<script setup lang="ts">

const props = defineProps<{
    isAssetPageOpen:boolean
}>()

const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()
const switchAssets = ref<string>('crypto')
const hideTotal = ref<boolean>(false)
const isAddAssetsModalOpen = ref<boolean>(false)
const isAllAssetsModalOpen = ref<boolean>(false)
const isP2POpen = ref<boolean>(false)

const setP2POpen = (isOpen:boolean)=> {
    isP2POpen.value = isOpen;
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

const transactions:{transactionType:string,amount:number,time:string,reciepient:(string)}[]=[
    {
        transactionType:'recieved',
        amount:0.03,
        time:'2 july 2023 11:30',
        reciepient:'you'
    },
    {
        transactionType:'sent',
        amount:0.01,
        time:'7 july 2023 9:30',
        reciepient:'Anayo Obi'
    },
    {
        transactionType:'sent',
        amount:0.01,
        time:'7 july 2023 9:30',
        reciepient:'Harvey Ana'
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
    max-height: 100%;
    width:25%;
    padding: 3%;
    border-radius: 25px;
    margin-right:-1%;
}

</style>
