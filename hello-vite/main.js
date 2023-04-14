import App from './App.vue'
import { createApp } from 'vue'

import('./async.js').then(mod => {
  console.log(mod)
})

const app = createApp(App)
app.mount('#app')