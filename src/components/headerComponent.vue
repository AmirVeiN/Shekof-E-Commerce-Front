<template>
  <div class="h-40 w-full flex flex-col justify-center items-center">
    <div class="h-1/2 w-[68%] min-w-[1000px] flex flex-row-reverse items-center justify-between">
      <div class="flex flex-row items-center h-full space-x-3">
        <div class="w-36 h-full flex flex-row space-x-3 items-center justify-end">
          <p class="text-gray">شما کاملتر از فردا</p>
          <p class="text-gray">|</p>
        </div>
        <button>
          <router-link to="/" class="w-48 h-full items-center flex justify-end">
            <img src="/Logo-Shekaf.png" alt="Loading.." />
          </router-link>
        </button>
      </div>
      <div class="flex flex-row-reverse h-full items-center">
        <div class="w-[450px] h-full flex flex-row-reverse justify-evenly items-center">
          <router-link to="/allProduct/" class="text-gray font-semibold text-sm hover:text-blue">فروشگاه</router-link>
          <button class="text-gray font-semibold text-sm hover:text-blue">
            قوانین
          </button>
          <button class="text-gray font-semibold text-sm hover:text-blue">
            مرجوعی
          </button>
          <button class="text-gray font-semibold text-sm hover:text-blue">
            درباره ما
          </button>
          <button class="text-gray font-semibold text-sm hover:text-blue">
            تماس باما
          </button>
          <button class="text-gray font-semibold text-sm hover:text-blue">
            مجله
          </button>
        </div>
        <div class="w-52 h-full flex justify-center items-center">
          <button class="text-sm font-semibold flex flex-row space-x-1 text-blue">
            <p class="">۰۲۱-۶۶۶-۸۸-۷۴۰</p>
            <p class="">خط ویژه پشتیبانی</p>
          </button>
        </div>
      </div>
    </div>
    <div class="h-1/2 w-[68%] min-w-[1000px] flex flex-row-reverse items-center justify-between">
      <div class="w-[700px] justify-between items-center flex flex-row-reverse">
        <button
          class="peer relative flex flex-row items-center justify-center space-x-3 bg-blue/15 rounded-full p-3 px-4 w-[28%]">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
          <div>دسته بندی کالا</div>
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <div
          class="hidden peer-hover:flex hover:flex absolute top-36 border border-gray/40 shadow-sm shadow-gray bg-white w-64">
          <ul class="w-full">
            <div>
              <button
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">گوشی موبایل</p>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-3 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64">
                <ul class="w-full">
                  <button class="flex flex-row w-full justify-start items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      اپل
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      سامسونگ
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      شیائومی
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      هوآوی
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      آنر
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      نوکیا
                    </p>
                  </button>
                </ul>
              </div>
            </div>
            <div>
              <button
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">لپ تاپ</p>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-14 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64">
                <ul class="w-full">
                  <button class="flex flex-row w-full justify-start items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      ایسوس
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      لنوو
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      سامسونگ
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      ایسر
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      شیائومی
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      ریزر
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      دل
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      مایکروسافت
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      هوآوی
                    </p>
                  </button>
                </ul>
              </div>
            </div>
            <div>
              <button
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">ساعت هوشمند</p>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-32 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64">
                <ul class="w-full">
                  <button class="flex flex-row w-full justify-start items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      اپل
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      سامسونگ
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      شیائومی
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      امزیفیت
                    </p>
                  </button>
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      هوآوی
                    </p>
                  </button>
                </ul>
              </div>
            </div>
            <div>
              <button
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">لوازم جانبی</p>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-48 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64">
                <ul class="w-full">
                  <button class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black">
                    <p class="hover:pr-3 delay-75 duration-150 w-full text-right">
                      شارژر
                    </p>
                  </button>
                </ul>
              </div>
            </div>
            <button
              class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2">
              <p class="hover:pr-3 w-full text-right delay-75 duration-150">
                تبلت
              </p>
            </button>
          </ul>
        </div>
        <div class="w-[1%] text-gray/50">|</div>
        <div class="bg-blue/15 w-[48%] h-full flex flex-row items-center rounded-full justify-between">
          <router-link  class="bg-blue p-3 px-4 rounded-l-full" :to="{ path: '/allProduct/', query: { search: search } }" >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-white text-xl" />
          </router-link>
          <input class="bg-transparent w-full h-full font-semibold flex text-right p-2 pr-3 focus:outline-none"
            type="text" placeholder="جستجوی محصولات" id="search" value="search" v-model="search" />
        </div>
        <RouterLink to="/priceList/" class="bg-blue rounded-full flex justify-center items-center p-3 px-4 text-white w-[18%]">
          لیست قیمت
        </RouterLink>
      </div>
      <div class="w-80 flex flex-row-reverse items-center justify-between">
        <div class="w-48 flex flex-row justify-evenly items-center">
          <button class="flex flex-row relative">
            <div
              class="bg-blue absolute -top-2 -left-2 text-white rounded-full justify-center items-center flex w-4 h-4 text-xs ss02">
              0
            </div>
            <font-awesome-icon icon="fa-solid  fa-shuffle" class="text-xl text-gray hover:text-black" />
          </button>
          <button class="flex flex-row relative">
            <div
              class="bg-blue absolute -top-2 -left-2 text-white rounded-full justify-center items-center flex w-4 h-4 text-xs ss02">
              0
            </div>
            <font-awesome-icon icon="fa-regular fa-heart" class="text-xl text-gray hover:text-black" />
          </button>
          <button class="flex flex-row relative">
            <div
              class="bg-blue absolute -top-2 -left-2 text-white rounded-full justify-center items-center flex w-4 h-4 text-xs ss02">
              0
            </div>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-xl text-gray hover:text-black" />
          </button>
        </div>
        <button
          class="flex w-40 flex-row items-center justify-center space-x-1 border-gray/70 hover:border-black border-2 rounded-2xl h-full py-2">
          <div>
            <p class="text-gray hover:text-black">ورود / ثبت نام</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 448 512">
              !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2023
              Fonticons, Inc.
              <path fill="#505050"
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from 'vue'
import axios from 'axios'


export default {
  data() {
    return {
      search: ref(),
    }
  },
  components: {
  },
  mounted() {

  },
  methods: {
  },
}
</script>
