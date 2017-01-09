<template>
  <div id="app">
    <div @click='hideNav'>
        <router-view></router-view>
    </div>
    <div class="weui-tabbar" v-if="$root.$route.fullPath !== '/wxdsp/login'">
        <a class="weui-tabbar__item" @click='hideNav'>
          <router-link to="/wxdsp/home">
            <span style="display: inline-block;position: relative;">
                <img :src="$root.$route.fullPath === '/wxdsp/home' ? require('./assets/Navbar_icon/select_home.png') : require('./assets/Navbar_icon/normal_home.png')" alt="" class="weui-tabbar__icon">
            </span>
            <p class="weui-tabbar__label">首页</p>
          </router-link>
        </a>
        <a class="weui-tabbar__item" @click='shownav(1)'>
            <div class="weui-actionsheet__menu" v-if="showPop">
                <div class="weui-actionsheet__cell"><router-link to='/wxdsp/pop/1'>网盟推广活动</router-link></div>
                <div class="weui-actionsheet__cell"><router-link to='/wxdsp/pop/2'>移动推广活动</router-link></div>
            </div>
            <img :src="!$root.$route.fullPath.indexOf('/wxdsp/pop') ? require('./assets/Navbar_icon/select_promote.png') : require('./assets/Navbar_icon/normal_promote.png')" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">推广</p>
        </a>
        <a class="weui-tabbar__item" :class="!$root.$route.fullPath.indexOf('/wxdsp/report') ? 'router-link-active' : ''" @click='shownav'>
            <div class="weui-actionsheet__menu" v-if="showNav">
                <div class="weui-actionsheet__cell"><router-link to='/wxdsp/report/1'>网盟推广报告</router-link></div>
                <div class="weui-actionsheet__cell"><router-link to='/wxdsp/report/2'>移动推广报告</router-link></div>
                <div class="weui-actionsheet__cell"><router-link to='/wxdsp/report/3'>全景推广报告</router-link></div>
            </div>
            <span style="display: inline-block;position: relative;">
                <img :src="!$root.$route.fullPath.indexOf('/wxdsp/report') ? require('./assets/Navbar_icon/select_report.png') : require('./assets/Navbar_icon/normal_report.png')" alt="" class="weui-tabbar__icon">
            </span>
            <p class="weui-tabbar__label">报告</p>
        </a>
        <a class="weui-tabbar__item" @click='hideNav'>
          <router-link to="/wxdsp/user">
            <img :src="$root.$route.fullPath === '/wxdsp/user' ? require('./assets/Navbar_icon/select_account.png') : require('./assets/Navbar_icon/normal_account.png')" alt="" class="weui-tabbar__icon">
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
      showNav: false,
      showPop: false,
      transitionName: 'slide-left'
    }
  },
  methods: {
    shownav (index) {
      if (index === 1) {
        this.showPop = !this.showPop
        this.showNav = false
      } else {
        this.showNav = !this.showNav
        this.showPop = false
      }
    },
    hideNav () {
      if (this.showNav) {
        this.showNav = false
      }
      if (this.showPop) {
        this.showPop = false
      }
    }
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
  font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
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
    color: #4e8df5;
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
.weui-actionsheet__menu{
  position: absolute;
  bottom: 53px;
  padding: 0 5px;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 0px rgba(112, 111, 107, 0.75);
  .weui-actionsheet__cell{
    padding: 10px 0;
    margin: 0 10px;
    font-size: 12px;
    a{
      color: #999999;
    }
  }
}
.page {
  .placeholder{
    margin: 5px;
      height: 2.3em;
      line-height: 2.3em;
      font-size: 14px;
      color: #333333;
      &.h0{
        height: 1.5em;
        line-height: 1.5em;
        font-size: 17px;
        color:white;
        text-align: center;
      }
      &.h1{
        color: #ffbe00;
        text-align: center;
        margin: 0;
        font-size: 15px;
        height: 1.8em;
        line-height: 1.8em;
        font-weight: bold;
      }
      &.h2{
        color: #fff;
        margin: 0;
        height: 1.8em;
        line-height: 1.8em;
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
        font-size: 17px;
      }
      &.h5{
        height: 1.5em;
        line-height: 1.5em;
        margin: 0;
        padding: 0;
        font-weight: bold;
        text-align: center;
      }
      &.h6{
        color: white;
        margin: 0;
        padding: 0;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.5);
        span{
          color: orange;
        }
      }
  }
}
</style>
