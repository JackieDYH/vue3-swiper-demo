<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-06-30 20:11:30
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <h1>This is an home page</h1>
    <SwiperView />
    <SwiperView2 />
    <SwiperView3 />
    <SwiperView4 />
    <SwiperView5 />
  </div>
</template>

<script setup>
import SwiperView from '@/components/swiper/SwiperView.vue';
import SwiperView2 from '@/components/swiper/SwiperView2.vue';
import SwiperView3 from '@/components/swiper/SwiperView3.vue';
import SwiperView4 from '@/components/swiper/SwiperView4.vue';
import SwiperView5 from '@/components/swiper/SwiperView5.vue';
</script>
