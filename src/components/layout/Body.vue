<template>
  <div class="body">
    <products/>
  </div>
</template>

<script>
import Products from '@/components/views/Products';

export default {
  name: "Body",
  components:{
    Products
  }
}
</script>

<style scoped>
.body{
  padding: 8px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
