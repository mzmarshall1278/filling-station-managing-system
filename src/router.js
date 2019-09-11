import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import CreateAccount from './views/CreateAccount'
import Pumps from './views/Pumps'
import Head from './views/Head'
import Staffs from './views/Staffs'
import SingleStaff from './views/SingleStaff'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/pumps',
      name: 'pumps',
      component: Pumps,
    },
    {
      path: '/pumps/head/:id/:name',
      name: 'head',
      component: Head,
      props : true
    },
    {
      path: '/staffs',
      name: 'staff',
      component: Staffs,
    },
    {
      path: '/staffs/:id',
      name: 'single-staff',
      component: SingleStaff,
      props : true
    },
    
    {
      path: '/auth/createAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
