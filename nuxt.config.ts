// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/contentstack-customfield-event-generator/',
  },

  css: [
    //
    '~~/assets/custom.scss',
  ],

  ssr: false,
})
