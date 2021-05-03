<template>
  <div class="items-filter">
    <v-card
      height="400"
      width="256"
      class="mx-auto">

      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <h4>Filter By</h4>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <div>
            <h5>Category</h5>
            <v-checkbox
              color="deep-purple"
              hide-details dense
              v-model="selected"
              v-for="item in items"
              :key="`category-filter__${item}`"
              :label="item"
              :value="item"
              @change="listUpdated" />
          </div>
        </v-list-item>

      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'items-filter',

    props: {
      items: {
        type: Array,
        required: false,
        default: null
      }
    },

    data: () => ({
      selected: []
    }),

    methods: {
      listUpdated () {
        this.$emit('updated', this.selected)
      }
    }
  }
</script>

<style lang="scss">

</style>
