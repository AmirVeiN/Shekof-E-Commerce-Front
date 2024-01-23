<template>
    <headerComponent />
    <div class="w-full h-full flex justify-center items-center mt-12">
        <div class="w-[68%] min-w-[1000px] flex flex-row justify-between items-start">
            <div class="flex w-[74%] flex-col space-y-5">
                <div class=" w-full flex flex-row justify-between items-center">
                    <div class=" w-full flex flex-row justify-start space-x-10 items-center">
                        <div class="flex flex-row space-x-2 justify-center items-center">
                            <p class="font-bold text-base">فیتلر ها</p>
                            <img src="/filter.png" width="23" alt="" class="font-bold">
                        </div>
                        <div class="flex flex-row space-x-2 justify-center items-center {{ activeCount() }} h-12">
                            <button @click="ChangeActive(2)">
                                <img src="/icons8-grid-64.png" width="30" alt=""
                                    :class='count === 2 ? "border-b-4 border-blue" : ""'>
                            </button>
                            <button @click="ChangeActive(4)">
                                <img src="/icons8-grid-50.png" width="28" alt=""
                                    :class='count === 4 ? "border-b-4 border-blue" : ""'>
                            </button>
                            <button @click="ChangeActive(3)">
                                <img src="/icons8-grid-48.png" width="40" alt=""
                                    :class='count === 3 ? "border-b-4 border-blue" : ""'>
                            </button>
                        </div>
                    </div>

                    <p class="font-bold text-xl">فروشگاه</p>

                </div>
                <div :class='count === 4 ? "grid-cols-4 gap-y-10 gap-x-6" : "",
                    count === 3 ? "grid-cols-3 gap-y-10 gap-x-4" : "",
                    count === 2 ? "grid-cols-2 gap-y-10" : ""' class='grid w-full '>
                    <div v-for="slide in items" :key="slide">
                        <SliderComponent :title="slide.Name" :slug="slide.Slug" :likes="slide.Star" :price="slide.Price"
                            :color="slide.InStockColor" :stock="slide.InStock" :srcImg="slide.Image" />
                    </div>
                </div>
                <div v-show="empty" class="h-full w-full justify-center items-center flex flex-col">
                    <img src="/NotFound.png" alt="" width="480">
                    <p class="font-bold text-black/70">محصول مورد نظر شما یافت نشد</p>
                </div>
            </div>
            <div class="flex w-[24%] flex-col justify-center space-y-4 items-center mb-12">
                <div class="flex w-full h-32 justify-center items-end pb-2 ">
                    <button @click="getItemFilter()"
                        class="text-white font-bold bg-black/90 rounded-xl w-64 h-10 flex justify-center items-center shadow-md shadow-black/20">
                        اعمال تغییرات
                    </button>
                </div>
                <div class="flex flex-col w-full h-32 justify-evenly items-center shadow-md shadow-black/20">
                    <div class="text-white font-bold bg-blue rounded-xl w-64 h-10 flex justify-end items-center pr-6">
                        وضعیت موجودی
                    </div>
                    <div class="flex flex-row space-x-2 justify-end items-center w-64 pr-2 text-gray font-medium">
                        <input type="checkbox" id="inStock" value="inStock" v-model="inStock">
                        <label for="inStock">موجود در انبار</label>
                    </div>
                </div>
                <div class="flex flex-col w-full h-60 justify-evenly items-center shadow-md shadow-black/20">
                    <div class="text-white font-bold bg-blue rounded-xl w-64 h-10 flex justify-end items-center pr-6">
                        فیلتر قیمتی
                    </div>
                    <div class="flex flex-col space-y-2 justify-end items-center w-64 pr-2 text-gray font-medium">
                        <label for="inStock">حداقل قیمت = {{ Intl.NumberFormat('fa').format(priceMin) }}</label>
                        <input type="range" min="500000" max="120000000" step="500000" id="priceMin" value="priceMin"
                            v-model="priceMin" class="w-full">
                    </div>
                    <div class="flex flex-col space-y-2 justify-end items-center w-64 pr-2 text-gray font-medium">
                        <label for="inStock">حداکثر قیمت = {{ Intl.NumberFormat('fa').format(priceMax) }}</label>
                        <input type="range" min="500000" max="120000000" step="500000" id="priceMax" value="priceMax"
                            v-model="priceMax" class="w-full">
                    </div>
                </div>
                <div class="flex flex-col w-full h-96 justify-evenly items-center shadow-md shadow-black/20">
                    <div class="text-white font-bold bg-blue rounded-xl w-64 h-10 flex justify-end items-center pr-6"> برند
                    </div>
                    <div class="flex flex-col space-y-6 text-xl font-bold justify-end items-end w-64">
                        <button @click="ChangeBrand('Honor')"
                            :class="brand === 'Honor' ? 'text-blue border-b-2 border-blue w-full' : 'text-gray'"
                            class="text-base  flex flex-row  justify-between items-center">
                            <div v-if="brand === 'Honor'">
                                <font-awesome-icon icon="fa-solid fa-square-check" class="text-blue text-2xl" />
                            </div>
                            <div class="flex flex-row space-x-3">
                                <p>آنر</p>
                                <img src="/category/Honor-Logo.png" alt="" width="65">
                            </div>
                        </button>
                        <button @click="ChangeBrand('Iphone')"
                            :class="brand === 'Iphone' ? 'text-blue border-b-2 border-blue w-full' : 'text-gray'"
                            class="text-base  flex flex-row  justify-between items-center">
                            <div v-if="brand === 'Iphone'">
                                <font-awesome-icon icon="fa-solid fa-square-check" class="text-blue text-2xl" />
                            </div>
                            <div class="flex flex-row space-x-3">
                                <p>آپل</p>
                                <img src="/category/Apple-Logo.png" alt="" width="65">
                            </div>
                        </button>
                        <button @click="ChangeBrand('Samsung')"
                            :class="brand === 'Samsung' ? 'text-blue border-b-2 border-blue w-full' : 'text-gray'"
                            class="text-base  flex flex-row  justify-between items-center">
                            <div v-if="brand === 'Samsung'">
                                <font-awesome-icon icon="fa-solid fa-square-check" class="text-blue text-2xl" />
                            </div>
                            <div class="flex flex-row space-x-3">
                                <p>سامسونگ</p>
                                <img src="/category/Samsung-Logo.png" alt="" width="65">
                            </div>
                        </button>
                        <button @click="ChangeBrand('Xiaomi')"
                            :class="brand === 'Xiaomi' ? 'text-blue border-b-2 border-blue w-full' : 'text-gray'"
                            class="text-base  flex flex-row  justify-between items-center">
                            <div v-if="brand === 'Xiaomi'">
                                <font-awesome-icon icon="fa-solid fa-square-check" class="text-blue text-2xl" />
                            </div>
                            <div class="flex flex-row space-x-3">
                                <p>شیائومی</p>
                                <img src="/category/Xiaomi-Logo.png" alt="" width="65">
                            </div>
                        </button>
                        <button @click="ChangeBrand('Nokia')"
                            :class="brand === 'Nokia' ? 'text-blue border-b-2 border-blue w-full' : 'text-gray'"
                            class="text-base  flex flex-row  justify-between items-center">
                            <div v-if="brand === 'Nokia'">
                                <font-awesome-icon icon="fa-solid fa-square-check" class="text-blue text-2xl" />
                            </div>
                            <div class="flex flex-row space-x-3">
                                <p>نوکیا</p>
                                <img src="/category/Nokia-Logo.png" alt="" width="65">
                            </div>
                        </button>
                        <button @click="ChangeBrand('Daria')"
                            :class="brand === 'Daria' ? 'text-blue border-b-2 border-blue w-full' : 'text-gray'"
                            class="text-base  flex flex-row  justify-between items-center">
                            <div v-if="brand === 'Daria'">
                                <font-awesome-icon icon="fa-solid fa-square-check" class="text-blue text-2xl" />
                            </div>
                            <div class="flex flex-row space-x-3">
                                <p>داریا</p>
                                <img src="/category/Daria-Logo.png" alt="" width="65">
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col justify-evenly w-full items-center h-64 shadow-md shadow-black/20">
                    <div class="text-white font-bold bg-blue rounded-xl w-64 h-10 flex justify-end items-center pr-6"> حافظه
                        داخلی
                    </div>
                    <div class="flex flex-row w-full justify-evenly h-32 ">
                        <div class="flex flex-col space-y-2">
                            <button @click="ChangeInternal(4)"
                                :class="Internal === 4 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>مگابایت</p>
                                <p>4</p>
                            </button>
                            <button @click="ChangeInternal(64)"
                                :class="Internal === 64 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>64</p>
                            </button>
                            <button @click="ChangeInternal(128)"
                                :class="Internal === 128 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>128</p>
                            </button>
                            <button @click="ChangeInternal(256)"
                                :class="Internal === 256 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>256</p>
                            </button>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <button @click="ChangeInternal(1)"
                                :class="Internal === 1 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>ترابایت</p>
                                <p>1</p>
                            </button>
                            <button @click="ChangeInternal(16)"
                                :class="Internal === 16 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>مگابایت</p>
                                <p>16</p>
                            </button>
                            <button @click="ChangeInternal(32)"
                                :class="Internal === 32 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>32</p>
                            </button>
                            <button @click="ChangeInternal(512)"
                                :class="Internal === 512 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>512</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-evenly w-full items-center h-64 shadow-md shadow-black/20">
                    <div class="text-white font-bold bg-blue rounded-xl w-64 h-10 flex justify-end items-center pr-6"> حافظه
                        رم
                    </div>
                    <div class="flex flex-row w-full justify-evenly h-32 ">
                        <div class="flex flex-col space-y-2">
                            <button @click="changeRam(16)"
                                :class="ram === 16 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>16</p>
                            </button>
                            <button @click="changeRam(3)"
                                :class="ram === 3 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>3</p>
                            </button>
                            <button @click="changeRam(8)"
                                :class="ram === 8 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>8</p>
                            </button>
                            <button @click="changeRam(24)"
                                :class="ram === 24 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>24</p>
                            </button>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <button @click="changeRam(12)"
                                :class="ram === 12 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>12</p>
                            </button>
                            <button @click="changeRam(2)"
                                :class="ram === 2 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>2</p>
                            </button>
                            <button @click="changeRam(4)"
                                :class="ram === 4 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>4</p>
                            </button>
                            <button @click="changeRam(6)"
                                :class="ram === 6 ? 'text-blue border-b-2 border-blue' : 'text-gray'"
                                class="text-base  flex flex-row space-x-1">
                                <p>گیگابایت</p>
                                <p>6</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import headerComponent from '../components/headerComponent.vue';
