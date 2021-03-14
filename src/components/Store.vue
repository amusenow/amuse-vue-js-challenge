<template>
  <div>
      <h1>
        Welcome to the Moore Store!
      </h1>
      <div v-if="!storeItems.length">
        Loading...
      </div>
      <div v-if="storeItems.length">
        <ul>
          <li v-for="item in currentPageItems" :key="item.id">
            <StoreItem :item="item" />
          </li>
        </ul>
      </div>
      <div>
        <button @click="prevPage">
          Previous page
        </button>
        <button @click="nextPage">
          Next page
        </button>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import StoreItem from './StoreItem'

  export default {
    name: 'store',
    params: {
      showStore: false
    },
    beforeMount: function () {
      const self = this;
      this.pagination = 0;

      //"quick and dirty" pagination on client only in interest of time rm
      axios.get('http://localhost:4000/endpoints/products.json').then(function(res) {
        console.log(res.data)
        self.storeItems = res.data;
        self.maxPage = Math.floor(res.data.length/50);
        self.setCurrentItems();
      })
    },
    data: function () {
      return {
         storeItems: [],
         currentPageItems: [],
         pagination: 0,
         maxPage: 0
      }
    },
    components: {
      StoreItem
    },
    methods: {
      setCurrentItems: function() {
        const storeItemsClone = [...this.storeItems];
        const startIndex = this.pagination * 50;
        const endIndex = startIndex + 50;
        this.currentPageItems = storeItemsClone.slice(startIndex, endIndex);
      },
      prevPage: function() {
        if (this.pagination > 0) {
          this.pagination--;
          this.setCurrentItems();
        }
      },
      nextPage: function() {     
        if (this.pagination < this.maxPage) {
          this.pagination++;
          this.setCurrentItems();
        }
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  
</style>
