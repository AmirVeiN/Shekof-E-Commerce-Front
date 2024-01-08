<script setup>
import headerComponent from './components/headerComponent.vue';
import { RouterView } from 'vue-router'
import MainImageComponent from './components/mainImageComponent.vue';
import carouselComponent from './components/carouselComponent.vue';
</script>

<template>
  <headerComponent />
  <MainImageComponent />
  <RouterView />
  <carouselComponent />
</template>

