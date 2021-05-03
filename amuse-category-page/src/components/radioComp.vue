<template>
  <div class="radio">
      <input type="radio" name="productType"  />
      <label for="productType">{{category}}</label>
  </div>
</template>

<script>
export default {
props:['category', 'value']
}
</script>

<style>

</style>