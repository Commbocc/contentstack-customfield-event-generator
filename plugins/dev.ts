export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      dev: import.meta.env.DEV,
    },
  }
})
