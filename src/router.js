import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import CreateAccount from './views/CreateAccount'
import Pumps from './views/Pumps'
import Head from './views/Head'
import Staffs from './views/Staffs'
import SingleStaff from './views/SingleStaff'
import Sessions from './views/Sessions'
import NewStaff from './views/NewStaff'
import Operation from './views/Operation'
import Profile from './views/Profile'

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
      path: '/staffs/new',
      name: 'new-staff',
      component: NewStaff
    },
    {
      path: '/staffs/:id',
      name: 'single-staff',
      component: SingleStaff,
      props : true
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Sessions,
    },
    {
      path: '/operation',
      name: 'operation',
      component: Operation,
    },
    {
      path: '/auth/createAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
