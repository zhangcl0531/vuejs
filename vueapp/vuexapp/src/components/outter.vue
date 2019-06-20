<template>
    <div>
        我是outter组件拿到的全局状态:{{getnum}} <br>
        我是outter组件通过getters拿到的全局状态:{{getcount}} <br>
        <button @click="oadd">outter组件---改变状态</button>
        <button @click="odel">outter组件---改变状态--异步</button>
    </div>
</template>

<script>
export default {
    name:'outter',
    computed: {
        getnum:function(){
            return this.$store.state.num
        },
        getcount:function(){
            return this.$store.getters.getNum
        }
    },
    methods:{
        oadd(){
            this.$store.commit('increase')
        },
        odel(){
            this.$store.dispatch('actionDecrease')
        }
    }
}
</script>