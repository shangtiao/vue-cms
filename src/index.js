import Vue from 'vue'

import VueRouter from 'vue-router'

import app from './app.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
  ]
}) 

var vm = new Vue({
  el: '#app',
  render: function(c) {
    return c(app)
  },
  router
})