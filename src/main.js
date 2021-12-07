import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import { BootstrapVue, IconsPlugin, LayoutPlugin, DropdownPlugin, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(DropdownPlugin)
Vue.use(ModalPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
