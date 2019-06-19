<template lang="">
    <div>
       <span>我是父组件</span>
       {{tofathermsg}}
       我是父组件拿到的全局状态：{{getnum}}
       <button @click="padd">父组件---改变状态</button>
       <hr>
       <!-- <son :msg="tosonmsg" @handle='getmsgfromson'></son> -->
       <son :msg="tosonmsg" v-model="tofathermsg"></son>
    </div>
</template>


<script>
import son from './son'
export default {
    name:"parent",
    data() {
        return {
            tosonmsg:'我是你的父亲',
            tofathermsg:''
        }
    },
    components:{
        son
    },
    methods: {
        getmsgfromson:function(value){
            this.tofathermsg = value
        },
        padd(){
            this.$store.commit('increase')
        }
    },
    computed: {
        getnum:function(){
            return this.$store.state.num
        }
    },
}
</script>