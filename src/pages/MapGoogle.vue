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
    <router-link to="/success" class="text-decoration">
      <Button/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button.vue"
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  components: {
    Button
  },
  name: "GoogleMap",
  data() {
    return {
      map: null,
      point: {
        lat: null,
        lng: null
      },
      marker: null,
      iconMarker: null
    };
  },
  mounted() {
    let map = L.map('map').setView([35.7036534, 51.3495146], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    map.on('click', function (e) {
      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
      if (this.marker !== undefined) {
        map.removeLayer(this.marker);
      }
      this.iconMarker = L.icon({
        iconUrl: "https://img.icons8.com/ios-filled/50/null/marker.png",
        iconSize: [50, 50],
        shadowSize: [200, 200],
      }),
          this.marker = new L.Marker(e.latlng, {icon: this.iconMarker, draggable: true});
      map.addLayer(this.marker);
      this.marker.bindPopup("مکان شما").openPopup();
      console.log(this.lat, this.lng)
    });

  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
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
</style>