export default{
    path:"/home/:text",
    component:()=>import("views/home"),
    name:"home",
    meta:{
        title: "首页",
        tabBar: true      
    }
}
