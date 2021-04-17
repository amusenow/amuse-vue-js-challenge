<template>
  <div class="text-center space-y-2">
    <span>Page <b v-text="page"></b> of <b v-text="totalPages"></b></span>
    <div class="flex flex-row space-x-4">
      <GenericButton @click="previousPage()" :disabled="isOnFirstPage"
        ><FontAwesomeIcon icon="chevron-left"
      /></GenericButton>
      <GenericButton @click="nextPage()" :disabled="isOnLastPage"
        ><FontAwesomeIcon icon="chevron-right"
      /></GenericButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
import { updateRouteWithState } from "@/router";

export default Vue.extend({
  computed: {
    ...mapState(["page", "selectedCategories"]),
    ...mapGetters(["totalPages"]),
    isOnLastPage(): boolean {
      return this.page === this.totalPages;
    },
    isOnFirstPage(): boolean {
      return this.page === 1;
    },
  },

  methods: {
    previousPage() {
      updateRouteWithState({
        categories: this.selectedCategories,
        page: this.page - 1,
      });
    },
    nextPage() {
      updateRouteWithState({
        categories: this.selectedCategories,
        page: this.page + 1,
      });
    },
  },
});
</script>
