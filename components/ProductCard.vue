<template>
  <a :href="url" class="btn">
    <b-card :img-src="imageSrc">
      <div class="font-weight-bold">{{ product.name }}</div>
      <div>{{ product.manufacturer }}</div>
      <div v-if="product.thc_percentage">{{ product.thc_percentage }}% THC</div>
      <div>${{ price }}</div>
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
