import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/home/Home')
    },
    {
      path: '/expenses-list',
      name: 'expenses-list',
      meta: {
        icon: 'list-ul', title: 'Lista de Gastos'
      },
      component: () => import(/* webpackChunkName: "lista-gastos" */ './pages/expenses-list/ExpensesList')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login'
      },
      component: () => import(/* webpackChunkName: "login" */ './pages/login/Login')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-template-curly-in-string
  document.title = to.meta.title + ' - Expenses'

  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
