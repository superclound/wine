<template>
<div>
    <Top/>
    <!--  -->
    <div class="main" v-if="splist_1.couponNameList">
        <div class="floor">      
            <div class="floor1">
                <img :src="list1_detail.proImg" >
            </div>          
            <!-- 商品文字 -->
            <div class="detailsbd">
                <div class="detailsTil">
                    <h4>
                        <img src="./img/jxzy.png" class="jxzy">
                        <span>{{list1_detail.proName}}</span>
                    </h4>
                </div>
                <div class="detailsTip"> {{list1_detail.slogan}}</div>

                <div id="priceAndTag">
                    <div class="detailsPrice">
                        <p id="has_clubPrice_zy"><span class="price"><em>￥</em><b>{{list1_detail.proPrice}}</b></span><del class="priceJX"
                                id="detailsPriceJXJ_jxj"><span>酒仙价:<s>{{list1_detail.jxPrice}}</s></span></del></p>
                    </div>
                    <div class="clubDisc" id="zy_club_desc"><i class="clubImg"></i><span>{{splist_1.clubDiscountTip}}</span></div>
                    <div class="detailsPhone clearfix">
                        <i class="tagText " id="tagText">限时抢购</i>
                    </div>
                </div>
            </div>
            <!-- 津贴 -->
            <div class="jintie-wrap">
                <div class="dt"></div>
                <div class="dd">
                    <div class="voucher-list">
                        <div class="jintie" id="allowanceTip">{{splist_1.allowanceTip?splist_1.allowanceTip:"每满300减40,领取津贴全平台可用"}}<div class="jintie_lq">点击领取</div>
                        </div>
                        <i class="pubIcon"></i>
                    </div>
                </div>
            </div>
            <!-- 领券 -->
            <div class="voucher-wrap" id="voucher-wrap">
                <div class="dt">领券</div>
                <div class="dd">
                    <div class="voucher-list" id="voucher-list">
                        <div class="voucher-item">
                            <i><img src="./img/con_1.png"></i> <span>{{splist_1.couponNameList[0]}}</span>
                            <i><img src="./img/con_2.png"></i>
                        </div>
                        <div class="voucher-item"><i><img src="./img/con_1.png"></i>
                            <span>{{splist_1.couponNameList[1]}}</span> <i><img src="./img/con_2.png"></i>
                        </div>
                        <div class="voucher-item"><i><img src="./img/con_1.png"></i>
                            <span>{{splist_1.couponNameList[2]}}</span> <i><img src="./img/con_2.png"></i>
                        </div><i class="pubIcon"></i>
                    </div>
                </div>
            </div>
            <!-- 会员 -->
            <div class="detailsbd" id="club_span">
                <div class="detailsDl">
                    <a id="club_href" href="#">
                        <div class="dt"><s class="clubPic"></s></div>
                        <div class="dd club_text">购买CLUB会员享受更多优惠</div>
                        <i class="pubIcon arrow"></i>
                    </a>
                </div>
            </div>
            <!-- 金币 -->
            <div class="detailsbd">
                <div class="detailsDl">
                    <div class="detailsDl">
                        <div class="dt">金币</div>
                        <div class="dd">
                            <p>
                                赠送<b class="coinNum">{{splist_1.productPromo.goldCoinNum }}</b>个金币
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 规格 -->
            <div class="detailsbd">
                <div class="detailsbd format">
                    <div class="formatTitle">规格</div>
                    <div class="formatList clearfix">
                        <div class="formatItem" :class="index==0 ?'formatCur':''" >
                            <v-touch tag="a" 
                            @tap="handlechange()" 
                             >
                               {{list1_detail.proName}}
                            </v-touch>
                        </div>

                        <div class="formatItem " :class="index==1 ?'formatCur':''">
                            <v-touch 
                            tag="a"
                            @tap="handlechange1()" >
                                {{list1_detail.slogan}}
                            </v-touch>
                        </div>

                       
                    </div>
                </div>
            </div>
            <!-- 数量地址 -->
            <div class="detailsbd" style="padding: 10px 10px 5px; margin-bottom: 0;">
                <div class="detailsDl">
                    <div class="detailsDl">
                        <div class="dt">数量</div>
                        <div class="dd">
                            <div class="rsCartItem">
                                <div class="comAmount" >
                                    <v-touch id="decrease_number_goods" 
                                    class="publicIcon minus on" 
                                    tag="a" @tap=handlereduce()>-</v-touch>
                                    <input type="text"  id="prosum" 
                                    v-model="inputVal"
                                    @input="handleinput()"
                                    >
                                    <v-touch class="publicIcon plus " 
                                        id="ncrease_number_goods"
                                        tag="a"
                                        @tap=handleadd()
                                        >+</v-touch>
                                </div>
                            </div>
                        </div>
                        <div id="numOver">
                            <p class="limitNumTip" v-show=flagc>超出限购</p>
                            <!-- <p class="numOver" id="number_over_goods" v-show=flagk>您选择的商品数量已超过库存</p> -->
                        </div>
                    </div>
                </div>
                <!-- 地址start -->
                <div id="detailAdresspopBj" class="detailAdresspopBj"></div>
                <div class="dOrder-city" id="_shdz">
                    <strong class="pubIcon detailBtn"></strong>
                    <v-touch tag="div" class="set-tit" @tap=handlecity()>送至</v-touch>
                    <a  class="dOrder-city-sel"> <b pid="17">{{msg?msg:"北京"}}</b> <b></b><b></b></a>
                    <City v-show=flag>
                    </City>

                </div>
                <p class="addTip">有货，预计4-7天可到达</p>
                <!-- 地址end -->
                <!-- 运费说明 酒仙配送商品不展示运费-->
                <!-- 提示信息 -->
                <div class="detailsDl">
                    <div class="detailsDl">
                        <div class="dt" style="top: 1px;">提示</div>
                        <div class="dd">
                            <p id="coupon" style="display: none"></p>
                            <p id="handBag"> 此商品无原厂手提袋 </p>
                        </div>
                    </div>
                </div>
            </div>
            <!--加入购物车 -->
            <div class="bottomFix">
                <div class="detailBomNav">
                    <ul>
                        <li style="display: true">
                            <a  id="zaixiankefu">
                                <i class=" shijiushiIcon "></i>
                            </a>
                        </li>
                        <li>
                            <a  id="collect_goods">
                                <i class=" collectIcon " id="toggleCollect"></i>
                            </a>
                        </li>

                        <li><em id="cartNums">{{num}}</em>
                            <a id="detail_gouwuche" href="#"><i class="cartIcon2"></i></a></li>
                    </ul>
                </div>
                <div class="detailBomRight" id="footerBar">
                    <li class="inCart"><a @click="Addcarts()" class="detailLink toCart" id="toCart_goods">加入购物车</a></li>
                    <ul id="canBuy">
                        <router-link :to="'/carts'+'/'+text" tag="li"><a class="detailLink detSty buyNow" href="javascript:void(0);" id="buyNow_goods">立即购买</a></router-link>
                    </ul>
                </div>
                <div class="pro" id="stock_arrive" style="display: none">所选地区暂时缺货，非常抱歉！</div>
            </div>
            <!-- 正品包邮 -->
            <div class="detailsSecurityBox">
                <div class="detailsSecurity">
                    <span><i
                            style="background: url('https://img09.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png') no-repeat 0 0; background-size: 13px 13px;"></i>正品保障</span>
                    <span><i
                            style="background: url('https://img07.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png') no-repeat 0 0; background-size: 13px 13px;"></i>满100包邮</span>
                    <span><i
                            style="background: url('https://img08.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png') no-repeat 0 0; background-size: 13px 13px;"></i>7天退换</span>
                    <span><i
                            style="background: url('https://img07.jiuxian.com/bill/2016/1129/311cd9577b674fa783222f1c9f373cfd.png') no-repeat 0 0; background-size: 13px 13px;"></i>酒仙发货&amp;售后</span>
                </div>
            </div>
        </div>
    </div>
