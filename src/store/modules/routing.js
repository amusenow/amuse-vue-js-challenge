import {
  VUEX_ROUTING_ENTER_PRODUCTS
} from '@/store/constants/routing'

import {
  VUEX_PRODUCTS_FETCH
} from '@/store/constants/products'

const state = {}

const getters = {}

const actions = {
  [VUEX_ROUTING_ENTER_PRODUCTS]: ({ dispatch }) => {
    /*
    * Amuse - I like to setup routing actions for action composition
    * when entering and exiting routes
    */
    dispatch(VUEX_PRODUCTS_FETCH)
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
