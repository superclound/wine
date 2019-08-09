<template>
    <div class="head">
		<div class="top" >
			<v-touch class="back"
            tag="div"
            @tap="handleback()"
            >&lt;</v-touch>
			<div class="h_center">{{text}}</div>
			<v-touch class="h_right" 
            tag="div"
            @tap="handleIshiden"></v-touch>
		</div>
		<ul class="isHiden" v-show="flag">
           <router-link v-for="(item,index) in navs"
            :key="index" 
            :to="item.path"      
            tag="li"
            >
            <i></i><span>{{item.text}}</span>          
            </router-link>			
		</ul>
	</div>
</template>
<script>
export default {
    created(){
        let{text}=this.$route.params

        this.text=text;
        // console.log(this.$route.params)
    },
    name:"Top",
    data(){
        return{
            flag:false,
            text:"",
             navs:[
            {
                text:"首页",
                path:"./home",
                title:""
            },
            {
                text:"搜索",
                path:"./home",
                title:""
            },
            {
                text:"购物车",
                path:"./carts",
                title:""
            },
            {
                text:"我的酒仙",
                path:"./login",
                title:""
               
            }
        ]
        }      
    },
    methods:{
        handleIshiden(){
            this._data.flag=!this._data.flag
            let div=document.querySelector(".main")
            if(this._data.flag){              
                div.style.top="0.8rem"
            }else{
                div.style.top="0.4rem"
            }         
        },
        handleback(){
            this.$router.back();
        }
    },

}
</script>
<style>
    .head{width: 100%;
     height:0.86rem;
     position: absolute;top: 0;
    
    color: #fff;
    }
    .top{
    height: 0.4rem;
    background-color: #de4943;
    display: flex;
    align-items: center
}
.back{
    font-family: "宋体";
    text-align: center;
    font-size: 0.28rem;
    
}
.top .back,.h_right{
    flex:1
}
.top>.h_center{
    flex:3;
    text-align: center
} 
/* 背景图位置用的rem */


.h_right{
    height:100%;
    background-position:-137px 6px !important;   
    text-align: center
}

.h_right,.isHiden li i,.input i{
    background: no-repeat url(../images/headIcon.png) 
}
   /*点击隐藏的导航  */
 .isHiden{
    display:flex;
    background:#efefef;
    border-bottom: o.01rem solid #ccc;
    /* padding-top: 0.08rem */
 }  
 .isHiden>li{
     height:0.45rem;
     flex: 1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center
 }
 .isHiden li i{
     display: block;
     width: 0.26rem;
     height: 0.2rem;
     ;
 }
 .isHiden li span{
     font-size: 0.14rem;
     color: #848d96;
 }
 .isHiden li:nth-child(1) i{
    background-position: -3px -5px;
 }
 .isHiden li:nth-child(2) i{
    background-position: -37px -5px;
 }
 .isHiden li:nth-child(3) i{
    background-position: -72px -5px;
 }
 .isHiden li:nth-child(4) i{
    background-position: -113px -5px;
 }
</style>
