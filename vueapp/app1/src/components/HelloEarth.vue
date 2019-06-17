<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 传递过来的参数 -->
    <h2>{{$route.params.earthmsg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Hello Earth'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
