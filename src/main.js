import { createApp } from 'vue'
import { router } from '@/router'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import '@/assets/styles/main.scss'

createApp(App)
.use(router)
.use(createPinia())


.mount('#app')
