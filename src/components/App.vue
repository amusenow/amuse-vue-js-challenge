<template>
  <div id="app">
    <div class="banner">
      <img src="/al-yell.png" alt="Moore Store" class="logo" />
      <h1>Welcome to Moore Store</h1>
    </div>

    <div class="bottom">
      <div v-if="showStore">
        <Store />
      </div>
      <div v-if="!showStore">
        <div class="ageGate">Are you 21 or older?</div>
        <button @click="navToStore">Yes</button>
        <button @click="navAway">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Store from "./Store";

//http://localhost:4000/endpoints/products.json

export default {
  name: "app",
  data: function () {
    return {
      showStore: false,
    };
  },

  components: {
    Store,
  },
  methods: {
    navAway: function () {
      window.location.href = "http://www.pokemon.com";
    },
    navToStore: function () {
      this.showStore = true;
    },
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e8e8e4;
  border-color: #fec89a;
  color: #264653;
}

button,
select {
  background-color: #d8e2dc;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #264653;
  font-size: 16px;
}
</style>

<!-- Scoped component css -->
<style scoped>
.ageGate {
  padding-bottom: 10px;
}
#app {
  text-align: center;
}

#app h1 {
  color: #2c3e50;
  font-weight: 300;
  margin: 0;
}

.banner {
  height: 200px;
  background-color: #f6f6f6;
  padding: 50px 10px;
}

.bottom {
  padding: 80px 10px;
  font-size: 24px;
  font-weight: 300;
}

.fade {
  font-size: 14px;
}

.logo {
  max-width: 200px;
  max-height: 200px;
}
</style>
