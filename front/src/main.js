import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ViewManager from './services/ViewManager';

ViewManager.checkStatus()
createApp(App).use(router).mount('#app')
