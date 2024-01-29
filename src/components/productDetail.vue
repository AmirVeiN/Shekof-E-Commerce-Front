<template>
    <div class="flex w-full h-full justify-center items-center">
        <div class="flex flex-row w-full h-full">
            <div class="w-2/3 h-full bg-primary-100 p-5">{{ desc }}</div>
            <div class="w-1/3 bg-primary-300 h-full p-5">{{ title }}</div>
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

