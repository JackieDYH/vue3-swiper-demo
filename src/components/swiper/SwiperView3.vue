<!--
 * @Author: Jackie
 * @Date: 2023-06-30 18:19:43
 * @LastEditTime: 2023-06-30 19:24:34
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView3.vue
 * @version: 
-->
<template>
  <div class="swiperbox">
    <swiper
      :slidesPerView="1"
      :slides-per-view="3"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
        clickable: true
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <p>123</p>
      </swiper-slide>
      <swiper-slide>
        <p>123</p>
      </swiper-slide>
      <swiper-slide>
        <p>123</p>
      </swiper-slide>
      <swiper-slide>
        <p>123</p>
      </swiper-slide>
      <swiper-slide>
        <p>123</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//默认滑动效果（这里面注释掉的可以不要）
// const onSwiper = swiper => {
// 	console.log(swiper);
// };
// const onSlideChange = e => {
// 	// swiper切换的时候执行的方法
// 	console.log('slide change', e.activeIndex);
// };
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];

// // 检测设备是否支持触摸
// const touchCapable = () => {
//   return (
//     'ontouchstart' in window ||
//     (window.DocumentTouch && document instanceof window.DocumentTouch) ||
//     navigator.maxTouchPoints > 0 ||
//     window.navigator.msMaxTouchPoints > 0
//   );
// };

// // new Swiper的配置项，增加simulate选项
// const swiperConfig = {
//   simulateTouch: !touchCapable()
// };
</script>

<style lang="scss" scoped>
.mySwiper {
  height: 200px;
}
</style>
