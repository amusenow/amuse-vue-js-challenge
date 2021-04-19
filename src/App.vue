<template>
    <div id="app">
        <v-app>
            <div v-if="permissionGranted" id="landingWrapperDiv">
                <v-row>
                    <v-col cols="12" md="2" offset-md="5">
                        <v-text-field v-model="categoryFilterVal" label="Filter By Category" outlined></v-text-field>
                        <v-btn color="primary" @click="filterListByCategory">Search</v-btn>
                    </v-col>
                </v-row>
                <v-row v-for="(products,category,index) in productListByCategory" :key="index">
                    <v-col cols="12">
                        <h1>{{category}}</h1>
                    </v-col>
                    <v-col v-for="(product,index2) in products" :key="index2" cols="12" xs="12" md="4">
                        <v-card elevation="4">
                            <v-card-title>{{product.name}}</v-card-title>
                            <v-card-subtitle>{{product.manufacturer}}</v-card-subtitle>
                            <v-card-text>
                                ${{product.price}}
                            </v-card-text>
                            <v-img :src="getImageUrl(product.image_url)"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
            <v-dialog width="500" v-model="dialog">
                    <v-card>
                        <v-card-title class="justify-center">
                            Age Confirmation
                        </v-card-title>
                        <v-card-text>
                            Are you 21 years or older?
                        </v-card-text>
                        <v-card-actions>
                            <v-row>
                              <v-col cols="6">
                                <v-btn @click="dialog=false;redirect()">No</v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn @click="dialog=false;permissionGranted=true">Yes</v-btn>
                              </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
        </v-app>
    </div>
</template>
<script>
import _ from 'lodash';
import products from './products.json'
export default {
    name: 'App',
    data: function() {
        return {
            productListByCategory: [],
            categoryFilterVal: null,
            dialog: true,
            permissionGranted: false
        }
    },
    methods: {
        getImageUrl(url) {
            return "https://res.cloudinary.com/amusenow/w_auto,c_scale/" + url;
        },
        filterListByCategory() {
            if (!this.categoryFilterVal) {
                this.productListByCategory = _.groupBy(products, 'category');
            } else {
                this.productListByCategory = _.pick(_.groupBy(products, 'category'), this.categoryFilterVal);
            }
        },
        redirect(){
          window.location.href = "https://stackoverflow.com";
        }
    },
    created() {
        this.filterListByCategory();
    }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>