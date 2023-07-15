<template>
    <ion-page>

    <ion-header>
        <ion-toolbar>
        <ion-title>Header Toolbar</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-card>
        <ion-card-header>
            <ion-card-title class="primary">Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
        Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>

        <ion-button color="primary" router-link="/intro">Intro</ion-button>
        <ion-toggle @ion-change="toggle($event.detail.checked)"></ion-toggle>
        <ion-button color="secondary">Action 2</ion-button>
  </ion-card>
    <ion-footer>
        <ion-toolbar>
        <ion-title>Footer Toolbar</ion-title>
        </ion-toolbar>
    </ion-footer>
    </ion-page>
</template>
<script setup lang="ts">
const darkMode = useDarkMode()
const toggle = (checked:boolean)=>{
    // document.body.classList.toggle('dark', checked);
    darkMode.switchMode(checked)
}
</script>