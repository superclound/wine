export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list" ,
    meta:{
        tabBar:true,
        title:"列表页",       
    }, 
    // children:[
    //     {
    //             path: "detail",
    //             component: () => import("views/detail"),
    //             // component:Detail,
    //             name: "detail",
    //             meta: {
    //                 tabBar:false,       
    //             }
    //     }
    // ]
    // children:[
    //     {
    //         path:"detail",
    //         component:()=>import("views/detail"),
    //         name:"detail",
    //         meta:{
    //             tabBar:true,
    //             auth:false
    //         },
    //     },
    // ]
}
