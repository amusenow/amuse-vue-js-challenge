<template>
  <div class="grid grid-cols-3 gap-4">
    <ProductOverview
      v-for="product in products"
      :key="product.entity_id"
      :product="product"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductListings',
  props: ['products'],
}
</script>

<style scoped>
</style>
