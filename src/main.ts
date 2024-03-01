import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PrimeVue from "primevue/config";
import IonicImporter from "./plugins/ionic";
import PrimeVueImporter from "./plugins/primevue";

const app = createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(IonicImporter)
  .use(router)
  .use(PrimeVueImporter);
  
router.isReady().then(() => {
  app.mount('#app');
});