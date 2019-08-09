
export default {
    path: "/detail/:proId/:text",
    component: () => import("views/detail"),
    name: "detail",
    meta: {
        title: "详情页",
        tabBar:false,       
    }
}