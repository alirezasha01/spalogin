<template>
  <div class="row bg" id="width">
    <div class="col-md-2"></div>
    <div v-if="loading" class="spinner-border m-auto" role="status">
      <span class="sr-only"></span>
    </div>
    <div v-else class="col-md-8">
      <p class="mt-sm-5 mt-2">آدرس ها و مشخصات</p>
      <div class="mb-5 padding-main" v-for="user in users" :key="user.id">
        <index-user :user="user"/>
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
import axios from "axios";
import IndexUser from "./IndexUser.vue"
import {ref} from '@vue/reactivity';

export default {
  name: "users-get",
  components: {IndexUser},
  setup() {
    const users = ref([]);
    const loading = ref([])
    const getUser = () => {
      axios.get("https://stage.achareh.ir/api/karfarmas/address", {   headers: { 
    'Authorization': 'Basic MDkxMjEwNzAxNTc6QWNoYXJlaEAxMjM0'
  }
 })
          .then(function (response) {
            users.value = response.data;
            loading.value = false;
          })
          .catch(function (err) {
            console.log(err);
          })
    };
    getUser();
    return {users, loading};
  },
};
</script>

<style>
@media only screen and (max-width: 576px) {

  .float-left {
    float: left;
  }

  .display-none {
    display: none;
  }
}

@media screen and (min-width: 576px) {

  .display-block {
    display: block;
    margin-top: 10px;
  }

  .display-none-sm {
    display: none;
  }
}

.bg {
  background-color: #f0f0f0;
  direction: rtl !important;
}

.padding-main {
  background: #ffffff;
  border: 1px solid #edf0f2;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

label {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #37474f;
}

</style>