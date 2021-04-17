<template>
  <navbar id="navbar">
    <div id="leftbox" slot="left">
      <i class="iconfont icon-hanbao"></i>
    </div>
    <div class="centerBox" slot="center">
      <span
        class="navbarTitle"
        v-for="(item, index) in titleList"
        :key="index"
        @click="itemClick(index)"
        :class="{ activeTitle: index ===currentIndex }"
      >
        {{item}}
      </span>
    </div>
    <div id="rightbox" slot="right">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </navbar>
</template>

<script>
import navbar from 'components/common/navbar/navbar.vue'
export default {
  name: "MusicNavbar",
  data(){
    return{
      titleList: ["我的","发现","云村","视频"],
      currentIndex: 1,
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      
    }
  },
  components: {
    navbar,
  },
  
}
</script>

<style scoped>
  #leftbox{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #leftbox .iconfont {
    font-size: .426667rem;
  }
  #rightbox{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #rightbox .iconfont {
    font-size: .426667rem;
  }
  #navbar {
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.4) !important;
  }
  .navbarTitle {
    font-size: 15px;
    height: 28px;
    line-height: 30px;
    display: flex;
    padding: 0 7px;
    color: rgb(116, 116, 116);
  }
  .activeTitle {
    font-size: 18px;
    color: #000;
    line-height: 28px;
  }
  .centerBox{
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>