<template>
  <div class="w-full flex justify-center items-center mt-12">
    <div class="flex flex-col space-y-6 w-[68%] min-w-[1000px]">
      <div class="flex flex-row-reverse justify-between items-center">
        <div class="text-lg font-bold text-blue pr-2 {{ activeCount() }}">
          محصولات شکاف
        </div>
        <div class="flex flex-row space-x-6 text-xl font-bold h-8 pl-12">
          <button
            @click="ChangeActive('Nokia'), getItem()"
            :class="
              count === 'Nokia'
                ? 'text-blue border-b-2 border-blue'
                : 'text-gray'
            "
            class="text-sm hover:border-b-2 border-blue"
          >
            نوکیا
          </button>
          <button
            @click="ChangeActive('Honor'), getItem()"
            :class="
              count === 'Honor'
                ? 'text-blue border-b-2 border-blue'
                : 'text-gray'
            "
            class="text-sm hover:border-b-2 border-blue"
          >
            آنر
          </button>
          <button
            @click="ChangeActive('Huawei'), getItem()"
            :class="
              count === 'Huawei'
                ? 'text-blue border-b-2 border-blue'
                : 'text-gray'
            "
            class="text-sm hover:border-b-2 border-blue"
          >
            هوآوی
          </button>
          <button
            @click="ChangeActive('Xiaomi'), getItem()"
            :class="
              count === 'Xiaomi'
                ? 'text-blue border-b-2 border-blue'
                : 'text-gray'
            "
            class="text-sm hover:border-b-2 border-blue"
          >
            شیائومی
          </button>
          <button
            @click="ChangeActive('Samsung'), getItem()"
            :class="
              count === 'Samsung'
                ? 'text-blue border-b-2 border-blue'
                : 'text-gray'
            "
            class="text-sm hover:border-b-2 border-blue"
          >
            سامسونگ
          </button>
          <button
            @click="ChangeActive('Iphone'), getItem()"
            :class="
              count === 'Iphone'
                ? 'text-blue border-b-2 border-blue'
                : 'text-gray'
            "
            class="text-sm hover:border-b-2 border-blue"
          >
            آیفون
          </button>
        </div>
      </div>
      <div class="">
        <carousel v-bind="settings" :breakpoints="breakpoints">
          <slide v-for="slide in items" :key="slide">
            <SliderComponent
              :title="slide.Name"
              :slug="slide.Slug"
              :likes="slide.Star"
              :price="slide.Price"
              :color="slide.InStockColor"
              :stock="slide.InStock"
              :srcImg="slide.Image"
            />
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
import { createApp, ref } from "vue";
import axios from "axios";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      items: [],
      count: ref("Samsung"),
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
          itemsToShow: 4,
          snapAlign: "start",
        },
        1600: {
          itemsToShow: 4.5,
          snapAlign: "start",
        },
        1824: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  mounted() {
    this.ChangeActive();
    this.activeCount();
    this.getItem();
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  methods: {
    activeCount() {
      this.count = "Samsung";
    },
    ChangeActive(number) {
      this.count = number;
      console.log(this.count);
    },
    async getItem() {
      await axios
        .get(`/api/v1/category-product/${this.count}`)
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<script setup>
import SliderComponent from "./sliderComponent.vue";
</script>
