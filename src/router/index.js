import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import {
  VUEX_ROUTING_ENTER_PRODUCTS
} from '@/store/constants/routing'

import {
  VUEX_DIALOG_AGEGATE_SET_STATE
} from '@/store/constants/ui/ageGate'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'default',
    redirect: { name: 'Products' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Products.vue'),
    beforeEnter: (to, from, next) => {
      store.dispatch(VUEX_ROUTING_ENTER_PRODUCTS, { to: to, from: from }).then(() => next())
    },
    meta: {
      /*
      * Amuse - Super basic way to determine if route is age restricted -- not all should be
      * behind an age gate
      */
      restricted: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.restricted && !store.state.app.ageGate) store.dispatch(VUEX_DIALOG_AGEGATE_SET_STATE, true)
  next()
})

export default router
