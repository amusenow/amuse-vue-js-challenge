<template>
  <div class="container">
    <div class="w3-row">
      <div class="w3-col s3 w3-green w3-center">
        <CategoryFilter v-bind:categories="categories" class="align-top" />
      </div>
      <div class="w3-col s9 w3-dark-grey w3-center">
        <ProductListings v-bind:products="filteredProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { filtersMixin } from '../mixins/filters'

export default Vue.extend({
  data() {
    return {
      products: [],
      categories: [],
      filters: [],
    }
  },
  mixins: [filtersMixin],
  async created() {
    const productsListing = await fetch('/products.json')
    this.products = await productsListing.json()
    this.categories = this.products.map(p => p.category).filter(this.unique)
    this.$bus.$on('filtersUpdated', (categoryFilters) => {
      this.filters = [...categoryFilters]
    })
  },
  computed: {
    filteredProducts() {
      return this.products.filter((prod) =>
        this.filters.includes(prod.category)
      )
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
