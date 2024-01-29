<template>
  <headerComponent />
  <div class="flex flex-col h-full w-full justify-center items-center mt-16">
    <div class="flex flex-row-reverse w-[68%] min-w[1000px]">
      <div class="w-[38%] h-full flex flex-col space-y-6">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
          <Slide v-for="slide in imageUrl()" :key="slide">
            <div class="carousel__item relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img :src="'/product/' + slide" alt=""
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
            </div>
          </Slide>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="3" :wrap-around="true" v-model="currentSlide" ref="carousel">
          <Slide v-for="slide in imageUrl()" :key="slide">
            <div class="carousel__item" @click="slideTo(slide - 1)">
              <img :src="'/product/' + slide" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div
        class="w-[70%] justify-between h-full items-end flex flex-col shadow-md rounded-lg shadow-[lightgray] px-8 pt-7 pb-4 space-y-6 text-right">
        <p class="font-bold pname text-lg">{{ product.Name }}</p>
        <div class="font-bold text-blue text-[21px] flex flex-row space-x-1">
          <p class="">تومان</p>
          <p class="">{{ Intl.NumberFormat("fa").format(product.Price) }}</p>
        </div>
        <p class="text-sm font-bold">ویزگی ها</p>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>گیگابایت</p>
            <p>{{ product.InternalMemory }}</p>
          </div>
          <p>: حافظه داخلی</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>گیگابایت</p>
            <p>{{ product.Ram }}</p>
          </div>
          <p>: Ram مقدار</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>اینچ</p>
            <p>{{ product.Screen }}</p>
          </div>
          <p>: بازه‌ی اندازه صفحه نمایش</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: شبکه های ارتباطی</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>مگاپیکسل</p>
            <p>{{ product.PictureRes }}</p>
          </div>
          <p>: رزولوشن عکس</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div class="flex flex-col space-y-2">
          <p>رنگ ها</p>
          <div class="productColor flex flex-row space-x-2">
            <div class="w-[24px] h-[24px] bg-mobileBlack rounded-full shadow-md" v-if="colorList().includes('Black')">
            </div>
            <div class="w-[24px] h-[24px] bg-mobileOlive rounded-full shadow-md" v-if="colorList().includes('Olive')">
            </div>
            <div class="w-[24px] h-[24px] bg-mobilePurple rounded-full shadow-md" v-if="colorList().includes('Purple')">
            </div>
            <div class="w-[24px] h-[24px] bg-mobileWhite rounded-full shadow-md" v-if="colorList().includes('White')">
            </div>
            <div class="w-[24px] h-[24px] bg-mobileCream rounded-full shadow-md" v-if="colorList().includes('Cream')">
            </div>
            <div class="w-[24px] h-[24px] bg-gray rounded-full shadow-md" v-if="colorList().includes('Gray')"></div>
            <div class="w-[24px] h-[24px] bg-Sierrablue rounded-full shadow-md" v-if="colorList().includes('Sierrablue')">
            </div>
            <div class="w-[24px] h-[24px] bg-mobileBlue rounded-full shadow-md" v-if="colorList().includes('Blue')"></div>
            <div class="w-[24px] h-[24px] bg-mobileGreen rounded-full shadow-md" v-if="colorList().includes('Green')">
            </div>
            <div class="w-[24px] h-[24px] bg-Burgundy rounded-full shadow-md" v-if="colorList().includes('Burgundy')">
            </div>
            <div class="w-[24px] h-[24px] bg-Beige rounded-full shadow-md" v-if="colorList().includes('Beige')"></div>
            <div class="w-[24px] h-[24px] bg-brown rounded-full shadow-md" v-if="colorList().includes('Brown')"></div>
            <div class="w-[24px] h-[24px] bg-lime rounded-full shadow-md" v-if="colorList().includes('Lime')"></div>
            <div class="w-[24px] h-[24px] bg-silver rounded-full shadow-md" v-if="colorList().includes('Silver')"></div>
          </div>
        </div>

        <div class="flex flex-col space-y-3">
          <label for="waranti">: گارانتی </label>
          <div>
            <select name="Waranti" id="waranti"
              class="prudoctselect cursor-pointer block outline-none border-2 rounded-3xl w-72 p-2 text-sm border-lightergray text-ultragray">
              <option value="" disabled selected hidden>
                یک گزینه را انتخاب کنید
              </option>
              <option value="waranti18" class="">
                18 ماه گارانتی شرکتی + تضمین رجستری
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-row justify-center space-x-5 items-center pt-4">
          <button class="px-6 py-3 bg-lightBlue font-semibold rounded-lg text-white">
            افزودن به سبد خرید
          </button>
          <div class="flex justify-center items-center">
            <button @click="counter('+')" class="p-2 border-black border-2 rounded-l-3xl">
              +
            </button>
            <p class="py-2 border-y-2 border-black w-8 text-center">
              {{ count }}
            </p>
            <button @click="counter('-')" class="p-2 border-black border-2 rounded-r-3xl">
              -
            </button>
          </div>
        </div>
        <div class="flex flex-row items-center justify-around w-full py-8">
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">پرداخت آنلاین امن</p>
              <p class="text-gray text-[10px]">پرداخت با کارت های شتاب</p>
            </div>
            <img src="/footer/SafePayment.svg" class="w-[40px]" alt="" />
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">ارسال سریع</p>
              <p class="text-gray text-[10px]">ارسال در کوتاه ترین زمان</p>
            </div>
            <img src="/footer/FastSending.svg" class="w-[45px]" alt="" />
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">ضمانت بازگشت کالا</p>
              <p class="text-gray text-[10px]">ضمانت تا حداکثر 7 روز</p>
            </div>
            <img src="/footer/Guarantee.svg" class="w-[35px]" alt="" />
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">پشتیبانی پاسخ گو</p>
              <p class="text-gray text-[10px]">پشتیبانی و مشاوره فروش</p>
            </div>
            <img src="/footer/Calling.svg" class="w-[35px]" alt="" />
          </div>
        </div>
        <div class="flex flex-row-reverse gap-4">
          <div class="flex flex-row-reverse text-[15px] items-center gap-1 font-semibold hover:text-gray cursor-pointer">
            <font-awesome-icon icon="fa-solid  fa-shuffle" class="" />
            <p>مقایسه</p>
          </div>
          <div class="flex flex-row-reverse text-[15px] items-center gap-1 font-semibold hover:text-gray cursor-pointer">
            <font-awesome-icon icon="fa-regular fa-heart" class="" />
            <p>افزودن به علاقه مندی</p>
          </div>
        </div>
        <div class="w-full py-4 px-5 bg-lightWhite rounded-2xl flex flex-row-reverse">
          <div>10</div>
          <p class="pname">نفر در حال مشاهده این محصول هستند!</p>
        </div>
        <div class="divide-y-2 divide-lightgray w-full">
          <p></p>
          <p></p>
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: شبکه های ارتباطی</p>
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: دسته</p>
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: برچسب</p>
        </div>
        <div class="flex flex-row space-x-3 justify-center items-center font-bold text-sm">
          <div class="flex flex-row space-x-1 gap-3">
            <font-awesome-icon class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-telegram" />
            <font-awesome-icon class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-linkedin-in" />
            <font-awesome-icon class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-pinterest" />
            <font-awesome-icon class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-twitter" />
            <font-awesome-icon class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-facebook-f" />
          </div>
          <p>: اشتراک گذاری</p>
        </div>
      </div>
    </div>
  </div>
  <div class="divide-y-[1px] pt-9 divide-lightgray">
    <p></p>
    <p></p>
  </div>
  <div class="flex justify-center items-center h-full {{ activeCount() }}">
    <div class="flex flex-row-reverse w-[70%] gap-8 items-center pt-7 font-bold text-lightgray">
      <button @click="ChangeActive('توضیحات')" :class="countdesc === 'توضیحات'
        ? 'text-blue border-b-2 border-blue'
        : 'text-gray'
        " class="text-lg transition duration-300 ease-in-out cursor-pointer">
        <p>توضیحات</p>
      </button>
      <button @click="ChangeActive('مشخصات')" :class="countdesc === 'مشخصات'
        ? 'text-blue border-b-2 border-blue'
        : 'text-gray'
        " class="text-lg transition duration-300 ease-in-out cursor-pointer">
        مشخصات کلی
      </button>
      <button @click="ChangeActive('نظرات')" :class="countdesc === 'نظرات'
        ? 'text-blue border-b-2 border-blue'
        : 'text-gray'
        " class="text-lg transition duration-300 ease-in-out cursor-pointer">
        نظرات (0)
      </button>
      <button @click="ChangeActive('گارانتی')" :class="countdesc === 'گارانتی'
        ? 'text-blue border-b-2 border-blue'
        : 'text-gray'
        " class="text-lg transition duration-300 ease-in-out cursor-pointer">
        شرایط گارانتی
      </button>
    </div>
  </div>
  <div class="w-full h-full flex justify-center items-center pt-5">
    <div class=" w-[70%] h-full text-right text-lg text-black" v-if="countdesc === 'توضیحات'">{{ product.Description }}
    </div>
    <div class="w-[70%] h-full text-right text-lg text-black" v-if="countdesc === 'مشخصات'">
      <productDetail title="مدل‌‌ نامبرهای این محصول" :desc=product.ModelNumbers class="w-full h-full" />
    </div>
    <div class="w-[70%] h-full text-right text-lg text-black" v-if="countdesc === 'نظرات'">
      <productDetail title="مدل‌‌ نامبرهای این محصول" :desc=product.ModelNumbers class="w-full h-full" />
    </div>
    <div class="w-[70%] h-full text-right text-lg text-black" v-if="countdesc === 'گارانتی'">
      <productDetail title="مدل‌‌ نامبرهای این محصول" :desc=product.ModelNumbers class="w-full h-full" />
    </div>
  </div>

  <footerCmponent />
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
    count: 1,
    countdesc: "توضیحات",
  }),
  mounted() {
    this.getProduct();
    this.imageUrl();
    this.colorList();
    this.ChangeActive();
    this.activeCount();
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
    counter(arg) {
      if (arg === "+") this.count++;
      else this.count >= 2 ? this.count-- : 0;
    },
    activeCount() {
      this.countdesc = "توضیحات";
    },
    ChangeActive(number) {
      this.countdesc = number;
    },
  },
});
</script>

<script setup>
import productDetail from "@/components/productDetail.vue";
import headerComponent from "../components/headerComponent.vue";
import footerCmponent from "@/components/footerCmponent.vue";
</script>
