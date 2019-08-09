<template>
    <v-touch class="box">
        {{text}}
    </v-touch>
</template>
<script>

export default {
    data(){
        return{
            text:"加入购物车成功"          
        }
    },
    methods:{
        
    }
}
</script>
<style>
    .box{
        width:1.5rem;
        height:0.8rem;
        background: rgba(19, 14, 14, 0.8);
        text-align: center;
        line-height: 0.8rem;
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        right:0;
        margin:  auto;
        color:white;
        font-size: 0.18rem;
    }
</style>
