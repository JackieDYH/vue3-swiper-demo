<!--
 * @Author: Jackie
 * @Date: 2023-07-27 16:31:26
 * @LastEditTime: 2023-07-27 17:47:42
 * @LastEditors: Jackie
 * @Description: swiper
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView8.vue
 * @version: 
-->
<template>
  <div class="swiper">
    <div class="container" ref="container">
      <!-- 在这里添加要滑动的横向元素 -->
      <div class="box" v-for="num in 40" :key="num">
        <img src="@/assets/logo.png" style="width: 58px; height: 58px" />
        <span>滑动元素{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
const container = ref(null);
// console.log(container);

const control = reactive({
  isDown: false, // 是否按下鼠标
  startX: 0, // 鼠标起始位置
  scrollLeft: 0 // 滚动条位置
});

const move = (e) => {
  if (!control.isDown) return;
  e.preventDefault();
  const x = e.pageX - container.value.offsetLeft;
  const walk = (x - control.startX) * 2; // 滑动距离
  container.value.scrollLeft = control.scrollLeft - walk;
};

onMounted(() => {
  console.log('dom', container.value);
  // 总结web端实现滑动，就是对鼠标按下、鼠标松开、鼠标移动事件进行监听
  container.value.addEventListener('mousedown', (e) => {
    control.isDown = true;
    control.startX = e.pageX - container.value.offsetLeft;
    control.scrollLeft = container.value.scrollLeft;
  });

  container.value.addEventListener('mouseup', (e) => {
    control.isDown = false;

    // // 找到最接近的滑动元素
    // const children = container.value.getElementsByClassName('box');
    // let closestElement;
    // let closestDistance = Infinity;
    // const containerCenterX = container.value.offsetWidth / 2;

    // for (let i = 0; i < children.length; i++) {
    //   const box = children[i];
    //   const boxCenterX = box.offsetLeft + box.offsetWidth / 2;
    //   const distance = Math.abs(boxCenterX - containerCenterX);

    //   if (distance < closestDistance) {
    //     closestDistance = distance;
    //     closestElement = box;
    //   }
    // }

    // // 计算滚动到最接近的滑动元素的位置
    // const scrollLeft =
    //   closestElement.offsetLeft -
    //   container.value.offsetWidth / 2 +
    //   closestElement.offsetWidth / 2;
    // container.value.scrollTo({ left: scrollLeft, behavior: 'smooth' });

    // 找到最接近的滑动元素
    // const children = container.value.getElementsByClassName('box');
    // let closestElement;
    // let closestDistance = Infinity;
    // const containerCenterX = container.value.offsetWidth / 2;

    // for (let i = 0; i < children.length; i++) {
    //   const box = children[i];
    //   const boxCenterX = box.offsetLeft + box.offsetWidth / 2;
    //   const distance = Math.abs(boxCenterX - containerCenterX);

    //   if (distance < closestDistance) {
    //     closestDistance = distance;
    //     closestElement = box;
    //   }
    // }

    // // 计算滚动到最接近的滑动元素的位置
    // // const scrollLeft = closestElement.offsetLeft - container.value.offsetLeft;
    // const scrollLeft =
    //   closestElement.offsetLeft -
    //   container.value.offsetLeft -
    //   closestElement.offsetWidth;
    // container.value.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  });

  //   container.value.addEventListener('mousemove', (e) => {
  //     if (!control.isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - container.value.offsetLeft;
  //     const walk = (x - control.startX) * 2; // 滑动距离
  //     container.value.scrollLeft = control.scrollLeft - walk;
  //   });
  container.value.addEventListener('mousemove', move);

  // 元素的吸附效果
  //   container.value.addEventListener('scroll', () => {
  //     // 找到最接近的滑动元素
  //     const children = container.value.getElementsByClassName('box');
  //     let closestElement;
  //     let closestDistance = Infinity;
  //     const containerCenterX = container.value.offsetWidth / 2;

  //     for (let i = 0; i < children.length; i++) {
  //       const box = children[i];
  //       const boxCenterX = box.offsetLeft + box.offsetWidth / 2;
  //       const distance = Math.abs(boxCenterX - containerCenterX);

  //       if (distance < closestDistance) {
  //         closestDistance = distance;
  //         closestElement = box;
  //       }
  //     }

  //     // 计算滚动到最接近的滑动元素的位置
  //     const scrollLeft = closestElement.offsetLeft - container.value.offsetLeft;
  //     container.value.scrollLeft = scrollLeft;
  //   });
});

onUnmounted(() => {
  console.log('onUnmounted', container);
  //   container.value.removeEventListener('mousemove', move);
});
</script>

<style lang="scss" scoped>
.swiper {
  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    /* white-space: nowrap; //避免子元素在父元素内换行 */
    overflow-x: auto; //显示横向滚动条
    /* scroll-snap-type: x mandatory; //自动吸附 */
    /* scroll-behavior: smooth; //平滑滚动的效果 */
    .box {
      width: 100px;
      min-height: 100px;
      padding: 0 20px;
      /* scroll-snap-align: start; //自动吸附 */
    }
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }
}
</style>
