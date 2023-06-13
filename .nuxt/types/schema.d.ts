import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pwa"]?: typeof import("@kevinmarrec/nuxt-pwa").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ionic"]?: typeof import("@nuxtjs/ionic").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@kevinmarrec/nuxt-pwa", Exclude<NuxtConfig["pwa"], boolean>] | ["@nuxtjs/ionic", Exclude<NuxtConfig["ionic"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   pwaManifest: {
      name: string,

      short_name: string,

      description: any,

      lang: string,

      start_url: string,

      display: string,

      background_color: string,

      theme_color: string,

      icons: Array<any>,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }