<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'

</script>

<style scoped>
@import url('https://v1.fontapi.ir/css/Vazir');

div {
  padding: 0;
  margin: 0;
  font-family: Vazir, sans-serif;
}

</style>
