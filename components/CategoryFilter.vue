<template>
  <div class="p-1 text-left">
    <h3>
      Categories
    </h3>
    <b-list-group>
      <b-list-group-item
        v-for="category of categories"
        :key="category"
        :active="selected.includes(category)"
        class="text-capitalize"
        @click="toggle(category)"
      >
        {{ category }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { getCategories } from '../helpers/api'
export default {
  props: {
    value: { type: String, default: undefined }
  },
  data: () => ({
    categories: []
  }),
  computed: {
    selected () {
      return this.$route.query.categories ?? []
    }
  },
  async created () {
    // TODO: Load categories normally.
    this.categories = await getCategories()
  },
  methods: {
    toggle (category) {
      const categories = this.selected.includes(category)
        ? this.selected.filter(c => c !== category)
        : [...this.selected, category]

      this.$router.push({ query: { categories } })
    }
  }
}
</script>
