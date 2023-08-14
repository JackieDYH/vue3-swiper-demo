<!--
 * @Author: Jackie
 * @Date: 2023-08-14 16:21:45
 * @LastEditTime: 2023-08-14 16:30:29
 * @LastEditors: Jackie
 * @Description: 循环滚动 - 直接
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll6.vue
 * @version: 
-->
<template>
  <div class="scroll" ref="scroller" :style="style">
    <div class="price-band-group">
      <div class="price-band-item DIN-medium" v-for="item in items" :key="item">
        <span> {{ item }} ${{ item }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const scroller = ref(null);
const timerId = ref(null);
const scrollLeftEnd = ref(false);
const items = ref(Array.from({ length: 26 }, (_, index) => index + 1));
const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};
const playAnimate = () => {
  pauseAnimate();
  const maxScrollLeft = scroller.value.scrollWidth - scroller.value.clientWidth;
  const itemWidth =
    scroller.value.querySelector('.price-band-item').clientWidth;
  timerId.value = setInterval(() => {
    if (scroller.value.scrollLeft >= maxScrollLeft) {
      scroller.value.scrollLeft -= maxScrollLeft;
    }
    scroller.value.scrollLeft += 1;
  }, 33);
};

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
<!-- 
在这个示例中，我们使用一个响应式的items数组来存储要展示的数据。我们使用Array.from和箭头函数来生成一个长度为26的数组，作为示例数据。

在playAnimate方法中，我们修改了滚动的逻辑。首先，我们计算了每个数据项的宽度（itemWidth），然后在定时器中将scrollLeft递增1。当scrollLeft超过容器的宽度后，我们将其减去容器的宽度，实现循环滚动的效果。

在CSS样式中，我们将容器的overflow属性设置为hidden，以隐藏超出容器的内容。
 -->
