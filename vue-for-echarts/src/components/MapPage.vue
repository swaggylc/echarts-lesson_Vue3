<template>
  <div class="map" id="map"></div>
</template>

<script setup>
import axios from "axios";
import { onMounted, inject, reactive } from "vue";
let mapData = reactive({});
let $echarts = inject("echarts");
async function getData() {
  mapData = await axios.get("http://localhost:5173/map/china.json");
}
onMounted(() => {
  getData().then(() => {
    // console.log('ok',mapData)
    const myChart = $echarts.init(document.getElementById("map"));
    $echarts.registerMap("china", mapData.data);
    myChart.setOption({
      tooltip: {
        show: true,
        trigger: "item",
      },
      title:{
        map:"china",
        text:"全国销量地图",
        left:"center",
        textStyle:{
          color:"#fff",
            fontSize:20,
            textShadowColor:"#fff",
            textShadowBlur:10
        }
      },
      geo: {
        map: "china",
        itemStyle: {
          areaColor: "#0099ff", //地图的颜色
          borderColor: "#00ffff", //省份的边框颜色
          shadowColor: "rgba(230,130,70,0.5)", //阴影颜色
          shadowBlur: 10, //阴影范围
          emphasis: {
            focus: "self", //是否聚焦(其他省份淡出)
          },
        },
      },
      visualMap:{
        type:"continuous",  //连续型
        min:100,    //最大值和最小值
        max:10000,  //最大值和最小值
        calculable:true,    //是否显示拖拽条
        bottom:"30", //位置
        inRange:{
          color:["#50a3ba","#eac736","#d94e5d"] //颜色
        },
        textStyle:{
          color:"#fff"  //文字颜色
        }
      },
      series: [
        {
          type: "scatter", //散点图
          itemStyle: { 
            color: "red", //散点颜色
          },
          // 指定坐标系
          coordinateSystem: "geo", //坐标系
          data: [
            {
              name: "北京",
              value: [116.46, 39.92, 4367],
            },
            {
              name: "上海",
              value: [121.48, 31.22, 8753],
            },
            {
              name: "广州",
              value: [113.23, 23.16, 2461],
            },
            {
              name: "深圳",
              value: [114.07, 22.62, 1871],
            },
            {
              name: "杭州",
              value: [120.19, 30.26, 3421],
            },
            {
              name: "成都",
              value: [104.06, 30.67, 4256],
            },
          ],
        },
      ],
    });
  });
});
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
