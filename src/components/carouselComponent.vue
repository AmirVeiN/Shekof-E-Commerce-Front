<script >
import axios from 'axios'


import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({

  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
      latestProducts: []
    }

  },

  mounted() {
    this.getLatestProducts()
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  methods: {
    async getLatestProducts() {

      await axios.get('/api/v1/latest-product/').then(response => {
        console.log(response.data);
        this.latestProducts = response.data
      })
        .catch(error => {
          console.log(error)
        })

    }
  },

  // carousel settings

})
</script>

<script setup>
import SliderComponent from "./sliderComponent.vue";

</script>
<template>
  <div class="flex justify-center items-center">
    <div class="w-[68%] min-w-[1000px]">
      <carousel v-bind="settings" :breakpoints="breakpoints">
        <slide v-for="slide in latestProducts" :key="slide">
          <SliderComponent :title="slide.Name" :likes="5" :price="slide.Price" :stock="slide.InStock"
            :srcImg="slide.Image" />
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
  <div class="h-96"></div>
</template>
