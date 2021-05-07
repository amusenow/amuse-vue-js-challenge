<template>
  <div>
    Category:
    <select v-model="category">
      <option value="">ALL</option>
      <option
          v-for="(value, category) in this.categories"
          :key="category"
          :value="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  props: {

  }
}
</script>

<style scoped>

</style>