</div>   
</template>
<script>
import { list1_time_api } from "../../api/list";
import { list1_detail_api} from "../../api/list";
import { MessageBox} from "../../lib/alert/index.js"
import {list1_city_api} from "../../api/list"
import City from "../../components/city";
import { setTimeout } from 'timers';


export default {
    data(){
        return{
             inputVal:1,
             proId:"",            
             splist1:[],
             splist_1:[],
             list1_detail:[],
             flagc:false, 
             index:1 ,
             num:2 ,
             text:"购物车" ,
             flag:false  ,
             msg :''                     
        }      
    },
    components:{
        City
    },
    async created(){
        let{proId}=this.$route.params
        this.proId=proId;
        let data = await list1_time_api();
        this.splist1 = data.data.killProList;            
        for(var i=0;i<this.splist1.length;i++){
            if(this.proId==this.splist1[i].proId){
               this.list1_detail=this.splist1[i]                
            }            
        }
// 获取有金币的接口信息
        let data_detail = await list1_detail_api(proId);
        this.splist_1=data_detail.data      
        // console.log(this.splist_1) 
        
    },
   
    methods:{
        handlecity(){
            this.flag=true;
            this.$observer.$on("handle",(val)=>{
                for(let i=0;i<val.length;i++){
                    this.msg += val[i];
                }           
        })         
        },
        handlechange(){
            this.index=0;
            // console.log(this.index)
        },
        handlechange1(){
            this.index=1;
            // console.log(this.index)
        },
        handleadd(){
            // console.log(this.$refs.input.value)
             this.inputVal++;
            if( this.inputVal>99){
                this.inputVal=99                             
            } 
            if( this.inputVal>5){
                this.flagc=true
            }
        },
        handlereduce(){
             this.inputVal--;         
            if( this.inputVal<1){
                this.inputVal=1
            } 
             if( this.inputVal<5){
                this.flagc=false
            }
        },
        handleinput(){         
        //    console.log( this.inputVal)          
            if( this.inputVal>99){
                this.inputVal=99
            }             
            if(this.inputVal<0){
                this.inputVal=1
            }
             if( this.inputVal<5){
                this.flagc=false
            }
             if( this.inputVal>5){
                this.flagc=true
            }
        },
        Addcarts(){
            this.num+=this.inputVal;
            MessageBox({
            title:"加入购物车成功",
        });
            setTimeout(()=>{
                let el=document.querySelector(".box")
                document.body.removeChild(el)},3000)
        }
    }
 }
