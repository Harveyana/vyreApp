<template>
    <!-- <ion-modal :is-open="props.isAssetPageOpen"> -->
    <ion-page style="">

    <ion-header class="ion-no-border" style="">
        
        
        <ion-toolbar class="tooba" style="">

            <myHeader :show-back-button="true"/>

            <div class="topheader" style="">
                <div class="imageBox" :button="true" style="box-shadow: none;">

                    <ion-avatar slot="start" style="scale:1.5;border: 3px solid #1B1D30;">
                        <img alt="asset img" src="/nigeria.svg"/>
                    </ion-avatar>

                </div>
                <ion-card class="figureBox" :button="true" style="box-shadow: none;">
                    <ion-card-header>
                        <ion-label color="primary" style="font-size: 115%;">Balance </ion-label>

                        <div class="figureCard" style="">
                            <ion-card-title color="primary"><strong  style="font-size: 90%;" class="">{{ hideTotal ? '***********' : '$2,260,351.77'}}</strong></ion-card-title>
                            <ion-icon color="primary" size="large" :icon="ioniconsEyeOffSharp" style="margin-left:10px;" @click="hideTotal = !hideTotal"></ion-icon>
                        </div>
                    </ion-card-header>
                </ion-card>
            </div>
                
            <ion-card class="actions" style="margin:0px;margin-top: 2%;">
                    
                <ion-card :button="true" :class="{'actionSelected': switchSelect === action.name ,'action':switchSelect !== action.name}" v-for="action in actionLinks" :key="action.name" @click="switchPage(action.name)">
                    <ion-card-header style="">
                        <div style="display:flex;flex-direction: row;justify-content: center;align-items: center;width: 100%;">
                            <ion-card-title :color=" switchSelect === action.name ? 'primary':'secondary'"><bold  style="font-size: 50%;">{{ action.name }}</bold></ion-card-title>
                        </div>
                        <ion-icon :color="switchSelect === action.name ? 'primary':'secondary'" size="large" :icon="action.icon" style=""></ion-icon>
                    </ion-card-header>
                </ion-card>
                    
            </ion-card>
            
        </ion-toolbar>
    </ion-header>

    

    <ion-content >
        <ion-card class="recentHeaderBox" style="">
            <ion-card-header>
                <div class="flex-row-center-space-between">
                    <ion-label color="primary" style="font-size: 150%;font-weight: bold;">Recents</ion-label>
                    <ion-button style="height: 40px;--background:primary;--color:secondary;">See All</ion-button>
                </div>
            </ion-card-header>
        </ion-card>
                            
        <ion-card class="recents">
                                
            <ion-chip class="recent" :id="action.id" v-for="action in recents" :key="action.name" style="">
                <ion-avatar style="--border-radius: 8px;min-width: 10%;">
                    <img alt="coin" :src="action.img" style="scale: 1.4;"/>
                </ion-avatar>
                <div class="flex-column-start-center" style="width: 100%;position: relative;left: 2%;">
                    <ion-label color="primary" style="font-size: 90%;margin-bottom: 7px;font-weight: bold;">{{action.name}} </ion-label>
                    <ion-label color="primary" style="font-size: 65%;">payment for goods</ion-label>
                </div>
                <div class="flex-column-end-center" style="margin-left: 5%;width: 30%;">
                    <ion-label color="primary" style="font-size: 90%;margin-bottom: 7px;font-weight: bold;">- 600.5</ion-label>
                    <ion-label color="primary" style="font-size: 65%;">Aug 7</ion-label>
                </div>
                                    
            </ion-chip>
        </ion-card>
    </ion-content>
    
    <ion-footer class="ion-no-border flex-column-center-center" style="margin-bottom: 5%;">
      <Tabs style="width: 90%;border-radius: 20px;"/>
    </ion-footer>
    <!-- modal  -->

    <Transfer :isTransferModalOpen="isTransferModalOpen"  @closeModal="setTransferModal(false)"/>
    <Receive :isReceiveModalOpen="isReceiveModalOpen"  @closeModal="setReceiveModal(false)"/>
    <!-- <tabs/> -->
    </ion-page>
    <!-- </ion-modal> -->
</template>
<script setup lang="ts">

const ionRouter = useIonRouter();
const route = useRoute()
const assetImage = ref<string>('')

const hideTotal = ref<boolean>(false)


const isTransferModalOpen = ref<boolean>(false)

const isReceiveModalOpen = ref<boolean>(false)

const setTransferModal = (isOpen:boolean)=> {
    isTransferModalOpen.value = isOpen;
}
const setReceiveModal = (isOpen:boolean)=> {
    isReceiveModalOpen.value = isOpen;
}

const switchSelect = ref<string>('')

const switchPage = (tab:string)=>{
    switchSelect.value = tab

    switch (tab) {
    case 'Transfer':
    setTransferModal(true)
        break;
    case 'Receive':
    setReceiveModal(true)
    }
}

// onMounted(() => {
//     assetImage.value = route.params.assetId
// })

const recents:{name:string,id:string,img:string}[]=[
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

const actionLinks:{name:string,icon:string,link:string}[]=[
    {
        name:'Transfer',
        icon:ioniconsHappy,
        link:'action1'
    },
    {
        name:'Receive',
        icon:ioniconsMail,
        link:'action1'
    },
    {
        name:'Extra',
        icon:ioniconsAddOutline,
        link:'action1'
    },
    // {
    //     name:'Order',
    //     icon:ioniconsExitSharp,
    //     link:'action1'
    // }
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

.flex-column-center-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
.recent{
    box-shadow:10px whitesmoke;
    border-radius: 12px;
    padding: 8%;
    background:rgba(0, 0, 0, 0.039);
    width: 90%;
}
.flex-row-center-space-between{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.recentHeaderBox{
    width: 100%;
    background: none;
    box-shadow: none;
    margin: 0px;
    margin-bottom: -4%;
    margin-top: -4%;
}
.topheader{
    display:flex;
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
    --background: none;
}

.actions{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    border-radius: 12px;
    margin-left: 0px;
    box-shadow: none;
    background: none;
}

.action{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 30%;
    border-radius: 24px;
    border-bottom-right-radius: 60px;
    margin: 0px;
    background: #1d3160;
    border: 1px solid black;
    transition: all ease-in-out 0.8s;
}

.actionSelected{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 30%;
    border-radius: 24px;
    border-top-right-radius: 60px;
    margin: 0px;
    background: #daa520;
    color: black;
    border: 1px solid black;
    transition: all ease-in-out 0.8s;
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

.imageBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    min-height: 100%;
    max-height: 100%;
    border-radius: 52px;
    margin: 7%;
    background: none;
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
    max-height: 100%;
    width:25%;
    padding: 3%;
    border-radius: 25px;
    margin-right:-1%;
}

</style>
