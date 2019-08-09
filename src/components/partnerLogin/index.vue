<template>
<div class="parlogin">
    <div class="partnerLogin">
              <div class="title">
                <div class="line"></div>
                <div class="partner">合作伙伴登录</div>
              </div>
              <ul class="choose clearfix">
                <li>
                  <a href="https://mlogin.jiuxian.com/unionLogin/qqlogin" class="qq"></a>
                </li>
                <li>
                  <a href="https://mlogin.jiuxian.com/unionLogin/alipay" class="alipay"></a>
                </li>
              </ul>
    </div>
</div>    
</template>
<script>
export default {
    
}
</script>
<style>
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

</style>
