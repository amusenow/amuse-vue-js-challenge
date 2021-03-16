<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded overflow-hidden shadow-lg" v-for="product in productsList">
            <img class="w-full" v-bind:src="'https://res.cloudinary.com/amusenow/w_auto,c_scale/' + product.image_url" alt="Mountain">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    <a v-bind:href="'https://amuse.com' + product.url">{{ product.name }}</a>
                </div>
                <p class="text-gray-700 text-base">
                    {{ product.manufacturer }}
                </p>
                <span class="text-4xl font-extrabold text-gray-900">${{ product.price }}</span>
            </div>
<!--            <div class="relative h-32 w-100">-->
<!--                <div class="absolute inset-x-0 bottom-0 h-16">-->
<!--                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.category }}</span>-->
<!--                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.sub_category }}</span>-->
<!--                </div>-->
<!--            </div>-->
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.category }}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.sub_category }}</span>
            </div>
        </div>

        <button @click='limit += pagination_limit' type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Load more
        </button>
    </div>
</template>
<script>
import { mapState } from "vuex";
import products from '../../products.json'

const PAGINATION_AMOUNT = 12;
export default {
    computed: {
        ...mapState([
            'products'
        ]),
        productsList(){
            console.log('productsList', this.products);
            return this.products.slice(0, this.limit)
        }
    },
    data(){
        return {
            limit: 24,
            pagination_limit: PAGINATION_AMOUNT
        }
    },
    mounted(){
        this.$store.commit('LOAD_PRODUCTS', products);
    }
}
</script>