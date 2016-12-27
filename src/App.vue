<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
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
          <router-link to="/pop">
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
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.we-contain{
  background-color: #f8f8f8;
}
.white-block{
  width: 100%;
  height: 53px;
}
.text-center{
  text-align: center;
}
.router-link-active{
  .weui-tabbar__label{
    color: #09BB07;
  }
}
.themeColor{
  color: #4e8df5;
}
.weui-tabbar{
  position: fixed;
  bottom: 0;
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
.nopadding{
  padding-left: 0!important;
  padding-right: 0!important;
}
.page {
  .placeholder{
    margin: 5px;
      height: 2.3em;
      line-height: 2.3em;
      &.h0{
        font-size: 17px;
        color:white;
        text-align: center;
      }
      &.h1{
        color: #ffbe00;
        text-align: center;
        margin: 0;
      }
      &.h2{
        color: #fff;
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        border-top: 1px solid #dddddd;
      }
      &.h3{
        color: #999999;
        text-align: center;
        margin: 0;
        padding: 0;
        height: 1.5em;
        line-height: 1.5em;
      }
      &.h4{
        margin-left: 0;
        color: black;
        font-size: 20px;
      }
      &.h5{
        height: 1.5em;
        line-height: 1.5em;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      &.h6{
        color: white;
        margin: 0;
        padding: 0;
        background-color: rgba(0, 0, 0, 0.5);
        span{
          color: orange;
        }
      }
  }
}
</style>
