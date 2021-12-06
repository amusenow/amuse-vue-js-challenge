<template>
  <div>
    <h1>:)</h1>
    <div class="product-grid">
      <product v-for="product in products" 
        :key="product.entity_id" 
        :name="product.name" 
        :category="product.category"
        :price="product.price"
      >
      </product>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';
import json from './../products.json';

export default {
  name: 'HelloWorld',
  components: {
    Product
  },
  data() {
    return {
      products: json
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product-grid {
    display: flex;
    flex-direction: column;
  }
</style>
