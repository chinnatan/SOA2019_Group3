import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Selection from '@/components/Selection'
import Status from '@/components/Status'
import Profile from '@/components/Profile'
import Leave from '@/components/Leave'
import Notfound from '@/components/Notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/selection',
      name: 'Selection',
      component: Selection
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/leave',
      name: 'Leave',
      component: Leave
    },
    { path: '*', 
      name: 'Notfound',
      component: Notfound
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})
