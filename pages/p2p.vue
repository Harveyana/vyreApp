<template>
    <ion-page>

    <ion-header class="ion-no-border" >
        <ion-toolbar >
            <MyHeader/>
        </ion-toolbar>
        <ion-toolbar style="">

            <ion-card class="actions" >
                    
                <ion-card :button="true" :class="{'actionSelected': switchSelect === action.name || action.default ,'action':switchSelect !== action.name||!action.default}" v-for="action in actions" key="action.name" @click="switchPage(action.name)">
                    <ion-card-header style="">
                        <div style="display:flex;flex-direction: row;justify-content: center;align-items: center;width: 100%;">
                            <ion-card-title :color=" switchSelect === action.name || action.default ? 'primary':'secondary'"><bold  style="font-size: 60%;">{{ action.name }}</bold></ion-card-title>
                        </div>
                        <ion-icon :color="switchSelect === action.name || action.default ? 'primary':'secondary'" size="large" :icon="action.icon" style=""></ion-icon>
                    </ion-card-header>
                </ion-card>
                    
            </ion-card>
        </ion-toolbar>
        <ion-card class="flex-row-center-center searchbox" style="">
    
            <ion-searchbar :search-icon="ioniconsSearchCircle" placeholder="search" style="--icon-colour:#1d3160;margin: 0px;width: 80%;"></ion-searchbar>
            <ion-icon :icon="ioniconsFilterCircle" style="font-size: 250%;color: #1d3160;" @click=""></ion-icon>

        </ion-card>
    </ion-header>
    

    <!-- modal  -->

    <AddAsset :is-crypto="switchTab" :ismodal-open="ismodalOpen" @closeModal="setOpen(false)" />

    <ion-content style="">

        <ion-card class="orderList" style="">
            <ion-list v-for="(order, index) in orders" :key="index"  >
            <order :base="order.base" :baseImgUrl="order.baseImgUrl" :quote="order.quote" :quote-img-url="order.quoteImgUrl" :order-type="order.orderType" :process-percentage="order.processPercentage" :quantity="order.quantity" @click="setOpenOrderDetails(true)"/>
            </ion-list>
        </ion-card>

    </ion-content>

    <!-- <tabs/> -->
    <ion-footer class="ion-no-border flex-column-center-center" style="margin-bottom: 5%;">
      <Tabs style="width: 90%;border-radius: 20px;"/>
    </ion-footer>

    <OrderDetails :isOrderDetailsModalOpen="isOrderDetailsModalOpen"  @closeModal="setOpenOrderDetails(false)"/>
    <NewOrder :isNewOrderModalOpen="isNewOrderModalOpen"  @closeModal="setOpenNewOrder(false)"/>
    </ion-page>
</template>
<script setup lang="ts">


const isOrderDetailsModalOpen = ref<boolean>(false)

const isNewOrderModalOpen = ref<boolean>(false)

const setOpenOrderDetails = (isOpen:boolean)=> {
    isOrderDetailsModalOpen.value = isOpen;
}
const setOpenNewOrder = (isOpen:boolean)=> {
    isNewOrderModalOpen.value = isOpen;
}


const route = useRoute()


const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()
const switchTab = ref<string>('Orders')

const switchSelect = ref<string>('home')

const ismodalOpen = ref<boolean>(false)

const setOpen = (isOpen:boolean)=> {
       ismodalOpen.value = isOpen;
    }
const switchPage = (tab:string)=>{
    console.log(tab)
    switchSelect.value = tab

    switch (tab) {
    case 'orders':
      setOpenNewOrder(false)
      setOpenOrderDetails(false)
        break;
    case 'add':
      setOpenNewOrder(true)
        
    }
}
// watch(isDarkMode,(newValue, oldValue) => {
//     console.log(newValue)
//    darkMode.switchMode(newValue)
// })

const actions:{name:string,default:boolean,icon:string,link:string}[]=[
    {
        name:'Orders',
        icon:ioniconsHappy,
        link:'action1',
        default:true
    },
    {
        name:'market',
        icon:ioniconsMail,
        link:'action1',
        default:false
    },
    {
        name:'add',
        icon:ioniconsAddOutline,
        link:'action1',
        default:false
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

const orders:{base:string,quote:string,processPercentage:number,orderType:string,baseImgUrl:string,quoteImgUrl:string,quantity:number}[] = [
    {
        base:'BTC',
        quote:'NGN',
        orderType:'BUY',
        quantity:120000,
        processPercentage:60,
        baseImgUrl:'/BTC.svg',
        quoteImgUrl:'/nigeria.svg'
    },
    {
        base:'XRP',
        quote:'USD',
        orderType:'SELL',
        quantity:140000,
        processPercentage:40,
        baseImgUrl:'/BTC.svg',
        quoteImgUrl:'/united states.svg'
    },
    {
        base:'ETH',
        quote:'NGN',
        orderType:'SELL',
        quantity:140000,
        processPercentage:75,
        baseImgUrl:'/ETH.svg',
        quoteImgUrl:'/nigeria.svg'
    },
    {
        base:'XRP',
        quote:'GHS',
        orderType:'BUY',
        quantity:140000,
        processPercentage:80,
        baseImgUrl:'/XRP.svg',
        quoteImgUrl:'/ghana.svg'
    }
]
</script>
<style scoped>
.orderList{
    max-height:100%;
    min-height:100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    box-shadow: none;
    background: none;
    margin-top: 0px;
}
.searchbox{
    box-shadow: none;
    background: none;
    min-height:16%;
    max-height:16%;
    width:100%;
    margin:0px;
}
.flex-row-center-center{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.flex-column-center-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    border-top-right-radius: 60px;
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
    border-bottom-left-radius: 60px;
    margin: 0px;
    background: #daa520;
    color: black;
    border: 1px solid black;
    transition: all ease-in-out 0.8s;
}


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
ion-footer {
    /* background-image: url('~/assets/bg1.jpg') no-repeat fixed center; */
	/* background-size: auto; */
    /* background-image: linear-gradient(70deg, rgba(255,0,0,0), #1B1D30); */
    /* background:linear-gradient(230deg, rgba(255,0,0,0), #1B1D30); */
    width: 100%;
    /* height: 100%; */
    border-top-left-radius: 38px;
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
