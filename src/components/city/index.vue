<template>
    
        <div class="depit_citydrp" style=" height: 717px;" v-show=show>
                    <!-- <h5 class="h5_dptctdrp"> -->
                        <!-- <a href="javascript:;" pid="17"><em>北京市</em><i></i></a> -->
                        <!-- 省 -->
                        <!-- <a href="javascript:;"><em>请选择市</em><i></i></a> -->
                        <!-- 市 -->
                        <!-- <a href="javascript:;"><em>请选择县/区</em><i></i></a> -->
                        <!-- 县 -->
                    <!-- </h5> -->
                    <ul class="dptctdrp_list dptctdrp_list2" v-show=flag1>
                        <li style="padding:0px 0px;" v-for="(item,index) in City_list[1]" :key="index"><a href="javascript:;" pid="2" 
                         @click="handlecity(item,$event)"
                         >{{item[1]}}</a></li>                        
                    </ul>
                    <!-- 省名 -->
                    <ul  class="dptctdrp_list" v-show=flag2 >
                        <li style="padding:0px 0px;" 
                        v-for="(item,index) in City_list[num1]" :key="index" 
                        @click="handlecity1(item)"><a href="javascript:;" pid="233">{{item[1]}}</a></li>                   
                    </ul>
                    <!-- 省会名 -->
                    <ul  class="dptctdrp_list">
                      <li  v-show=flag3 v-for="(item,index) in City_list[num2]"
                      :key="index"
                       @click="handlecity2(item)" >{{item[1]}}</li>
                      </ul>
                    <!-- 县名 -->
                </div>
   
</template>
<script>
import {list1_city_api} from "../../api/list"
export default {
    data(){
        return{
            City_list:[],
            flag1:true,
            flag2:false,
            flag3:false,
            num1:'',
            num2:'',
            show:true,
            adr:[]
        }
    },
    async created(){   
        let data = await list1_city_api();
        this.City_list = data.data;               
        console.log(this.City_list)
   } ,
   methods:{
       handlecity(item,e){
           this.flag1= false
           this.flag2= true           
           this.num1=item[0]  
        //    console.log(e.target.nodeName)
        //    if(e.target.nodeName!=="A"){
        //        this.flag1= false
        //    }    
        this.adr.push(item[1]) 
        // console.log(this.adr)    
       },
       handlecity1(item){
           this.flag3=true,
           this.flag2=false
            this.num2=item[0] 
        this.adr.push(item[1]) 
        // console.log(this.adr)    

       },
       handlecity2(item){
           this.flag3=false
           this.show=!this.show
        this.adr.push(item[1]) 
        // console.log(this.adr)    
        this.$observer.$emit("handle",this.adr)
        this.adr=[]
       }
   }
}
</script>
<style>
/* .main_city{
     width: 100%;
     position: absolute;
     top: 0.4rem;
     overflow-y: auto;        
     padding:0 0.3rem;
     /* padding-top: 0.15rem; */
     /* margin: 0.4rem auto 0; */
     /* background: #FFFFFF; */
     /* bottom: 0.4rem */
/* } */ 
/* 数量地址 */
/* .dptctdrp_list {
    padding: 5px 4px;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
    zoom: 1;
    position: relative;
    z-index: 20;
} */
.depit_citydrp {
    padding: 10px;
    width: 80%;
    position: fixed;
    overflow-y: auto;
    right: 0;
    top: 0;
    background: #fff;
    z-index: 100001;
}
.h5_dptctdrp {
    display: none;
    border-bottom: 1px solid #e8e8e8;
    line-height: 28px;
    font-size: 100%;
    font-weight: normal;
    position: relative;
    z-index: 22;
    height: 28px;
    width: 300%;
}
.h5_dptctdrp a {
    display: inline-block;
    vertical-align: top;
    padding: 0 10px;
    background-color: #fff;
    cursor: pointer;
}
.h5_dptctdrp a em {
    font-style: normal;
    float: left;
    display: inline-block;
}
.h5_dptctdrp a i {
    float: left;
    display: inline-block;
    background-position: -384px -70px;
    width: 6px;
    height: 4px;
    margin: 9px 0 0 5px;
    overflow: hidden;
}
.dptctdrp_list2 {
    padding: 5px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.dptctdrp_list li a {
    display: block;
}
.addTip {
    color: #fc5a5a;
    margin-left: 42px;
    font-size: 12px;
    padding-bottom: 10px;
}
.dptctdrp_list li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e0e0e0;
}
.dptctdrp_list2 li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e0e0e0;
}


</style>
