import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/store/modules/app'
import constants from '@/store/modules/constants'
import routing from '@/store/modules/routing'
import products from '@/store/modules/products'
import ageGate from '@/store/modules/ui/ageGate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    constants,
    routing,
    products,
    ageGate
  }
})
