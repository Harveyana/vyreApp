<template>
    <ion-card :button="true" class="asset" :class="props.default ? 'default':'notDefault'" >

        
        <!-- <div style="min-width: 60%;max-width: 60%;max-height: 50%;"> -->
            <ion-card-header style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
            <ion-card-title class="title" :class="(props.default ? 'defaultTitle' : 'notDefaultTitle')" style="font-size: 170%">{{props.name}}</ion-card-title>
            <!-- <ion-card-subtitle class="title">Card Subtitle</ion-card-subtitle> -->
            <ion-icon :color="(props.default ? 'secondary': 'primary')" :icon="ioniconsArrowForwardCircleSharp" size="large" style=""/>
        </ion-card-header>

        <ion-card-content class="title" :class="(props.default ? 'defaultTitle' : 'notDefaultTitle')">
            {{props.description}}
        </ion-card-content>
        <!-- </div> -->
        <!-- <ion-avatar style="min-width: 40%;max-width: 40%;height: 100%;padding:3%;--border-radius:4px">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar> -->


    </ion-card>

</template>
<script setup lang="ts">
const props = defineProps<{
    name:string
    description:string
    default:boolean
}>()

</script>
<style scoped>
.asset{
    /* box-shadow:none; */
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    max-height:100%;
    border-radius: 18px;
    /* border:0.5px solid #1B1D30; */
    margin-bottom: 0px;
    margin-top: 5%;
 }
 .asset:hover{
    background: linear-gradient(180deg, #042D64, #1B1D30);
 }
 .asset:hover .subAsset{
    background:linear-gradient(180deg, #042D64, #1B1D30);
 }
 .asset:hover .title{
    color: whitesmoke;
 }
.default{
    background: linear-gradient(180deg, #042D64, #1B1D30);
}
.notDefault{
    background: linear-gradient(90deg, rgb(162, 161, 161), #f6f6f6);
}
.defaultTitle{
    color: whitesmoke;
}
.notDefaultTitle{
    color: #1B1D30
}
</style>
