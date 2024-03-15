<!--
 * @Author: Jackie
 * @Date: 2024-03-15 15:33:04
 * @LastEditTime: 2024-03-15 16:04:18
 * @LastEditors: Jackie
 * @Description: Swiper v11
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView3.vue
 * @version: 
-->
<template>
  <div class="swiper-wrap">
    <!-- 
        loop="true" 是否循环
        data-swiper-autoplay="2000" 自动轮播
        slides-per-view 一屏幕显示几个
        space-between 两个slide之间的间距
        navigation  是否显示导航 navigation：true 默认  ： {nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'} 自定义
        modules  模块
     -->
    <swiper
      :loop="true"
      :slides-per-view="2"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :modules="modules"
    >
      <swiper-slide>
        <img class="item" src="@/assets/banner-1.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="item" src="@/assets/banner-2.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="item" src="@/assets/banner-3.png" />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev">
      <img
        class="img"
        src="@/assets/next.svg"
        style="transform: rotate(180deg)"
      />
      <img class="dis-img" src="@/assets/pre_dis.svg" />
    </div>
    <div class="swiper-button-next">
      <img class="img" src="@/assets/next.svg" />
      <img
        class="dis-img"
        src="@/assets/pre_dis.svg"
        style="transform: rotate(180deg)"
      />
    </div>
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

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style scoped lang="scss">
.swiper-wrap {
  width: 1260px;
  height: 152px;
  margin: 80px auto 0;
  position: relative;
  .item {
    width: 400px;
    height: 152px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      display: none;
    }
    .img {
      display: block;
    }
    .dis-img {
      display: none;
    }
    &.swiper-button-disabled {
      opacity: 1;
      .dis-img {
        display: block;
      }
      .img {
        display: none;
      }
    }
  }
  .swiper-button-prev {
    left: -70px;
  }
  .swiper-button-next {
    right: -70px;
  }
}
</style>
