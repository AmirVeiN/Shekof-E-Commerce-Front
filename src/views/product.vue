<template>
  <headerComponent />
  <div class="flex flex-col h-full w-full justify-center items-center mt-16">
    <div class="flex flex-row-reverse w-[68%] min-w[1000px]">
      <div class="w-[38%] h-full flex flex-col space-y-6">
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="false"
          v-model="currentSlide"
        >
          <Slide v-for="slide in imageUrl()" :key="slide">
            <div class="carousel__item">
              <img :src="'/product/' + slide" alt="" />
            </div>
          </Slide>
        </Carousel>
        <Carousel
          id="thumbnails"
          :items-to-show="3"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="slide in imageUrl()" :key="slide">
            <div class="carousel__item" @click="slideTo(slide - 1)">
              <img :src="'/product/' + slide" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div
        class="w-[62%] justify-start items-end flex flex-col space-y-5 text-right"
      >
        <p class="font-bold text-xl">{{ product.Name }}</p>
        <star-rating
          v-bind:show-rating="false"
          v-bind:read-only="true"
          v-bind:increment="1"
          v-bind:rating="product.Star"
          v-bind:max-rating="5"
          v-bind:border-width="1"
          inactive-color="#fff"
          border-color="#eee"
          v-bind:star-size="20"
        >
        </star-rating>
        <div class="font-bold text-blue text-2xl flex flex-row space-x-1">
          <p>تومان</p>
          <p>{{ Intl.NumberFormat("fa").format(product.Price) }}</p>
        </div>
        <p class="text-lg font-bold">ویزگی ها</p>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-lg"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>گیگابایت</p>
            <p>{{ product.InternalMemory }}</p>
          </div>
          <p>: حافظه داخلی</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-lg"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>گیگابایت</p>
            <p>{{ product.Ram }}</p>
          </div>
          <p>: Ram مقدار</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-lg"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>اینچ</p>
            <p>{{ product.Screen }}</p>
          </div>
          <p>: بازه‌ی اندازه صفحه نمایش</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-lg"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: شبکه های ارتباطی</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-lg"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>مگاپیکسل</p>
            <p>{{ product.PictureRes }}</p>
          </div>
          <p>: رزولوشن عکس</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <p>رنگ ها</p>
        <div class="productColor flex flex-row space-x-2">
          <div
            class="w-[20PX] h-[20PX] bg-black rounded-full"
            v-if="colorList().includes('Black')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-gray/20 rounded-full"
            v-if="colorList().includes('White')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-purple rounded-full"
            v-if="colorList().includes('Purple')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-olive rounded-full"
            v-if="colorList().includes('Olive')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-cream rounded-full"
            v-if="colorList().includes('Cream')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-gray rounded-full"
            v-if="colorList().includes('Gray')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-Sierrablue rounded-full"
            v-if="colorList().includes('Sierrablue')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-blue rounded-full"
            v-if="colorList().includes('Blue')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-Green rounded-full"
            v-if="colorList().includes('Green')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-Burgundy rounded-full"
            v-if="colorList().includes('Burgundy')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-Beige rounded-full"
            v-if="colorList().includes('Beige')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-brown rounded-full"
            v-if="colorList().includes('Brown')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-lime rounded-full"
            v-if="colorList().includes('Lime')"
          ></div>
          <div
            class="w-[20PX] h-[20PX] bg-silver rounded-full"
            v-if="colorList().includes('Silver')"
          ></div>
        </div>
        <div class="flex flex-col">
          <label for="waranti">: گارانتی </label>
          <select name="Waranti" id="waranti" class="border-[2px] border-gray p-2 rounded-xl cursor-pointer">
            <option value="" disabled selected hidden class="cursor-pointer">
              یک گزینه را انتخاب کنید
            </option>
            <option value="waranti18">18 ماه گارانتی شرکتی+تضمین رجستری</option>
          </select>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
    StarRating,
  },
  data: () => ({
    currentSlide: 0,
    product: [],
  }),
  mounted() {
    this.getProduct();
    this.imageUrl();
    this.colorList();
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    async getProduct() {
      const product_slug = this.$route.params.product_slug;

      await axios
        .get(`/api/v1/products/${product_slug}`)
        .then((response) => {
          this.product = response.data;

          document.title = this.product.Slug + " | شکاف";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    imageUrl() {
      const images = String(this.product.Image);
      const list = images.split(",");
      return list;
    },
    colorList() {
      const colors = String(this.product.Colors);
      const colorList = colors.split(",");
      return colorList;
    },
  },
});
</script>

<script setup>
import headerComponent from "../components/headerComponent.vue";
</script>
