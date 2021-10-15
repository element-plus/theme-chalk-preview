import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './styles/index.scss'

createApp(App).use(setupRouter).mount('#app')
