<template>
  <div class="header">
    <v-app-bar app color="white" light class="elevation-0">
      <img
        alt="Amuse"
        class="header-logo mt-7"
        src="@/assets/images/logos/amuse-logo.svg"
      />
      <v-spacer></v-spacer>
      <v-badge :content="cartQty" :value="cartQty" color="green" overlap>
        <v-icon class="header-nav-icon" large>
          mdi-cart
        </v-icon>
      </v-badge>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    cartQty: 0,
  }),

  created() {
    this.$eventBus.$on("UX_EVENT:UPDATE_CART_QTY", this.updateCartHandler);
  },

  methods: {
    updateCartHandler() {
      this.cartQty += 1;
    },
  },
};
</script>
