import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Selection from '@/components/Selection'
import Status from '@/components/Status'

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
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})
