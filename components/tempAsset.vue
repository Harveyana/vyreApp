<template>
    <ion-item button :detail="false" style="--border-radius:13px;margin-bottom: 2%;padding-top: 3%;">

        <!-- <ion-item style="display: flex;flex-direction: row;justify-content: start;align-items: center;width: 60%;"> -->

            <!-- <ion-col class="ion-col"> -->
                <ion-avatar slot="start">
                <img alt="asset img" :src="$props.img"/>
                </ion-avatar>
            <!-- </ion-col> -->

            <ion-col style="--ion-grid-column-padding-xs: none">
                <ion-card-title style="margin-bottom: 9px;font-size: 100%;"><strong>{{$props.symbol}}</strong></ion-card-title>
                <div style="display: flex;flex-direction: row;justify-content:start;align-items: center;">
                    <span style="font-size: small;margin-right: 5px;">${{$props.price}}</span>
                    <span style="font-size: x-small;color:red;">-0.89%</span>
                </div>
                
            </ion-col>
        <!-- </ion-item> -->


        <div style="display: flex;flex-direction: column;justify-content: start;align-items: flex-end;">
            <ion-icon color="primary" :icon="ioniconsAddCircle" style="font-size: 200%;"/>
        </div>

    </ion-item>
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
    /* margin-left:-5px;
    margin-right: -5px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    /* padding-left: 2%; */
    /* padding-right: 3%; */
    box-shadow: none;
}
/* style="margin-bottom:-15px;margin-top: -5px;padding-bottom: 3px;" */
</style>
