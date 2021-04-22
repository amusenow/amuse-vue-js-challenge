<template>
  <div>
    <p class="name">
      {{ product.name }}
      <span class="price">${{ Number.parseFloat(product.price).toFixed(2) }}</span>
    </p>
    <small>Supplied by: {{ product.manufacturer }}</small>
    <img :src="`${imgURL}${product.image_url}`" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: {}
    },
  },
  data: () => ({
    appURL: 'https://amuse.com',
    imgURL: 'https://res.cloudinary.com/amusenow/w_auto,c_scale/',
  }),
}
</script>

<style scoped>
div {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 6px 7px 18px -9px rgba(0,0,0,0.75);
  transition-duration: .3s;
  transition-timing-function: ease-out;
}

div:hover {
  transform: rotate(3deg);

}

div:hover:nth-child(odd) {
  transform: rotate(-3deg);
}

.name {
  font-weight: 700;
  font-size: calc(.5rem + 1vw);
  width: 100%;
  text-overflow: ellipsis;
}

.price {
  font-weight: 100;
  font-size: .75rem;
}

small {
  font-weight: 500;
}

img {
  height: 200px;
  margin: .5rem auto;
  border-radius: 15px;
  display: block;
  box-shadow: 6px 7px 18px -9px rgba(0,0,0,0.75);
  transition-duration: .3s;
  transition-timing-function: ease-out;
}

img:hover {
  transform: rotate(5deg);

}

img:hover:nth-child(even) {
  transform: rotate(-5deg);
}

</style>