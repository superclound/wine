<template>
    <div>
        <Top/>
        <div class="main">
            <City/>
        </div>
    <!-- <a-layout-header>Header</a-layout-header> -->
    </div>
</template>
<script>
import City from "../../components/city";

export default {
    name:"Home",
    created(){
        // document.title=this.$route.meta.title
    },
     components:{
    City
  },
}
</script>
<style>
.main{
     width: 100%;
     position: absolute;
     top: 0.4rem;
     overflow-y: auto;        
     padding:0 0.3rem;
     /* padding-top: 0.15rem; */
     /* margin: 0.4rem auto 0; */
     background: #FFFFFF;
     bottom: 0.4rem;
     height: auto
}
</style>
