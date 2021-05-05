<template>
  <div class="home">
    <div class="categories" v-show="over21 && ageModalDisplayed">
    <h1>Amuse</h1>
      <ul>
        <h2>Categories</h2>
        <li v-for="(item, index) in categories">
          <p :class="categorySelected === item ? 'category_selected' : 'category'" @click="filterCategory(item)">{{item}}</p>
        </li>
      </ul>
      <ul>
        <h2>Subcategories</h2>
        <li v-for="(item, index) in subCategories">
          <p  :class="subCategorySelected === item ? 'category_selected' : 'category'" @click="filterSubCategory(item)">{{item}}</p>
        </li>
      </ul>
    </div>
    <div class="product_list" v-show="over21 && ageModalDisplayed">
      <ul>
        <li v-for="(item, index) in productList">
          <ProductCard 
            v-bind:name="item.name"
            v-bind:price="item.price"
            v-bind:thc_percent="item.thc_percentage"
            v-bind:product_image="chainImage(item.image_url)"
            v-bind:quantity="item.quantity"
            v-bind:manufacturer="item.manufacturer"
          />
        </li>
      </ul>
    </div>
    <div class="no_entry" v-show="over21 === false && !ageModalVisible">
      <p>We're sorry, but you must be 21 years or older to view this content.</p>
      <button @click="reloadPage">Go back</button>
    </div>
    <div v-show="showAgeModal">
      <div class="modal-mask">
        <AgeModal
          @clicked="handleAge"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../../products.json'
import ProductCard from './ProductCard';
import AgeModal from './AgeModal';
export default {
  name: 'Home',
  props: [],
  components: {
    ProductCard,
    AgeModal
  },
  data() {
    return {
      productList: [],
      productListLoading: false,
      categories: [],
      categorySelected: '',
      subCategories: [],
      subCategorySelected: [],
      prefixedUrl: 'https://res.cloudinary.com/amusenow/w_auto,c_scale/',
      over21: null,
      ageModalDisplayed: false,
      showAgeModal: false,
      ageModalVisible: false
    }
  },
  methods: {
    reloadPage() {
      location.reload();
    },
    handleAge(overTwentyOne) {
      this.showAgeModal = false;
      this.over21 = overTwentyOne;
      this.ageModalVisible = false;
    },
    chainImage(imageUrl) {
      return this.prefixedUrl + imageUrl
    },
    resetProductList(callback) {
      this.productList = [];
    },
    filterSubCategory(subcategory) {
      this.resetProductList();
      this.subCategorySelected = subcategory;
      let filteredSubCategoryList = Products.filter(product => {
        return (product.category === this.categorySelected) && (product.sub_category === subcategory)
      })
      this.productList = filteredSubCategoryList;
    },
    filterCategory(category) {
      let filteredList;
      this.productList = [];
      this.categorySelected = category;
      filteredList = Products.filter(product => product.category === category);
      this.findSubCategories(category, filteredList)
      this.productList = filteredList;
    },
    findSubCategories(category, list) {
      let uniqueSubcategories = new Set();
      let filteredList = [];
      list.map(product => {
        uniqueSubcategories.add(product.sub_category)
      })

      for (var product of uniqueSubcategories) {
        filteredList.push(product)
      }
       this.subCategories = filteredList
    },
  },
  created() {
    let filteredCategories = []; 
    let filteredSubcategories = [];
    let uniqeCategories = new Set();
    let uniqueSubcategories = new Set();
    Products.map(product => {
      uniqeCategories.add(product.category)
    })
    for (var product of uniqeCategories) {
      filteredCategories.push(product)
    }
    for (var product of uniqueSubcategories) {
      filteredSubcategories.push(product)
    }
    this.filterCategory(filteredCategories[0])
    this.categories = filteredCategories;
  },
  mounted() {
    let that = this;
    setTimeout(() => {
      that.showAgeModal = true;
      that.ageModalDisplayed = true;
      that.ageModalVisible = true;
    }, 2000);
  },
}
</script>

<style >
@import "../assets/css/home.css";
</style>
