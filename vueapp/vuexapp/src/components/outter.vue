<template>
    <div>
        我是outter组件拿到的全局状态:{{getnum}}
        <button @click="oadd">outter组件---改变状态</button>
    </div>
</template>

<script>
export default {
    name:'outter',
    computed: {
        getnum:function(){
            return this.$store.state.num
        }
    },
    methods:{
        oadd(){
            this.$store.commit('increase')
        }
    }
}
</script>