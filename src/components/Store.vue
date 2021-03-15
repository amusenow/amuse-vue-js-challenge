<template>
  <div>
    <div v-if="!storeItems.length">Loading...</div>
    <div v-if="storeItems.length">
      <div>
        <h4>Category filter</h4>
        <select @change="selectCategory">
          <option value="">All</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>
      <ul key="list">
        <li v-for="item in currentPageItems" :key="item.id" class="item">
          <StoreItem :item="item" />
        </li>
      </ul>
    </div>
    <div>
      <button @click="prevPage">Previous page</button>
      <span class="pageNumber">
        {{ pagination + 1 }}
      </span>
      <button @click="nextPage">Next page</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StoreItem from "./StoreItem";

export default {
  name: "store",
  params: {
    showStore: false,
  },
  beforeMount: function () {
    const self = this;
    this.pagination = 0;

    //"quick and dirty" pagination on client only in interest of time rm
    axios
      .get("/endpoints/products.json")
      .then(function (res) {
        self.storeItems = res.data;
        self.storeItemsCache = res.data;
        //self.maxPage = Math.floor(res.data.length / 50);
        self.setCurrentItems();

        for (let i = 0; i < self.storeItems.length; i++) {
          if (self.categories.indexOf(self.storeItems[i].category.toLowerCase()) === -1) {
            self.categories.push(self.storeItems[i].category.toLowerCase());
          }
        }
      });
  },
  data: function () {
    return {
      storeItems: [],
      storeItemsCache: [],
      currentPageItems: [],
      pagination: 0,
      maxPage: 0,
      categories: [],
    };
  },
  components: {
    StoreItem,
  },
  methods: {
    setCurrentItems: function () {
      const storeItemsClone = [...this.storeItems];
      const startIndex = this.pagination * 50;
      const endIndex = startIndex + 50;
      this.currentPageItems = storeItemsClone.slice(startIndex, endIndex);
      this.maxPage = Math.floor(this.storeItems.length / 50);
      this.$forceUpdate();
    },
    prevPage: function () {
      if (this.pagination > 0) {
        this.pagination--;
        this.setCurrentItems();
      }
    },
    nextPage: function () {
      if (this.pagination < this.maxPage) {
        this.pagination++;
        this.setCurrentItems();
      }
    },
    selectCategory: function (e) {
      const newFilterVal = e.currentTarget.value;

      if (newFilterVal) {
        this.filterItems(newFilterVal);
      } else {
        this.showAll();
      }
    },
    filterItems: function (filterVal) {
      this.storeItems = this.storeItemsCache.filter(
        (item) => item.category.toLowerCase() === filterVal
      );

      this.pagination = 0; //reset
      this.setCurrentItems();
    },
    showAll: function () {
      this.storeItems = this.storeItemsCache;
      this.pagination = 0; //reset
      this.setCurrentItems();
    },
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style></style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
.item {
  display: inline-block;
  margin: 10px;
  width: 200px;
  height: 300px;
  list-style-type: none;
  vertical-align: top;
}

.pageNumber {
  margin: 0 8px;
}
</style>
