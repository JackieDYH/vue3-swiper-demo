<!--
 * @Author: Jackie
 * @Date: 2023-07-27 17:52:31
 * @LastEditTime: 2023-07-27 17:54:19
 * @LastEditors: Jackie
 * @Description: css吸附
 * @FilePath: /vue3-swiper-demo/src/components/swiper/SwiperView9.vue
 * @version: 
-->
<template>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.container {
  width: 300px;
  height: 200px;
  overflow: scroll;
  scroll-snap-type: y mandatory;
}

.item {
  width: 100%;
  height: 100px;
  scroll-snap-align: start;
}

.item:nth-child(odd) {
  background-color: #f0f0f0;
}

.item:nth-child(even) {
  background-color: #e0e0e0;
}
</style>

<!-- 当你想要创建一个具有滚动捕捉效果的滚动容器时，可以使用 scroll-snap-type 和 scroll-snap-align 属性。这些属性可以用于 CSS 中的滚动容器，例如 div 或 ul 元素

我们创建了一个名为 .container 的滚动容器，并设置了其宽度和高度。然后，我们使用 scroll-snap-type 属性将滚动容器的滚动方式设置为 y mandatory，表示在垂直方向上强制启用滚动捕捉。

接下来，我们创建了名为 .item 的子元素，它们将作为滚动容器中的各个项目。我们使用 scroll-snap-align 属性将每个项目的对齐方式设置为 start，表示项目在滚动容器中的起始位置进行对齐。

最后，我们使用 .item:nth-child(odd) 和 .item:nth-child(even) 选择器为项目添加不同的背景颜色，以区分它们。

当你在浏览器中运行这段代码时，你会看到滚动容器中的项目会在滚动时自动对齐到容器的起始位置，并且具有捕捉效果。

请注意，scroll-snap-type 和 scroll-snap-align 属性的具体用法和效果可能因浏览器和设备而有所不同。在某些情况下，你可能需要添加浏览器特定的前缀（例如 -webkit-）以确保兼容性。

希望这个简单示例能够帮助你理解 scroll-snap-type 和 scroll-snap-align 属性的用法。 -->
