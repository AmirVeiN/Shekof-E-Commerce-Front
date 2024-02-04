<template>
    <headerComponent />
    <div class="w-full h-full flex justify-center items-center {{ getItem() }} mt-10">
        <div class="w-[68%] min-w[1000px] space-y-4 flex flex-col divide-y-2 divide-gray divide-opacity-30">
            <div class="flex flex-row-reverse justify-between items-center w-full">
                <div class="flex flex-row space-x-9 w-[70%] justify-end font-semibold text-base pr-2">
                    <p>نام محصول</p>
                    <p>تصویر</p>
                </div>
                <div class=" w-[30%] justify-center flex font-semibold text-base">
                    <p>قیمت</p>
                </div>
            </div>
            <div class="flex flex-row-reverse justify-between items-center w-full pt-2" v-for="item in items" :key="item">
                <div class="flex flex-row space-x-4 w-[70%] justify-end font-semibold text-sm text-blue items-center">
                    <RouterLink :to="'/'+ item.Slug">{{ item.Name }}</RouterLink>
                    <img :src="'/product/' + imageUrl(item.Image)" alt="" width="70" height="70" />
                </div>
                <div class=" w-[30%] justify-center flex font-semibold text-sm flex-row space-x-1 text-blue">
                    <p>تومان</p>
                    <p>{{ Intl.NumberFormat('fa').format(item.Price) }}</p>
                </div>
            </div>

        </div>
    </div>
    <footerCmponent/>
</template>

<script >
import axios from 'axios'

export default {
    data() {

        return {
            items: [],
        }
    },
    components: {
    },
    mounted() {
        this.getItem()
        document.title = 'شکاف | لیست فیمت'

    },
    methods: {
        imageUrl(item) {
            const img = item
            const list = img.split(",")
            return list[0]
        },

        async getItem() {

            await axios.get('/api/v1/allProducts/').then(response => {
                this.items = response.data

            })
                .catch(error => {
                    console.log(error)
                })
        }
    },
}
</script>


<script setup>

import headerComponent from '../components/headerComponent.vue';
import footerCmponent from '@/components/footerCmponent.vue';

</script>