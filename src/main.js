// PrimeVue
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// Highlight.js
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import scss from 'highlight.js/lib/languages/scss'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('scss', scss)

// Styles
import '@/assets/fonts/fonts.css'
import '@/assets/styles/app.scss'

// Vue
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

const app = createApp(App)

const primaryColor = 'red'
const secondaryColor = 'gray'

const stylePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: `{${primaryColor}.50}`,
      100: `{${primaryColor}.100}`,
      200: `{${primaryColor}.200}`,
      300: `{${primaryColor}.300}`,
      400: `{${primaryColor}.400}`,
      500: `{${primaryColor}.500}`,
      600: `{${primaryColor}.600}`,
      700: `{${primaryColor}.700}`,
      800: `{${primaryColor}.800}`,
      900: `{${primaryColor}.900}`,
      950: `{${primaryColor}.950}`,
    },
    colorScheme: {
      light: {
        secondary: {
          color: `{${secondaryColor}.800}`,
        },
      },
      dark: {
        secondary: {
          color: `{${secondaryColor}.400}`,
        },
      },
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
app.use(hljsVuePlugin)

app.mount('#app')

// Directives
app.directive('tooltip', Tooltip)
