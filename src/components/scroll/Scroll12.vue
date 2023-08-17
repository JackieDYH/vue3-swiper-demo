<!--
 * @Author: Jackie
 * @Date: 2023-08-16 21:27:42
 * @LastEditTime: 2023-08-17 10:56:47
 * @LastEditors: Jackie
 * @Description: scroll 仿okx 水平滚动 - 效果基本满足需求
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll12.vue
 * @version: 
-->
<template>
  <div class="ticker-container">
    <div class="ticker-viewer">
      <div class="ticker-scroll">
        <div
          class="ticker-scroll-item"
          :key="index"
          v-for="(item, index) in items"
        >
          <span v-if="item">{{ item }} ${{ item }}</span>
        </div>
      </div>
      <div class="ticker-scroll">
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
import { ref, onMounted, onUnmounted } from 'vue';
const items = ref(Array.from({ length: 26 }, (_, index) => index + 1));
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
      animation-delay: 8s;
      opacity: 0;

      animation: tickerScroll 20s linear infinite normal;
      transform: translateX(0);

      transition: all linear;
      will-change: transform, opacity;

      /* 没有超出不滚动 */
      /* @media (max-width: 100%) {
        &.ticker-scroll {
          animation: none;
        }
      } */

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

@keyframes positionScroll {
  0% {
    transform: translateX(3.33333333%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
