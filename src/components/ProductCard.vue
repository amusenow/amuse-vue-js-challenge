<template>
  <div class="product_card">
    <div class="padding">
      <img class="image":src="product_image"/>
      <div class="content">
        <p class="price">${{price}}</p>
        <p class="name">{{name}}</p>
        <p>{{manufacturer}}</p>
        <p v-if="thc_percent">THC Content: {{thc_percent}}%</p>
        <button class="out_of_stock" v-if="isOutOfStock(quantity)">Sold Out</button>
        <button class="add_to_cart" v-else>Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    name: String,
    price: Number,
    product_image: String,
    quantity: Number,
    thc_percent: Number,
    manufacturer: String
  },
  methods: {
    isOutOfStock(quantity) {
      return quantity > 0;
    }
  },
}
</script>

<style >
@import "../assets/css/productCard.css";
</style>
