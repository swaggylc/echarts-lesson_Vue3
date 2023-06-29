<template>
  <div>
    <!-- 饼图 -->
    <div class="chart" id="threeChart"></div>
  </div>
</template>

<script setup>
import { onMounted, inject, reactive } from "vue";
const $echarts = inject("echarts");
const $http = inject("axios");

let data = reactive({});
async function getData() {
  data = await $http.get("/three/data");
}
onMounted(() => {
  getData().then(() => {
    console.log('饼图',data);
    let myChart = $echarts.init(document.getElementById("threeChart"));

    myChart.setOption({
      tooltip: {
        show: true,
      },
      title: {
        text: "销售类型占比",
        left: "center",
        textStyle: {
          color: "#fff",
          fontSize: 15,
        },
      },
      legend: {
        top: "bottom",
        padding: [10, 0],
        textStyle: {
          color: "#000",
          fontSize: 15,
        },
      },
      series: [
        {
          type: "pie",
          data: data.data.data.chartData,
          radius: [10, 100], //饼图的半径
          center: ["50%", "45%"], //饼图的位置
          roseType: "area",
          itemStyle: {
            borderRadius: 5,
          },
        },
      ],
    });
  });
});
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 4rem;
  padding: 10px;
}
</style>
