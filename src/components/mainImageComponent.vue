<script setup>
import { Image } from "@unpic/vue";
</script>



<template>
    <div class="w-full flex flex-col justify-center items-center mb-28">
        <div class="w-[68%] py-5 pt-10 min-w-[1000px] flex flex-row justify-center items-center">
            <div class="w-[40%] flex flex-col h-full space-y-6 justify-center items-center ">
                <div class="h-1/2 w-full flex min-w-[450px] flex-row justify-evenly items-center">
                    <button class="h-full w-full flex justify-center items-center">
                        <img src="/Shekaf-Slider-2.png" alt="">
                    </button>
                    <button class="h-full w-full flex justify-center items-center">
                        <img src="/Shekaf-Slider-3.png" alt="" >
                    </button>
                </div>
                <div class="h-1/2 w-full flex min-w-[450px] justify-center items-center">
                    <button class="h-full w-full flex justify-center items-center">
                        <img src="/Shekaf-Slider-4.png" alt="">
                    </button>
                </div>
            </div>
            <div class="w-[60%] h-full flex min-w-[700px] py-5 pl-5 justify-center items-center">
                <button class="h-full w-full flex justify-center items-center">
                    <img src="/Shekaf-Slider-1.png" alt="">
                </button>
            </div>
        </div>
        <div class="w-[68%] h-full min-w-[1100px] py-5 flex flex-row justify-center space-x-5 items-center">
            <button class="h-full w-full flex justify-center items-center">
                <Image src="/Shekaf-Slider-8.png" alt="" />
            </button>
            <button class="h-full w-full flex justify-center items-center">
                <Image src="/Shekaf-Slider-7.png" alt="" />

            </button>
            <button class="h-full w-full flex justify-center items-center">
                <Image src="/Shekaf-Slider-6.png" alt="" />
            </button>
            <button class="h-full w-full flex justify-center items-center">
                <Image src="/Shekaf-Slider-5.png" alt="" />
            </button>
        </div>
    </div>
</template>

