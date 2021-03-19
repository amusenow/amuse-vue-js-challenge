<template>
  <div class="product-filter">
    <v-navigation-drawer permanent :expand-on-hover="$vuetify.breakpoint.mobile" app dark>
      <v-list nav>
        <v-subheader class="pl-1">Categories</v-subheader>
        <v-list-item-group color="#f70099" v-model="selectedCategory">
          <v-list-item
            v-for="(category, i) in categories"
            :key="i"
            @click="$emit('categorySelected', category)"
          >
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold text-capitalize">{{
                category
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",

  data: () => ({
    selectedCategory: 4
  }),

  props: {
    categories: {
      type: Array,
      required: true,
    },
  }
};
</script>
