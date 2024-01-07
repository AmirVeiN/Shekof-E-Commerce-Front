<script setup>
import headerComponent from './components/headerComponent.vue';
import { RouterView } from 'vue-router'
import MainImageComponent from './components/mainImageComponent.vue';
import sliderComponentVue from './components/sliderComponent.vue';

</script>

<template>
  <headerComponent />
  <MainImageComponent />
  <RouterView />
  <sliderComponentVue />
</template>

