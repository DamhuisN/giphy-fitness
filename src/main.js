import { createApp } from 'vue'
import App from './app.vue'
import store from "./store"
import '@/assets/global.css';

createApp(App).use(store).mount('#app')