<template>
    <div class="product-card text-left">
      <b-card
        :title="product.sku"
        :img-src="imageUrl(product.image_url)"
        :img-alt="product.sku + ' - ' + product.manufacturer"
        img-top
        style="max-width: 20rem;"
        class="mb-3 h-100"
      >
        <b-card-text>
          <h5>{{product.name}}</h5>
          <h6>{{product.manufacturer}}</h6>
          <h3>{{toCurrency(product.price)}}</h3>
        </b-card-text>

        <b-button :href="product.url" variant="primary">Purchase</b-button>
      </b-card>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    toCurrency (price) {
      if (typeof price !== "number") {
        return price;
      }
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return formatter.format(price);
    },
    imageUrl (image) {
      if (!image) {
        return 'https://via.placeholder.com/150'
      }
      return 'https://res.cloudinary.com/amusenow/' + image
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: .75rem;
}
h3 {
  color: #573B7F;
}
p {
  font-size: 1rem;
}
</style>