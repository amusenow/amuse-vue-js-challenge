<template>
  <div class="flex flex-row space-x-6">
    <!-- category listing -->
    <div>
      <div
        class="sticky top-0 space-y-4"
        style="padding-top: 1rem; margin-top: -1rem"
      >
        <div>
          <CategoryToggle
            v-for="category in categories"
            :key="category"
            :category="category"
          />
        </div>

        <GenericButton
          class="text-sm"
          @click="selectAllCategories()"
          :disabled="allCategoriesAreSelected"
          >Select All</GenericButton
        >

        <TeenyPaginator />
      </div>
    </div>
    <!-- product cards -->
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <product-card
        v-for="product in currentPageOfProducts"
        :product="product"
        :key="`${product.entity_id}-${product.sku}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { updateRouteWithState } from "@/router";
import store from "@/store";
import Vue from "vue";
import { mapGetters } from "vuex";
import CategoryToggle from "../components/CategoryToggle.vue";
import TeenyPaginator from "../components/TeenyPaginator.vue";

export default Vue.extend({
  name: "Home",
  /**
   * Ensure that as the vue-router dispatches route changes, the state information
   * embedded in the query string is applied to the state store.
   *
   * It's important to note that toggling a category or moving between pages is
   * NOT directly applied to the Vuex state store. Instead those actions affect
   * the query string through via a `.push({ path: ..., query: ... })` call against
   * the router.
   *
   * This lets users use the browser back & and forward buttons to move between
   * previous pages and category filter combinations as they would expect.
   */
  async beforeRouteUpdate(to, from, next) {
    await store.dispatch("syncQueryString", {
      categories: to.query.categories,
      page: to.query.page || 1,
    });
    next();
  },
  computed: {
    ...mapGetters([
      "categories",
      "currentPageOfProducts",
      "allCategoriesAreSelected",
    ]),
  },
  methods: {
    async selectAllCategories() {
      await updateRouteWithState({ categories: this.categories });
    },
  },
  components: {
    CategoryToggle,
    ProductCard,
    TeenyPaginator,
  },
});
</script>
