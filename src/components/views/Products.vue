<template>
  <div>
    <div class="page-header">Products</div>
    <div style="display: flex; font-size: 1.1rem">
      <div  style="display: flex;">
        <div>
          Category:
          <select v-model="category">
            <option value="">ALL</option>
            <option
                v-for="(value, category) in this.categories"
                :key="category"
                :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div v-if="category" style="margin-left: 1rem">
          Sub Category:
          <select v-model="subCategory">
            <option value="">ALL</option>
            <option
                v-for="(value, category) in this.categories[this.category].subcategories"
                :key="category"
                :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
      <div style="flex: 1; text-align: right">
        Page
        <select v-model="currentPage">
          <option
              v-for="page in totalPages"
              :key="page"
              :value="page"
          >
            {{ page }}
          </option>
        </select>
        /{{ totalPages }}
      </div>
    </div>
    <div class="products-container">
      <product-card v-for="product in productPage" :product="product"
                    :key="`${product.entity_id}_${product.sku}`"/>
    </div>
  </div>
</template>

<script>
import productData from '../../assets/data/products.json'
import ProductCard from '@/components/shared/ProductCard'

export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {
      products: productData,
      filteredProducts: [],
      categories: {},
      category: '',
      subCategory: '',
      pageSize: 12,
      currentPage: 1,
      totalPages: 1,
    }
  },
  created() {
    this.products.forEach(product => {
      this.addToCategory(product);
    });
    this.filterProducts();
  },
  computed: {
    productPage(){
      const start = (this.currentPage - 1) * this.pageSize;
      const end = (this.currentPage) * this.pageSize;
      return [...this.filteredProducts.slice(start,end)];
    }
  },
  methods: {
    addToCategory(product) {
      const category = product.category.toUpperCase();
      const subCategory = product.sub_category.toUpperCase()

      if (!this.categories[category]) {
        this.categories[category] = {
          count: 0,
          subcategories: {}
        };
      }
      this.categories[category].count++;

      if (!this.categories[category].subcategories[subCategory]) {
        this.categories[category].subcategories[subCategory] = {count: 0};
      }
      this.categories[category].subcategories[subCategory].count++;
    },
    filterProducts() {
      let filtered = [];
      if (!this.category) {
         filtered = [...this.products];
      } else {
         filtered = this.products.filter(product => {
          return product.category.toUpperCase() === this.category && (this.subCategory === '' || product.sub_category.toUpperCase() === this.subCategory);
        });
      }
      this.filteredProducts = [...filtered];
      this.totalPages = Math.ceil(filtered.length / this.pageSize);
    },

  },
  watch: {
    category() {
      this.subCategory = '';
      this.currentPage = 1;
      this.filterProducts();
    },
    subCategory() {
      this.currentPage = 1;
      this.filterProducts();
    }
  }
}
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
select {
  font-size: 1.1rem;
}
</style>
