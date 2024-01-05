<script setup>
import headerComponent from './components/headerComponent.vue';
import { RouterView } from 'vue-router'
import MainImageComponent from './components/mainImageComponent.vue';

</script>

<template>
  <headerComponent />
  <MainImageComponent />
  <RouterView />
</template>

