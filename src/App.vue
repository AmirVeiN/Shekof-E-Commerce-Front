<<<<<<< HEAD
<script setup>
import Home from './views/home.vue';
import { RouterView } from 'vue-router'
=======
<script>
import headerComponent from './components/headerComponent.vue';
import { RouterView } from 'vue-router'
import MainImageComponent from './components/mainImageComponent.vue';
import carouselComponent from './components/carouselComponent.vue';
import sliderComponent from './components/sliderComponent.vue';

export default {
  components:{
    headerComponent,
    MainImageComponent,
    carouselComponent,
    sliderComponent
  }
}

>>>>>>> fc9ea125afb5e0b2a3caed17d536b977c47a45d1
</script>

<template>
  <Home />
  <RouterView />
  <!-- <sliderComponent title="lorem2" :likes="4"  price="1000000" stock="instock" srcImg="" /> -->
  <carouselComponent/>
</template>

