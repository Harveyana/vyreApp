// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        prerender: {
          crawlLinks: true
        }
      },
    modules: ['@nuxtjs/ionic','nuxt-swiper'],
    css: ['@/theme/variables.css','@ionic/vue/css/core.css','@ionic/vue/css/typography.css'],
    ionic: {
      config: {
        mode:'ios',
        scrollAssist: false
      }
    },
})
