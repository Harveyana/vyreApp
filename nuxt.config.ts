// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        prerender: {
          crawlLinks: true
        }
      },
    modules: ['@nuxtjs/ionic','nuxt-swiper'],
    css: ['@/theme/variables.css'],
    ionic: {
      config: {
        mode:'ios',
      }
    },
})
