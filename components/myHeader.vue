<template>
    <ion-card class="headingCard" style="">


        <ion-button fill="clear" style="border-radius: 50px;height: 40px;background: #1d3160;" @click="isDarkMode = !isDarkMode">
            <ion-icon color="secondary" slot="end" :icon="ioniconsMoon"></ion-icon>
        </ion-button>

        <div style="display: flex;justify-content: center;align-items: center;width: 50%;">

            <ion-button fill="clear" style="border-radius: 12px;height: 40px;" @click="isDarkMode = !isDarkMode">
                <ion-icon color="secondary" slot="end" :icon="ioniconsNotificationsCircle" style="font-size: 260%;background: #1d3160;border-radius: 50px;"></ion-icon>
                <ion-badge slot="end" color="primary">1</ion-badge>
            </ion-button>

            <ion-chip class="ionchip" color="" style="height: 50px;width:30%;padding:5%;margin-left:5%;background: none;">
                <ion-avatar >
                <img  alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"  style="scale: 1.6;"/>
                </ion-avatar>
                <!-- <ion-label color="secondary" >Harvey Ana</ion-label> -->
            </ion-chip>
        </div>


    </ion-card>
</template>
<script setup lang="ts">
const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()

watch(isDarkMode,(newValue, oldValue) => {
    console.log(newValue)
   darkMode.switchMode(newValue)
})
</script>
<style scoped>
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
</style>