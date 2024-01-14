<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import SliderComponent from "./sliderComponent.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    SliderComponent,
  },
  data: () => ({
    sliderData: [
      {
        title: "lorem2",
        id: 1,
        likes: 4,
        price: 1200000,
        stock: "inStock",
        srcImg: "sadasd",
      },
      {
        title: "lorem2",
        likes: 4,
        id: 2,
        price: 1200000,
        stock: "instock",
        srcImg: "sadasd",
      },
      {
        title: "lorem2",
        likes: 4,
        id: 3,
        price: 1200000,
        stock: "instock",
        srcImg: "sadasd",
      },
      {
        title: "lorem2",
        likes: 4,
        id: 4,
        price: 1200000,
        stock: "instock",
        srcImg: "sadasd",
      },
    ],
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
      <carousel
        dir="rtl"
        transition="500"
        v-bind="settings"
        :wrap-around="true"
        :breakpoints="breakpoints"
      >
        <slide  v-for="slide in sliderData" :key="slide.id">
          <SliderComponent
            :title="slide.title"
            :likes="slide.likes"
            :price="slide.price"
            :stock="slide.stock"
            :srcImg="slide.srcImg"
            />
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
  <div class="h-96"></div>
</template>
