<template>
  <div id="app">
    <div class="weui-tabbar" v-if="$root.$route.fullPath !== '/login'">
        <a class="weui-tabbar__item">
          <router-link to="/home">
            <span style="display: inline-block;position: relative;">
                <img :src="require('./assets/icon_tabbar.png')" alt="" class="weui-tabbar__icon">
            </span>
            <p class="weui-tabbar__label">首页</p>
          </router-link>
        </a>
        <a class="weui-tabbar__item">
          <router-link to="/popular">
            <img :src="require('./assets/icon_tabbar.png')" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">推广</p>
          </router-link>
        </a>
        <a class="weui-tabbar__item">
          <router-link to="/report">
            <span style="display: inline-block;position: relative;">
                <img :src="require('./assets/icon_tabbar.png')" alt="" class="weui-tabbar__icon">
            </span>
            <p class="weui-tabbar__label">报告</p>
          </router-link>
        </a>
        <a class="weui-tabbar__item">
          <router-link to="/user">
            <img :src="require('./assets/icon_tabbar.png')" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">账户</p>
          </router-link>
        </a>
    </div>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isdoc: this.meta === 1 ? false : true,
      transitionName: 'slide-left'
    }
  },
  components: {
  }
}
</script>
<style lang='less'>
@import './css/weui.less';
#app{
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Microsoft YaHei';
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}
.text-center{
  text-align: center;
}
.router-link-active{
  .weui-tabbar__label{
    color: #09BB07;
  }
}
.clearBoth{
  clear: both;
}
.btn{
  border:1px solid #4e8df5;
  font-size: 16px;
  text-align: center;
  padding: 8px 10px;
  color: #4e8df5;
  border-radius: 5px;
}
</style>
