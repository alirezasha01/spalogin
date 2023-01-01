<template>
  <div>
    <button form="myForm" type="submit" class="btn btn-info px-5 mb-5">ثبت و ادامه</button>
  </div>
</template>

<script>

export default {
  name: 'Button-info',


}
</script>

<style scoped>
div {
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.1);
}

button {
  color: white;
  text-align: center;
  margin: auto;
  margin-top: 19px;
}

button:hover {
  color: #FFFFFF;
}

</style>