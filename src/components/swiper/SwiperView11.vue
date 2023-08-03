<!--
 * @Author: Jackie
 * @Date: 2023-08-03 20:51:41
 * @LastEditTime: 2023-08-03 21:32:32
 * @LastEditors: Jackie
 * @Description: swiper鼠标滑动 触控板滑动 左右箭头滑动
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView11.vue
 * @version: 
-->
<template>
  <h1>swiper鼠标滑动 触控板滑动 左右箭头滑动</h1>
  <div class="swiper">
    <div class="watch-list-arrow watch-list-arrow--left" @click="onPageLeft">
      <div class="watch-list-arrow-btn">←</div>
    </div>
    <div ref="currencyItemsRef" class="currency-items">
      <div class="currency-item" v-for="(item, index) in symbols" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="watch-list-arrow watch-list-arrow--right" @click="onPageRight">
      <div class="watch-list-arrow-btn">→</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
const symbols = ref([
  'BTC111',
  'ETH',
  'XRP',
  'LTC',
  'BCH',
  'ADA',
  'DOGE',
  'DOT',
  'LINK',
  'UNI1',
  'UNI2',
  'UNI3',
  'UNI4',
  'UNI5',
  'UNI6',
  'UNI999'
]);

const currencyItemsRef = ref(null);

// 左右箭头滑动
const onPageLeft = () => {
  // 版本一
  // currencyItemsRef.value.scrollLeft -= currencyItemsRef.value.offsetWidth;
  // 版本二
  //   const containerWidth = currencyItemsRef.value.clientWidth;
  //   const currentScrollLeft = currencyItemsRef.value.scrollLeft;

  //   const nextScrollLeft = currentScrollLeft - containerWidth;

  //   if (nextScrollLeft >= 0) {
  //     currencyItemsRef.value.scrollTo({
  //       left: nextScrollLeft,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     currencyItemsRef.value.scrollTo({
  //       left: 0,
  //       behavior: 'smooth'
  //     });
  //   }
  //  版本三
  currencyItemsRef.value.scroll({
    left:
      currencyItemsRef.value.scrollLeft - currencyItemsRef.value.offsetWidth,
    behavior: 'smooth'
  });
};

const onPageRight = () => {
  // 版本一
  // currencyItemsRef.value.scrollLeft += currencyItemsRef.value.offsetWidth;
  // 版本二
  //   const containerWidth = currencyItemsRef.value.clientWidth;
  //   const maxScrollLeft = currencyItemsRef.value.scrollWidth - containerWidth;
  //   const currentScrollLeft = currencyItemsRef.value.scrollLeft;

  //   const nextScrollLeft = currentScrollLeft + containerWidth;

  //   if (nextScrollLeft <= maxScrollLeft) {
  //     currencyItemsRef.value.scrollTo({
  //       left: nextScrollLeft,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     currencyItemsRef.value.scrollTo({
  //       left: maxScrollLeft,
  //       behavior: 'smooth'
  //     });
  //   }
  // 版本三
  currencyItemsRef.value.scroll({
    left:
      currencyItemsRef.value.scrollLeft + currencyItemsRef.value.offsetWidth,
    behavior: 'smooth'
  });
};

// 鼠标滑动
const control = reactive({
  isDown: false, // 是否按下鼠标
  startX: 0, // 鼠标起始位置
  scrollLeft: 0 // 滚动条位置
});

const move = (e) => {
  if (!control.isDown) return;
  e.preventDefault();
  const x = e.pageX - currencyItemsRef.value.offsetLeft;
  const walk = (x - control.startX) * 2; // 滑动距离
  currencyItemsRef.value.scrollLeft = control.scrollLeft - walk;
  //   control.scrollLeft = control.scrollLeft - walk;
  //   requestAnimationFrame(() => {
  //     currencyItemsRef.value.scrollLeft = control.scrollLeft;
  //   });
};

onMounted(() => {
  console.log('dom', currencyItemsRef.value);
  // 总结web端实现滑动，就是对鼠标按下、鼠标松开、鼠标移动事件进行监听
  currencyItemsRef.value.addEventListener('mousedown', (e) => {
    control.isDown = true;
    control.startX = e.pageX - currencyItemsRef.value.offsetLeft;
    control.scrollLeft = currencyItemsRef.value.scrollLeft;
  });

  currencyItemsRef.value.addEventListener('mouseup', (e) => {
    control.isDown = false;
  });

  currencyItemsRef.value.addEventListener('mousemove', move);
});
</script>
<!-- 
这段代码实现了一个基本的滑动功能，通过鼠标按下、鼠标松开和鼠标移动事件来监听滑动操作。

具体实现逻辑如下：

在 onMounted 钩子函数中，我们为滚动容器添加了三个事件监听器：
mousedown 事件：当鼠标按下时，设置 control.isDown 为 true，记录鼠标起始位置 control.startX 和滚动条位置 control.scrollLeft。
mouseup 事件：当鼠标松开时，设置 control.isDown 为 false，表示鼠标已经抬起。
mousemove 事件：当鼠标移动时，如果 control.isDown 为 true，则计算鼠标的滑动距离 walk，并将滚动容器的 scrollLeft 属性设置为 control.scrollLeft - walk。
通过这些事件监听，我们可以实现鼠标滑动时滚动容器的滚动效果。

另外，该代码还包括了点击左右箭头按钮时的滑动功能。在 onPageLeft 方法中，通过修改滚动容器的 scrollLeft 属性，实现向左滑动一个容器宽度的距离；在 onPageRight 方法中，通过修改滚动容器的 scrollLeft 属性，实现向右滑动一个容器宽度的距离。

在这个示例中，我们使用 vue 的 ref 函数创建了 currencyItemsRef 引用，它指向滚动容器的 div 元素。我们还定义了 onPageLeft 和 onPageRight 方法，用于处理点击左右箭头时的滑动事件。

在 onPageLeft 方法中，我们通过减去滚动容器的宽度，实现了向左滑动一个容器宽度的距离。

同样地，在 onPageRight 方法中，我们通过加上滚动容器的宽度，实现了向右滑动一个容器宽度的距离。

通过点击左右箭头按钮，你可以看到滚动容器会相应地滑动，展示出不同的项目。

 -->
<style lang="scss" scoped>
.swiper {
  display: flex;
  align-items: center;
  width: 800px;
  overflow: hidden;
}

.watch-list-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: lightgray;
  cursor: pointer;
}

.watch-list-arrow-btn {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.currency-items {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  /* &::-webkit-scrollbar {
    display: none;
  } */
}

.currency-item {
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  background-color: lightblue;
}
</style>
