import Vue from 'vue'

const components = {
  Category: () => import('../..\\components\\Category.vue' /* webpackChunkName: "components/category" */).then(c => c.default || c),
  CategoryFilter: () => import('../..\\components\\CategoryFilter.vue' /* webpackChunkName: "components/category-filter" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  ProductListings: () => import('../..\\components\\ProductListings.vue' /* webpackChunkName: "components/product-listings" */).then(c => c.default || c),
  ProductOverview: () => import('../..\\components\\ProductOverview.vue' /* webpackChunkName: "components/product-overview" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
