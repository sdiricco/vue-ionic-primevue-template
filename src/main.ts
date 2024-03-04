import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import IonicImporter from "./plugins/ionic";
import PrimeVueImporter from "./plugins/primevue";
import { Icon } from '@iconify/vue';



const pinia = createPinia()

const app = createApp(App)
  .use(pinia)
  .use(PrimeVue, { ripple: true })
  .use(PrimeVueImporter)
  .use(IonicImporter)
  .use(router)

app.component("Icon", Icon)
  
router.isReady().then(() => {
  app.mount('#app');
});
