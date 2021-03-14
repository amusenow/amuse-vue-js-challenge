<template>
  <div id="app">
    <div class="banner">
      <img
        src="https://vuejs.org/images/logo.png"
        width="100"
        alt="vue"
        class="logo"
      />
      <h1>Welcome to Moore Store</h1>
    </div>

    <div class="bottom">
      <div v-if="showStore">
        <Store  />
      </div>
      <div v-if="!showStore">
        Are you 21 or older?
        <button @click="navToStore">
          Yes
        </button>
        <button @click="navAway">
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Store from './Store'

//http://localhost:4000/endpoints/products.json

  export default {
    name: 'app',
    data: function () {
      return {
         showStore: false
      }
    },

    components: {
      Store
    },
    methods: {
      navAway: function() {
        window.location.href = 'http://www.pokemon.com'
      },
      navToStore: function() {
        this.showStore = true
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
<style scoped>
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
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>
