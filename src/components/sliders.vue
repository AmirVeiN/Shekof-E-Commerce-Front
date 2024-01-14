<template>
    <div class="w-full h-full flex ">
        <div class="w-full h-full" v-for="product in latestProducts" v-bind="product.id">
            <img v-bind:src="product.get_thumbnail" alt="">
            <h3>{{ product.name }}</h3>
            <h3>{{ product.price }}</h3>
        </div>

    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "home",
    data() {
        return {
            latestProducts: []
        }
    },
    components: {
    },
    mounted() {
        this.getLatestProducts()
    },
    methods: {
        getLatestProducts() {
            axios.get('/api/v1/latest-product/').then(response => {
                this.latestProducts = response.data
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

