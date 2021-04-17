<template>
  <div id="app" class="p-4 max-w-screen-xl">
    <AgeGate />
    <LoadingIndicator v-if="loading" />
    <ErrorMessage v-else-if="error" :error="error" />
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AgeGate from "./components/AgeGate.vue";
import { mapState } from "vuex";
import ErrorMessage from "./components/ErrorMessage.vue";
import LoadingIndicator from "./components/LoadingIndicator.vue";
import router from "./router";

export default Vue.extend({
  created() {
    this.$store.dispatch("init", {
      categories: router.currentRoute.query.categories,
      page: Number(router.currentRoute.query.page || 1),
    });
  },

  computed: {
    ...mapState(["error", "loading"]),
  },

  components: {
    AgeGate,
    ErrorMessage,
    LoadingIndicator,
  },
});
</script>
