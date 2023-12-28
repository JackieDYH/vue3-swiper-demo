<!--
 * @Author: Jackie
 * @Date: 2023-12-28 15:20:47
 * @LastEditTime: 2023-12-28 17:15:44
 * @LastEditors: Jackie
 * @Description: 2 来回滚动
 * @FilePath: /vue3-swiper-demo/src/components/scroll2/Scroll2.vue
 * @version: 
-->
<template>
  <div class="wrap" ref="wrapRef">
    <div v-for="item in items" :key="item" class="item">${{ item }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const items = ref(Array.from({ length: 30 }, (_, index) => index + 1));

const wrapRef = ref(null);
const isShowItems = ref(false);
const scrollLeftEnd = ref(false);
const animationId = ref(null);

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
    // 右到左
    // if (wrapElement.scrollLeft >= maxScrollLeft - 2) {
    //   wrapElement.scrollLeft -= maxScrollLeft;
    // }
    // wrapElement.scrollLeft += 1;

    // 来回滚动
    if (wrapElement.scrollLeft >= maxScrollLeft - 2) {
      scrollLeftEnd.value = true;
    }
    if (wrapElement.scrollLeft <= 1) {
      scrollLeftEnd.value = false;
    }
    if (scrollLeftEnd.value) {
      wrapElement.scrollLeft -= 1;
    } else {
      wrapElement.scrollLeft += 1;
    }

    // 动画循环
    animationId.value = requestAnimationFrame(playAnimate);
  }
};

onMounted(() => {
  console.log('总宽度', wrapRef.value.scrollWidth);
  console.log('可视宽度', wrapRef.value.clientWidth);
  //   playAnimate();
  // 开始动画循环
  requestAnimationFrame(playAnimate);
});
onUnmounted(() => {
  //   wrapRef.value = null;
  console.log('取消动画循环', animationId.value);
  // 在需要取消动画循环时
  cancelAnimationFrame(animationId);
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
