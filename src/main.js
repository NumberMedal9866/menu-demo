import { createApp } from 'vue'
import { router } from './router'
import { createI18n } from 'vue-i18n';
import { messages } from './locales';
import { createPinia } from 'pinia';
import App from '@/App.vue'
import '@/assets/styles/main.scss'

const i18n = createI18n({
  legacy: false, // ✅ Use Composition API mode
  locale: localStorage.getItem("lang") || "en", // ✅ Load saved language
  fallbackLocale: "en",
  messages,
});

createApp(App)
.use(router)
.use(createPinia())
.use(i18n)


.mount('#app')
