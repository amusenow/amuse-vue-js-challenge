<template>
  <v-app>
    <notifications class="notifications" position="bottom right" />
    <AgeVerification />
    <Header />
    <ProductFilter
      :categories="categories"
      @categorySelected="setProductCategory"
    />
    <v-main>
      <v-container>
        <v-layout row wrap>
          <v-flex
            v-for="(product, index) in filteredProducts"
            :key="index"
            d-flex
            xs12
            sm6
            md4
            class="pr-2 pl-2"
          >
            <ProductCard :product="product" />
          </v-flex>
        </v-layout>
        <v-overlay :value="isLoading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { APP_BRAND, APP_TITLE } from "@/dictionary/global-constants";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import AgeVerification from "@/components/dialog/AgeVerification.vue";
import ProductFilter from "@/components/drawer/ProductFilter.vue";
import ProductCard from "@/components/card/ProductCard.vue";
import products from "@/assets/json/placeholders/products.json";

export default {
  name: "App",

  data: () => ({
    products,
    categories: [],
    category: "extract",
    isLoading: false,
  }),

  components: {
    Header,
    Footer,
    AgeVerification,
    ProductFilter,
    ProductCard,
  },

  metaInfo: {
    title: APP_TITLE,
    titleTemplate: `%s | ${APP_BRAND}`,
  },

  computed: {
    filteredProducts() {
      return this.category === "all"
        ? this.products
        : this.products.filter((p) => {
            return p.category.toLowerCase().trim() === this.category;
          });
    },
  },

  watch: {
    filteredProducts() {
      this.isLoading = false;
    },
  },

  created() {
    this.generateProductCategories();
  },

  mounted() {
    this.$eventBus.$emit("UX_EVENT:AGE_VERIFICATION", { show: true });
  },

  methods: {
    generateProductCategories() {
      const holder = [];
      const categories = products.map((p) => p.category.toLowerCase().trim());
      categories.forEach((category) => {
        if (!holder.includes(category)) {
          holder.push(category);
        }
      });
      holder.unshift("all");
      holder.sort();
      this.categories = holder;
    },

    setProductCategory(category) {
      this.isLoading = true;
      setTimeout(() => {
        this.category = category;
      }, 750); // Artificial
    },
  },
};
</script>
