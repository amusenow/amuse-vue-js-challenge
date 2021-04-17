<template>
  <a
    :href="productURL"
    class="rounded bg-gray-100 p-4 text-sm flex flex-col hover:bg-gray-200"
  >
    <img
      :src="imageURL"
      v-if="imageURL"
      class="rounded-full h-32 xl:h-40 mx-auto mb-4"
    />
    <FontAwesomeIcon
      v-else
      icon="cannabis"
      class="text-7xl text-gray-300 mx-auto mb-4 mt-8 xl:mt-6 xl:text-8xl"
    />

    <div
      class="flex flex-row items-start justify-between space-x-2 mb-4 mt-auto"
    >
      <div class="w-full">
        <h3 class="font-bold" v-text="product.name"></h3>
        <h4 class="font-medium text-xs" v-text="product.manufacturer"></h4>
      </div>
      <div>
        <FontAwesomeIcon
          icon="cannabis"
          v-if="product.is_cannabis"
          class="text-green-700 text-xl opacity-70"
        />
      </div>
    </div>

    <strong
      class="text-green-700 font-bold text-lg mb-2"
      v-text="price"
    ></strong>

    <div
      class="flex flex-row space-x-2 text-xs items-center justify-between w-full"
    >
      <code class="text-xs" v-text="product.sku"></code>
      <div class="flex flex-row items-center space-x-2">
        <span
          class="text-xs"
          v-text="`${product.thc_percentage}% THC`"
          v-if="product.thc_percentage"
        ></span>
        <button
          class="bg-gray-300 p-2 leading-none rounded-sm hover:bg-gray-400"
          v-text="product.category"
          @click.stop.prevent="restrictCategory()"
        ></button>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { updateRouteWithState } from "@/router";
import { Product } from "@/types";
import Vue from "vue";

export default Vue.extend({
  props: {
    product: {
      required: true,
      type: Object as () => Product,
    },
  },

  computed: {
    imageURL(): string | null {
      if ((this.product.image_url || "").trim().length === 0) {
        return null;
      }

      return `https://res.cloudinary.com/amusenow/w_auto,c_scale,h_200/${this.product.image_url.trim()}`;
    },

    productURL(): string {
      return `https://amuse.com${this.product.url}`;
    },

    price(): string {
      return new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
      }).format(this.product.price);
    },
  },

  methods: {
    restrictCategory() {
      updateRouteWithState({
        categories: [this.product.category.trim().toLowerCase()],
      });
    },
  },
});
</script>
