<template>
  <div v-on:scroll="this.shoutAtMe">
    <h1>:)</h1>
    <div id="product-grid" >
      <product v-for="product in productList" 
        :key="product.entity_id" 
        :name="product.name" 
        :category="product.category"
        :price="product.price"
        :image_url="product.image_url"
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
      products: json,
      productList: [],
      productCount: 0,
    }
  },
  mounted () {
    const productGrid = document.querySelector('#product-grid');
    // eslint-disable-next-line
    productGrid.addEventListener('scroll', () => {
      console.log(productGrid.scrollTop);
      if (productGrid.scrollTop + productGrid.clientHeight >= productGrid.scrollHeight) {
        console.log('scrolling');
        this.loadMoreProducts();
      }
    });
    this.loadMoreProducts();
  },
  methods: {
    loadMoreProducts() {
      console.log('loading!');
      for (let i = 0; i < 30; i++) {
        this.productList.push(this.products[i + this.productCount]);
      }
    },
    shoutAtMe: function() {
      console.log('yayaoaoa');
    }
  },
  computed: {
    // infiniteScroll: function() {
    // },


    // proof of concept filter
    filteredProducts: function() {
      return this.products.filter(product => 
        product.category === "Flower" ||
        product.category === "Extract"
      );
    },

    // sortByPrice: function(a, b) {
    //   if (a.price < b.price) { return -1 }
    //   else if (a.price > b.price) { return 1 }
    //   return 0;
    // }
  }
}
</script>

<style scoped lang="scss">
  #product-grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0.5rem;

    @media only screen and (min-width: 650px) {
      padding: 2rem;
    }
}
</style>

// {
//    "entity_id": 1221,
//    "sku": "FL000980",
//    "is_cannabis": 1,
//    "manufacturer": "Perfect",
//    "name": "Happy Camper 1g ($1 Deal - Discount auto-applies at checkout)",
//    "url": "/brands/perfect/happy-camper-1g/",
//    "category": "Flower",
//    "sub_category": "Pre-pack",
//    "image_url": "FL000980/Perfect_FL_1gm_HappyCamper_PandP",
//    "price": 18,
//    "thc_percentage": 34.9,
//    "quantity": 0
//  },

// Flower, Extract, Cartridge, Preroll, Edible, Pill