// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: "Semillero",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Semillero Universidad de Córdoba",
        name: "Semillero Universidad de Córdoba",
        content: "Semillero Universidad de Córdoba",
      },
    ],
  },
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      heavenGroupAPI: process.env.HEAVEN_GROUP_API,
    },
    private: {},
  },
  css: [
    "primevue/resources/themes/lara-dark-purple/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "@/assets/css/main.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  primevue: {
    usePrimeVue: true,
  },
});
