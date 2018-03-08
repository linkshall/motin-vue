import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/page/index'],resolve)
import Home from '@/page/Home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home',
      component:Index,
      children:[
        {path:'home',component:Home}
      ]
    }
  ]
})
