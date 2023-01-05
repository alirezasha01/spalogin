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
          <div id="map"></div>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
    <div class="btndiv">
      <button @click="sendData" type="submit" class="btn btn-info px-5 mb-5 btnsub">ثبت و ادامه</button>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import router from "@/router";
import {useFormStore} from "@/store/task";
import FormData from "form-data";
import axios from "axios";
import {ref} from "@vue/reactivity";
import {onBeforeUnmount, onMounted} from "vue";

export default {
  name: "GoogleMap",
  setup() {
    let lng = ref(null);
    let lat = ref(null);
    let map = null;
    let marker = undefined;
    let iconMarker = null;
    const form = useFormStore();
    const sendData = () => {
      if (form.name !== "" && form.name.length >= 3 && form.lastname !== "" && form.lastname.length >= 3 && form.phoneNum !== "" && form.phoneNum.length === 11 && (form.phone.length === 11 || form.phone.length === 0) && form.address !== "" && form.address.length >= 10 && lat.value !== null && lng.value !== null) {
        let data = new FormData();
        data.append('first_name', form.name);
        data.append('last_name', form.lastname);
        data.append('coordinate_mobile', form.phoneNum);
        data.append('coordinate_phone_number', form.phone);
        data.append('address', form.address);
        data.append('region', '1');
        data.append('lat', lat.value);
        data.append('lng', lng.value);
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
            .catch(() => {

            });
        router.push("/success")
      }

    }
    onMounted(() => {
      map = L.map('map').setView([35.7036534, 51.3495146], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      map.on('click', function (e) {
        lat.value = e.latlng.lat;
        lng.value = e.latlng.lng;
        if (marker !== undefined) {
          map.removeLayer(marker);
        }
        iconMarker = L.icon({
          iconUrl: "https://img.icons8.com/ios-filled/50/null/marker.png",
          iconSize: [50, 50],
          shadowSize: [200, 200],
        }),
            marker = new L.Marker(e.latlng, {icon: iconMarker, draggable: false});
        map.addLayer(marker);
        marker.bindPopup("مکان شما").openPopup();
      });
    });
    onBeforeUnmount(() => {
      if (map) {
        map.remove();
      }
    });
    return {sendData, lng, lat}
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

#map {
  width: 100%;
  height: 300px;
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