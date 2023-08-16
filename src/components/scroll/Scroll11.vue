<!--
 * @Author: Jackie
 * @Date: 2023-08-16 21:02:42
 * @LastEditTime: 2023-08-16 21:42:04
 * @LastEditors: Jackie
 * @Description: 过渡 - 通过两次滚动实现 flex  - 效果基本满足需求
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll11.vue
 * @version: 
-->
<template>
  <div class="scroll">
    <div class="price-band-group" ref="group">
      <div
        class="price-band-item DIN-medium"
        :key="index"
        v-for="(item, index) in items"
      >
        <span v-if="item">{{ item }} ${{ item }}</span>
      </div>
    </div>
    <div class="price-band-group" ref="group">
      <div
        class="price-band-item DIN-medium"
        :key="index"
        v-for="(item, index) in items"
      >
        <span v-if="item">{{ item }} ${{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scroller = ref(null);
const group = ref(null);
const timerId = ref(null);
const items = ref(Array.from({ length: 26 }, (_, index) => index + 1));
</script>

<style lang="scss" scoped>
.scroll {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 48px;
  background: linear-gradient(90deg, #31daff 0.47%, #316bff 100%);
  padding: 13px 0;
  box-sizing: border-box;
  overflow: auto;
  .price-band-group {
    display: flex;
    white-space: nowrap;
    /* animation: index_loop 100s linear infinite normal;
    animation-delay: 0.5s; */
    animation: tickerScroll 240s linear infinite normal;
    transform: translateX(0);
    .price-band-item {
      display: inline-block;
      font-size: 18px;
      line-height: 22px;
      color: #fff;
      padding: 0 24px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
}

@keyframes index_loop {
  0% {
    transform: translateZ(0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
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
</style>
