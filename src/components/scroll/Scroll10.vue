<!--
 * @Author: Jackie
 * @Date: 2023-08-14 18:20:05
 * @LastEditTime: 2023-08-14 18:41:30
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll10.vue
 * @version: 
-->
<template>
  <div class="scroll" ref="scroller" :style="style">
    <div class="price-band-group" v-if="items.length">
      <div
        class="price-band-item DIN-medium"
        v-for="(item, index) in itemsWithTail"
        :key="index"
      >
        <span v-if="item !== null"> {{ item }} ${{ item }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
const scroller = ref(null);
const timerId = ref(null);
const items = ref(Array.from({ length: 12 }, (_, index) => index + 1));
const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};
const playAnimate = () => {
  pauseAnimate();
  const maxScrollLeft = scroller.value.scrollWidth - scroller.value.clientWidth;
  console.log(maxScrollLeft);
  timerId.value = setInterval(() => {
    if (scroller.value.scrollLeft >= maxScrollLeft) {
      scroller.value.scrollLeft -= maxScrollLeft;
    }
    scroller.value.scrollLeft += 1;
  }, 33);
};

const itemsWithTail = computed(
  () =>
    items.value.length >= 10 ? items.value.concat(items.value) : items.value
  //   items.value.concat(items.value.slice(0, 4))
);

onMounted(() => {
  setTimeout(() => {
    scroller.value.scrollLeft = 0;
    playAnimate();
  }, 100);
});

onUnmounted(() => {
  pauseAnimate();
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
  transition: scroll-left 1s ease-in-out; /* 添加过渡效果 */
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
