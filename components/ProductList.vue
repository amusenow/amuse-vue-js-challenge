<template>
  <b-row>
    <b-col
      v-for="product of products"
      :key="product.entity_id"
      cols="12"
      sm="6"
      md="4"
      class="pb-4"
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
  async created () {
    // Load products naively.
    this.products = await getProducts()
  }
}
</script>
