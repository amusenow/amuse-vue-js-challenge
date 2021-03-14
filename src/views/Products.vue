<template>
<div class="products-container">
    <div class="container flex">
        <category-filter />
        <card-container />
    </div>
    
    <age-gate data-q-age-gate v-if="!isOfAge" @dismiss="isOfAge = !isOfAge"/>
</div>
</template>

<script>
import CategoryFilter from '@/components/CategoryFilter.vue';
import CardContainer from '@/components/CardContainer.vue';
import AgeGate from '@/components/AgeGate.vue';

export default {
    name:"Products",
    components: { CategoryFilter, CardContainer, AgeGate },
    data() {
        return {
            isOfAge: false
        }
    },
    mounted() {
        if (localStorage.isOfAge) {
            this.isOfAge = localStorage.isOfAge;
        }
    },
}
</script>