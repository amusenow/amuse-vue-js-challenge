<template>
  <div class="products__view">
    <div class="nav-container">
      <ItemsFilter
        :items="categories"
        @updated="updatedSelectedFilters"/>
    </div>
    <div class="grid-container">
      <ProductsGrid
        :items="products"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ItemsFilter from '@/components/_global/Filters/ItemsFilter.vue'
import ProductsGrid from '@/components/Products/Products_Grid'

export default {
  name: 'categories-view',

  components: {
    ItemsFilter,
    ProductsGrid
  },

  data: () => ({
    selectedFilters: []
  }),

  computed: {
    ...mapState({
      productCategories: state => state.products.productCategoryTable
    }),

    categories () {
      return Object.keys(this.productCategories)
    },

    products () {
      let data = Object.entries(this.productCategories).map(entry => {
        return {
          categoryTitle: entry[0],
          items: entry[1]
        }
      })

    if (!this.selectedFilters.length) return data
    return data.filter(cat => this.selectedFilters.includes(cat.categoryTitle))
    }
  },

  methods: {
    updatedSelectedFilters (selected) {
      this.selectedFilters = selected
    }
  }
}
</script>

<style lang="scss">
  .products__view {
    display: flex;

    .nav-container {
      width: 256px;
    }

    .grid-container {
      padding: 0 3rem;
      flex: 1;
    }
  }
</style>
