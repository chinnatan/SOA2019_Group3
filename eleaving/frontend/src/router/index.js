import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Selection from '@/components/Selection'
import Status from '@/components/Status'
import Profile from '@/components/Profile'
import Leave from '@/components/Leave'
import Notfound from '@/components/Notfound'
import Certificate from '@/components/Certificate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home
    },
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
    {
      path: '/certificate',
      name: 'Certificate',
      component: Certificate
    },
    {
      path: '*',
      name: 'Notfound',
      component: Notfound
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})
