<!--
 * @Author: Jackie
 * @Date: 2024-03-15 15:24:05
 * @LastEditTime: 2024-03-15 15:24:08
 * @LastEditors: Jackie
 * @Description: swiper v11
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView2.vue
 * @version: 
-->
<template>
  <div class="swiper-wrap">
    <swiper
      :slides-per-view="3"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :modules="modules"
    >
      <SwiperSlide>
        <img class="item" src="@/assets/banner-1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="item" src="@/assets/banner-2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="item" src="@/assets/banner-3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="item" src="@/assets/banner-1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="item" src="@/assets/banner-2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="item" src="@/assets/banner-3.png" />
      </SwiperSlide>
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

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    };
  }
};
</script>

<style lang="scss" scoped>
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
