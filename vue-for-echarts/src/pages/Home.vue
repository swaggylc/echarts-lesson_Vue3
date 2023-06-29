<template>
  <div>
    <header>
      <h1>大数据可视化</h1>
    </header>
    <!-- 主题部分 -->
    <section class="container">
      <section class="item-left">
        <Item><ItemOne></ItemOne></Item>
        <Item><ItemTwo></ItemTwo></Item>
      </section>

      <section class="item-center">
        <MapPage></MapPage>
      </section>

      <section class="item-right">
        <Item><ItemThree></ItemThree></Item>
        <Item><ItemFour></ItemFour></Item>
      </section>
    </section>
  </div>
</template>

<script setup>
import Item from "../components/Item.vue";
import ItemTwo from "../components/ItemTwo.vue";
import ItemThree from "../components/ItemThree.vue";
import ItemFour from "../components/ItemFour.vue";
import ItemOne from "../components/ItemOne.vue";
import MapPage from "../components/MapPage.vue";
import { inject } from "vue";
components: {
  Item, ItemTwo, ItemThree, ItemFour, ItemOne, MapPage
}

const $echarts = inject("echarts");
const $http = inject("axios");




































</script>

<style lang="less" scoped>
header {
  height: 1.5rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  // 标题文字样式
  h1 {
    text-align: center;
    line-height: 1.5rem;
    font-size: 0.5rem;
    color: #fff;
  }
}
.container {
  // 设置最大最小宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  height: 9rem;
  // 设置三个部分所占的份数
  .item-left,
  .item-right {
    flex: 3;
  }
  .item-center {
    flex: 5;
  }
}

.item-center {
  flex: 5;
  border: 1px solid blue;
  padding: 0.125rem;
  margin: 0.25rem;
  height: 8.25rem;

}
</style>
