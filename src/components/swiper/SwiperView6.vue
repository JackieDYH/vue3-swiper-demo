<!--
 * @Author: Jackie
 * @Date: 2023-07-27 15:10:58
 * @LastEditTime: 2023-07-27 15:22:55
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView6.vue
 * @version: 
-->
<template>
  <div class="project">
    <div class="project-swiper">
      <swiper
        :slidesPerView="7"
        :spaceBetween="10"
        :loop="true"
        :centeredSlides="false"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :navigation="navigation"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="num in 14" :key="num">
          <div class="swiper-content">
            <div>
              <img src="@/assets/logo.png" style="width: 58px; height: 58px" />
            </div>
            <p class="swiper-content-text">星云大数据</p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="write"></div>
      <!-- 左右两侧的方向按钮 -->
      <div class="button-prev" @click.stop="prevEl">
        <img src="@/assets/logo.png" style="width: 20px" />
      </div>
      <div class="button-next" @click.stop="nextEl">
        <img src="@/assets/logo.png" style="width: 20px" />
      </div>
    </div>
  </div>
</template>

<script setup>
// slidesPerView 为显示个数，一页多图单轮播设置个数即可
// 左右按钮的外部设置，与swiper 标签同级即可
// 如果需要设置里面，与swiper-slide标签同级即可
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];
const navigation = ref({
  nextEl: '.button-next',
  prevEl: '.button-prev'
});
const prevEl = () => {
  console.log('上一张');
};
const nextEl = () => {
  console.log('下一张');
};
</script>

<style lang="scss" scoped>
.project {
  width: 94%;
  padding: 35px 0;
  margin: auto;
  &-swiper {
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
    .button-prev {
      position: absolute;
      top: 66px;
      left: -45px;
    }
    .button-next {
      position: absolute;
      top: 66px;
      right: -45px;
    }
  }
}

.swiper-content {
  text-align: center;
  //width: 176px;
  height: 94px;
  margin: 40px 0;
  border-right: 1px solid #e4e5ea;

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

.write {
  width: 4px;
  background-color: #ffffff;
  height: 176px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
}
</style>

<!-- 
    https://swiperjs.com/vue

默认情况下，Swiper Vue 使用 Swiper 的核心版本（没有任何附加模块）。如果你想使用Navigation、Pagination等模块，你必须先安装它们
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


Virtual- 虚拟幻灯片模块

Keyboard- 键盘控制模块

Mousewheel- 鼠标滚轮控制模块

Navigation- 导航模块

Pagination- 分页模块

Scrollbar- 滚动条模块

Parallax- 视差模块

FreeMode- 自由模式模块

Grid- 网格模块

Manipulation- 幻灯片操作模块（仅适用于Core版本）

Zoom- 变焦模块

Controller- 控制器模块

A11y- 辅助功能模块

History- 历史导航模块

HashNavigation- 哈希导航模块

Autoplay- 自动播放模块

EffectFade- 淡入淡出效果模块

EffectCube- 立方体效果模块

EffectFlip- 翻转效果模块

EffectCoverflow- Coverflow效果模块

EffectCards- 卡牌效果模块

EffectCreative- 创意效果模块

Thumbs- 拇指模块

Swiper 包包含不同的 CSS、Less 和 SCSS 样式集：

swiper/css ------------ 仅核心 Swiper 样式
swiper/css/bundle ------------- 所有 Swiper 样式，包括所有模块样式（如导航、分页等）

模块样式（如果您已经导入了包样式则不需要）：

源码	需求
swiper/css/a11y	A11y模块所需的样式
swiper/css/autoplay	自动播放模块所需的样式
swiper/css/controller	控制器模块所需的样式
swiper/css/effect-cards	卡牌效果模块所需的样式
swiper/css/effect-coverflow	Coverflow Effect 模块所需的样式
swiper/css/effect-creative	创意效果模块所需的样式
swiper/css/effect-cube	立方体效果模块所需的样式
swiper/css/effect-fade	淡入淡出效果模块所需的样式
swiper/css/effect-flip	翻转效果模块所需的样式
swiper/css/free-mode	自由模式模块所需的样式
swiper/css/grid	网格模块所需的样式
swiper/css/hash-navigation	哈希导航模块所需的样式
swiper/css/history	历史模块所需的样式
swiper/css/keyboard	键盘模块所需的样式
swiper/css/manipulation	操作模块所需的样式
swiper/css/mousewheel	鼠标滚轮模块所需的样式
swiper/css/navigation	导航模块所需的样式
swiper/css/pagination	分页模块所需的样式
swiper/css/parallax	视差模块所需的样式
swiper/css/scrollbar	滚动条模块所需的样式
swiper/css/thumbs	Thumbs 模块所需的样式
swiper/css/virtual	虚拟模块所需的样式
swiper/css/zoom	Zoom 模块所需的样式


对于 Less 样式，替换css为less导入路径，例如：

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

对于 SCSS 样式，替换css为scss导入路径，例如：

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

 -->
