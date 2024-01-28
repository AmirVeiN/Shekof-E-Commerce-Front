<script setup>
import headerComponent from '../components/headerComponent.vue';
import MainImageComponent from '../components/mainImageComponent.vue';
import carouselComponent from '../components/carouselComponent.vue';
import FooterCmponent from '@/components/footerCmponent.vue';
import ActiveListComponent from '@/components/activeListComponent.vue';
import ActiveList2Component from '@/components/activeList2Component.vue';

</script>

<template>
  <headerComponent />
  <MainImageComponent />
  <carouselComponent />
  <ActiveListComponent />
  <ActiveList2Component />
  <FooterCmponent />
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  computed: {
      cartTotalLength() {
          let totalLength = 0

          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }

          return totalLength
      }
  }
}
</script>
