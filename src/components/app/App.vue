<template>
  <div id="app">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Body from '@/components/layout/Body';

export default {
  name: 'App',
  components: {
    Body,
    Header

  }
}
</script>

<style>
@import './../../assets/css/app.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
