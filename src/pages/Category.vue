<template>
  <div class="category">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <div class="category-details">
      <div class="category-details__total" v-show="products">{{ products.length }} total product(s)</div>
      <select class="category-details__filter" v-model="filterValue" @change="filter()">
        <option value="Flower">Flower</option>
        <option value="Extract">Extract</option>
      </select>
    </div>
    <section class="product-grid">
      <Card v-for="(product, index) in products" :key="index" :product="product" />
    </section>
  </div>
</template>
<script>
  import Card from '../components/Card.vue';
  export default {
    name: 'Category',
    components: { Card },
    data() {
      return {
        title: 'Products',
        products: [],
        allProducts: null,
        filterValue: 'Flower'
      };
    },
    methods: {
      filter() {
        this.products = [...this.allProducts].filter(item => item.image_url && item.category == this.filterValue);
      },
      getProducts() {
        this.get('/mock-api/products.json').then(res => {
          this.allProducts = res;
          this.filter();
        });
      },
      async get(url) {
        try {
          let res = await fetch(url);
          if (res.status === 200) {
            var response = await res.json();
            return response;
          } else {
            alert(`Error: An error has occured.`);
            console.log(`${res.status}` | `${res.statusText}`);
          }
        } catch (error) {
          console.log(error);
          alert(error);
        }
      }
    },
    mounted() {
      this.getProducts();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category {
    text-align: center;
  }
  header {
    border-bottom: 1px solid #f1f1f1;
  }

  .category-details {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  .category-details__total {
    font-style: italic;
  }
  .category-details__filter {
    border: none;
    font-size: 16px;
    padding-right: 10px;
    font-family: inherit;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-gap: 10px;
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
