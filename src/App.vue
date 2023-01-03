<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {Header},
  name: 'App',
}
</script>

<style scoped>
@import url('https://v1.fontapi.ir/css/Vazir');

div {
  padding: 0;
  margin: 0;
  font-family: Vazir, sans-serif;
}

</style>
