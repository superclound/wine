import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import kinds from "./kinds";
import carts from "./carts";
import login from "./login";
import list from "./list";
import register from "./register";
import find from "./find";
import detail from "./detail"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
       home ,
       list,
       kinds,
       carts,
       login,
       register,
       find,
       detail,
        {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            path:"/",
            redirect:"/home/首页"
        }
    ]
})
