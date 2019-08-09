
export default{
    path:"/login/:text",
    component:()=>import("views/login"),
    name:"login",
    meta:{
        tabBar:false,
        auth:false,
        title:"登录"
    }, 
    
}
