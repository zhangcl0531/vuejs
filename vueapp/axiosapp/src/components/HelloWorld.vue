<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>我是axiosapp,用来发送请求，拦截响应</h3>
    <button @click="getdata">get方式发送请求</button>
    <button @click="postdata">post方式发送请求</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">
          {{item.title}} 
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
Vue.prototype.$http = axios
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[]
    }
  },
  methods: {
    getdata(){
      var self = this
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit:10
          }
          })
        //params 可以忽略 直接写{page:1,limit:10}
        .then(function(res){
            console.log(res.data.data)
            self.items = res.data.data
            
        })
        .catch(function(err){
            console.log(err)
        })
    },
    postdata(){
      var self = this
      this.$http.post('https://cnodejs.org/api/v1/topics',qs.stringify({page:1,limit:10}))
        .then(function(res){
            console.log(res.data.data)
            self.items = res.data.data
            
        })
        .catch(function(err){
            console.log(err)
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
