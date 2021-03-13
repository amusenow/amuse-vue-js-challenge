<template>
  <div>
    <button v-bind:class="filterClass" @click="toggle">{{ category }}</button>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      isSelected: false,
    }
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    filterClass() {
      return this.isSelected ? 'selected' : ''
    },
  },
  methods: {
    toggle() {
      this.isSelected = !this.isSelected
      const data = {
        category: this.category,
        isSelected: this.isSelected
      }
      this.$bus.$emit('categoryFilterToggled', data)
    },
  },
}
</script>

<style scoped>
button {
  width: 100px;
  border-radius: 5px;
}
button:hover,.selected {
  border: 1px solid;
}
</style>
