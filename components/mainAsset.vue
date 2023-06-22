<template>
    <ion-card class="asset" style="">

        <ion-card class="subAsset" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;height: 70%;width:100%;border-radius: 12px;padding-left: 5%;padding-right: 5%;box-shadow: none;">
            <div style="display: flex;flex-direction: column;justify-content: space-between;align-items: flex-start;max-width:30%;height:100%">
                <ion-card-title class="title" style="font-size:150%;">{{props.symbol}}</ion-card-title>
                <ion-card-subtitle class="title" style="font-size: 80%; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ props.name }}</ion-card-subtitle> 
            </div>
            
            <div style="max-width: 30%;height: 100%;">
                <ion-icon class="arrow" color="primary" :icon="ioniconsArrowUpCircleSharp" style="font-size: 250%;transform: rotate(45deg);"/>
            </div>
            
        </ion-card>

        <ion-card class="subAsset" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;height: 30%;width:100%;border-radius: 12px;padding-left: 5%;padding-right: 5%;box-shadow: none;">
            <ion-card-title class="title" style="font-size:150%;">${{props.amount}}</ion-card-title>
            <ion-card-subtitle style="font-size: 100%;color: red;">+6.5%</ion-card-subtitle>
        </ion-card>

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
    /* min-height:10%; */
    /* max-height:10%; */
    border-radius: 18px;
    border:0.5px solid #1B1D30;
    margin-bottom: -2%;
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
