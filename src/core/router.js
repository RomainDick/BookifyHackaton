import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/features/${view}/Index.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('home')
    },
    {
      path: '/account',
      name: 'account',
      component: loadView('account')
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('login')
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: loadView('addProduct')
    },
    {
      path: '/items',
      name: 'items',
      component: loadView('items')
    }
  ]
})
