<template>
  <div class="product-container">
    <a class="product-card" :href="productUrl">
      <div class="image-container">
        <img class="image" :src="image" alt="product image">
      </div>
      <div class="details">
        <div class="price-container">
          <div class="thc-percentage">{{ product.thc_percentage }}% THC</div>
          <div class="price">${{ product.price }}</div>
        </div>
        <div class="title" :style="{color:randomColor}">{{ product.name }}</div>
        <div class="manufacturer">by {{ product.manufacturer }}</div>
      </div>
    </a>
  </div>
</template>

<script>
import {getRandomColor} from '@/utils/randomColor';

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  computed: {
    image: function () {
      return `https://res.cloudinary.com/amusenow/w_300,c_scale/${this.product.image_url}`;
    },
    productUrl: function () {
      return `https://amuse.com${this.product.url}`;
    },
    randomColor: function () {
      return getRandomColor(this.product.entity_id);
    }
  }
}
</script>

<style scoped>

.product-container {
  display: flex;
  flex: 1;
  margin: 1rem 2rem;
}

.product-card {
  color: #262626;
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: pointer;
  width: 300px;
  max-width: 300px;
  text-align: center;
  text-decoration: none;
}

.details {
  border-radius: 0.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
}

.details div {
  margin-bottom: 0.5rem;
}

.image {
  display: block;
  width: 100%;
}

.image-container {
  padding: 1rem;
}

.price-container {
  display: flex;
  justify-content: stretch;
}

.price {
  flex: 1;
  text-align: right;
  font-weight: 700;
  font-size: 1rem;
}

.thc-percentage {
  font-size: 1rem;
  color: #5d5d5d;
}

.title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.25rem;
  flex: 1;
}

.manufacturer {
  text-align: right;
}

</style>
