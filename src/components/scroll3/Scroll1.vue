<!--
 * @Author: Jackie
 * @Date: 2024-03-13 17:56:55
 * @LastEditTime: 2024-03-15 15:28:36
 * @LastEditors: Jackie
 * @Description: Vue3SeamlessScroll
 * @FilePath: /vue3-swiper-demo/src/components/scroll3/Scroll1.vue
 * @version: 
-->
<template>
  <vue3-seamless-scroll :list="list" class="scroll">
    <div class="item" v-for="(item, index) in list" :key="index">
      <span>{{ item.title }}</span>
      <span>{{ item.date }}</span>
    </div>
  </vue3-seamless-scroll>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

export default defineComponent({
  name: 'App',
  components: {
    Vue3SeamlessScroll
  },
  setup() {
    const list = ref([
      {
        title: 'Vue3.0 无缝滚动组件展示数据第1条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第2条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第3条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第4条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第5条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第6条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第7条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第8条',
        date: Date.now()
      },
      {
        title: 'Vue3.0 无缝滚动组件展示数据第9条',
        date: Date.now()
      }
    ]);
    return { list };
  }
});
</script>

<style>
.scroll {
  height: 270px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>

<!-- 
list
无缝滚动列表数据，组件内部使用列表长度。
  type: Array
  required: true

v-model
通过v-model控制动画滚动与停止，默认开始滚动
  type: Boolean,
  default: true,
  required: false

direction
控制滚动方向，可选值up，down，left，right
  type: String,
  default: "up",
  required: false

isWatch
开启数据更新监听

  type: Boolean,
  default: true,
  required: false

hover
是否开启鼠标悬停
  type: Boolean,
  default: false,
  required: false

count
动画循环次数，默认无限循环
  type: Number,
  default: "infinite",
  required: false

limitScrollNum
开启滚动的数据量，只有列表长度大于等于该值才会滚动
  type: Number,
  default: 5,
  required: false

step
步进速度
  type: Number,
  required: false

singleHeight
单步运动停止的高度
  type: Number,
  default: 0,
  required: false

singleWidth
单步运动停止的宽度
  type: Number,
  default: 0,
  required: false

singleWaitTime
单步停止等待时间(默认值 1000ms)
  type: Number,
  default: 1000,
  required: false

isRemUnit
singleHeight and singleWidth 是否开启 rem 度量
  type: Boolean,
  default: true,
  required: false

delay
动画延时时间
  type: Number,
  default: 0,
  required: false

ease
动画效果，可以传入贝塞尔曲线数值
  type: String | cubic-bezier,
  default: "ease-in",
  required: false

copyNum
拷贝列表次数，默认拷贝一次，当父级高度大于列表渲染高度的两倍时可以通过该参数控制拷贝列表次数达到无缝滚动效果
  type: Number,
  default: 1,
  required: false

wheel
在开启鼠标悬停的情况下是否开启滚轮滚动，默认不开启
  type: boolean,
  default: false,
  required: false

singleLine
启用单行横向滚动
  type: boolean,
  default: false,
  required: false
-->
