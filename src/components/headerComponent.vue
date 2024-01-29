<template>
  <div class="h-40 w-full flex flex-col justify-center items-center z-10">
    <div
      class="h-1/2 w-[68%] min-w-[1000px] flex flex-row-reverse items-center justify-between"
    >
      <div class="flex flex-row items-center h-full space-x-3">
        <div
          class="w-36 h-full flex flex-row space-x-3 items-center justify-end"
        >
          <p class="text-gray">شما کاملتر از فردا</p>
          <p class="text-gray">|</p>
        </div>
        <button>
          <RouterLink to="/" class="w-48 h-full items-center flex justify-end">
            <img src="/Logo-Shekaf.png" alt="Loading.." />
          </RouterLink>
        </button>
      </div>
      <div class="flex flex-row-reverse h-full items-center">
        <div
          class="w-[450px] h-full flex flex-row-reverse justify-evenly items-center"
        >
          <RouterLink
            to="/allProduct/"
            class="text-gray font-semibold text-sm hover:text-blue"
            >فروشگاه</RouterLink
          >
          <RouterLink
            to="/rules/"
            class="text-gray font-semibold text-sm hover:text-blue"
          >
            قوانین
          </RouterLink>
          <RouterLink
            to="/refund/"
            class="text-gray font-semibold text-sm hover:text-blue"
          >
            مرجوعی
          </RouterLink>
          <RouterLink
            to="/aboutUs/"
            class="text-gray font-semibold text-sm hover:text-blue"
          >
            درباره ما
          </RouterLink>
          <RouterLink
            :to="{ path: '/contactUs' }"
            class="text-gray font-semibold text-sm hover:text-blue"
          >
            تماس باما
          </RouterLink>
          <button class="text-gray font-semibold text-sm hover:text-blue">
            مجله
          </button>
        </div>
        <div class="w-52 h-full flex justify-center items-center">
          <button
            class="text-sm font-semibold flex flex-row space-x-1 text-blue"
          >
            <p class="">۰۲۱-۶۶۶-۸۸-۷۴۰</p>
            <p class="">خط ویژه پشتیبانی</p>
          </button>
        </div>
      </div>
    </div>
    <div
      class="h-1/2 w-[68%] min-w-[1000px] flex flex-row-reverse items-center justify-between"
    >
      <div class="w-[700px] justify-between items-center flex flex-row-reverse">
        <button
          class="peer relative flex flex-row items-center justify-center space-x-3 bg-blue/15 rounded-full p-3 px-4 w-[28%]"
        >
          <font-awesome-icon icon="fa-solid fa-angle-down" />
          <div>دسته بندی کالا</div>
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <div
          class="hidden peer-hover:flex hover:flex absolute top-36 border border-gray/40 shadow-sm shadow-gray bg-white w-64 z-20"
        >
          <ul class="w-full">
            <div>
              <RouterLink
                :to="{ path: '/allProduct/', query: { Category: 'Mobile' } }"
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2"
              >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">گوشی موبایل</p>
              </RouterLink>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-3 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64"
              >
                <ul class="w-full">
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Iphone' } }"
                    class="flex flex-row w-full justify-start items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      اپل
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Samsung' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      سامسونگ
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Xiaomi' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      شیائومی
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Huawei' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      هوآوی
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Honor' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      آنر
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Nokia' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      نوکیا
                    </p>
                  </RouterLink>
                </ul>
              </div>
            </div>
            <div>
              <RouterLink
                :to="{ path: '/allProduct/', query: { Category: 'Laptop' } }"
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2"
              >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">لپ تاپ</p>
              </RouterLink>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-14 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64"
              >
                <ul class="w-full">
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Asus' } }"
                    class="flex flex-row w-full justify-start items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      ایسوس
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Lenovo' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      لنوو
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Samsung' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      سامسونگ
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Acer' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      ایسر
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Xiaomi' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      شیائومی
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Razer' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      ریزر
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Dell' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      دل
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{
                      path: '/allProduct/',
                      query: { Brand: 'Microsoft' },
                    }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      مایکروسافت
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Huawei' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      هوآوی
                    </p>
                  </RouterLink>
                </ul>
              </div>
            </div>
            <div>
              <RouterLink
                :to="{ path: '/allProduct/', query: { Category: 'Watch' } }"
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2"
              >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">ساعت هوشمند</p>
              </RouterLink>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-32 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64"
              >
                <ul class="w-full">
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Apple' } }"
                    class="flex flex-row w-full justify-start items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      اپل
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Samsung' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      سامسونگ
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Xiaomi' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      شیائومی
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Emzifit' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      امزیفیت
                    </p>
                  </RouterLink>
                  <RouterLink
                    :to="{ path: '/allProduct/', query: { Brand: 'Huawei' } }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      هوآوی
                    </p>
                  </RouterLink>
                </ul>
              </div>
            </div>
            <div>
              <RouterLink
                :to="{ path: '/allProduct/', query: { Category: 'Others' } }"
                class="flex flex-row w-full peer relative justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2"
              >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                <p class="hover:pr-3 delay-75 duration-150">لوازم جانبی</p>
              </RouterLink>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-48 -left-64 rounded-2xl shadow-md shadow-gray bg-white w-64"
              >
                <ul class="w-full">
                  <RouterLink
                    :to="{
                      path: '/allProduct/',
                      query: { Category: 'Charger' },
                    }"
                    class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black"
                  >
                    <p
                      class="hover:pr-3 delay-75 duration-150 w-full text-right"
                    >
                      شارژر
                    </p>
                  </RouterLink>
                </ul>
              </div>
            </div>
            <RouterLink
              :to="{ path: '/allProduct/', query: { Category: 'Tablet' } }"
              class="flex flex-row w-full justify-between items-center p-5 text-gray hover:text-black border-gray border-b-2"
            >
              <p class="hover:pr-3 w-full text-right delay-75 duration-150">
                تبلت
              </p>
            </RouterLink>
          </ul>
        </div>
        <div class="w-[1%] text-gray/50">|</div>
        <div
          class="bg-blue/15 w-[48%] h-full flex flex-row items-center rounded-full justify-between"
        >
          <RouterLink
            class="bg-blue p-3 px-4 rounded-l-full"
            :to="{ path: '/allProduct/', query: { search: search } }"
          >
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="text-white text-xl"
            />
          </RouterLink>
          <input
            class="bg-transparent w-full h-full font-semibold flex text-right p-2 pr-3 focus:outline-none"
            type="search"
            placeholder="جستجوی محصولات"
            id="search"
            value="search"
            v-model="search"
          />
        </div>
        <RouterLink
          to="/priceList/"
          class="bg-blue rounded-full flex justify-center items-center p-3 px-4 text-white w-[18%]"
        >
          لیست قیمت
        </RouterLink>
      </div>
      <div class="w-80 flex flex-row-reverse items-center justify-between">
        <div class="w-48 flex flex-row justify-evenly items-center">
          <button class="flex flex-row relative">
            <div
              class="bg-blue absolute -top-2 -left-2 text-white rounded-full justify-center items-center flex w-4 h-4 text-xs ss02"
            >
              0
            </div>
            <font-awesome-icon
              icon="fa-solid  fa-shuffle"
              class="text-xl text-gray hover:text-black"
            />
          </button>
          <button class="flex flex-row relative">
            <div
              class="bg-blue absolute -top-2 -left-2 text-white rounded-full justify-center items-center flex w-4 h-4 text-xs ss02"
            >
              0
            </div>
            <font-awesome-icon
              icon="fa-regular fa-heart"
              class="text-xl text-gray hover:text-black"
            />
          </button>
          <button class="flex flex-row relative">
            <div
              class="bg-blue absolute -top-2 -left-2 text-white rounded-full justify-center items-center flex w-4 h-4 text-xs ss02"
            >
              0
            </div>
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="text-xl text-gray hover:text-black"
            />
          </button>
        </div>
        <div v-if="isAuthenticated">
          <p class="text-gray hover:text-black"></p>
        </div>
        <RouterLink
          to="/Login/"
          class="flex w-40 flex-row items-center justify-center space-x-1 border-gray/70 border-2 rounded-2xl h-full py-2"
        >
          <div class="flex space-x-1 items-center">
            <p class="text-gray">ورود / ثبت نام</p>
            <font-awesome-icon
              class="text-xl text-gray"
              icon="fa-regular fa-user"
            />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      search: ref(),
      auth: Boolean,
    };
  },
  components: {
    RouterLink,
  },
  mounted() {},
  methods: {},
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    userName() {},
  },
};
</script>
