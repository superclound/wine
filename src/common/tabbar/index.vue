<template>
    <div id="footer" >
        <ul>
            <router-link v-for="(item,index) in navs"
            :key="index" 
            :to="item.path+'/'+item.text"
            tag="li"
            
            >
            <!-- <a href=""> -->
                <img :src="item.src" >       
            <!-- </a> -->
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Tabbar",
    data(){
        return{
            navs:[
                {
                    text:"首页",
                    path:"/home",
                    src:"https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png"

                },
                {
                    text:"选酒",
                    path:"/kinds",
                    src:"https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png"

                },
                {
                    text:"裸价清仓",
                    path:"/home",
                    src:"https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png"

                },
                {
                    text:"购物车",
                    path:"/carts",
                    src:"https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png"

                },
                {
                    text:"我的酒仙",
                    path:"/login",
                    src:"https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png"

                },
            ]
        }
    }
}
</script>
<style>
       #footer{
        width: 100%;
        height: 0.42rem;
        position: fixed;
        left: 0;
        bottom:0;
        background: #fff;
        border-top:1px solid #ccc;
    }
    
    #footer ul,#footer ul li{
        width: 100%;
        height: 100%;
    }
    #footer ul{
        display: flex;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:.3rem
    }
    /* #footer ul a{
        display: block;
        width:0.42rem;
        height:0.42rem;
    } */
    #footer ul img{
        display: inline-block;
        width:0.42rem;
        height:0.42rem;
    }

    
</style>
