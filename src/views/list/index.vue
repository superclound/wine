
<template>
  <div class="aaa" >
    <Top/>
    <!-- 抢购 -->   
    <div class="main" >      
      <!-- 时间 -->
      <div class="time">
        <ul>
          <v-touch  v-for="(item,index) in Timelist" 
          :key="index" 
          :class="index===flag?'tactive':''" 
          @tap=handleChange(index)
          tag="li"
          >
            {{item}}           
          </v-touch>         
        </ul>
      </div>   
        <component :is="page" ></component>    
    </div>
    <div class="footer">
      <a href="#">查看活动规则></a>
    </div>
  <router-view></router-view>
 
  </div>
</template>
<script>
import ProList1 from "../../components/proList1";
import ProList2 from "../../components/proList2";
import ProList3 from "../../components/proList3";
import ProList4 from "../../components/proList4";

export default {
  name: "List",
  created(){
        document.title=this.$route.meta.title
    },
  // async 异步 可直接获取.then中的值  不用.then获取
  data(){   
      return{
        page:"ProList1",
          Timelist:["19点场","7点场","10点场","15点场"],
          flag:0
      }
  },
  components:{
    ProList1,
    ProList2,
    ProList3,
    ProList4,

  },
  methods:{
    handleChange(index){     
      this.flag=index;
      switch(index){
        case 0:
        this.page="ProList1";
        break;
        case 1:
        this.page="ProList2";
        break;
        case 2:
        this.page="ProList3";
        break;
        case 3:
        this.page="ProList4";
        break;
      }    
    },
  },
  
}
</script>


<style scoped>
/* .bswrapper{
  width：100%;
} */
.aaa{
  width: 100%;
  height: 100%;
}
.tactive{
  color:red
}
.main{
    width: 100%;
     position: absolute;
     top: 0.4rem;
     bottom: 0.3rem;
     overflow-y: auto;
     /* height: 100% */
    }

/*时间 */
.time{
    height:0.4rem;
    background:#f5f5f5; 
}
.time>ul{
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 100;
    background: #fff;
    
}
.time>ul>li{
    flex:1;
    line-height: 0.4rem;
    text-align: center
}
.active a{
    color:#fe4747
}
</style>