</script>
<style scopted>
/* formatCur */
.dOrder-city .dOrder-city-sel {
    color: #252525;
    float: left;
    height: 22px;
    line-height: 22px;
    margin-left: 10px;
    display: inline-block;
    background: #fff;
    padding-left: 5px;
    position: relative;
    z-index: 1;
    display: block;
    width: 80%;
}
.dOrder-city .dOrder-city-sel b {
    color: #252525;
    font-weight: normal;
    padding-right: 5px;
    vertical-align: middle;
    font-size: 0.14rem
}
.main{
    width: 100%;
     position: absolute;
     top: 0.4rem;
     bottom: 0.3rem;
     overflow-y: auto;
     /* height: 100% */
    }
/* 商品轮播 */
body{
    background: #f3f5f6
}
.floor{
    position: absolute;
    overflow-y: auto;
    width: 100%;
}
.floor1 {
    background-color: #fff;
    width: 100%;
    height: 3.2rem;
    overflow: hidden;
    position: relative;
    background: black;
}
.floor1 img{
    width:100%;
    height:100%;
}
/* 商品文字 */
.detailsbd {
    padding: 0.1rem;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 0.08rem;
}
.detailsTil {
    position: relative;
    margin-bottom: 0.08rem;
}
.detailsTil h4{
    font-size: 0;
    color: #252525;
    line-height: 0.2rem;
    display: inline-block;
}
.jxzy {
    width: 0.38rem;
    height: 0.13rem;
    vertical-align: top;
    margin: 0.02rem 0.05rem 0 0;
    display: inline-block;
}
.detailsTil h4 span {
    font-size: 0.15rem;
    font-weight: 500;
}
.detailsTip {
    font-size: 0.13rem;
    color: #fc5a5a;
}
.detailsPrice {
    height: 0.24rem;
    line-height: 0.24rem;
    font-size: 0.16rem;
    padding: 0 0 0.05rem 0;
    position: relative;
}
.detailsPrice .price {
    float: left;
    color: #fc5a5a;
}
.detailsPrice .price>em{
    font-size: 0.14rem;
    font-style: normal;
    float: left;
    position: relative;
    top: 0.02rem;
    padding-right: 0.02rem;
}
.detailsPrice .price>b{
    float: left;
    font-weight: normal;
    font-size: 0.19rem;
}
.detailsPrice .priceJX {
    float: left;
    font-size: 0.12rem;
    color: #999;
    padding-left: 0.08rem;
}
.clubDisc {
    height: 0.2rem;
    line-height: 0.2rem;
    margin-bottom: 0.05rem;
    font-size: 0;
    font-family: "微软雅黑";
}
.clubDisc span, .clubDisc .clubImg {
    display: inline-block;
    vertical-align: middle;
}
.clubDisc .clubImg {
    background: url(img/clubImg.png) no-repeat;
    background-size: 0.29rem 0.11rem;
    width: 0.29rem;
    height: 0.11rem;
    overflow: hidden;
    margin-right: 0.05rem;
}
.clubDisc span {
    font-size: 0.12rem;
    color: #666;
}
.detailsPhone {
    line-height: 0.16rem;
    font-size: 0.12rem;
    height: 0.16rem;
    margin-bottom: 0.05rem;
    position: relative;
}
.detailsPhone .tagText {
    display: block;
    float: left;
    height: 0.16rem;
    line-height: 0.16rem;
    padding: 0 0.04rem;
    background-color: rgb(255, 168, 85);
    color: #fff;
    font-size: 0.11rem;
    font-style: normal;
}
/* 津贴 */
.jintie-wrap {
    /* height: 0.18rem; */
    background: #FFD4B5;
    margin-bottom: 0.08rem;
    padding: 0.12rem 0.1rem;
    cursor: pointer;
    position: relative;
}

