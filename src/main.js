import Vue from 'vue'
import App from './App.vue'
import VueTouch from "vue-touch"
import router from 'router'
import store from "store"
import "./common/components/index.js"
import observer from "./observer";
Vue.prototype.$observer = observer

Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }
  next()
})

