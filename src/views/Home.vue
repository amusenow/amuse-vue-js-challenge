<template>
  <main>
    <div class="px-4 py-6 sm:px-0">
        <h3 class="text-3xl mb-4">Displaying {{ products.length }} products</h3>
        <product-filters />

        <product-list />

    </div>
  </main>
</template>
<script>
  import ProductList from '../components/ProductList.vue'
  import ProductFilters from '../components/ProductFilters.vue'
  import {mapState} from "vuex";
  export default {
    computed: {
        ...mapState([
           'products'
        ])
    },
    components: {
      ProductList,
      ProductFilters
    }
  }
</script>
