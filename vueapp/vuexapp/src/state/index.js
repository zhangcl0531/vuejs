import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建状态仓库
export default new Vuex.Store({
    state: {
      num: 5
    },
    //定义状态改变函数--同步操作
    mutations: {
      increase: function (state) {
        state.num++
      },
      decrease(state) {
        state.num--
      }
    },
    //定义状态改变函数--异步操作
    actions: {
      actionDecrease(context) {
        setTimeout(function () {
          context.commit('decrease')
        },2000)
      }
    },
    //通过getters处理数据
    getters:{
      getNum(state){
        return state.num >0 ? state.num:0
      }
    }
  })