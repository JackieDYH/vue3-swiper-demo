<!--
 * @Author: Jackie
 * @Date: 2023-08-14 17:41:03
 * @LastEditTime: 2023-08-14 17:51:08
 * @LastEditors: Jackie
 * @Description: 无缝滚动
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll9.vue
 * @version: 
-->
<template>
  <div class="scroll" ref="scroller" :style="style">
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
const items = ref(Array.from({ length: 19 }, (_, index) => index + 1));

const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};

const playAnimate = () => {
  pauseAnimate();
  const itemWidth = group.value.firstElementChild.clientWidth;
  const maxScrollLeft = group.value.scrollWidth - scroller.value.clientWidth;
  let scrollLeft = 0;
  timerId.value = setInterval(() => {
    scrollLeft += 1;
    if (scrollLeft >= maxScrollLeft) {
      scrollLeft = 0;
      const firstItem = items.value.shift();
      items.value.push(firstItem);
      group.value.style.transform = `translateX(-${itemWidth}px)`;
      setTimeout(() => {
        group.value.style.transform = 'translateX(0)';
      }, 0);
    }
    scroller.value.scrollLeft = scrollLeft;
  }, 33);
};

const checkOverflow = () => {
  if (group.value.scrollWidth > scroller.value.clientWidth) {
    playAnimate();
  } else {
    pauseAnimate();
  }
};

onMounted(() => {
  checkOverflow();
  window.addEventListener('resize', checkOverflow);
});

onUnmounted(() => {
  pauseAnimate();
  window.removeEventListener('resize', checkOverflow);
});
</script>

<style lang="scss" scoped>
.scroll {
  width: 100%;
  height: 48px;
  background: linear-gradient(90deg, #31daff 0.47%, #316bff 100%);
  padding: 13px 0;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  .price-band-group {
    display: inline-block;
    white-space: nowrap;
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
</style>
