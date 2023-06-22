<template>
    <ion-toolbar>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" style="--border:none;--background:#000000;--color:#ffff;">
        <ion-tab-button class="ion-tab-button" tab="home" href="/home">
          <ion-icon :icon="ioniconsPlayCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button class="ion-tab-button" tab="radio" href="/newhome">
          <ion-icon :icon="ioniconsRadio" />
          <ion-label>Radio</ion-label>
        </ion-tab-button>

        <ion-tab-button class="ion-tab-button" tab="library" href="/homelast">
          <ion-icon :icon="ioniconsLibrary" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button class="ion-tab-button" tab="search" href="/intro">
          <ion-icon :icon="ioniconsSearch" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    </ion-toolbar>
</template>
<style scoped>
.ion-tab-button{
    --color-selected:#ffff;
    --color:#626262;
}
</style>