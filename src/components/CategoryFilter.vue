<template>
    <div class="filter-container flex-shrink-0 p-4">
        <h1 class="text-xl pb-2">Categories</h1>
        <div>
            <input @change="setQuery()" value="merch" v-model="categories" type="checkbox" id="merch" name="merch">
            <label for="merch"> Accessories</label>
        </div>
        <div>
            <input @change="setQuery()" value="extract" v-model="categories" type="checkbox" id="extract" name="extract">
            <label for="extract"> Concentrates</label>
        </div>
        <div>
            <input @change="setQuery()" value="pill" v-model="categories" type="checkbox" id="pill" name="pill">
            <label for="pill"> Pills</label>
        </div>
        <div>
            <input @change="setQuery()" value="edible" v-model="categories" type="checkbox" id="Edible" name="Edible">
            <label for="Edible"> Edibles</label>
        </div>
        <div>
            <input @change="setQuery()" value="topical" v-model="categories" type="checkbox" id="Topical" name="Topical">
            <label for="Topical"> Topicals</label>
        </div>
        <div>
            <input @change="setQuery()" value="preroll" v-model="categories" type="checkbox" id="Preroll" name="Preroll">
            <label for="Preroll"> Pre Rolls</label>
        </div>
        <div>
            <input @change="setQuery()" value="flower" v-model="categories" type="checkbox" id="Flower" name="Flower">
            <label for="Flower"> Flower</label>
        </div>
        <div>
            <input @change="setQuery()" value="cartridge" v-model="categories" type="checkbox" id="Cartridge" name="Cartridge">
            <label for="Cartridge"> Vape Pens</label>
        </div>
        <div>
            <input @change="setQuery()" value="tincture" v-model="categories" type="checkbox" id="Tincture" name="Tincture">
            <label for="Tincture"> Tinctures</label>
        </div>
        <div>
            <input @change="setQuery()" value="beverage" v-model="categories" type="checkbox" id="Beverage" name="Beverage">
            <label for="Beverage"> Beverages</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoryFilter",
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        if(this.$route?.query.categories) {
            let queryCategories = this.$route.query.categories.split(',')
            this.categories = queryCategories
        }
    },
    methods: {
        setQuery() {
            let query='';

            this.categories.forEach((category, index) => {
                index == 0 ? query += category : query += `,${category}`;
            })

            if(query.length) {
                this.$router.push({ query: { categories: query } });
            } else {
                this.$router.push({ query: {} });
            }
        }
    }
}
</script>