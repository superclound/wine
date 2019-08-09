<template>
  <div id="app">     
    <!-- <Loading/> -->
    <router-view/>
    <Tabbar v-if="$route.meta.tabBar"/>
    <!-- <Alert1/> -->
    <!-- <City/>   -->
    
  </div>
</template>
<script>
import "./reset.css";
// import axios from "axios"
import Tabbar from "common/tabbar";
// import http from "";
import Loading from "./lib/loading/index.vue";
// 当文件夹中有两个index开头的文件时 要加文件的后缀
// import List from "views/list"
// import Alert1 from "./lib/alert";
// import City from "components/city"
import { MessageBox} from "./lib/alert/index.js"
export default {
  
  components:{
    // Loading,
    // List,
    Tabbar,
    // City
    // Alert1
  },
  // 不需要跨域的时候测试数据
  created(){
  // console.log(this.$route)
  //   axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=2").then(data=>{
  //     console.log(data)
  //   })
  // MessageBox({
  //   title:"加入购物车成功"
  // });
  }
  
}
</script>

<style >
    #app{
      width: 100%;
      height: 100%;
    }
</style>
