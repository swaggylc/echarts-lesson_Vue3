<template>
  <div>
    <div class="chart" id="oneChart">容器</div>
  </div>
</template>

<script setup>
import { onMounted, inject, reactive } from "vue";
const $echarts = inject("echarts");
const $http = inject("axios");

let data = reactive({});
let xdata = reactive([]);
let ydata = reactive([]);

function setData() {
  // console.log(data.data.data.chartData);
  let results = data.data.data.chartData;
  xdata = results.map((item) => item.title);
  ydata = results.map((item) => item.num);
  console.log(xdata);
  console.log(ydata);
}

async function getData() {
  data = await $http.get("/one/data");
  // console.log(data);
}

onMounted(() => {
  // 调用获取数据的函数
  getData().then(() => {
    let myChart = $echarts.init(document.getElementById("oneChart"));
    // 数据获取成功后,设置数据
    setData();
    myChart.setOption({
      tooltip: {
        show: true,
      },
      title: {
        text: "销售额统计",
        left: "center",
        textStyle: {
          color: "#fff",
          fontSize: 15,
          top: 10,
        },
      },
      xAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "category",
        data: xdata,
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          data: ydata,
          type: "bar",
          // 柱状样式
          itemStyle: {
            normal: {
              color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#005eaa",
                },
                {
                  offset: 0.5,
                  color: "#339ca8",
                },
                {
                  offset: 1,
                  color: "#cda819",
                },
              ]),
            },
          },
          // 柱子之间的距离
          barCategoryGap: 50,
          // 柱子宽度
          barWidth: 20,
          // 显示柱子内的文字
          label: {
            show: true,
            position: "inside",
            // {c}会自动解析为data里面的数据
            formatter: "{c}",
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
  margin-top: 0;
  padding: 10px;
}
</style>
