<template>
    <ion-page>
        <!-- <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="primary">
                    <ion-button fill="solid" style="--border-radius: 10px;" @click="isDarkMode = !isDarkMode">
                        <ion-icon slot="end" :icon="ioniconsMoon"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header> -->

        <ion-content :fullscreen="true" >

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
                    <ion-card style="box-shadow:none;padding-top: 25px;padding-bottom: 25px;margin-top: 20%;background: #E5E5E5;min-height: 100%;">
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
        title: "Revolutionizing digital finance",
        img:'/rocket.png',
        content: 'Exchange Assets in seconds,lightening fast peer to peer exchange with no inputs from both parties '
    },
    {
        title: "Seamless transaction",
        img:'/rocket.png',
        content: 'We’ve bridged the world of crypto and fiat, giving you the power to play in both worlds'
    },
    {
        title: "Safe and secured wallets",
        img:'/rocket.png',
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