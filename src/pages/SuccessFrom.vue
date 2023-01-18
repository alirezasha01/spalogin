<template>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6 justify-content-center">
      <div class="text-center mt-5">
        <img width="45" height="45" :src="require('../assets/success.png')" alt="success-image">
      </div>
      <div class="text-center">
        <p class="mt-1">اطلاعات شما با موفقیت ثبت شد</p>
      </div>
      <div class="d-flex">
        <router-link to="/users" class="text-decoration">
          <button class="btn btn-outline-info"> مشاهده اطلاعات</button>
        </router-link>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
a {
  text-align: center;
  margin: auto;
}

button:hover {
  color: #FFFFFF;
}

.text-decoration {
  text-decoration: none;
}

.justify-content-center {
  justify-content: center;
}

button {
  padding: 11px 95px;
}

</style>