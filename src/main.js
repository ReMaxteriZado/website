// PrimeVue
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// Styles
import '@/assets/fonts/fonts.css'
import '@/assets/styles/app.scss'

// Vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

const color = 'red'

const stylePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: `{${color}.50}`,
      100: `{${color}.100}`,
      200: `{${color}.200}`,
      300: `{${color}.300}`,
      400: `{${color}.400}`,
      500: `{${color}.500}`,
      600: `{${color}.600}`,
      700: `{${color}.700}`,
      800: `{${color}.800}`,
      900: `{${color}.900}`,
      950: `{${color}.950}`,
    },
  },
})

app.use(router)
app.use(store)
app.use(PrimeVue, {
  theme: {
    preset: stylePreset,
    // preset: Aura,
  },
})
app.use(ToastService)
app.use(ConfirmationService)

app.mount('#app')

// Directives
app.directive('tooltip', Tooltip)
