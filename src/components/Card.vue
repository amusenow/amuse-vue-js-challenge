<template>
  <div class="card">
    <a :href="'https://amuse.com' + product.url">
      <img
        class="card__img"
        :src="'https://res.cloudinary.com/amusenow/c_pad,h_300,w_300/' + product.image_url"
        :srcset="imageSrcset"
        sizes="(min-width:1200px) 300w, (max-width: 768px) 50vw, 25vw"
        width="300"
        height="300"
        loading="lazy"
      />
      <div class="card__details">
        <div class="card__title">{{ product.name }}</div>
        <div class="card__brand">{{ product.manufacturer }}</div>
        <div class="card__price">${{ product.price.toFixed(2) }}</div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['product'],
    data() {
      return {
        sizes: [200, 250, 350, 384, 400]
      };
    },
    computed: {
      imageSrcset() {
        let html = ``;
        this.sizes.forEach(size => {
          html += `https://res.cloudinary.com/amusenow/c_pad,h_${size},w_${size}/${this.product.image_url} ${size}w,`;
        });
        return html;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
  .card {
    box-shadow: 0px 3px 11px -8px #585858;
    border-radius: 5px;
    transition: transform 0.35s linear, box-shadow 0.55s linear;
  }

  .card__details {
    padding: 10px;
  }

  .card__title {
    font-size: 1.2em;
  }

  .card__img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    transition: filter 0.35s ease-in;
  }
  @media (min-width: 769px) {
    .card:hover {
      transform: scale(1.005);
      box-shadow: 0px 2px 19px -9px #585858;
    }
    .card__img:hover {
      filter: blur(2px);
    }
  }
  .card__price {
    font-weight: 600;
    font-size: 1.25em;
  }
</style>
