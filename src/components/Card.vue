<template>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div class="overflow-hidden rounded-lg shadow-lg">
                <a :href="`https://amuse.com${product.url}`">
                    <img v-if="product.image_url" :alt="product.name" class="block h-auto w-full" :src="`https://res.cloudinary.com/amusenow/w_auto,c_scale/${product.image_url}`">

                    <div v-else class="text-center align-middle leading-10 block h-80 w-full bg-blue-900 text-white">Image not available</div>
                </a>

                <header class="flex flex-col text-left justify-start leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" :href="`https://amuse.com${product.url}`">
                            {{product.name}}
                        </a>
                    </h1>
                    <p class="pt-4">{{product.thc_percentage}}</p>
                    <p>{{product.manufacturer}}</p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4 md:pt-0">
                    <a class="flex items-center no-underline hover:underline text-black" :href="`https://amuse.com${product.url}`">
                        <h2 class="text-base">${{product.price}}</h2>
                    </a>
                </footer>
            </div>
        </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        product: {
            required: true,
            type: Object
        }
    }
}
</script>