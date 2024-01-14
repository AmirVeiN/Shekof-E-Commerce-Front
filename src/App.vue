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

</script>

<template>
  <headerComponent />
  <MainImageComponent />
  <RouterView />
  <!-- <sliderComponent title="lorem2" :likes="4"  price="1000000" stock="instock" srcImg="" /> -->
  <carouselComponent/>
</template>

