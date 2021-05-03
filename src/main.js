// Global Imports
import Vue from 'vue'

// Libraries
import router from '@/router'
import store from '@/store'

// Plugins
import vuetify from '@/plugins/vuetify'

// Helpers
import asyncLoader from '@/helpers/asyncLoader'

// Main View
import App from '@/App.vue'

import {
  VUEX_APP_INIT
} from '@/store/constants/app'

// Vue Config
Vue.config.productionTip = false

// Vue.use Statements
Vue.use(vuetify)

let vueApp
store.dispatch(VUEX_APP_INIT).then(() => {
  vueApp = new Vue({
    vuetify,
    router,
    store,

    methods: {
      asyncLoader
    },
    render: h => h(App)
  }).$mount('#app')
})

export default vueApp
