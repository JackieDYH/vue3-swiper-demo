<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2024-03-15 15:35:22
 * @LastEditors: Jackie
 * @Description: https://swiperjs.com/demos
 * @FilePath: /vue3-swiper-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <h1>swiper组件实现 11版本</h1>
    <SwiperView />
    <!-- <SwiperView2 /> -->
    <SwiperView3 />
  </div>
</template>

<script setup>
import SwiperView from '@/components/swiper/SwiperView.vue';
import SwiperView2 from '@/components/swiper/SwiperView2.vue';
import SwiperView3 from '@/components/swiper/SwiperView3.vue';
</script>
