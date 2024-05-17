import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// const colors = {
//   primary: '4742A6',
// }

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          colors: {
            obscuro: '000000',
          },
        },
        dark: {
          colors: {
            obscuro: 'ffffff',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
