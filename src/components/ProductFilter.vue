<template>
  <div>
    <div class="buttons">
      <button
        v-for="category in categories"
        :key="category"
        @click="updateFilter(category)"
        :class="{highlight: filtered.includes(category)}"
      >
        {{ category }}
      </button>
    </div>
        <button
        v-if="filtered.length > 0"
        @click="clearFilters"
        class="clear"
      >
        Clear Filters
      </button>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Set,
      default: []
    },
  },
  emits: ['update-filter'],
  data: () => ({
    filtered: []
  }),
  methods: {
    clearFilters() {
      this.filtered = [];
      this.$emit('update-filter', this.filtered);
    },
    updateFilter(category) {
      this.filtered.push(category);
      this.$emit('update-filter', this.filtered);
    }
  }
}
</script>

<style>
button {
  background-color: #573b7f;
  color: white;
  font-weight: 700;
  padding: 0.25rem .5rem;
  border-color: transparent;
  border-radius: .25rem;
}

.highlight {
  border-color: #f70099;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.clear {
  margin: 1rem;
}

</style>