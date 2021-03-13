export { default as Category } from '../..\\components\\Category.vue'
export { default as CategoryFilter } from '../..\\components\\CategoryFilter.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as ProductListings } from '../..\\components\\ProductListings.vue'
export { default as ProductOverview } from '../..\\components\\ProductOverview.vue'

export const LazyCategory = import('../..\\components\\Category.vue' /* webpackChunkName: "components/category" */).then(c => c.default || c)
export const LazyCategoryFilter = import('../..\\components\\CategoryFilter.vue' /* webpackChunkName: "components/category-filter" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyProductListings = import('../..\\components\\ProductListings.vue' /* webpackChunkName: "components/product-listings" */).then(c => c.default || c)
export const LazyProductOverview = import('../..\\components\\ProductOverview.vue' /* webpackChunkName: "components/product-overview" */).then(c => c.default || c)
