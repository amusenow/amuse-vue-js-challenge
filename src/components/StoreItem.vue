<template>
  <div>
      {{item.name}}
  </div>
</template>

<script>


  export default {
    name: 'store',
    props: ['item'],
    data: function () {
      return {
         
      }
    },
    components: {
      
    },
    methods: {
     
    }
  }
</script>


<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  
</style>
