import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Selection from '@/components/Selection'
import Status from '@/components/Status'
import Profile from '@/components/Profile'
import Leave from '@/components/Leave'
import Notfound from '@/components/Notfound'
import Notpermission from '@/components/Notpermission'
import Certificate from '@/components/Certificate'
import VueRouter from 'vue-router';

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
      component: Selection,
      meta: {
        requireAuth: true,
        studentAuth: true,
        professorAuth: false
      }
    },
    {
      path: '/status',
      name: 'Status',
      component: Status,
      meta: {
        requireAuth: true,
        studentAuth: true,
        professorAuth: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requireAuth: true,
        studentAuth: false,
        professorAuth: false
      }
    },
    {
      path: '/leave',
      name: 'Leave',
      component: Leave,
      meta: {
        requireAuth: true,
        studentAuth: true,
        professorAuth: false
      }
    },
    {
      path: '/certificate',
      name: 'Certificate',
      component: Certificate,
      meta: {
        requireAuth: true,
        studentAuth: false,
        professorAuth: true
      }
    },
    { path: '*', 
      name: 'Notfound',
      component: Notfound
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})

// const routes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/selection',
//     name: 'Selection',
//     component: Selection,
//     meta: {
//       requireAuth: true,
//       studentAuth: true,
//       professorAuth: false
//     }
//   },
//   {
//     path: '/status',
//     name: 'Status',
//     component: Status,
//     meta: {
//       requireAuth: true,
//       studentAuth: true,
//       professorAuth: false
//     }
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: Profile,
//     meta: {
//       requireAuth: true,
//       studentAuth: false,
//       professorAuth: false
//     }
//   },
//   {
//     path: '/leave',
//     name: 'Leave',
//     component: Leave,
//     meta: {
//       requireAuth: true,
//       studentAuth: true,
//       professorAuth: false
//     }
//   },
//   {
//     path: '/certificate',
//     name: 'Certificate',
//     component: Certificate,
//     meta: {
//       requireAuth: true,
//       studentAuth: false,
//       professorAuth: true
//     }
//   },
//   {
//     path: '*',
//     name: 'Notfound',
//     component: Notfound
//   }
// ]

// const router = new Router({ routes, mode: 'history', linkActiveClass: "active" })

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     var authUser = JSON.parse(window.localStorage.getItem('account'))
//     if (!authUser) {
//       next({ name: 'Login' })
//     } else if (to.meta.professorAuth) {
//       if (authUser.account_tpye == 'Professor') {
//         next()
//       } else {
//         next('/selection')
//       }
//     } else if (to.meta.studentAuth) {
//       if (authUser.account_tpye == 'Student') {
//         next()
//       } else {
//         next('/certificate')
//       }
//     }
//   } else {
//     next()
//   }
// })

// export default router;