.jintie-wrap .dt {
    color: #666;
    font-size: 0.14rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.57rem;
    height: 0.40rem;
    background: url(img/jintie.png) no-repeat 0 0;
    background-size: 0.57rem 0.37rem;
}
.jintie-wrap .dd {
    margin-left: 0.53rem;
    height: 0.18rem;
}
.voucher-list {
    height: 0.18rem;
    position: relative;
    z-index: 1;
}
.jintie {
    font-size: 0.14rem;
    height: 0.18rem;
    line-height: 0.18rem;
    margin-right: 0.70rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #FC5A5A;
}
.jintie_lq {
    position: absolute;
    top: -0.01rem;
    right: 0.16rem;
    height: 0.18rem;
    font-size: 0.13rem;
    text-decoration: underline;
}
.voucher-list .pubIcon {
    background-position: -1.30rem -0.40rem;
    width: 0.10rem;
    height: 0.13rem;
    position: absolute;
    z-index: 1;
    top: 0.02rem;
    right: 0.05rem;
    background: url(img/catIcon.png) no-repeat -1.3rem -0.4rem;
    background-size: 1.50rem;
}
/* 领劵 */
.voucher-wrap {
    height: 0.28rem;
    background: #fff;
    margin-bottom: 0.08rem;
    padding: 0.06rem 0.10rem;
}
.voucher-wrap .dt {
    float: left;
    height: 0.18rem;
    line-height: 0.18rem;
    color: #666;
    font-size: 0.14rem;
}
.voucher-wrap .dd {
    margin-left: 0.54rem;
    height: 0.18rem;
}
.voucher-item {
    float: left;
    margin-right: 0.10rem;
    height: 0.18rem;
}
.voucher-item i, .voucher-item span {
    float: left;
    display: inline-block;
}
.voucher-item i img {
    width: 100%;
    height: auto;
    border: none;
}
.voucher-item span {
    height: 0.16rem;
    line-height: 0.16rem;
    padding: 0 0.03rem;
    text-align: center;
    border-bottom: 1px solid #fc5a5a;
    border-top: 1px solid #fc5a5a;
    font-size: 0.12rem;
    color: #fc5a5a;
    background: #fff1f1;
}
.voucher-item i {
    display: block;
    width: 0.04rem;
    height: 0.18rem;
    font-size: 0;
}
/* 会员 */

