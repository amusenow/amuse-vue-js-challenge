import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './plugins/vue-meta';
import './plugins/vue-notification';
import { EventBus } from "@/event-bus.js";

Vue.config.productionTip = false

Vue.prototype.$eventBus = EventBus;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
