// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8080,
  },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt', "@nuxt/image", '@ant-design-vue/nuxt', [
  '@vee-validate/nuxt',
  {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  ], 'nuxt-swiper', 'nuxt-rating', 'nuxt-viewport', '@pinia-plugin-persistedstate/nuxt', 'nuxt-vue3-google-signin', '@nuxtjs/i18n' ,'nuxt-aos', 'maz-ui/nuxt'],
  googleSignIn: {
    clientId: '274905656707-v6vdjqon0t3uk8goqrg9am8jc35dgfc1.apps.googleusercontent.com',
  },
  i18n: {
    lazy: true,
    langDir: "localization",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en",
        file:"json/en-US.json"
      },
      {
        code: "ar",
        file:"json/ar.json"
      },
    ],
    defaultLocale:"en",
    vueI18n: "en"
  },
  plugins: [
    '@/plugins/vue-google-maps.js',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  },
  components: {
    global: true,
    dirs: ['~/components','~/pages/layouts']
  },
  app: {
    head: {
      title: 'Khymat Zaman',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'camping gear, outdoor equipment, tents, hiking gear, backpacking gear, camping accessories' },
        { name: 'author', content: 'Khymat' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Khymat - Home Page' },
        { property: 'og:description', content: 'Welcome to Khymat, your destination for all things related to camping gear and outdoor adventures.' }, // Open Graph description
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Khymat - Home Page' },
        { name: 'twitter:description', content: 'Welcome to Khymat, your destination for all things related to camping gear and outdoor adventures.' }, // Twitter description
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  css: [
    "~/assets/css/app.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

})