.detailsDl {
    width: 100%;
    position: relative;
    margin-bottom: 0.05rem;
}

.detailsDl .dt .clubPic {
    display: inline-block;
    width: 0.45rem;
    height: 0.17rem;
    background: url(img/club2.png) no-repeat center center;
    background-size: 0.45rem 0.17rem;
    margin: 0.01rem 0.03rem 0 0;
}
.detailsDl .dd {
    margin: 0 0 0.05rem 0.54rem;
    display: inline-block;
    color: #252525;
    width: 90%;
    font-size: 0.14rem;
    padding-right: 0.10;
    position: relative;
}
.detailsDl .arrow {
    top: 0.05rem;
}
.detailsDl .arrow {
    background-position: -1.30rem -0.4rem;
    width: 0.10rem;
    height: 0.13rem;
    overflow: hidden;
    display: block;
    position: absolute;
    right: 0.05rem;
}
.pubIcon {
    background: url(img/catIcon.png) no-repeat 0 0;
    background-size: 1.50rem;
}
/* 金币 */


.detailsDl .dd p {
    line-height: 0.20rem;
    margin-bottom: 0.05rem;
}
.detailsDl .dd p b {
    color: #fc6a6a;
    font-weight: normal;
}
/* 规格 */
.format {
    padding: 12px 10px 5px;
}
.formatTitle {
    font-size: 14px;
    color: #666666;
    line-height: 20px;
}
.formatList {
    margin-top: 10px;
}
.formatItem {
    height: 26px;
    line-height: 26px;
    background: #f5f5f5;
    border-radius: 13px 13px 13px 13px;
    padding: 0 15px;
    float: left;
    font-size: 13px;
    color: #333333;
    margin: 0 10px 10px 0;
    box-sizing: border-box;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.formatItem a {
    display: block;
    color: #333;
}
.formatCur {
    line-height: 24px;
    border: 1px solid #fc5a5a;
    background: #ffeeee;
    padding: 0 14px;
}
.formatCur a {
    color: #fc5a5a;
}
#numOver p{
    color:red
}

