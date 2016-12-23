<template>
  <div id="app">
    <div class="weui-tabbar">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isdoc: this.meta === 1 ? false : true
    }
  }
}
</script>
<style lang='less'>
@import './css/weui.less';
body{
  margin: 0;
  padding: 0;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}
.router-link-active{
  .weui-tabbar__label{
    color: #09BB07;
  }
}
</style>
