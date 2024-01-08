<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    title: String,
    likes: Number,
    price: Number,
    stock: String,
    srcImg: String,
  },
  methods:{
      stockCheck(){
        if ('inStock'===this.stock) {
          console.log('its true');
          return true
        }else{
          console.log('its False');
          return false
        }
      }
  }
};


</script>

<!-- FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 -->
<template>
  <div class="w-full h-full flex justify-center items-center bg-bubble-gum">
    <div class="w-[264px] relative bg-tahiti">
      <div class="flex peer flex-col w-[264px] m-auto shadow-md rounded-md">
        <div class="productImg">
          <img :src="srcImg" alt="" class="" />
        </div>
        <div class="flex flex-col justify-center px-4 items-center gap-2">
          <div class="productName">
            <p href="#" class="text-sm ss02 text-center">
              {{ title }}
            </p>
          </div>
          <div class="productColor">
            <div class="w-[15px] h-[15px] bg-black rounded-full"></div>
          </div>
          <div class="productRating">
            <star-rating
              v-bind:show-rating="false"
              v-bind:read-only="true"
              v-bind:increment="1"
              v-bind:rating="likes"
              v-bind:max-rating="5"
              v-bind:border-width="1"
              inactive-color="#fff"
              border-color="#999"
              v-bind:star-size="15"
            >
            </star-rating>
          </div>
          <div  class="productStuck flex flex-row space-x-2">
            <div class="flex flex-row gap-2" v-if="stockCheck()">
              <div class="">
                <h1 class="text-sm flex">موجود در انبار</h1>
              </div>
              <div class="text-blue flex">
                <font-awesome-icon icon="fa-solid fa-check" />
              </div>
            </div>
            <div v-else class="flex flex-row gap-2">
              <div>
                <h1 class="text-sm">نا موجود</h1>
              </div>
              <div class="text-red">
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </div>
            </div>
          </div>

          <div
            class="productPrice text-sm font-bold text-[#435fcb] text-right ss02 flex flex-row"
          >
            <div class="">تومان</div>
            <div class="">{{ price }}</div>
          </div>
        </div>
      </div>
      <div
        class="hidden peer-hover:flex hover:flex justify-around items-center flex-col absolute top-3 left-3 bg-white w-[50px] h-[135px] shadow-md rounded-md"
      >
        <button>
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="text-xl text-gray hover:text-black"
          />
        </button>
        <button>
          <font-awesome-icon
            icon="fa-solid  fa-shuffle"
            class="text-xl text-gray hover:text-black"
          />
        </button>
        <button>
          <font-awesome-icon
            icon="fa-regular fa-heart"
            class="text-xl text-gray hover:text-black"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="h-96"></div>
</template>
