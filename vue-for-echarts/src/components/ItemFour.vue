<template>
  <div>
    <div class="chart" id="fourChart"></div>
  </div>
</template>

<script setup>
import { onMounted, inject, reactive } from "vue";
const $echarts = inject("echarts");
const $http = inject("axios");

let data = reactive({});
async function getData() {
  data = await $http.get("/four/data");
}

onMounted(() => {
  getData().then(() => {
    let myChart = $echarts.init(document.getElementById("fourChart"));
    // console.log("four", data);
    myChart.setOption({
      xAxis: {
        type: "category",
        data: data.data.data.chartData.day,
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },

      series: [
        {
          name: "服饰",
          data: data.data.data.chartData.num.Chemicals,
          type: "bar",
          stack:'Total amount',
          areaStyle: {
            color: "rgba(255,255,255,0.3)",
          },
          itemStyle: {
            color: "#fff",
          },
        },
        {
          name: "家电",
          data: data.data.data.chartData.num.Clothes,
          type: "bar",
          stack:'Total amount',
          areaStyle: {
            color: "rgba(255,255,255,0.3)",
          },
          itemStyle: {
            color: "#fff",
          },
        },
        {
          name: "数码",
          data: data.data.data.chartData.num.Electrical,
          type: "bar",
          stack:'Total amount',
          areaStyle: {
            color: "rgba(255,255,255,0.3)",
          },
          itemStyle: {
            color: "#fff",
          },
        },
        {
          name: "化妆品",
          data: data.data.data.chartData.num.digit,
          type: "bar",
          stack:'Total amount',
          areaStyle: {
            color: "rgba(255,255,255,0.3)",
          },
          itemStyle: {
            color: "#fff",
          },
        },
        {
          name: "食品",
          data: data.data.data.chartData.num.gear,
          type: "bar",
          stack:'Total amount',
          areaStyle: {
            color: "rgba(255,255,255,0.3)",
          },
          itemStyle: {
            color: "#fff",
          },
        },
      ],
    });
  });
});
</script>

<style lang="scss" scoped>
.chart {
  height: 4rem;
  padding: 10px;
}
</style>
