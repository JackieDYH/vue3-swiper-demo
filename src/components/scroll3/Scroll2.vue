<!--
 * @Author: Jackie
 * @Date: 2024-03-13 18:05:51
 * @LastEditTime: 2024-03-13 18:17:56
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/components/scroll3/Scroll2.vue
 * @version: 
-->
<template>
  <div class="notice-wrap">
    <Vue3SeamlessScroll
      :list="list"
      direction="left"
      :hover="true"
      :singleLine="true"
      class="scroll"
    >
      <div class="item" v-for="(item, index) in list" :key="index">
        <span>{{ item.title }}</span>
        <span>{{ item.date }}</span>
      </div>
    </Vue3SeamlessScroll>
  </div>
</template>

<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

const list = [
  { title: '1将阿萨德房间卡上点饭', date: '将阿萨德房间卡上点饭1' },
  { title: '2啊圣诞节风口浪尖上的', date: '将阿萨德房间卡上点饭2' },
  { title: '3将阿克索德能否看见撒地方', date: '将阿萨德房间卡上点饭3' },
  { title: '4哦看i空间哦你呢', date: '将阿萨德房间卡上点饭4' }
];
</script>

<style lang="scss" scoped>
.notice-wrap {
  background: rgba(255, 144, 63, 1);
}
.scroll {
  width: 1260px;
  margin: 0 auto;
  height: 50px;
  overflow: hidden;
  color: rgba(0, 0, 0, 1);
  .item {
    margin-right: 80px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
