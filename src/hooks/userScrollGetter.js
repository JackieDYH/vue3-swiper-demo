/*
 * @Author: Jackie
 * @Date: 2023-08-11 14:22:34
 * @LastEditTime: 2023-08-11 14:22:40
 * @LastEditors: Jackie
 * @Description: hooks
 * @FilePath: /vue3-swiper-demo/src/hooks/userScrollGetter.js
 * @version:
 */
import { ref, onMounted, onUnmounted } from 'vue';
export function getScrollData(element = window) {
  const scrollData = ref({
    scrollTop: 0,
    scrollLeft: 0
  });
  function update() {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (!element || (element !== window && !element.tagName)) {
      throw 'Param `element` should be a DOM Object or css selector string';
    }
    scrollData.value = {
      scrollTop:
        element === window
          ? -document.documentElement.getBoundingClientRect().top
          : element.scrollTop,
      scrollLeft:
        element === window
          ? -document.documentElement.getBoundingClientRect().left
          : element.scrollLeft
    };
  }
  onMounted(() => {
    update();
    element.addEventListener('scroll', update);
  });
  onUnmounted(() => element.removeEventListener('scroll', update));
  return scrollData;
}
