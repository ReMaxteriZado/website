// Styles
import '@/assets/fonts/fonts.css'
import '@/assets/styles/app.scss'

// PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// Vue
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
