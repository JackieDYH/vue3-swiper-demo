<!--
 * @Author: Jackie
 * @Date: 2023-08-03 20:16:21
 * @LastEditTime: 2023-08-03 21:01:19
 * @LastEditors: Jackie
 * @Description: js版
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView10.vue
 * @version: 
-->
<template>
  <div class="swiper">
    <div class="watch-list-arrow watch-list-arrow--left">
      <div class="watch-list-arrow-btn" @click="onPageLeft" />
    </div>
    <div ref="currencyItemsRef" class="currency-items">
      <div
        v-for="(item, index) in symbols"
        :key="item?.name || index"
        class="currency-item"
        :class="{ hide: !item }"
      >
        <span class="currency-name">{{ item?.name }}</span>
        <span class="currency-data'"> {{ item?.risePercent }} </span>
      </div>
    </div>
    <div class="watch-list-arrow watch-list-arrow--right">
      <div class="watch-list-arrow-btn" @click="onPageRight" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const symbols = ref([
  { name: 'BTCUSDT1', risePercent: 10, risePercentStr: '0.00%' },
  { name: 'BTCUSDT2', risePercent: -10, risePercentStr: '0.00%' },
  { name: 'BTCUSDT3', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT4', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' },
  { name: 'BTCUSDT5', risePercent: 0, risePercentStr: '0.00%' }
]);
const currencyItemsRef = ref(null);
const onPageLeft = () => {
  currencyItemsRef.value.scroll({
    left: -currencyItemsRef.value.clientWidth,
    behavior: 'smooth'
  });
};

const onPageRight = () => {
  currencyItemsRef.value.scroll({
    left: currencyItemsRef.value.clientWidth,
    behavior: 'smooth'
  });
};
</script>
<!-- 在这段代码中，onPageLeft 和 onPageRight 方法通过获取 currencyItemsRef 的引用，然后使用 scroll 方法来实现滚动效果。

具体来说，currencyItemsRef 是通过 ref 创建的引用，它指向 <div ref="currencyItemsRef" class="currency-items"> 元素。这个元素是一个滚动容器，通过设置 ref 属性，我们可以在代码中访问到它。

在 onPageLeft 方法中，我们调用了 currencyItemsRef.value.scroll 方法，传入了一个对象作为参数。这个对象包含了 left 属性，它的值为 -currencyItemsRef.value.clientWidth，表示向左滚动一个容器宽度的距离。我们还设置了 behavior 属性为 'smooth'，以实现平滑滚动的效果。

同样地，在 onPageRight 方法中，我们调用了 currencyItemsRef.value.scroll 方法，传入了一个对象作为参数。这个对象包含了 left 属性，它的值为 currencyItemsRef.value.clientWidth，表示向右滚动一个容器宽度的距离。同样，我们设置了 behavior 属性为 'smooth'。

通过调用这些方法，我们实现了点击左右箭头按钮时，滚动容器向左或向右滚动一个容器宽度的距离，从而实现了滚动效果。 -->
<style lang="scss" scoped>
.swiper {
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: flex;
  .watch-list-arrow {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 40px;
    height: 43px;
    background: linear-gradient(90deg, #121212 55%, rgba(23, 26, 30, 0) 100%);
    display: flex;
    align-items: center;
    .watch-list-arrow-btn {
      position: relative;
      width: 15px;
      height: 15px;
      cursor: pointer;
      background: center/contain url(@/assets/watch_list_arrow.png) no-repeat;
    }
    &.watch-list-arrow--right {
      left: unset;
      right: 20px;
      transform: rotate(180deg);
    }
  }
  .currency-items {
    overflow: auto;
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 30px;
    padding-right: 12px;
    margin-right: 32px;
    height: 44px;
    &::-webkit-scrollbar {
      display: none;
    }
    .currency-item {
      margin-right: 15px;
      padding: 0 8px;
      &.hide {
        display: none;
      }

      .currency-name {
        color: #b3b8c0;
        font-size: 14px;
        margin-right: 3px;
      }

      .currency-data {
        color: #e35561;
        font-size: 12px;

        &.currency-rise {
          color: #5dc787;
        }
      }
    }
  }
}
</style>
