<template>
    <ion-card class="ioncard" style="margin-bottom:-16px;">

        <div style="display: flex;flex-direction: row;justify-content: start;align-items: center;">

            <ion-col class="ion-col">
                <ion-avatar>
                <img alt="asset img" :src="$props.img" style="scale: 0.65;"/>
                </ion-avatar>
            </ion-col>

            <ion-col style="--ion-grid-column-padding-xs: none">
                <ion-card-title style="margin-bottom: 9px;"><strong>{{$props.symbol}}</strong></ion-card-title>
                <div style="display: flex;flex-direction: row;justify-content:start;align-items: center;">
                    <span style="font-size: small;margin-right: 5px;">${{$props.price}}</span>
                    <span style="font-size: x-small;color:red;">-0.89%</span>
                </div>
                
            </ion-col>
        </div>


        <div style="display: flex;flex-direction: column;justify-content: start;align-items: flex-end;">
            <ion-card-title style="margin-bottom: 9px;"><strong style="font-size: medium;">{{$props.amount}}</strong></ion-card-title>
            <div style="display: flex;flex-direction: row;justify-content:center;align-items: center;">
                <span style="font-size: small;margin-right: 5px;">$ {{$props.amount * $props.price}}</span>
            </div>
        </div>

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
.ion-col{
    --ion-grid-column-padding-xs: none;
    margin-left: -3px;
}
.ioncard{
    margin-left:-5px;
    margin-right: -5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 3%;
    box-shadow: none;
}
</style>
