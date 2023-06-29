<template>
  <div>
    <!-- 折线图 -->
    <div class="chart" id="twoChart"></div>
  </div>
</template>

<script setup>
import { onMounted, inject, reactive } from "vue";
const $echarts = inject("echarts");
const $http = inject("axios");

let data = reactive({});
async function getData() {
  data = await $http.get("/two/data");
}

onMounted(() => {
  getData().then(() => {
    let myChart = $echarts.init(document.getElementById("twoChart"));
    // console.log('two',data);
    myChart.setOption({
      tooltip: {
        trigger: "axis", // 触发类型
        show: true, // 是否显示提示框组件 默认为true
        axisPointer: {
          type: "cross", // 指示器类型 默认为line 直线指示器 可选为：'line' | 'shadow' | 'cross'
          label: {
            backgroundColor: "#6a7985", // 文字背景颜色
          },
        },
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
      legend: {
        data: ["日化", "服饰", "电子", "家居", "工业"],
        top: "bottom",
        textStyle: {
          color: "#fff",
        },
      },

      xAxis: {
        type: "category", // x轴类型
        data: data.data.data.chartData.day, // x轴数据
        boundaryGap: false, // 坐标轴两边留白策略
        axisLine: {
          // 坐标轴轴线相关设置
          lineStyle: {
            // 坐标轴线样式设置
            color: "#fff", // 坐标轴线颜色
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
          name: "日化",
          type: "line",
          data: data.data.data.chartData.num.Chemicals,
          smooth: true, // 是否平滑曲线显示
          showSymbol: false, // 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
          stack: "Total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
          lineStyle: {
            width: 0, //设置线条宽度为0，可以隐藏线条
          },
          emphasis: {
            focus: "series", //设置高亮样式
          },
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 158, 68)",
              },
              {
                offset: 1,
                color: "rgb(255, 70, 131)",
              },
            ]),
          },
        },
        {
          name: "服饰",
          type: "line",
          data: data.data.data.chartData.num.Clothes,
          smooth: true, // 是否平滑曲线显示
          showSymbol: false,
          stack: "Total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
          lineStyle: {
            width: 0, //设置线条宽度为0，可以隐藏线条
          },
          emphasis: {
            focus: "series", //设置高亮样式
          },
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              },
            ]),
          },
        },
        {
          name: "电子",
          type: "line",
          data: data.data.data.chartData.num.Electrical,
          smooth: true, // 是否平滑曲线显示
          showSymbol: false,
          stack: "Total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
          lineStyle: {
            width: 0, //设置线条宽度为0，可以隐藏线条
          },
          emphasis: {
            focus: "series", //设置高亮样式
          },
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(0, 221, 255)",
              },
              {
                offset: 1,
                color: "rgb(77, 119, 255)",
              },
            ]),
          },
        },
        {
          name: "家居",
          type: "line",
          data: data.data.data.chartData.num.digit,
          smooth: true, // 是否平滑曲线显示
          showSymbol: false,
          stack: "Total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
          lineStyle: {
            width: 0, //设置线条宽度为0，可以隐藏线条
          },
          emphasis: {
            focus: "series", //设置高亮样式
          },
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(55, 162, 255)",
              },
              {
                offset: 1,
                color: "rgb(116, 21, 219)",
              },
            ]),
          },
        },
        {
          name: "工业",
          type: "line",
          data: data.data.data.chartData.num.gear,
          smooth: true, // 是否平滑曲线显示
          showSymbol: false,
          stack: "Total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
          lineStyle: {
            width: 0, //设置线条宽度为0，可以隐藏线条
          },
          emphasis: {
            focus: "series", //设置高亮样式
          },
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 0, 135)",
              },
              {
                offset: 1,
                color: "rgb(135, 0, 157)",
              },
            ]),
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
