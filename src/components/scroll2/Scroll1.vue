<!--
 * @Author: Jackie
 * @Date: 2023-12-28 15:05:17
 * @LastEditTime: 2023-12-28 16:33:25
 * @LastEditors: Jackie
 * @Description: Scroll1 数据循环滚动 - over
 * @FilePath: /vue3-swiper-demo/src/components/scroll2/Scroll1.vue
 * @version: 
-->
<template>
  <div class="wrap" ref="wrapRef">
    <div v-for="item in items" :key="item" class="item">${{ item }}</div>
    <template v-if="isShowItems">
      <div v-for="item in items" :key="item" class="item">${{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const items = ref(Array.from({ length: 26 }, (_, index) => index + 1));

const wrapRef = ref(null);
const isShowItems = ref(false);
const timerId = ref(null);

// scrollWidth 总宽度，包括被隐藏的部分
// clientWidth 可视宽度，不包括被隐藏的部分 window.innerWidth
// scrollLeft 滚动距离

const playAnimate = () => {
  const wrapElement = wrapRef.value;
  if (wrapElement === null) return;

  const maxScrollLeft = wrapElement.scrollWidth - wrapElement.clientWidth;
  if (maxScrollLeft) {
    console.log(
      maxScrollLeft,
      wrapElement.scrollWidth,
      wrapElement.clientWidth
    );
    isShowItems.value = true;
    if (wrapElement.scrollLeft >= maxScrollLeft - 2) {
      wrapElement.scrollLeft -= maxScrollLeft;
    }
    wrapElement.scrollLeft += 1;
    requestAnimationFrame(playAnimate);
  }
};

onMounted(() => {
  console.log('总宽度', wrapRef.value.scrollWidth);
  console.log('可视宽度', wrapRef.value.clientWidth);
  playAnimate();
});
onUnmounted(() => {
  //   wrapRef.value = null;
});
</script>

<style lang="scss" scoped>
.wrap {
  background: linear-gradient(90deg, #9da0a0, #818181 138.82%);
  align-items: center;
  display: flex;
  height: 50px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    font-size: 18px;
    color: #fff;
    padding: 0 24px;
  }
}
</style>
