<template>
  <header>
    <ProductFilter 
      :categories="categories" 
      @update-filter="updateFilters"
      class="filters"
    />
  </header>

  <section>
    <div class="grid">
      <ProductCard
        
        v-for="product in currentPage"
        :product="product"
        :key="product.entity_id"
        class="card"
      />
    </div>
  </section>
</template>

<script>
import products from '/products.json';
import ProductCard from './components/ProductCard.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'AmuseChallenge',
  components: {
    ProductCard,
    ProductFilter,
  },
  data: () => ({
    filters: [],
    page: 0,
    products: []
  }),
  computed: {
    categories() {
      let categories = this.products.map(product => {
        return product.category;
      });

      return new Set(categories);
    },
    currentPage() {
      const start = this.page * 25;
      const end = start + 25;
      return this.filteredProducts.slice(start, end);
    },
    filteredProducts() {
      if (this.filters.length === 0) return this.products;
      return this.products.filter(product => {
        if(this.filters.includes(product.category)) {
          return product;
        }
      })
    }
  },
  methods: {
    updateFilters(categories) {
      this.filters = categories;
    }
  },
  created () {
    this.products = [...products];
  },
}


</script>

<style>
body, #app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p, div {
  margin: 0
}

section {
  background: linear-gradient(270deg, #f70099, #31e6b8);
  background-size: 400% 400%;
  animation: slowCreep 30s ease infinite;
  padding: .5rem;
}

@keyframes slowCreep {
  0%{background-position:88% 0%}
  50%{background-position:13% 100%}
  100%{background-position:88% 0%}
}

.card {
  width: 16rem;
}

.grid {
  display: grid;
  row-gap: 1rem;
  column-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
}

.filters {
  margin: 1rem auto;
}
</style>
