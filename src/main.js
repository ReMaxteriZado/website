import '@/assets/fonts/fonts.css'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
