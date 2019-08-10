<template>
<div class="clogin">
     <div class="content1" >
          <!-- 用户账号登录模块 -->
          <form autocomplete="off">
            <div class="user">
              <i></i>
              <input 
              type="text" 
              name="user_name" 
              id="user_name" 
              value placeholder="用户名/邮箱/手机号"
              v-model="inputUser"
              >
              <p class="tip empty" id="err_msg">
                <i></i>请输入用户名/邮箱/手机号
              </p>
            </div>
            <div class="pwd">
              <i></i>
              <input 
              type="password" 
              name="password" 
              id="pass" 
              placeholder="密码"
              v-model="inputPassword"
              >
              <p class="tip">
                <i></i>请输入密码
              </p>
            </div>
            <!-- 图片验证 -->
            <div class="verify text verifyLogin" style="height:42px;" id="vfCode2">
              <div class="yzmInput">
                <img
                  width="225px"
                  height="30px"
                  
                  src="https://mlogin.jiuxian.com/captchaimg1?t=1564824515641"
                  id="captchaimg1_mobile"
                >
                <div class="yzmImg">
                  <a
                    href="javascript:;"
                    id="captchaimgChange_mobile"
                    class="change"
                    style="line-height:30px;"
                  ></a>
                </div>
              </div>
              <input type="hidden" name="verifyCode" id="imgCode2" value="1111">
            </div>
            <v-touch class="btn"  id="subbtn1" tag="span"
            @tap='handleLink()' 
            ><router-link tag="span" :to=path>立即登录</router-link></v-touch>

            <!-- 用户账号 登陆模块结束 -->
           <div class="serve clearfix">
                <router-link 
                v-for="(item,index) in navs"
                :key="index"
                tag="li"
                :to="item.path"               
                 >{{item.text}}</router-link>               
                </div> 
            
          </form>
        </div>

</div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            navs:[
                {
                    text:"免费注册",
                    path:"/register"
                },
                {
                    text:"找回密码",
                    path:"/find"
                }
            ], 
            inputUser:"",
            inputPassword:"",
            path:"",
            id:""
        }
    },
    methods:{
              handleLink(){
                 let usernames=this.inputUser;
                let passwords=this.inputPassword;
                // let path=this.path 
                // +"&"+"password="+passwords
                let url="http://localhost:3000/data?username="+usernames+"&"+"password="+passwords;
                console.log(usernames,passwords,url);                
                axios({
                  method:"get",
                  // url:"http://localhost:3000/data?username="+usernames,
                  url:url                                          
                }).then((data)=>{
                  // console.log(data.data)
                  // 注册
                  if(data.data.length===0){
                    
                    axios({
                  method:"post",
                  url:"http://localhost:3000/data" ,              
                  data:{
                    username:usernames,
                    password:passwords
                  }                
                })  
                  }else{
                    // console.log(1111)
                  this.$router.push({name:"home"})
                  // this.path="/home"
                  //  跳到home页面的 路径要加个参
                  }
                }) 
              

                       
                // axios({
                //   method:"post",
                //   url:"http://localhost:3000/data" ,              
                //   data:{
                //     username:username,
                //     password:password
                //   }                
                // })   
              }             
              
            }
}
</script>
<style>
/* 账号登录 */
.content1 {
  width: 3.15rem;
  /* height: 3.59rem; */
}
.user,
.pwd,
.pwd2,
.tel,
.verify,
.yzmInput {
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin-bottom: 40px;
  position: relative;
}
input {
  border: none;
}
.user i,
.pwd i,
.pwd2 i,
.tel i {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: 10px 10px 0 10px;
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
  background: url(../images/loginIcon.png) no-repeat;
}
.user i {
  background-position: 0 -34px;
}
.tip {
  position: absolute;
  top: 40px;
  right: 0;
  color: #de4943;
  display: none !important;
}
.user input,
.pwd input,
.pwd2 input,
.tel input {
  width: 70%;
  height: 36px;
  line-height: 40px;
}

.tel i {
  background-position: -138px -34px;
}
.tip i,
.tip2 i {
  width: 15px;
  height: 15px;
  display: block;
  float: left;
  margin: 3px 5px 0 0;
  background-position: -202px -34px;
}
.pwd i,
.pwd2 i {
  background-position: -72px -34px;
}
.btn {
  width: 100%;
  height: 34px;
  line-height: 34px;
  display: block;
  clear: both;
  margin: 30px auto;
  text-align: center;
  background: #de4b45;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
}

.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}

.clearfix li {
  color: #666;
  text-decoration: underline;
  height: 20px;
  /* display: block; */
  /* float: left; */
}
.clearfix li:nth-child(1){
 float: left;
}
.clearfix li:nth-child(2) {
  float: right;
}
.partnerLogin .title {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  position: relative;
}
.title .line {
  height: 20px;
  border-bottom: 1px solid #cccccc;
}
.title .partner {
  width: 110px;
  height: 40px;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 50%;
  line-height: 40px;
  margin: 0 0 0 -55px;
  text-align: center;
  color: #878686;
}
.choose {
  margin: 20px 0;
  text-align: center;
}
.choose li {
  width: 33%;
  display: inline-block;
}
.choose .qq {
  background-position: -78px -99px;
}
.choose a {
  width: 45px;
  height: 45px;
  display: inline-block;
}
.choose .alipay {
  background-position: -156px -99px;
}

.verify {
  border: none;
}
.identify input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  float: left;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding-left: 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.identify {
  width: 54%;
  display: inline-block;
}
.yzmInput > img {
  margin-top: 5px;
}
.yzmImg {
  height: 40px;
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 1px;
  font-size: 0;
}
.yzmImg a {
  /* float: right; */
  width: 21px;
  height: 24px;
  display: inline-block;
  background: url(../images/ref.png) no-repeat;
  background-size: 21px 24px;
  margin-top: 8px;
}
.identify {
  height: 40px;
  border-radius: 3px;
  margin-bottom: 38px;
  position: relative;
}
.identify input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  float: left;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding-left: 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.identify .tip2 {
  display: none;
}
.tip2 {
  position: absolute;
  top: 42px;
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
  height: 40px;
  line-height: 40px;
  float: right;
  border-radius: 5px;
  color: #ffffff;
  padding: 0 15px;
}
.yzmTime {
  background: #9b9b9b;
  display: none;
}
.yzm,
.yzmTime {
  width: auto;
  height: 40px;
  line-height: 40px;
  float: right;
  border-radius: 5px;
  color: #ffffff;
  padding: 0 15px;
}
.yzmTime i {
  font-style: normal;
}
.partnerLogin .title {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  position: relative;
}
</style>
