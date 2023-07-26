<template>
    <ion-card class="asset" style="">

        <ion-card class="subAsset" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width:100%;border-radius: 12px;padding-left: 5%;padding-right: 5%;box-shadow: none;margin:0px;background:none;">
            <div style="display: flex;flex-direction: column;justify-content: space-between;align-items: flex-start;max-width:30%;height:100%">
                <ion-card-title class="title" style="font-size:100%;">{{props.orderType}}</ion-card-title>
                <ion-card-subtitle class="title" style="font-size: 60%; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ props.base }}/{{ props.quote }}</ion-card-subtitle> 
            </div>
            
            <div style="max-width: 100%;height: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                <!-- <ion-icon class="arrow" color="primary" :icon="ioniconsArrowUpCircleSharp" style="font-size: 250%;transform: rotate(45deg);"/> -->
                <ion-avatar slot="start" style="scale:0.7;border: 3px solid #1B1D30;">
                  <img alt="asset img" :src="props.baseImgUrl"/>
                </ion-avatar>
                <ion-avatar slot="start" style="scale:0.7;position: relative;right:18%;border: 3px solid #1B1D30;">
                  <img alt="asset img" :src="props.quoteImgUrl"/>
                </ion-avatar>
            </div>
            
        </ion-card>

        <ion-card class="subAsset" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width:100%;border-radius: 12px;padding-left: 5%;padding-right: 5%;box-shadow: none;margin: 0px;background: none;margin-top:-2%;">
            <ion-card-title class="title" style="font-size:100%;">{{props.quantity}} <span style="font-size:50%;">{{props.quote}}</span></ion-card-title>
            <ion-card-subtitle style="font-size: 100%;color: green;">{{props.processPercentage}}%</ion-card-subtitle>
        </ion-card>

    </ion-card>

</template>
<script setup lang="ts">
const props = defineProps<{
    base:string
    quote:string
    quantity:number
    orderType:string
    processPercentage:number
    baseImgUrl:string
    quoteImgUrl:string
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
    /* background:rgba(0, 0, 0, 0.105); */
    background: white;
    padding: 2%;
    margin-left: 0px;
    box-shadow: none;
    margin: 0px;
    margin-bottom: 5%;
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
