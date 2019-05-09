import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/all',
      alias:'/',
      name: 'all',
      component: () => import('./views/All.vue')
    },
    {
      path: '/active',
      name: 'active',
      component: () => import(/* webpackChunkName: "about" */ './views/Active.vue')
    },
    {
      path:'/comleted',
      name:'comleted',
      component: () => import('./views/Comleted.vue')
    }
  ],
  
})
