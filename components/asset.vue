<template>
    <ion-card class="asset" style="">

        <ion-card class="subAsset" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width:100%;border-radius: 12px;padding-left: 5%;padding-right: 5%;box-shadow: none;margin:0px;background:none;">
            <div style="max-width: 100%;height: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;z-index: 99;">
                <!-- <ion-icon class="arrow" color="primary" :icon="ioniconsArrowUpCircleSharp" style="font-size: 250%;transform: rotate(45deg);"/> -->
                <ion-avatar slot="start" style="scale:0.8;border: 3px solid #1B1D30;">
                  <img alt="asset img" :src="props.img"/>
                </ion-avatar>
            </div>

            <div style="display: flex;flex-direction: column;justify-content: space-between;align-items: flex-start;max-width:40%;height:100%;position: relative;right: 24%;">
                <ion-card-title class="title" style="font-size:100%;">{{props.symbol}}</ion-card-title>
                <ion-card-subtitle class="title" style="font-size: 50%; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ props.name}}</ion-card-subtitle>
                <ion-card-title class="title" style="font-size:80%;">{{props.amount}} <span style="font-size:60%;">{{props.symbol}}</span></ion-card-title>
            </div>
            
            <div style="max-width: 100%;height: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                <!-- <ion-icon class="arrow" color="primary" :icon="ioniconsArrowUpCircleSharp" style="font-size: 250%;transform: rotate(45deg);"/> -->
                <ion-icon :icon="ioniconsArrowForwardCircle" style="font-size: 250%;color: #1d3160;" @click=""></ion-icon>
            </div>
            
        </ion-card>

        <!-- <ion-card class="subAsset" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width:100%;border-radius: 12px;padding-left: 5%;padding-right: 5%;box-shadow: none;margin: 0px;background: transparent;margin-top:1%;">
            <ion-card-title class="title" style="font-size:100%;">{{props.quantity}} <span style="font-size:70%;">{{props.quote}}</span></ion-card-title>
        </ion-card> -->

    </ion-card>

</template>
<script setup lang="ts">
const props = defineProps<{
    name:string
    symbol:string
    price:number
    amount:number
    img:string
}>()
</script>
<style scoped>
.asset{
    /* box-shadow:none; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: none;
    width: 100%;
    /* min-height:10%; */
    border-radius: 18px;
    /* border:0.5px solid #1B1D30; */
    background:none;
    padding: 2%;
    margin-left: 0px;
    box-shadow: none;
    margin: 0px;
    /* margin-bottom: %; */
 }
 .asset:hover{
    background: #1b1d30;
 }
 .asset:hover .subAsset{
    background: #1b1d30;
 }
 .asset:hover .title{
    color: whitesmoke;
 }
</style>
