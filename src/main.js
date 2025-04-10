import { createApp } from 'vue'
import '@/assets/styles/common.scss'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')