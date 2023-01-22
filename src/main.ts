import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'

import './assets/style/main.scss'

const app = createApp(App)

const pinia = createPinia()

// TODO create middleware and set subscribe to product state for add to localStorage
/* pinia.use(({ store }) => {
  console.log({ ...store })
}) */

app.use(pinia)
app.use(router)

app.mount('#app')
