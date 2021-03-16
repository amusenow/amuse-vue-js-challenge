<template>
  <div class="card">
      <div class="card-body m-2">
        <div class="card-image">
            <img :src="'https://res.cloudinary.com/amusenow/w_auto,c_scale/'+ data.image_url" loading="lazy" >
        </div>
        <div class="px-1 pb-1">
            <div class="d-flex space-between">
                <div class="pr-2 mb-2">
                    <h3 class="mb-1">{{data.name}}</h3>
                    <p class="brand">{{data.manufacturer}}</p>
                </div>
                <div class="font-size-2">
                    ${{data.price}}
                </div>
            </div>
            <a :href="'https://amuse.com'+ data.url" class="btn">View details</a>
        </div>
      </div>
  </div>
</template> 
  
<script> 
export default {
    props: ['data']
} 
</script>

<style scoped>
    .card{
        width: 100%;
    }
    @media (min-width: 768px) {
        .card {
            width: 50%;
        }
    }
    @media (min-width: 1200px) {
        .card {
            width: 30%;
        }
    }
    .card-image{
        min-height: 250px;
        min-width: 250px;
    }
    .card-body{
        box-shadow: 5px 5px 7px 1px #d6d6d6;
    }
    .brand{
        display: inline;
        background: #424242;
        color: white;
        padding: 2px 7px;
        border-radius: 6%;
        font-size: 0.8rem;
    }
</style>