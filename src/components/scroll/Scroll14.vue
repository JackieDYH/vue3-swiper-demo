<!--
 * @Author: Jackie
 * @Date: 2023-08-17 17:18:48
 * @LastEditTime: 2023-08-17 18:01:44
 * @LastEditors: Jackie
 * @Description: scroll 滚动
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll14.vue
 * @version: 
-->
<template>
  <div class="scroll-warp" ref="scrollWarpRef">
    <div class="scroll-box" ref="scrollBoxRef">
      <div class="scroll-item" v-for="(item, index) in items" :key="index">
        <span>{{ item }} ${{ item }}</span>
      </div>
    </div>
    <div class="scroll-box" v-if="shouldScroll">
      <div class="scroll-item" v-for="(item, index) in items" :key="index">
        <span>{{ item }} ${{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const items = ref(Array.from({ length: 19 }, (_, index) => index + 1));
const timerId = ref(null);
const shouldScroll = ref(false);
const scrollWarpRef = ref(null);
const scrollBoxRef = ref(null);

const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};
const playAnimate = () => {
  isShow();
  pauseAnimate();
  const maxScrollLeft =
    scrollWarpRef.value.scrollWidth - scrollWarpRef.value.clientWidth;
  console.log(
    maxScrollLeft,
    scrollWarpRef.value.scrollWidth,
    scrollWarpRef.value.clientWidth
  );
  timerId.value = setInterval(() => {
    if (scrollWarpRef.value.scrollLeft >= maxScrollLeft - 2) {
      scrollWarpRef.value.scrollLeft -= maxScrollLeft;
    }
    scrollWarpRef.value.scrollLeft += 1;
  }, 33);
};

const isShow = () => {
  const warpWidth = scrollWarpRef.value.offsetWidth;

  const containerWidth = scrollBoxRef.value.offsetWidth;
  const contentWidth = scrollBoxRef.value.scrollWidth;

  console.log(containerWidth, warpWidth, containerWidth > warpWidth);
  shouldScroll.value = containerWidth > warpWidth;
};

onMounted(() => {
  setTimeout(() => {
    scrollWarpRef.value.scrollLeft = 0;
    playAnimate();
  }, 100);
});

onUnmounted(() => {
  pauseAnimate();
  shouldScroll.value = false;
});
</script>

<style lang="scss" scoped>
.scroll-warp {
  background: linear-gradient(90deg, #86eef1, #bcff2f 138.82%);
  align-items: center;
  display: flex;
  height: 50px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  overflow: auto;
  .scroll-box {
    display: flex;
    white-space: nowrap;
    .scroll-item {
      display: inline-block;
      font-size: 18px;
      line-height: 22px;
      color: #fff;
      padding: 0 24px;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
