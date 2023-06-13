<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="primary">
                    <ion-button fill="solid" style="--border-radius: 10px;" @click="isDarkMode = !isDarkMode">
                        <ion-icon slot="end" :icon="ioniconsMoon"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <Swiper
                style="padding-bottom: 25px;"
                class="Swiper"
                :pagination="true"
                :modules="[SwiperEffectCreative, SwiperPagination]"
                :slides-per-view="1"
                :effect="'creative'"
                :creative-effect="{
                    prev: {
                    shadow: false,
                    translate: ['-100%', 0, 0]
                    },
                    next: {
                    translate: ['100%', 0, 0]
                    }
                }"
                >
                <SwiperSlide
                    class="SwiperSlide"
                    v-for="(slide, index) in slides"
                    :key="index"
                >
                    <ion-card style="box-shadow:none;padding-top: 25px;padding-bottom: 25px;margin-top: 20%;">
                        <img alt="Silhouette of mountains" :src="slide.img" />
                        <ion-card-header>
                        <ion-card-title style="font-size: 30px;font-weight: 800;">{{slide.title}}</ion-card-title>
                        <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
                        </ion-card-header>

                        <ion-card-content>
                            {{slide.content}}
                        </ion-card-content>

                        <SwiperControl :show-prev="index == 0 ? false: true" :isFinalSlide="index == slides.length-1 ? true : false"/>
                        
                    </ion-card>
                </SwiperSlide>
                
            </Swiper>
            
            
            <!-- <swiper-container
                :slides-per-view="1"
                :centered-slides="true"
                @progress="onProgress"
                @slidechange="onSlideChange"
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container> -->
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
// import { register } from 'swiper/element/bundle';


// const next = ()=>{
//     Swiper.value.slideNext
// }
// const Previous = ()=>{
//     Swiper.value.slidePrev
// }
const isDarkMode = ref<boolean>(false)
const darkMode = useDarkMode()



watch(isDarkMode,(newValue, oldValue) => {
    console.log(newValue)
   darkMode.switchMode(newValue)
})

const slides:{title: string,img: string, content: string}[] = [
    {
        title: "A crypto wallet you'll love",
        img:'/illustration.svg',
        content: 'makes it safe & easy for you to store, send, receive, stake, and swap tokens on the Solana blockchain'
    },
    {
        title: "NFTs and Collectibles",
        img:'/illustration (2).svg',
        content: 'We’ve taken special care to make sure your NFTs look great!'
    },
    {
        title: "Your privacy is respected",
        img:'/illustration (1).svg',
        content: 'wallet doesn’t track any personal identifiable information, your account addresses or asset balances.'
    }
]

</script>
<style scoped>

.md,.ios ion-button {
    --border-radius: 10px;
    --box-shadow: none;
}

</style>