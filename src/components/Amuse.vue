<template>
  <div class="amuse container">
    <category-select
      :categories="categories"
      :currentCategory="currentCategory"
      @updateCategory="setCurrentCategory"
    ></category-select>
      <div class="row">
        <div class="col-12">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
        <div v-for="(product, index) in chunkedProducts[currentPage - 1]" :key="index" class="product-list col-12 col-lg-4">
          <product-card :product="product"></product-card>
        </div>
      </div>
  </div>
</template>

<script>
import CategorySelect from "./CategorySelect.vue"
import ProductCard from "./ProductCard.vue"
import filter from "lodash/filter"
import chunk from "lodash/chunk"

import products from '../../products.json'

export default {
  name: 'Amuse',
  components: {
    'category-select': CategorySelect,
    'product-card': ProductCard
  },
  data() {
    return {
      products: products,
      categories: [],
      currentCategory: 'Flower',
      perPage: 12,
      currentPage: 1,
    }
  },
  created() {
    this.setCategories()
    console.log(this.categories)
    console.log(this.chunkedProducts)
  },
  methods: {
    setCategories () {
      this.categories = [...new Set(this.products.map(item => item.category))];
    },
    setCurrentCategory(value) {
      this.currentCategory = value
      this.setCategories()
    }
  },
  computed: {
    filteredProducts () {
      if (this.currentCategory === 'all') {
        return this.products
      }
      return filter(this.products, { 'category': this.currentCategory })
    },
    totalRows () {
      return this.filteredProducts.length
    },
    chunkedProducts () {
      return chunk(this.filteredProducts, this.perPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
