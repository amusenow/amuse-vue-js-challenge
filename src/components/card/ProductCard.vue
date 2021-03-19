<template>
  <v-card class="product-card mx-auto my-12 d-flex flex-column" width="374">
    <v-img height="250" :src="productImage"></v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="fakeRating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{ fakeRating }} ({{ fakeReviews }})</div>
      </v-row>

      <div class="my-4 subtitle-1">
        <span class="font-weight-bold display-1">$ {{ product.price }}</span>
        {{ product.category }} ({{ product.sub_category }})
        <br />
        <span class="font-weight-light text-decoration-underline">
          {{ product.manufacturer }}</span
        ><br />
        <span class="caption">{{
          product.quantity > 0 ? "In Stock" : "Out Of Stock"
        }}</span>
      </div>

      <v-chip small v-if="product.is_cannabis === 1" class="mr-1">
        <span class="font-weight-bold">Cannabis</span>
      </v-chip>
      <v-chip small v-if="product.thc_percentage > 0">
        <span class="font-weight-bold pr-1"
          >THC % {{ product.thc_percentage }}</span
        >
      </v-chip>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-spacer></v-spacer>

    <v-card-actions>
      <v-btn text class="text-capitalize" @click="moreInfo()">
        More Info
      </v-btn>
      <v-btn text class="text-capitalize" @click="addToCart()">
        Add To Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    failedImage: false,
  }),

  computed: {
    productImage() {
      return this.product.image_url === ""
        ? "https://amuse.com/dist/amuse-sharing.jpg"
        : `https://res.cloudinary.com/amusenow/w_250,f_auto,q_auto/${this.product.image_url}`;
    },

    fakeRating() {
      return Math.floor(Math.random() * 5 + 1);
    },

    fakeReviews() {
      return Math.floor(Math.random() * 1000 + 1);
    },
  },

  methods: {
    moreInfo() {
      window.open(`https://amuse.com${this.product.url}`, "_blank");
    },

    addToCart() {
      this.$eventBus.$emit("UX_EVENT:UPDATE_CART_QTY");
      this.$notify({
        type: "success",
        title: this.product.name,
        text: "Item added to cart!",
      });
    },
  },
};
</script>