/* 数量地址 */
.detailsDl .dt {
    display: inline-block;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    color: #666;
    position: absolute;
    top: 1px;
    left: 0;
}
.detailsDl .dd .rsCartItem {
    width: 75px;
    height: 23px;
    border: 1px solid #e8e8e8;
    padding: 0;
}
.detailsDl .dd .comAmount {
    width: 75px;
    height: 22px;
    position: relative;
    padding: 0;
}
.detailsDl .dd .comAmount .minus.on, .detailsDl .dd .comAmount .plus.on {
    color: #999;
}
.detailsDl .dd .comAmount .minus {
    left: 0;
    border-right: 1px solid #e8e8e8;
}
.detailsDl .dd .comAmount a {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 0;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
}
.detailsDl .dd a {
    display: block;
}
.detailsDl .dd .comAmount input {
    display: inline-block;
    width: 75px;
    height: 22px;
    line-height: 22px;
    text-align: center;
}
.detailsDl .dd .comAmount .plus {
    right: 0;
    border-left: 1px solid #e8e8e8;
}
#numOver .numOver {
    color: #ff3938;
    clear: both;
    margin-left: 36px;
}
.detailAdresspopBj {
    height: 100%;
    position: fixed;
    top: 0;
    overflow: hidden;
    width: 100%;
    background-color: #000;
    opacity: 0.8;
    left: 0;
    z-index: 9999;
    display: none;
}
.dOrder-city {
    padding: 10px 0 0;
    color: #252525;
    height: 32px;
    position: relative;
    z-index: 3;
}
.dOrder-city .detailBtn {
    background-position: -130px -40px;
    display: block;
    height: 13px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    top: 18px;
    width: 10px;
}
.set-tit {
    float: left;
    line-height: 24px;
    color: #666;
}
.dOrder-city .dOrder-city-sel {
    color: #252525;
    float: left;
    height: 22px;
    line-height: 22px;
    margin-left: 10px;
    background: #fff;
    padding-left: 5px;
    position: relative;
    z-index: 1;
    display: block;
    width: 80%;
}
.dOrder-city .dOrder-city-sel b {
    color: #252525;
    font-weight: normal;
    padding-right: 5px;
    vertical-align: middle;
}
.depit_citydrp {
    padding: 10px;
    width: 80%;
    position: fixed;
    overflow: hidden;
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
/* 加入购物车 */
.bottomFix {
    background-color: #fafafa;
    position: fixed;
    height: 45px;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
}
.detailBomNav {
    float: left;
    width: 50%;
    height: 45px;
    position: relative;
}
.detailBomNav ul {
    display: flex;
}
.detailBomNav li {
    height: 41px;
    padding-top: 3px;
    position: relative;
    flex: 1;
    flex-basis: 0;
}
.detailBomNav .shijiushiIcon {
    background: url(img/sjs.png) no-repeat;
    background-size: 41px 41px;
}
.detailBomNav li a i {
    display: block;
    width: 41px;
    height: 41px;
    margin: 0 auto;
}
.detailBomNav li a {
    display: block;
    width: 100%;
    height: 41px;
}
.detailBomNav .collectIcon {
    background: url(img/bottom05.png) no-repeat;
    background-size: 41px 41px;
}
.detailBomNav li em {
    position: absolute;
    top: 3px;
    left: 50%;
    height: 14px;
    line-height: 14px;
    overflow: hidden;
    display: block;
    padding: 0 5px;
    color: #fff;
    background-color: #fc5a5a;
    font-size: 8px;
    border-radius: 50%;
    font-style: normal
}
.detailBomNav .cartIcon2 {
    background: url(img/bottom06.png) no-repeat;
    background-size: 41px 41px;
}
.detailBomRight {
    margin-left: 50%;
    height: 46px;
    display: flex!important;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.detailBomRight li.inCart {
    flex: 1
}
.detailBomRight li .detailLink.toCart {
    background-color: #fc5a5a;
}
.detailBomRight li .detailLink {
    display: block;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    position: relative;
}
.detailBomRight ul {
    height: 46px;
    flex: 1;
}
#canBuy li, #cannotBuy li {
    width: 100%;
}
.detailBomRight li .detailLink.detSty {
    background-color: #3c3f51;
}
.detailBomRight li .detailLink {
    display: block;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    position: relative;
}
.bottomFix .pro {
    position: absolute;
    height: 34px;
    line-height: 34px;
    top: -35px;
    text-align: center;
    background: #fff4e2;
    font-size: 13px;
    width: 100%;
    border-top: 1px solid #ffe7bf;
    color: #ffa800;
}
/* 正品包邮 */
.detailsSecurityBox {
    padding: 10px 12px;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 8px;
    background: #f9f9f9;
}
.detailsSecurity {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    position: relative;
}
.detailsSecurity span {
    float: left;
    color: #666;
    font-size: 12px;
    display: block;
    height: 20px;
    margin-right: 15px;
}
.detailsSecurity i {
    width: 13px;
    height: 13px;
    display: block;
    float: left;
    margin: 3px 3px 0 0;
}


</style>
