<template>
    <div class="w-full flex justify-center items-center mt-12 ">
        <div class="flex flex-col space-y-6 w-[68%] min-w-[1000px]">
            <div class="flex flex-row-reverse justify-between items-center">
                <div class="text-2xl font-extrabold text-blue {{ activeCount() }}">برترین های شکاف</div>
                <div class="flex flex-row space-x-6 text-xl font-bold h-12">
                    <button @click="ChangeActive('new'), getItem()"
                        :class="count === 'new' ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                        class="text-xl hover:border-b-2 border-blue">جدید ترین ها</button>
                    <button @click="ChangeActive('bestSell'), getItem()"
                        :class="count === 'bestSell' ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                        class="text-xl hover:border-b-2 border-blue">پر تخفیف ترین ها</button>
                    <button @click="ChangeActive('sell'), getItem()"
                        :class="count === 'sell' ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                        class="text-xl hover:border-b-2 border-blue">پر فروش ترین ها</button>
                </div>
            </div>
            <div class="">
                <carousel v-bind="settings" :breakpoints="breakpoints">
                    <slide v-for="slide in items" :key="slide">
                        <SliderComponent :title="slide.Name" :likes="5" :price="slide.Price" :color="slide.InStockColor"
                            :stock="slide.InStock" :srcImg="slide.Image" />
                    </slide>
                    <template #addons>
                        <Pagination />
                        <Navigation />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { createApp, ref } from 'vue'
import axios from 'axios'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    data() {
        return {
            items: [],
            count: ref("sell"),
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            breakpoints: {
                700: {
                    itemsToShow: 3.5,
                    snapAlign: "center",
                },
                1024: {
                    itemsToShow: 5,
                    snapAlign: "start",
                },
            },
        }
    },
    mounted() {
        this.ChangeActive()
        this.activeCount()
        this.getItem()
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
    },
    methods: {
        activeCount() {
            this.count = "sell";
        },
        ChangeActive(number) {
            this.count = number;
        },
        async getItem() {

            await axios.get(`/api/v1/products/${this.count}`).then(response => {
                console.log(response.data);
                this.items = response.data
            })
                .catch(error => {
                    console.log(error)
                })

        },
    },

}


</script>
<script setup>
import SliderComponent from "./sliderComponent.vue";
</script>
