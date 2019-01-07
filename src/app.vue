<template>
  <div class="app-container">
      <mt-header fixed title="黑马前端33期·Vue"></mt-header>
      <transition name="rT">
        <router-view></router-view>
      </transition>
      <mt-tabbar :fixed="true" v-model="selected">
        <mt-tab-item id="主页">
          <!-- <img slot="icon" src="./images/tabs04.png"> -->
          <span slot="icon" class="mui-icon mui-icon-home"></span>
          主页
        </mt-tab-item>
        <mt-tab-item id="订单">
          <!-- <img slot="icon" src="./images/tabs04.png"> -->
          <span slot="icon" class="mui-icon mui-icon-star"></span>
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <span slot="icon" class="mui-icon mui-icon-search"></span>
          <!-- <img slot="icon" src="./images/tabs04.png"> -->
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <span slot="icon" class="mui-icon mui-icon-person"></span>
          <!-- <img slot="icon" src="./images/tabs04.png"> -->
          我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 'tab-container1',
      selected: ''
    }
  },
  created() {
    switch (this.$route.path) {
      case '/':
        this.selected = '主页'
        break;
      case '/product':
        this.selected = '订单'
        break;
      case '/find':
        this.selected = '发现'
        break;
      case '/mine':
        this.selected = '我的'
        break;
      default:
        break;
    }
  },
  methods: {
  },
  watch: {
    selected: function(newVal,oldVal) {
      switch (newVal) {
        case '主页':
          this.$router.push('/')
          break;
        case '订单':
          this.$router.push('/product')
          break;
        case '发现': 
          this.$router.push('/find')
        break;  
        case '我的':
          this.$router.push('/mine')
        break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
  .app-container {
    padding-top: 50px;
    position: relative;
    overflow: hidden;
  }
  .mint-header {
    height: 50px;
  }
  .rT-enter ,
  .rT-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .rT-enter-active ,
  .rT-leave-active {
    transition: all 0.2s ease;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
  }
  a {
    color: #000;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
</style>
