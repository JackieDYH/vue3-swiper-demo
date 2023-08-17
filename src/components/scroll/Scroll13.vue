<!--
 * @Author: Jackie
 * @Date: 2023-08-17 10:55:21
 * @LastEditTime: 2023-08-17 11:39:17
 * @LastEditors: Jackie
 * @Description: scroll滚动 - 循环滚动，不超出不滚动
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll13.vue
 * @version: 
-->
<template>
  <div class="ticker-container">
    <div class="ticker-viewer" ref="scrollWiewer">
      <div
        class="ticker-scroll"
        ref="scrollContainer"
        :class="{ 'scroll-animation': !shouldScroll }"
        :style="{ animationDuration: animationDuration }"
      >
        <div
          class="ticker-scroll-item"
          :key="index"
          v-for="(item, index) in items"
        >
          <span v-if="item">{{ item }} ${{ item }}</span>
        </div>
      </div>
      <div
        class="ticker-scroll"
        v-if="shouldScroll"
        :style="{ animationDuration: animationDuration }"
      >
        <div
          class="ticker-scroll-item"
          :key="index"
          v-for="(item, index) in items"
        >
          <span v-if="item">{{ item }} ${{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const items = ref(Array.from({ length: 26 }, (_, index) => index + 1));
const shouldScroll = ref(false);
const scrollContainer = ref(null);
const scrollWiewer = ref(null);

// 计算动画持续时间
const animationDuration = computed(() => {
  const itemCount = items.value.length;
  // 根据元素数量调整倍数
  const durationMultiplier = 2; // 调整这个值以适应您的需求
  return `${itemCount * durationMultiplier}s`;
});

onMounted(() => {
  const wiewerWidth = scrollWiewer.value.offsetWidth;

  const containerWidth = scrollContainer.value.offsetWidth;
  const contentWidth = scrollContainer.value.scrollWidth;

  console.log(containerWidth, wiewerWidth, containerWidth > wiewerWidth);
  shouldScroll.value = containerWidth > wiewerWidth;
});

onUnmounted(() => {
  shouldScroll.value = false;
});
</script>

<style lang="scss" scoped>
.ticker-container {
  align-items: center;
  background: linear-gradient(90deg, #86eef1, #bcff2f 138.82%);
  display: flex;
  height: 50px;
  white-space: nowrap;
  width: 100%;

  .ticker-viewer {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;

    .ticker-scroll {
      /* opacity: 0; */

      transition: all linear;
      will-change: transform, opacity;

      /* animation: tickerScroll 20s linear infinite normal; */
      animation-name: tickerScroll;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
      transform: translateX(0);
      /* 没有超出不滚动 */
      &.scroll-animation {
        animation: none; // stopScroll 1s linear 1 normal;
        transform: translateX(0);
      }

      .ticker-scroll-item {
        display: inline-block;
        font-size: 18px;
        line-height: 22px;
        color: #fff;
        padding: 0 24px;
      }
    }
  }
}

@keyframes tickerScroll {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
  }
}

@keyframes stopScroll {
  0% {
    transform: translateX(0);
  }
}

@keyframes positionScroll {
  0% {
    transform: translateX(3.33333333%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
