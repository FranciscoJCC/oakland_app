/* import './assets/main.css' */

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Vuetify */
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { es } from 'vuetify/locale'

const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#49B1A6',
          secondary: '#1F1F1F'
        }
      }
    }
  },
  locale: {
    locale: 'es',
    fallback: 'es',
    messages: { es }
  },
  components,
  directives
})

app.use(vuetify)
app.use(router)
app.mount('#app')
