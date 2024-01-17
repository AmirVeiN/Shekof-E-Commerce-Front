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
    stock: Number,
    color : String,
    srcImg: String,
  },
  methods:{
      stockCheck(){
        if (this.stock === 1) {
          return true
        }else{
          return false
        }
      },
      imageUrl(){
        const img = this.srcImg
        const list = img.split(",")
        return list[0]
      },
      colorList(){
        const colors = this.color.split(",")
        return colors
      },
  }
};

</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-[264px] relative h-full">
      <div class="flex peer flex-col w-[264px] justify-center items-center space-y-2  rounded-md">
        <div class="flex justify-center items-center">
          <img :src="'/product/' + imageUrl()" alt="" width="200" height="200" />
        </div>
        <div class="flex flex-col justify-center px-4 items-center gap-2">
          <div class="productName">
            <p href="#" class="text-sm ss02 text-center font-bold h-16 justify-center items-start flex">
              {{ title }}
            </p>
          </div>
          <div class="productColor flex flex-row space-x-2">
            <div class="w-[15px] h-[15px] bg-black rounded-full" v-if="colorList().includes('Black')"></div>
            <div class="w-[15px] h-[15px] bg-white rounded-full" v-if="colorList().includes('White')"></div>
            <div class="w-[15px] h-[15px] bg-purple rounded-full" v-if="colorList().includes('Purple')"></div>
            <div class="w-[15px] h-[15px] bg-olive rounded-full" v-if="colorList().includes('Olive')"></div>
            <div class="w-[15px] h-[15px] bg-cream rounded-full" v-if="colorList().includes('Cream')"></div>
            <div class="w-[15px] h-[15px] bg-gray rounded-full" v-if="colorList().includes('Gray')"></div>
            <div class="w-[15px] h-[15px] bg-Sierrablue rounded-full" v-if="colorList().includes('Sierrablue')"></div>
            <div class="w-[15px] h-[15px] bg-blue rounded-full" v-if="colorList().includes('Blue')"></div>
            <div class="w-[15px] h-[15px] bg-Green rounded-full" v-if="colorList().includes('Green')"></div>
            <div class="w-[15px] h-[15px] bg-Burgundy rounded-full" v-if="colorList().includes('Burgundy')"></div>
            <div class="w-[15px] h-[15px] bg-Beige rounded-full" v-if="colorList().includes('Beige')"></div>
            <div class="w-[15px] h-[15px] bg-brown rounded-full" v-if="colorList().includes('Brown')"></div>
            <div class="w-[15px] h-[15px] bg-lime rounded-full" v-if="colorList().includes('Lime')"></div>
            <div class="w-[15px] h-[15px] bg-silver rounded-full" v-if="colorList().includes('Silver')"></div>
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
            class="productPrice text-sm font-bold space-x-1 text-[#435fcb] text-right ss02 flex flex-row"
          >
            <div class="">تومان</div>
            <div class="">{{ Intl.NumberFormat('fa').format(price) }}</div>
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