import SliderComponent from "../components/sliderComponent.vue";

</script>
<script >
import { ref } from 'vue'
import axios from 'axios'


export default {
    data() {

        return {
            items: [],
            count: ref(),
            brand: ref(),
            empty: ref(),
            Internal: ref(),
            inStock: ref(),
            priceMin: ref(),
            priceMax: ref(),
            ram: ref(),
        }
    },
    components: {
    },
    mounted() {
        this.getItem()
        this.ChangeActive()
        this.activeCount()
        this.ChangeBrand()
        this.ChangeInternal()
        this.changeRam()
    },
    methods: {
        activeCount() {
            this.count = 4;
            this.brand = '';
            this.inStock = true;
            this.Internal = '';
            this.ram = '';
            this.priceMin = 5000000;
            this.priceMax = 70000000;
        },
        ChangeActive(number) {
            this.count = number;
        },
        ChangeBrand(brand) {
            this.brand = brand;
        },
        ChangeInternal(Internal) {
            this.Internal = Internal;
        },
        changeRam(ram) {
            this.ram = ram;
        },

        async getItem() {

            await axios.get('/api/v1/allProducts/').then(response => {
                this.items = response.data
                if (this.items.length < 1 || this.items == undefined) {
                    this.empty = true
                }
                else {
                    this.empty = false
                }
            })
                .catch(error => {
                    console.log(error)
                })
        },

        async getItemFilter() {

            function Stock(a) {
                if (a === true)
                    return 1
                else
                    return 0;
            }

            await axios.get(`/api/v1/ProductsFilter/?inStock=${Stock(this.inStock)}&brand=${this.brand}&ram=${this.ram}&min=${this.priceMin}&max=${this.priceMax}&Internal=${this.Internal}`).then(response => {
                this.items = response.data
                if (this.items.length < 1 || this.items == undefined) {
                    this.empty = true
                }
                else {
                    this.empty = false
                }
            })
                .catch(error => {
                    console.log(error)
                })

        },

    },
}
</script>
