<!--
 * @Author: Jackie
 * @Date: 2023-08-10 20:20:55
 * @LastEditTime: 2023-08-17 10:56:22
 * @LastEditors: Jackie
 * @Description: scroll
 * @FilePath: /vue3-swiper-demo/src/views/ScrollView.vue
 * @version: 
-->
<template>
  <div class="scroll">
    <!-- <Scroll4 /> -->
    <!-- <br />
    <Scroll5 />
    <br />
    <Scroll6 />
    <br />
    <Scroll7 />
    <br /> -->
    <!-- <Scroll8 /> -->
    <br />
    <!-- <Scroll9 /> -->
    <!-- <Scroll10 /> -->
    <Scroll11 />
    <br />
    <Scroll12 />
    <br />
    <Scroll13 />
  </div>
</template>

<script setup>
import Scroll4 from '@/components/scroll/Scroll4.vue';
import Scroll5 from '@/components/scroll/Scroll5.vue';
import Scroll6 from '@/components/scroll/Scroll6.vue';
import Scroll7 from '@/components/scroll/Scroll7.vue';
import Scroll8 from '@/components/scroll/Scroll8.vue';
import Scroll9 from '@/components/scroll/Scroll9.vue';
import Scroll10 from '@/components/scroll/Scroll10.vue';
import Scroll11 from '@/components/scroll/Scroll11.vue';
import Scroll12 from '@/components/scroll/Scroll12.vue';
import Scroll13 from '@/components/scroll/Scroll13.vue';

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
