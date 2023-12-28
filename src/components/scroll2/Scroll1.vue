<!--
 * @Author: Jackie
 * @Date: 2023-12-28 15:05:17
 * @LastEditTime: 2023-12-28 16:41:10
 * @LastEditors: Jackie
 * @Description: Scroll1 动画循环方法 数据循环滚动 - over
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
    if (wrapElement.scrollLeft >= maxScrollLeft - 2) {
      wrapElement.scrollLeft -= maxScrollLeft;
    }
    wrapElement.scrollLeft += 1;
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

<!-- requestAnimationFrame是一个由浏览器提供的 JavaScript 方法，用于在下一次浏览器重绘之前执行指定的回调函数。它接受一个回调函数作为参数，并返回一个整数值，可以用于取消动画循环。

使用 requestAnimationFrame 可以创建平滑的动画效果，并且能够有效地控制动画的帧率，以适应不同的设备和浏览器性能。

与使用定时器（如 setTimeout 或 setInterval）相比，requestAnimationFrame 具有以下优势：

自动适应设备刷新率：requestAnimationFrame 会自动根据当前设备的刷新率来调整动画的帧率，以提供更平滑的动画效果。
避免资源浪费：当页面处于非激活状态时，requestAnimationFrame 会暂停动画循环，从而避免不必要的资源浪费。
与浏览器的绘制周期同步：requestAnimationFrame 会在浏览器的绘制周期内执行回调函数，以确保动画的更新和渲染在最佳时机进行。 

function animate() {
  // 动画逻辑...

  requestAnimationFrame(animate);
}

// 开始动画循环
requestAnimationFrame(animate);

const animationId = requestAnimationFrame(animate);

// 取消动画循环
cancelAnimationFrame(animationId);
-->
