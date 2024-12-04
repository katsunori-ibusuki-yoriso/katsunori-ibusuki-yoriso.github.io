export default defineNuxtConfig({
  app: {
    baseURL: "katsunori-ibusuki-yoriso.github.io",
  },

  ssr: true,
  nitro: {
    preset: "github-pages",
  },
});
