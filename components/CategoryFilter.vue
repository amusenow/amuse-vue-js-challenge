<template>
  <div class="flex">
    <Category
      v-for="category in categories"
      :key="category"
      :category="category"
      class="padded"
    />
  </div>
</template>

<script>
export default {
  name: 'CategoryFilter',
  data() {
    return {
      activeFilters: []
    }
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.$bus.$on('categoryFilterToggled', this.updateFilters)
  },
  methods: {
    updateFilters({ category, isSelected }) {
      if (isSelected) {
        this.activeFilters = [...this.activeFilters, category]
      } else {
        this.activeFilters = this.activeFilters.filter(
          (val) => val !== category
        )
      }
      this.$bus.$emit('filtersUpdated', this.activeFilters)
    },
  },
}
</script>
.padded { margin: 20px; }
<style scoped></style>
