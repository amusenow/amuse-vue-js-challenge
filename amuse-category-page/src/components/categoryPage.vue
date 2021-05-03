<template>
  <div class="app">
      <h2>Products</h2>
       <!-- use custom radio component more optimal -->
        <ul class="radioContainer">
          <li v-for="(category,index) in categories" :key="index">
            <input v-model="selected" type="radio" name="shopType"  :value="category">
            <label for="category">{{category}}</label>
          </li>
        </ul>
      <ul class="productsContainer">
        <li v-for="(item,index) in itemFilter" :key="index">
          <itemComp :items="item"></itemComp>
        </li>
      </ul>
  </div>
</template>

<script>
import products from "@/components/products.json"
import itemComp from "@/components/itemComp.vue"
//import radioComp from "@/components/radioComp.vue"
export default {
components:{
  itemComp,
 // radioComp

},
  data(){
    return{
      items: products,
      selected: null
    }
  },
  computed:{
    categories(){
      let productItem = this.items;
      const uniqueItem = Array.from(
        new Set(productItem.map((item) => item.category))
      );
    const capFix = uniqueItem.map(item => item.charAt(0).toUpperCase() + item.slice(1)) 
    const results = capFix.filter((item,index,arr)=>{
     return arr.indexOf(item) === index
    })
    return results
    },
    itemFilter(){
       const allItems = this.items;
      const filteredItems = this.items.filter(
        (val) => val.category === this.selected
      );
      
      return (this.selected === null ? allItems : filteredItems)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



ul{
  list-style-type: none;
}

.productsContainer{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-gap: 2em;
}

.radioContainer{
  display: flex;
  justify-content: space-around;
}

</style>
