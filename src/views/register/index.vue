<template>
    <div>
        <Top/>       
       <div class="main">
		<div class="content2" style="display: block;">
			<form autocomplete="off">
				<div class="tel">
					<i></i>
					<input type="text" id="iphone" placeholder="请输入手机号，新用户将自动注册" value="">
					<!-- <p class="tip error" id="mob_msg"><i></i>请输入手机号</p> -->
					<p class="tip empty" style="display: block;"><i></i>请输入手机号</p>
					<p class="tip error" style="display: none;"><i></i>请输入正确的手机号</p>
				</div>
				<!--图形验证码 -->
				<div class="verify text verifyLogin" style="height:42px;" id="vfCode2">
					<div class="yzmInput"><img width="225px" height="30px" alt=""
							src="https://mlogin.jiuxian.com/captchaimg1?t=1564824515641" id="captchaimg1_mobile"
							>											
						<div class="yzmImg"><a href="javascript:;" id="captchaimgChange_mobile" class="change"
								style="line-height:30px;"></a></div>
					</div>
					<input type="hidden" name="verifyCode" id="imgCode2" value="1111">
				</div>
				<!-- 获取校验码 -->
				<div class="identify">
					<input type="text" id="security_code" placeholder="请输入校验码">

					<p class="tip2"><i></i>请输入校验码</p>
				</div>
				<div class="hqyzm">
					<a class="yzm off" href="javascript:;" id="yanzhenma">获取校验码</a>
					<a class="yzmTime" href="javascript:;"><i>59</i>秒后重新获取</a>
				</div>
				<!-- 输入密码 -->
				<div class="pwd">
					<i></i>
					<input type="password" name="password" id="pass" placeholder="密码">

					<p class="tip"><i></i>请输入密码</p>
				</div>
				<div class="pwd">
					<i></i>
					<input type="password" name="password" id="pass" placeholder="密码">

					<p class="tip"><i></i>请再次输入密码</p>
				</div>
				<a class="btn" href="javascript:void(0)" id="subbtn1">确认注册</a>
			</form>
		</div>

	</div>
<router-view/>
    </div>
</template>
<script>
export default {
   created(){
        document.title=this.$route.meta.title
    } 
}
</script>
<style>

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

.count > li {
  flex: 1;
  /* width: 40%; */
  height: 30px;
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
  background: url(images/loginIcon.png) no-repeat;
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

.verify {
  border: none;
}
.identify {
  width: 54%;
  height: 0;
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
  background: url(images/ref.png) no-repeat;
  background-size: 21px 24px;
  margin-top: 8px;
}
.identify {
  height: 0.02rem;
  border-radius: 3px;
  margin-bottom: 38px;
  position: relative;
  margin-right: 0.2rem
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
