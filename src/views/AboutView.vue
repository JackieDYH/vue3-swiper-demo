<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2024-03-15 14:30:44
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/views/AboutView.vue
 * @version: 
-->
<template>
  <div class="about">
    <h1>手动实现版本</h1>
    <SwiperView8 />
    <SwiperView9 />
    <br />
    <SwiperView10 />
    <br />
    <SwiperView11 />
  </div>
</template>
<script setup>
import SwiperView8 from '@/components/swiper/SwiperView8.vue';
import SwiperView9 from '@/components/swiper/SwiperView9.vue';
import SwiperView10 from '@/components/swiper/SwiperView10.vue';
import SwiperView11 from '@/components/swiper/SwiperView11.vue';
</script>
<style lang="scss" scoped>
.about {
}
</style>
