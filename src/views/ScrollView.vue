<!--
 * @Author: Jackie
 * @Date: 2023-08-10 20:20:55
 * @LastEditTime: 2023-08-11 14:39:27
 * @LastEditors: Jackie
 * @Description: scroll
 * @FilePath: /vue3-swiper-demo/src/views/ScrollView.vue
 * @version: 
-->
<template>
  <div class="scroll">
    <div class="home-banner">123</div>
    <Scroll4 />
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
    <div class="box">222</div>
  </div>
</template>

<script setup>
import Scroll4 from '@/components/scroll/Scroll4.vue';

const minWidth = 375;
const width =
  document.documentElement.clientWidth > minWidth
    ? document.documentElement.clientWidth
    : minWidth;
const scale = width / 1920;
const sizeRatio = scale;
const windowHeight = document.documentElement.clientHeight;
// :style="{ 'min-height': minHeight + 'px' }"
const minHeight = () => {
  // 84是头部高度(commonHeader.vue)，48是价格带（priceBrand.vue)高度
  // return windowHeight - (84 + 48) * sizeRatio;
  return windowHeight - 48 * sizeRatio;
};
</script>

<style lang="scss" scoped>
.home-banner {
  height: 800px;
}
.box {
  height: 100px;
}
</style>
