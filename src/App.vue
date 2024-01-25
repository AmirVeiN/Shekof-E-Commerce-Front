<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view :key="$route.path"/>
</template>

