export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/api.js',
    },
  ],
  head: {
    title: 'Milan Guide',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      },
      {
        // added by us ----------------------------------------------------------------------------------------
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap',
        rel: 'stylesheet',
      },
      {
        // Fonts I willingly added --------------------------------------------------------------------------
        href: 'https://fonts.googleapis.com/css?family=Lobster',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Cabin',
        rel: 'stylesheet',
      },
      {
        href: '//db.onlinewebfonts.com/c/a67dd4b5c96fed6370c1767ececa0952?family=URWClassicoW01-Bold',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:3000',
    /* 
    for heroku
     */
    baseURL: 'https://hypermedia-project-2022.herokuapp.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
