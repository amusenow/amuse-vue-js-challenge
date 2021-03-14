<template>
    <div class="container mx-auto px-4 md:px-12">
        <div class="flex sm:flex-col md:flex-row flex-wrap -mx-1 lg:-mx-4">
            <template v-for="(product, index) in filteredProducts">
                <card v-if="index <= maxResults" :product="product" :key="product.entity_id"/>
            </template>
        </div>

        <button data-q-view-more v-if="filteredProducts.length > maxResults" class="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4" @click="viewMore">VIEW MORE</button>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import products from '@/assets/products.json'
export default {
    name: "CardContainer",
    components: {Card},
    data() {
        return {
            products: products,
            maxResults: 20
        }
    },
    computed: {
        categories() {
            if(this.$route.query.categories) {
                let categories = this.$route.query.categories.split(',')
                return categories
            } else {
                return []
            }
        },
        filteredProducts() {
            return this.categories.length ? this.products.filter(product => this.categories.includes(product.category.toLowerCase())) : this.products;
        },
    },
    methods: {
        viewMore() {
            this.maxResults += 20;
        }
    }
}
</script>

