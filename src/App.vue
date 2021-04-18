<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <music-navbar class="appnav"></music-navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import musicNavbar from "components/context/musicNavbar/MusicNavbar";


export default {
  name: "App",
  components: {
    musicNavbar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
  ::-webkit-scrollbar {
    display: none;
  }
  .appnav{
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.7);
    z-index: 19;
  }
  #app {
    overflow-x: hidden;
    background-color: #fafafa;
  }
</style>
