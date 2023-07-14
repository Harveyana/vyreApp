<script setup lang="ts">
const Swiper = useSwiper()
const ionRouter = useIonRouter();
const props = defineProps<{
    showPrev:boolean
    isFinalSlide:boolean
}>()
</script>

<template>
  <div style="display: flex;flex-direction: row;justify-content: space-around;align-items: center;margin-top: 5%;">
        <ion-button color="medium" @click="Swiper.slidePrev(2000)" v-if="props.showPrev && !props.isFinalSlide">Previous</ion-button>
        <ion-button color="primary" @click="props.isFinalSlide ? ionRouter.push('/signUp'): Swiper.slideNext(2000)"><span style="padding-left: 15px;padding-right: 15px;">{{ props.isFinalSlide ? 'Get Started':'Next' }}</span></ion-button>
    </div>
</template>
