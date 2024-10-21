import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import App from './App.vue'
//import router from './router'
import Aura from '@primevue/themes/aura'

const app = createApp(App, {})

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

//app.component('PButton', Button)

app.use(createPinia())
//app.use(router)

app.mount('#app')
