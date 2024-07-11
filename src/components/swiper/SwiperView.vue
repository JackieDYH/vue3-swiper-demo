<!--
 * @Author: Jackie
 * @Date: 2023-06-30 19:27:36
 * @LastEditTime: 2023-06-30 20:22:21
 * @LastEditors: Jackie
 * @Description: Swiper 轮播图组件-好用
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView5.vue
 * @version: 
-->
<template>
  <div class="swiperbox">
    <swiper
      :slidesPerView="1"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
        clickable: true
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in data" :key="item">
        <p>{{ item }}</p>
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
import { reactive } from 'vue';

const data = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//默认滑动效果（这里面注释掉的可以不要）
const onSwiper = swiper => {
  console.log(swiper);
};
const onSlideChange = e => {
  // swiper切换的时候执行的方法
  console.log('slide change', e.activeIndex);
};
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];
</script>

<style lang="scss" scoped>
.swiperbox {
  width: 80%;
  margin: 0 auto;
  .mySwiper {
    height: 200px;
    .swiper-slide {
      background: #dfdfdf;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
