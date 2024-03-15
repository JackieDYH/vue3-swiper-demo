<!--
 * @Author: Jackie
 * @Date: 2024-03-15 14:33:45
 * @LastEditTime: 2024-03-15 14:50:58
 * @LastEditors: Jackie
 * @Description: Swiper 版本 v11
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView.vue
 * @version: 
-->
<template>
  <div class="swiper-wrap">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
    <!-- 左右两侧的方向按钮 -->
    <!-- <div class="button-prev" @click.stop="prevEl">
      <img src="@/assets/logo.png" style="width: 20px" />
    </div>
    <div class="button-next" @click.stop="nextEl">
      <img src="@/assets/logo.png" style="width: 20px" />
    </div> -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const modules = [Navigation];
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
