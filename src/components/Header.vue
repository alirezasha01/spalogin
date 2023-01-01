<template>
  <header>
    <nav class="shadow-header">
      <ul>
        <li class="mx-sm-4">
          <router-link href="#" to="/users">مشاهده ادرس ها</router-link>
        </li>
        <li>
          <router-link href="#" to="/">ثبت ادرس</router-link>
        </li>
      </ul>
      <img :src="require('../assets/logo-achare.png')" alt="Header-image">
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header-name'
}
</script>

<style scoped>

nav {
  display: flex;
  justify-content: space-between;
  padding: 1% 0%;
}

nav ul {
  display: flex;
  list-style: none;
  padding-left: 0rem;
  padding-top: 0.5rem;
}

nav li {
  padding-left: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 1px;
  color: #37474F;
}

a {
  text-decoration: none !important;
}

img {
  width: 70px;
  height: 39px;
  margin-right: 2%;
}

.router-link-active {
  color: #37474F !important;
}

.shadow-header {
  background: #FFFFFF;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.15);
}
</style>