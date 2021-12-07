<template>
    <div class="categories container d-flex flex-row justify-content-center align-items-center pb-4">
        <h4>Category:</h4>
        <b-dropdown id="dropdown-1" :text="currentCategory" class="m-md-2">
          <b-dropdown-item v-for="(category, index) in categories"
            @click="updateCategory(category)"
            :key="index"
            :value="category">{{category}}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
  name: 'CategorySelect',
  props: {
    categories: Array,
    currentCategory: String
  },
  methods: {
    updateCategory(category) {
      this.$emit('updateCategory', category)
    }
  }
}
</script>

<style scoped>

</style>