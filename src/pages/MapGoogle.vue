<template>
  <div class="row bg">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <p class="mt-sm-3 mt-2">
        <router-link to="/"><img width="30" height="30" :src="require('../assets/right.png')" alt="back-image">
        </router-link>
        انتخاب ادرس
      </p>
      <div class="mb-5 padding-main">
        <p class="address-color px-sm-4 px-3 py-sm-2 pt-3">موقعیت مورد نظر خود را روی نقشه مشخص کنید</p>
        <div class="px-4 pb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12957.426284932677!2d51.24029211479256!3d35.71744823215991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfb0cf2edd94d%3A0x588ffbe58a59aad1!2sBehnoush%20Iran%20Co.!5e0!3m2!1sfr!2s!4v1672525454657!5m2!1sfr!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
    <router-link to="/success" class="text-decoration">
      <Button/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button.vue"

export default {
  components: {
    Button
  },
  name: "map-embed"
}
</script>

<style scoped>
.bg {
  background-color: #f0f0f0;
}

.padding-main {
  background: #FFFFFF;
  border: 1px solid #EDF0F2;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.address-color {
  font-family: 'Vazir', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #37474F;
}

form {
  direction: rtl !important;;
}

label {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #37474F;
}

.text-decoration {
  text-decoration: none;
}

</style>