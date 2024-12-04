export default defineNuxtConfig({
  app: {
    baseURL: "",
    buildAssetsDir: "/_nuxt/",
  },
  nitro: {
    preset: "static",
    prerender: {
      failOnError: false,
      ignore: [
        "/katsunori-ibusuki-yoriso.github.io",
        "/katsunori-ibusuki-yoriso.github.io/404.html",
        "/katsunori-ibusuki-yoriso.github.io/200.html",
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  router: {
    options: {
      strict: false,
    },
  },
});
