<template>
  <div class="header">
    <div class="header-size">
      <div class="header-left">
        <img class="header-logo" src="/logo.png"/>
        Eduardo's Emporium of Delectable Delights
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}
.header {
  display: flex;
  padding: 8px;
  margin-bottom: 2rem;
  background: #56822a;
  color: white;
}
.header-size {
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
}
.header-left {
  font-size:1.5rem;
  flex: 1;
  text-align: left;
  font-weight: 700;
}
.header-right {
  flex: 1;
  text-align: right;
}
.header-logo{
  max-width: 30px;
}
</style>
