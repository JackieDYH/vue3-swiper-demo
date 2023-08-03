<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-03 20:54:02
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/views/AboutView.vue
 * @version: 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <SwiperView7 /> -->
    <SwiperView8 />
    <SwiperView9 />
    <br />
    <SwiperView10 />
    <br />
    <SwiperView11 />
  </div>
</template>
<script setup>
import SwiperView7 from '@/components/swiper/SwiperView7.vue';
import SwiperView8 from '@/components/swiper/SwiperView8.vue';
import SwiperView9 from '@/components/swiper/SwiperView9.vue';
import SwiperView10 from '@/components/swiper/SwiperView10.vue';
import SwiperView11 from '@/components/swiper/SwiperView11.vue';
</script>
<style lang="scss" scoped>
.about {
}
</style>
