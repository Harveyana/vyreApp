<template >
    <ion-toolbar >
    <ion-tabs style="" @ion-tabs-will-change="selected = 'home2'">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" style="padding: 1% 1% 1% 1%;--background:#1d3160;">
        <ion-tab-button class="notSelected" tab="home2" href="/home2" @click="$router.push('/home2')" router-direction="back" style="">
          <ion-icon :icon="ioniconsPrismSharp" style="font-size: 300%;"/>
          <!-- <ion-label>home</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="notSelected" tab="p2p" href="/p2p" @click="$router.push('/p2p')" router-direction="forward">
          <ion-icon :icon="ioniconsCubeSharp" style="font-size: 350%;"/>
          <!-- <ion-label>p2p</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="notSelected" tab="assets" href="/assets">
          <ion-icon :icon="ioniconsDiamondSharp" style="font-size: 300%;"/>
          <!-- <ion-label>Assets</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="notSelected" tab="search" href="/intro">
          <ion-icon :icon="ioniconsSettingsOutline" style="font-size: 300%;"/>
          <!-- <ion-label>Settings</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    </ion-toolbar>
</template>
<script setup lang="ts">
import { RouteRecordName } from '~/.nuxt/vue-router';
const selected = ref<(RouteRecordName|null|undefined)>()
const route = useRoute()


const currentRoute = computed(() => {
  return route.name
});

// const props = defineProps<{
//     ishome:boolean
//     isp2p:boolean
// }>()



</script>
<style scoped>

/* .selected{
  border-radius:15px;
  --background:goldenrod;
  --color-selected:black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 9%;
  margin-bottom: 9%;
  border:1px solid black;
  transition: all ease-in-out 3s;
} */
.notSelected{
  --color-selected:goldenrod;
  --color:black;
  --background:none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 9%;
  margin-bottom: 9%;
  /* border:1px solid black; */
  transition: all ease-in-out 3s;
}
</style>