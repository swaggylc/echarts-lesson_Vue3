<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import * as echarts from 'echarts';
import axios from 'axios';
  provide('echarts', echarts);
  provide('axios', axios);

axios.defaults.baseURL = 'http://localhost:3000';








</script>

<style lang="scss">
body{
  background: url('./assets/bg.jpg')   no-repeat;
  background-size: cover;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
