<template>

    <div >
       <Top/>
        <div class="content">
        
        </div>
    <!-- <a-layout-header>Header</a-layout-header> -->
    </div>
</template>
<script>
export default {
    name:"carts",
    created(){
        document.title = this.$route.meta.title
    }
}
</script>
<style>
.content{
    width: 100%;
     position: absolute;
     top: 0.4rem;
     overflow-y: auto;        
     padding:0 0.3rem;
     /* padding-top: 0.15rem; */
     /* margin: 0.4rem auto 0; */
     background: #FFFFFF;
     bottom: 0.4rem
}
</style>
