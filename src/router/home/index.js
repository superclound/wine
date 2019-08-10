export default{
    path:"/home/:text",
    // :text 是个参数 跳到home页面的 路径要加个参
    component:()=>import("views/home"),
    name:"home",
    meta:{
        title: "首页",
        tabBar: true      
    }
}
