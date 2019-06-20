<template>
    <div>
        <span>我是子组件</span>  ---->
        {{msg}} <br>
         我是子组件拿到的全局状态：{{getnum}}
        <button @click="sadd">outter组件---改变状态--同步</button>
        <button @click="sdel">outter组件---改变状态--异步</button>
        <button @click="senmsg">向父组件传递数据</button>
    </div>
</template>

<script>
export default {
    name:'son',
    props:['msg'],
    methods: {
        senmsg:function(){
            // this.$emit('handle',this.tofathermsg)
            this.$emit('input',this.tofathermsg)
        },
        sadd(){
            this.$store.commit('increase')
        },
        sdel(){
            this.$store.dispatch('actionDecrease')
        }
    },
    data() {
        return {
            tofathermsg:'我是你的son'
        }
    },
    computed: {
        getnum:function(){
            return this.$store.state.num
        }
    },
}
</script>