<template>
    <div>

    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "Product",
    data() {
        return {
            product : {},
            quantity : 1,
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        getProduct() {
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug
        }
    }
}
</script>

<style lang="scss" scoped>

</style>