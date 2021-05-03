<template>
  <div class="product-card">
    <div
      class="product-card__img"
      @click="loadProduct()">
      <v-img
        width="75"
        :lazy-src="require('@/assets/no-image-icon-thumb.png')"
        :src="cardImage"
        @error="imageLoad_OnError"></v-img>
    </div>

    <div
      class="product-card__info">
      <small>{{ manufacturer }}</small>
      <h4>{{ title }}</h4>
      <p><v-chip small>{{ subCat }}</v-chip></p>
      <small><b>THC:</b> {{ formattedPercentage }}</small>
    </div>

    <div class="product-card__actions">
      <v-btn
        dark
        color="deep-purple"
        @click="addToCart">
        <v-icon small>add</v-icon> {{ formattedPrice }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid-card',

  props: {
    manufacturer: {
      type: String,
      require: false,
      default: null
    },

    title: {
      type: String,
      required: true,
      default: null,
    },

    subCat: {
      type: String,
      required: false,
      default: null
    },

    percentage: {
      type: [String, Number],
      required: false,
      default: null
    },

    imgUrl: {
      type: String,
      required: true,
      default: null
    },

    price: {
      type: Number,
      required: false,
      default: null
    },

    loadItemCallback: {
      type: Function,
      required: false,
      default: null
    },

    addItemCallback: {
      type: Function,
      required: false,
      default: null
    }

    /* Amuse - Alternatively I would pass the entire data obj, however I think passing
     * specific props increases transparency of which props are being used
     */

    /* data: {
      type: Object,
      required: false,
      default: null
    } */
  },

  data: () => ({
    imageLoadFailed: false
  }),

  computed: {
    cardImage () {
      return !this.imageLoadFailed
        ? `${AMUSE_APP_IMG_SERVER_PREFIX}/w_100,c_scale/${this.imgUrl}`
        : require('@/assets/no-image-icon-thumb.png')
    },

    formattedPercentage () {
      return this.percentage ? `${parseFloat(this.percentage)}%` : ''
    },

    formattedPrice() {
      return this.price ? `$${this.price.toFixed(2)}` : null
    }
  },

  methods: {
    loadProduct (item) {
      // Or I would use an `$emit`, though I prefer the callback syntax
      if (this.loadItemCallback) this.loadCallBack(item)
    },

    addToCart (item) {
      // Or I would use an `$emit`, though I prefer the callback syntax
      if (this.addItemCallback) this.addItemCallback(item)
    },

    imageLoad_OnError () {
      this.imageLoadFailed = true
    }
  }
}
</script>

<style lang="scss">
  .product-card {
    display: flex;

    .product-card__img {
      margin: {
        right: 1rem;
      }
    }

    .product-card__info {
      flex: 1;
    }

    .product-card__actions {
      right: 0;
      padding: {
        top: 1rem;
      }
    }
  }
</style>
