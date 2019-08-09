<template>
  <div>
    <Top/>
    <div class="main">
      <keep-alive>
      <ul class="count">      
        <li  v-for="(item,index) in tog" :key="index"
        :class="activeIndex==index? 'activett':'' "
         @click="handleToggle(index)" ref="li">{{item}}</li>       
      </ul>
      </keep-alive>
      <div class="Lcontent">
         <component :is="page"> 
         </component>      
        <Parlogin/>
      </div>
    </div>
  </div>
</template>
<script>
import Plogin from "../../components/phonelogin";
import Clogin from "../../components/countlogin";
import Parlogin from "../../components/partnerLogin";
export default {
  name: "Login",
  created(){
        document.title=this.$route.meta.title
    },
  components: {
    Plogin,
    Clogin,
    Parlogin
  },
  data() {
    return {
      activeIndex:0,
      tog: ["账号登录", "手机动态密码登录"],
      page: "Clogin"
    };
  },
  methods: {
    handleToggle(index) {
      this.activeIndex=index;
      // console.log(index)
      switch (index) {
        case 0:
          this.page = "Clogin";       
          break;
        case 1:
          this.page = "Plogin";
           
          break;
      }

    },
    handleToggle1() {
      this.flag = false;
      this.nflag = true;
    }
  }
};
</script>
<style>
.activett{
  color:red;
}
.main {
  width: 100%;
  position: absolute;
  top: 0rem;
  bottom: 0.4rem;
  overflow-y: auto;
  padding: 0 0.3rem;
  padding-top: 0.15rem;
  margin: 0.4rem auto 0;
  background: #ffffff;
}
.count {
  width: 100%;
  height: 0.45rem;
  display: flex;
  align-items: center;
}
.count > li {
  flex: 1;
  /* width: 40%; */
  height: 0.3rem;
}

.user,
.pwd,
.pwd2,
.tel,
.verify,
.yzmInput {
  height: 0.4rem;
  border: 0.01rem solid #cccccc;
  border-radius: 0.03rem;
  margin-bottom: 0.4rem;
  position: relative;
}
input {
  border: none;
}
.user i,
.pwd i,
.pwd2 i,
.tel i {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  float: left;
  margin: 0.1rem 0.1rem 0 0.1rem;
}
input[type="submit"],
input[type="button"],
input[type="text"],
input[type="password"] {
  -webkit-appearance: none;
  box-sizing: content-box;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  font-family: Microsoft YaHei;
}

.user i,
.pwd i,
.pwd2 i,
.tel i,
.choose a,
.tip i,
.tip2 i,
.success h2 i {
  background: url(images/loginIcon.png) no-repeat;
}
.user i {
  background-position: 0 -0.34rem;
}
.tip {
  position: absolute;
  top: 0.4rem;
  right: 0;
  color: #de4943;
  display: none !important;
}
.user input,
.pwd input,
.pwd2 input,
.tel input {
  width: 70%;
  height: 0.36rem;
  line-height: 0.4rem;
}

.tel i {
  background-position: -1.38rem -0.34rem;
}
.tip i,
.tip2 i {
  width: .15rem;
  height: .15rem;
  display: block;
  float: left;
  margin: .03rem .05rem 0 0;
  background-position: -2.02rem -.34rem;
}
.pwd i,
.pwd2 i {
  background-position: -.72rem -.34rem;
}
.btn {
  width: 100%;
  height: .34rem;
  line-height: .34rem;
  display: block;
  clear: both;
  margin: .30rem auto;
  text-align: center;
  background: #de4b45;
  border-radius: 5px;
  color: #ffffff;
  font-size: .16rem;
}

.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}

.partnerLogin .title {
  width: 100%;
  height: .40rem;
  margin-top: .20rem;
  position: relative;
}
.title .line {
  height: .20rem;
  border-bottom: .01rem solid #cccccc;
}
.title .partner {
  width: 1.10rem;
  height: .40rem;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 50%;
  line-height: .40rem;
  margin: 0 0 0 -.55rem;
  text-align: center;
  color: #878686;
}


.verify {
  border: none;
}


.identify {
  width: 54%;
  height: 0;
  display: inline-block;
}
.yzmInput > img {
  margin-top: .05rem;
}
.yzmImg {
  height: .40rem;
  position: absolute;
  z-index: 10;
  right: .10rem;
  top: 1px;
  font-size: 0;
}
.yzmImg a {

  width: .21rem;
  height: .24rem;
  display: inline-block;
  background: url(images/ref.png) no-repeat;
  background-size: .21rem .24rem;
  margin-top: .08rem;
}
.identify {
  height: 0.02rem;
  border-radius: .03rem;
  margin-bottom: .38rem;
  position: relative;
  margin-right: 0.2rem
}
.identify input {
  width: 100%;
  height: .40rem;
  line-height: .40rem;
  float: left;
  border: .01rem solid #cccccc;
  border-radius: .03rem;
  padding-left: .15rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.identify .tip2 {
  display: none;
}
.tip2 {
  position: absolute;
  top: .42rem;
  right: 0;
  color: #de4943;
  display: none;
}
.hqyzm {
  display: inline-block;
  /* float: right; */
}
.yzm {
  background: #df3832;
}
.yzm,
.yzmTime {
  width: auto;
  height: .40rem;
  line-height: .40rem;
  float: right;
  border-radius: .05rem;
  color: #ffffff;
  padding: 0 .15rem;
}
.yzmTime {
  background: #9b9b9b;
  display: none;
}
.yzm,
.yzmTime {
  width: auto;
  height: .40rem;
  line-height: .40rem;
  float: right;
  border-radius: .05rem;
  color: #ffffff;
  padding: 0 .15rem;
}
.yzmTime i {
  font-style: normal;
}

.partnerLogin .title {
  width: 100%;
  height: .40rem;
  margin-top: .20rem;
  position: relative;
}
</style>
