<template>
  <div
    :disabled="isDisabled"
    role="checkbox"
    :aria-checked="isSelected"
    tabindex="0"
    :aria-labelledby="id"
    @click="toggleSelection()"
    @keyup.space.prevent="toggleSelection()"
    class="flex flex-row space-x-2 items-center"
    :class="{ 'opacity-70 pointer-events-none': isDisabled }"
  >
    <FontAwesomeIcon :icon="isSelected ? 'check-square' : 'square'" />
    <span :id="id" v-text="name"></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { nanoid } from "nanoid";
import { updateRouteWithState } from "@/router";

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      id: nanoid(),
    };
  },

  computed: {
    ...mapState(["selectedCategories"]),
    isSelected(): boolean {
      return this.selectedCategories.includes(this.category);
    },
    isDisabled(): boolean {
      return this.isSelected && this.selectedCategories.length <= 1;
    },
    name(): string {
      return this.category[0].toUpperCase() + this.category.substring(1);
    },
  },

  methods: {
    async toggleSelection() {
      if (this.isDisabled) {
        return;
      }

      const categories: string[] = [...this.selectedCategories];
      const categoryIndex = categories.findIndex(
        (potentialMatch: string) => this.category === potentialMatch
      );

      if (categoryIndex >= 0) {
        categories.splice(categoryIndex, 1);
      } else {
        categories.push(this.category);
      }

      await updateRouteWithState({ categories });
    },
  },
});
</script>
