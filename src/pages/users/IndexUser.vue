<template>

  <div class="px-4 pb-4">
    <div class="row mt-4">
      <div class="col-sm-4 mb-4 display-none-sm">
        <span class="default-name display-block ">نام و نام خانوادگی</span>
        <span class="db-name float-left display-block">{{ user.first_name}} {{ user.last_name }} </span>
      </div>
      <div class="col-sm-4 mb-4 display-none">
        <span class="default-name display-block">نام</span>
        <span class="db-name display-block">{{ user.first_name }}</span>
      </div>
      <div class="col-sm-4 mb-4 display-none">
        <span class="default-name display-block">  نام خانوادگی</span>
        <span class="db-name display-block">{{ user.last_name }}</span>
      </div>
      <div class="col-sm-4 mb-4">
        <span class="default-name display-block">شماره تلفن همراه</span>
        <span class="db-name float-left display-block">{{ user.coordinate_mobile }}</span>
      </div>
      <div class="col-sm-4 mb-4">
        <span class="default-name display-block">شماره تلفن ثابت</span>
        <span class="db-name float-left display-block">{{ user.coordinate_phone_number }}</span>
      </div>
      <div class="col-sm-4 mb-4">
        <span class="default-name display-block">جنسیت </span>
        <span class="db-name float-left display-block">{{ user.gender }}</span>
      </div>
      <hr class="display-none-sm"/>
      <div class="col-sm-4 mb-4">
        <p class="default-name">آدرس</p>
        <p class="db-name"> {{ user.region.name }} </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

<style>

</style>