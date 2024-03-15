<!--
 * @Author: Jackie
 * @Date: 2024-03-15 15:28:16
 * @LastEditTime: 2024-03-15 15:29:32
 * @LastEditors: Jackie
 * @Description: Vue3SeamlessScroll
 * @FilePath: /vue3-swiper-demo/src/components/scroll3/Scroll3.vue
 * @version: 
-->
<template>
  <div class="part-item part3">
    <div class="part3-textbox">
      <div class="title">一号畅行，全球热币尽在手中！</div>
      <div class="desc">
        Anyview聚合多家顶级交易所深度，支持一个账户交易多平台币种，轻松抢购全球新币。
      </div>
    </div>

    <div class="exchange-wrap">
      <Vue3SeamlessScroll
        :list="list"
        direction="left"
        :singleLine="true"
        class="scroll"
      >
        <div class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.img" alt="" :style="{ width: item.width + 'px' }" />
        </div>
      </Vue3SeamlessScroll>
      <img class="left" src="@/assets/exchange/left.svg" alt="" />
      <img class="right" src="@/assets/exchange/right.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
const list = [
  {
    img: require('@/assets/exchange/binance.svg'),
    width: '244'
  },
  {
    img: require('@/assets/exchange/okx.svg'),
    width: '119'
  },
  {
    img: require('@/assets/exchange/bitget.svg'),
    width: '154'
  },
  {
    img: require('@/assets/exchange/mexc.svg'),
    width: '191'
  },
  {
    img: require('@/assets/exchange/gate.svg'),
    width: '202'
  }
];
</script>

<style lang="scss" scoped>
.part-item {
  width: 1260px;
  margin: 0 auto;
  background-color: #000;
  .part-title {
    color: var(--mix-main-text-c);
    line-height: 45px;
    font-size: 32px;
    font-weight: 500;
  }
}

.part3 {
  margin-top: 150px;
  margin-bottom: 150px;
  .part3-textbox {
    text-align: center;
    .title {
      font-size: 32px;
      font-weight: 500;
      line-height: 45px;
      color: var(--mix-main-text-c);
      margin-bottom: 20px;
    }
    .desc {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 40px;
    }
  }

  .exchange-wrap {
    height: 110px;
    position: relative;
    width: 1260px;
    .left {
      position: absolute;
      top: 0;
      left: 0;
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .scroll {
    width: 1260px;
    margin: 0 auto;
    height: 110px;
    overflow: hidden;
    color: rgba(0, 0, 0, 1);
    .item {
      margin-top: 25px;
      margin-right: 80px;
      height: 110px;
    }
  }
}
</style>
