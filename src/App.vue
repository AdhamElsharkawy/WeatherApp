<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from "./components/SiteNavigation.vue";
import HomeView from './views/HomeView.vue';
</script>

<style>

</style>