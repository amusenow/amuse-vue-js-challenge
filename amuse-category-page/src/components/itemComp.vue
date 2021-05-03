<template>
  <div class="card">
      <h1>{{items.name}}</h1>
      <img :src="dynamicImg" >
      <a :href="dynamicUrl">  {{dynamicUrl}} </a>
  </div>
</template>

<script>
export default {
props: ['items'],
data(){
    return{}
},
computed: {
    dynamicImg(){
        return `https://res.cloudinary.com/amusenow/w_auto,c_scale/${this.items.image_url}`
    } ,
    dynamicUrl(){
        return  `https://amuse.com/${this.items.url}`
    }
}
}
</script>

<style>
.card{
    background-color: rgba(248, 248, 246, 0.13);
    border-radius: 20px;
    padding: 1em;
    box-shadow: 2px 2px 2px 2px rgba(114, 145, 114, 0.541);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    font-weight: normal;
    font-size: 1.5em;
}

img{
    width: 10em;
}
</style>