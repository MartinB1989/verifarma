// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/test-utils/module',
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  $development: {
    vite: {
      vue: {
        template: {
          transformAssetUrls,
        },
      },
      server: {
        cors: false,
        proxy: {
          '/local/': {
            target: 'https://www.omdbapi.com',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/\/local/g, ''),
          },
        },
      },
    },
    runtimeConfig: {
      public: {
        apiUrl: '/local/',
      },
    },
  },
  ssr: false,
})
