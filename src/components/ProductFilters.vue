<template>
    <div>
        <p class="text-2xl text-gray-500">Filters</p>
        <span class="relative z-0 inline-flex shadow-sm rounded-md" v-for="category in categories">
            <button v-on:click='filterProducts(category)'
                    type="button"
                    v-bind:class="{ 'activeFilter': category === activeFilter }"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {{ category }}
            </button>
        </span>
    </div>
</template>
<style>
    .activeFilter, .activeFilter:hover {
      background-color: rgba(31, 41, 55);
      color: white;
    }
</style>
<script>
    import { mapState } from 'vuex'
    import products from "../../products.json";
    export default {
        computed: {
            ...mapState([
                'categories',
                'activeFilter'
            ])
        },
        methods: {
            filterProducts(category) {
                if (this.activeFilter === category) {
                    category = null;
                }

                this.$store.commit('SET_FILTER', category);
            }
        }
    }
</script>