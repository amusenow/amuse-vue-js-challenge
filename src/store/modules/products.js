import Vue from 'vue'

import productsJson from '@/data/stubbed/products.json'

import { capitalizeFirstLetter } from '@/helpers/stringMutations'

import {
  VUEX_PRODUCTS_FETCH
} from '@/store/constants/products'

const state = {
  products: [], // Products array
  productCategoryTable: {}, // Products table sorted by category
}

const getters = {
  productsByCategory: state => category => {
    if (category) {
      return state.products.filter(product => product.category === category)
    } else {
      return state.products
    }
  }
}

const actions = {
  [VUEX_PRODUCTS_FETCH]: ({ commit }) => {
    /*
    * Amuse - Here is where I'd call an API store module action to
    * fetch the products data
    */
    commit(VUEX_PRODUCTS_FETCH, productsJson)
  }
}

const mutations = {
  [VUEX_PRODUCTS_FETCH]: (state, payload) => {
    /* Amuse - Depending the project requirements, I would probably save the products data
    * as an array, but also a table sorted by categories. This would happen only when new data is requested
    * from the BE and not when the component displays it.
    */
    state.products = payload

    /*
     * Create Catefories table
     */
    payload.forEach(product => {
      const category = capitalizeFirstLetter(product.category.toLowerCase())
      if (!state.productCategoryTable[category]) Vue.set(state.productCategoryTable, capitalizeFirstLetter(category), [])

      state.productCategoryTable[category].push({
        ...product,
        category: product.category.toLowerCase()
      })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
