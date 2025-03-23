<script setup>
import { HeaderComponent, FooterComponent } from './components/global';
import GnbComponent from './components/global/GnbComponent.vue';
</script>
<template>
  <div id="app">
    <HeaderComponent />
    <GnbComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>