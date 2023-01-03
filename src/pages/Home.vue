<template>
  <div class="row bg">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <p class="mt-sm-3 mt-2">ثبت ادرس</p>
      <div class="mb-5 padding-main">
        <p class="address-color px-sm-4 px-3 py-sm-2 pt-3">لطفا مشخصات و ادرس خود را وارد کنید</p>
        <div class="px-4 pb-4">
          <form class="row g-3 needs-validation" @submit.prevent="validate" id="myForm">
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">نام</label>
              <input v-model.lazy.trim="form.name" type="text" class="form-control" id="validationCustom01"
                     placeholder="مثال: محمد">
              <div class="form-text text-danger text-sm">
                {{ form.nameError }}
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">نام خانوادگی</label>
              <input v-model.lazy.trim="form.lastname" type="text" class="form-control" id="validationCustom02"
                     placeholder="مثال: رضایی">
              <div class="form-text text-danger text-sm">
                {{ form.lastnameError }}
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">شماره تلفن همراه</label>
              <div class="has-validation">
                <input v-model.lazy.trim="form.phoneNum" type="text" class="form-control" id="validationCustomUsername"
                       placeholder="مثال: 09121234567">
                <div class="form-text text-danger text-sm">
                  {{ form.phoneNumError }}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom03" class="form-label d-flex">
                <span>شماره تلفن ثابت (اختیاری)</span>
                <span class="text-sm mr-auto">*با پیش شماره</span>
              </label>
              <input v-model.lazy.trim="form.phone" type="text" class="form-control" id="validationCustom03"
                     placeholder="مثال: 0211234567">
              <div class="form-text text-danger text-sm">
                {{ form.phoneError }}
              </div>
            </div>
            <div class="col-md-8">
              <label for="validationCustom05" class="form-label">ادرس</label>
              <input v-model.lazy.trim="form.address" type="text" class="form-control" id="validationCustom05">
              <div class="form-text text-danger text-sm">
                {{ form.addressError }}
              </div>
            </div>
            <div class="col-12">
              <label class="sex">جنسیت</label>
              <div class="form-check form-check-inline mx-4">
                <input v-model.lazy.trim="form.gender" class="form-check-input" type="radio" name="gender"
                       id="inlineRadio1" :value="'خانم'">
                <label class="form-check-label" for="inlineRadio1">خانم</label>
              </div>
              <div class="form-check form-check-inline">
                <input v-model.lazy.trim="form.gender" class="form-check-input" type="radio" name="gender"
                       id="inlineRadio2" :value="'اقا'" checked="checked">
                <label class="form-check-label" for="inlineRadio2">اقا</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
    <div class="btndiv">
      <button form="myForm" type="submit" class="btn btn-info px-5 mb-5 btnsub">ثبت و ادامه</button>
    </div>
  </div>

</template>

<script>
import {reactive} from '@vue/reactivity'
import router from '@/router'
import axios from 'axios'
import FormData from 'form-data'

export default {
  name: "home-router",
  setup() {
    const form = reactive(
        {
          name: "",
          nameError: "",
          lastname: "",
          lastnameError: "",
          phoneNum: "",
          phoneNumError: "",
          phone: "",
          phoneError: "",
          address: "",
          addressError: "",
          gender: 'اقا'
        }
    )
    const validate = () => {
      if (form.name === "") {
        form.nameError = "پر کردن این فیلد اجباری است";
      } else if (form.name.length < 3) {
        form.nameError = "نام حداقل باید 3 کاراکتر باشد"
      } else {
        form.nameError = "";
      }


      if (form.lastname === "") {
        form.lastnameError = "پر کردن این فیلد اجباری است";
      } else if (form.lastname.length < 3) {
        form.lastnameError = "نام خانوادگی حداقل باید 3 کاراکتر باشد"
      } else {
        form.lastnameError = "";
      }


      if (form.phoneNum === "") {
        form.phoneNumError = "پر کردن این فیلد اجباری است";
      } else if (form.phoneNum.length !== 11) {
        form.phoneNumError = "شماره وارد شده صحیح نمی باشد"
      } else {
        form.phoneNumError = "";
      }


      if (form.phone.length !== 11 && form.phone.length !== 0) {
        form.phoneError = "شماره وارد شده صحیح نمی باشد";
      } else {
        form.phoneError = "";
      }


      if (form.address === "") {
        form.addressError = "پر کردن این فیلد اجباری است";
      } else if (form.address.length < 10) {
        form.addressError = "آدرس حداقل باید 10 کاراکتر باشد"
      } else {
        form.addressError = "";
      }
      if (form.name !== "" && form.name.length >= 3 && form.lastname !== "" && form.lastname.length >= 3 && form.phoneNum !== "" && form.phoneNum.length === 11 && (form.phone.length === 11 || form.phone.length === 0) && form.address !== "" && form.address.length >= 10) {
        sendData()
        router.push("/map")
      }
    }
    const sendData = () => {
      let data = new FormData();
      data.append('first_name', form.name);
      data.append('last_name', form.lastname);
      data.append('coordinate_mobile', form.phoneNum);
      data.append('coordinate_phone_number', form.phone);
      data.append('address', form.address);
      data.append('region', '1');
      data.append('lat', '35.7717503');
      data.append('lng', '51.3365315');
      data.append('gender', form.gender);

      let config = {
        method: 'post',
        url: 'https://stage.achareh.ir/api/karfarmas/address',
        headers: {
          'Authorization': 'Basic MDkxMjEwNzAxNTc6QWNoYXJlaEAxMjM0',
        },
        data: data
      };
      axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });

    }

    return {form, validate}
  }

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
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #37474F;
}

form {
  direction: rtl !important;;
}

.sex {
  margin-left: 5rem
}

.text-sm {
  color: #757575;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
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
.mr-auto{
  margin-right: auto;
}
.btndiv {
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.1);
}
.btnsub {
  color: white;
  text-align: center;
  margin: auto;
  margin-top: 19px;
}
.btnsub:hover {
  color: #FFFFFF;
}
</style>