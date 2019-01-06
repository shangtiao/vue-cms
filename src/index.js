//引入vue
import Vue from 'vue'

//引入路由
import VueRouter from 'vue-router'
//按需引入mint-ui
import 'mint-ui/lib/style.css'
import { Header,Tabbar,Cell, TabItem,TabContainer, TabContainerItem  } from 'mint-ui'
//引入主组件
import app from './app.vue'
import index from './sonVue/index.vue'
import product from './sonVue/product.vue'
import find from './sonVue/find.vue'
import mine from './sonVue/mine.vue'
//注册引入的组件
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
Vue.use(VueRouter)

var routes = [
  {
    path: '/' , component: index
  },
  {
    path: '/product' , component: product
  },
  {
    path: '/find' , component: find
  },
  {
    path: '/mine' , component: mine
  }
]
//引入其他组件
var router = new VueRouter({
  routes
}) 

var vm = new Vue({
  el: '#app',
  render: function(c) {
    return c(app)
  },
  router
})