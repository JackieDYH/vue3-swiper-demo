<!--
 * @Author: Jackie
 * @Date: 2023-07-27 15:26:34
 * @LastEditTime: 2023-07-27 15:47:24
 * @LastEditors: Jackie
 * @Description: swiper
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView7.vue
 * @version: 
-->
<template>
  <div class="swiper">
    <swiper
      class="swiperBox"
      :modules="modules"
      :loop="true"
      :slides-per-view="6"
      :space-between="50"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :navigation="navigation"
      :pagination="{ clickable: true }"
      @slideChange="onSlideChange"
    >
      <!-- :scrollbar="{ draggable: false }" -->
      <swiper-slide v-for="num in 14" :key="num">
        <div class="swiper-content">
          <div>
            <img src="@/assets/logo.png" style="width: 58px; height: 58px" />
          </div>
          <p class="swiper-content-text">Slide {{ num }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" @click.stop="prevEl(item, index)" />
      <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next" @click.stop="nextEl" />
      <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// 引入swiper样式（按需导入）
import 'swiper/css/pagination'; // 轮播图底面的小圆点
import 'swiper/css/navigation'; // 轮播图两边的左右箭头
// import 'swiper/css/scrollbar'  // 轮播图的滚动条， 轮播图里一般不怎么会使用到滚动条，如果有用到的话import导入就行
// 引入swiper核心和所需模块
import { Autoplay, Pagination, Navigation } from 'swiper'; //Scrollbar

const navigation = ref({
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
});
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation]; //Scrollbar
const prevEl = (item, index) => {
  // console.log('上一张' + index + item)
};
const nextEl = () => {
  // console.log('下一张')
};
// 更改当前活动swiper
const onSlideChange = (swiper) => {
  // swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
  console.log(swiper.activeIndex);
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 94%;
  padding: 35px 0;
  margin: auto;
  .swiperBox {
    position: relative;
    width: 84%;
    margin: auto;
    //padding-left: 3px;
    swiper {
      width: 100%;
      swiper-slide {
        height: 100%;
        box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        border: 1px solid #e4e5ea;
        //width: 100%;
        background: #f9fafe;
      }
    }

    .swiper-content {
      text-align: center;
      //width: 176px;
      height: 94px;
      margin: 40px 0;
      /* border-right: 1px solid #e4e5ea; */

      &-text {
        margin: 11px auto 0;
        width: 127px;
        height: 25px;
        font-size: 16px;
        //font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #2f353b;
        line-height: 25px;
        -webkit-background-clip: text;
        //-webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>

<!-- 参数介绍：
modules：
loop： 是否循环播放
slides-per-view：控制一次显示几张轮播图
space-between： 每张轮播图之间的距离，该属性不可以和margin 属性同时使用；
autoplay： 是否自动轮播， delay为间隔的毫秒数；disableOnInteraction属性默认是true，也就是当用户手动滑动后禁用自动播放， 设置为false后，将不会禁用，会每次手动触发后再重新启动自动播放。
navigation： 定义左右切换箭头
pagination： 控制是否可以点击圆点指示器切换轮播
scrollbar： 是否显示轮播图的滚动条， draggable设置为 true就可以拖动底部的滚动条（轮播当中，一般不怎么会使用到这个属性） -->
