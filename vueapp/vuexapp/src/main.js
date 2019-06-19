// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

//创建状态仓库
var store = new Vuex.Store({
  state:{
    num:88
  },
  //定义状态改变函数
  mutations:{
    increase:function(state){
      state.num++
    },
    decrease(state){
      state.num--
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
