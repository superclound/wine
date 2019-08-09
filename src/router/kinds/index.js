export default{
    path:"/kinds/:text",
    component:()=>import("views/kinds"),
    name:"kinds",
    meta:{
        title: "分类",
        tabBar: true      
    }
}
