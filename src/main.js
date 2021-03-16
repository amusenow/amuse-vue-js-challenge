import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      products: [],
      categories: [],
      allProducts: [],
      activeFilter: null
    }
  },
  mutations: {
    LOAD_PRODUCTS (state, products) {
      state.products = products
      state.allProducts = products

      const categories = new Set([])
      state.products.forEach(function(product){
        categories.add(product.category);
      })
      state.categories = Array.from(categories)
    },
    SET_FILTER(state, filterName) {
      state.activeFilter = filterName;
      if (!state.activeFilter) {
        // todo: this isn't working as expected. Should display all products when filter is turned off.
        state.products = JSON.parse(JSON.stringify(state.allProducts));
      }

      state.products = Array.from(state.allProducts).filter(function(product){
        return product.category === filterName;
      })
    }
  }
})

let app = createApp(App)
let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
app.use(store)

app.mount('#app')
