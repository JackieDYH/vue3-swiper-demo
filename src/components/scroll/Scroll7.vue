<!--
 * @Author: Jackie
 * @Date: 2023-08-14 16:24:50
 * @LastEditTime: 2023-08-14 16:30:11
 * @LastEditors: Jackie
 * @Description: 循环无缝滚动 - 尾部补充数据方式
 * @FilePath: /vue3-swiper-demo/src/components/scroll/Scroll7.vue
 * @version: 
-->
<template>
  <div class="scroll" ref="scroller" :style="style">
    <div class="price-band-group">
      <div
        class="price-band-item DIN-medium"
        v-for="(item, index) in itemsWithDuplicates"
        :key="index"
      >
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
const itemsWithDuplicates = ref([]);

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
  // 在数据项的前后各添加副本
  itemsWithDuplicates.value = [...items.value, ...items.value];

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
<!-- 在这个示例中，我们修改了itemsWithDuplicates的计算属性，将items数组的副本添加到其前后，以实现数据项的无缝衔接滚动效果。

在playAnimate方法中，我们仍然使用递增的方式来滚动内容，当滚动到边界时，通过减去容器的宽度来实现无缝衔接。 -->
