import Top from "../top"
import Vue from "vue"
import BSroll from "../../lib/bscroll"
// console.log(Top.name)
Vue.component(Top.name,Top)
Vue.component(BSroll.name,BSroll)

// 封装时的名字应该和引入时的名字和注册时的名字一致