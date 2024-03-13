<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2024-03-13 17:58:49
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/src/App.vue
 * @version: 
-->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/scroll">Scroll</router-link> |
    <router-link to="/scroll2">Scroll2</router-link> |
    <router-link to="/scroll3">Scroll3</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
