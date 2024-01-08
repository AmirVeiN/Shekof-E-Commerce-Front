<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    // carousel settings
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
  }),
});
</script>
<template>
  <div class="flex justify-center items-center">
      <div class="w-[68%]">
        <carousel dir="rtl" transition="500" v-bind="settings" :breakpoints="breakpoints">
          <slide v-for="slide in 7" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
  </div>
  <div class="h-96"></div>
</template>
