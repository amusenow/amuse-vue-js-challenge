<template>
  <div 
    :class="{ 'modal-visible': !ageVerified }"
    >
    <overlay-modal
      v-show="!ageVerified"
      @closeModal="verifyAge"
    >
    </overlay-modal>
    <div v-show="ageVerified">

    <div class="product-filter">
      <span>Filter by Product Type</span>
      <select v-model="productTypeSelected">
        <option value="All" default>All Products</option>
        <option v-for="type in productTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

      <div id="product-grid" >
        <product v-for="product in productList" 
          :key="product.entity_id" 
          :name="product.name" 
          :category="product.category"
          :price="product.price"
          :thc_percentage="product.thc_percentage"
          :image_url="product.image_url"
          :url="product.url"
          :manufacturer="product.manufacturer"
        >
        </product>
      </div>
      <!-- workaround with scroll events not firing -->
      <button class="load-more" @click="loadProducts">Load More</button>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';
import json from './../products.json';
import OverlayModal from './OverlayModal.vue';

export default {
  name: 'HelloWorld',
  components: {
    Product,
    OverlayModal
  },
  data() {
    return {
      products: json,
      productList: [],
      productTypes: [ 'Flower', 'Extract', 'Cartridge', 'Preroll', 'Edible', 'Pill', 'Merch'],
      productTypeSelected: 'All',
      productCount: 0,
      ageVerified: false,
    }
  },
  watch: {
    productTypeSelected: function() {
      this.productList = [];
      this.productCount = 0;
      this.loadProducts();
    }
  },
  mounted () {  
    const productGrid = document.querySelector('#product-grid');
  
    // not working 🤬. related to overflow: auto issue?
    // added 'load more' button as workaround:
    productGrid.addEventListener('scroll', () => {
      console.log(productGrid.scrollTop);
      if (productGrid.scrollTop + productGrid.clientHeight >= productGrid.scrollHeight) {
        console.log('scrolling');
        this.loadProducts();
      }
    });

    this.loadProducts();
  },
  methods: {
    loadProducts() {
      let initialProductCount = this.productList.length || 0;
      for (let i = 0; i < 30; i++) {
        this.productList.push(this.filteredProducts[i + this.productCount]);
      }
      this.productCount = this.productList.length + initialProductCount;
    },
    // honor system verification
    verifyAge() {
      this.ageVerified = true;
    }
  },
  computed: {
    filteredProducts: function() {
      if (this.productTypeSelected === "All") { return this.products }
      else { return this.products.filter(product => product.category === this.productTypeSelected) }
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
    max-width: 1440px;
    margin: 2rem auto;
    display: grid;
    grid-gap: 6rem 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0.5rem;
    @media only screen and (min-width: 650px) {
      padding: 2rem;
    }
  }
  .product-filter {
    position: sticky;
    height: 40px;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #2c3e50;
    color: white;
    padding: 1rem;
    width: 100vw;
  }

  button.load-more {
    font-family: inherit;
    margin: auto;
    border: none;
    box-shadow: 0px 3px 6px #dddddd;
    padding: 1rem;
    margin-bottom: 4rem;
    cursor: pointer;
  }
  select {
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 0.25rem;
    font-family: inherit;
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

