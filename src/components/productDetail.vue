<template>
    <div class="flex w-full h-full justify-center items-center">
        <div class="flex flex-row w-full h-full">
            <div dir="rtl" class="w-2/3  bg-primary-100 p-5">{{ desc }}</div>
            <div dir="rtl" class="w-1/3 bg-primary-300  p-5">{{ title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
    }
}
</script>

