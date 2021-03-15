<template>
  <a :href="url" class="product-card-link btn">
    <b-card :img-src="imageSrc" class="product-card">
      <h4 class="flex-grow-1">{{ product.name }}</h4>
      <div>{{ product.manufacturer }}</div>
      <div v-if="product.thc_percentage">{{ product.thc_percentage }}% THC</div>
      <div class="font-weight-bold">${{ price }}</div>
    </b-card>
  </a>
</template>

<script>
import { getImageSrc } from '../helpers/getImageSrc'

export default {
  props: {
    product: { type: Object, required: true }
  },
  computed: {
    url () {
      return process.env.baseUrl + this.product.url
    },
    price () {
      return this.product.price.toFixed(2)
    },
    imageSrc () {
      return getImageSrc(this.product.image_url)
    },
  },
  methods: {
    handleClick() {
      // Use window.location instead of $router since this is going to amuse
      window.location = this.url;
    },
  }
}
</script>

<style scoped>
.product-card-link,
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
}
</style>
