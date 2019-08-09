<template>

  <div class="shopping">
    <syy-BScroll ref="syyscroll">
      <div class="sss_15">
      <div class="s_left">
        <i></i>
        抢购中
      </div>
      <div class="sj4"></div>
      <div class="s_right">
        <span>距结束</span>
        <span id="timeCount1">
          <i class="hours">{{h}}</i>
          <span>:</span>
          <i class="minutes">{{m}}</i>
          <span>:</span>
          <i class="seconds">{{s}}</i>
        </span>
      </div>
    
  
    <!-- 商品列表 -->
    <div class="list">
      <ul>
        <li v-for="(item,index) in splist4" :key="index">
          <div class="img">
            <img :src="item.proImg">
          </div>
          <div class="img_right">
            <h4>
              <span>{{item.proName}}</span>
              <div class="styOne">{{item.slogan}}</div>
            </h4>
            <div class="mPri">
              秒拍价：
              <b>
                <strong>{{item.proPrice}}.00</strong>
              </b>
            </div>
            <div class="mPri1">{{time}}点准时开抢</div>
            <div class="mBtnBox">
              <a class="btn1">即将开抢</a>
            </div>  
          </div>
        </li>
      </ul>
    </div>
    </div>
  </syy-BScroll>
</div>
  <!-- 商品列表结束 -->
</template>
<script>
import { list4_time_api } from "../../api/list";
import { list4_4_time_api } from "../../api/list";

export default {
  name: "List",
  //   async 异步 可直接获取.then中的值  不用.then获取
  async created() {
    if (!sessionStorage.getItem("splist4")) {
      let data = await list4_time_api();
      this.splist4 = data.data.killProList;
      let { hourThree } = data.data.seckillDate;
      this.time = hourThree;
      sessionStorage.setItem("splist4", JSON.stringify(data.data.killProList));
    }
  },
  mounted(){
    this._interval = setInterval(() => {
      this.countdown();
    }, 1000);

 // 下拉刷新   
    this.$refs.syyscroll.handlepullingDown(async () => {
     
      let data = await list4_4_time_api();
      this.splist4 = data.data.killProList;     
      sessionStorage.setItem("splist4",JSON.stringify(data.data.killProList));    
      this.$refs.syyscroll.handlefinishPullDown();
    });
    // 上拉加载更多
    this.$refs.syyscroll.handlepullingUp( async() => {    
      // 进行数据拼接 将原来的数据和新数据拼接起来
      let data = await list4_4_time_api();
      this.splist4 = [...this.splist4, ...data.data.killProList];
      sessionStorage.setItem("splist4", JSON.stringify(data.data.killProList));
      this.$refs.syyscroll.handlefinishPullUp();
    });


  },


  methods:{   
    countdown: function() {
      let end = new Date();
      let now = new Date();
      let day = now.getDate();
      end.setDate(day+1);
      end.setHours(15);
      end.setMinutes(0);
      end.setSeconds(0);
      let s = end.getTime() - now.getTime();
      // let day=parseInt(s/1000/60/60/24);
      let hour = parseInt((s / 1000 / 60 / 60) % 24);
      let second = parseInt(s / 1000) % 60;
      let minutes = parseInt((s / 1000 / 60) % 60);
      this.h = hour;
      this.s = second;
      this.m = minutes;
    }
  },
 
  data() {
    return {
      splist4: JSON.parse(sessionStorage.getItem("splist4")) || [],
      flag: 0,
      time: "",
      h: "",
      m: "",
      s: "",
    };
  }
};
</script>
<style scoped>
/*列表  */
.sss_15{
  width: 100%;
  height:auto;
}
.list ul .mPri1 {
  font-size: 12px;
  color: #009900;
  line-height: 18px;
}
.list {
  display: flex;
  flex-direction: column;
}
.list li {
  width: 100%;
  border-bottom: 0.01rem solid #e8e8e8;
  padding: 0.1rem 0;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
}
.list1 {
  display: block;
}
.img,
img {
  float: left;
  width: 1.13rem;
  height: 1.16rem;
}
.list,
.list > ul {
  width: 100%;
}
.img_right {
  width: 2.55rem;
  height: 0.78rem;

  float: right;
}
.img_right h4 {
  width: 100%;
  font-size: 0;
  line-height: 20px;
  margin: 3px 0 2px;
}
.img_right h4 > h4 {
  font-size: 0.14rem;
}
.img_right h4 span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.img_right h4 .styOne {
  color: #666;
  font-size: 12px;
}
.mPri {
  font-size: 12px;
  color: #666;
  line-height: 18px;
}
.mPri b {
  color: #ff3333;
  font-size: 14px;
}
.loadBox strong {
  display: inline-block;
  color: #666;
  font-weight: normal;
  font-size: 10px;
  margin-right: 8px;
}
.loadBox span {
  display: inline-block;
  border: 1px solid #ffcccc;
  line-height: 0;
  overflow: hidden;
  width: 70px;
  height: 8px;
  position: relative;
  border-radius: 4px;
}
.loadBox em {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 8px;
  background: #ffcccc;
}
.mBtnBox {
  display: inline-block;
  width: 60px;
  height: 24px;
  position: absolute;
  right: 0;
}
.btn1 {
  display: inline-block;
  background-color: #009900;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  -webkit-border-radius: 5px;
  -moz-border-raidus: 5px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  position: relative;
  top: -5px;
  right: 5px;
}
.loadBox {
  display: inline-block;
}

.footer {
  width: 100%;
  height: 0.3rem;
  background: #ddd;
  position: absolute;
  bottom: 0;
  padding-top: 0.07rem;
  text-align: center;
}
/* 抢购中 */

.shopping {
  width: 100%;
  height: 100%;
}
.shopping .s_left {
  width: 80px;
  font-size: 14px;
  float: left;
  line-height: 36px;
  color: #fff;
  background: #fc4646;
  padding-left: 10px;
}
.sj4 {
  width: 0.2rem;
  height: 0.37rem;
  float: left;
  background: url(../images/arrow.jpg) no-repeat;
}
.shopping .s_left i {
  display: inline-block;
  width: 0.16rem;
  height: 0.15rem;
  background: url(../images/miaoIcon.png) no-repeat;
  background-size: 100px 100px;
  margin: 0.1rem 0.05rem 0 0;
}
.shopping .s_right {
  height: 0.2rem;
  float: right;
  overflow: hidden;
  margin-top: 0.08rem;
  margin-right: 0.08rem;
}
.shopping .s_right > .timeCount1 {
  float: left;
  font-size: 0.12rem;
  padding-right: 0.05rem;
  line-height: 0.2rem;
}

.shopping .s_right span i {
  width: 0.22rem;
  height: 0.2rem;
  display: inline-block;
  border-radius: 0.05rem;
  background: #666;
  color: #fff;
}
</style>
