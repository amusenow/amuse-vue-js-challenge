<template>
  <b-row>
    <b-col
      v-for="product of filteredProducts"
      :key="product.entity_id"
      cols="12"
      md="6"
      lg="4"
      class="pb-4 d-flex flex-column"
    >
      <ProductCard
        :product="product"
        class="p-0"
      />
    </b-col>
  </b-row>
</template>

<script>
import { getProducts } from '../helpers/api'
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  data: () => ({
    products: []
  }),
  computed: {
    categories () {
      return this.$route.query.categories ?? []
    },
    filteredProducts() {
      return this.products.filter(
        product => this.categories.includes(product.category.toLowerCase())
      )
    },
  },
  async created () {
    // Load products naively.
    this.products = await getProducts()
  }
}
</script>
