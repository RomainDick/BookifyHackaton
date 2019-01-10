import Vue        from 'vue'
import Router     from 'vue-router'
import { store }  from '../store/store';

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/features/${view}/Index.vue`)
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.getUserLogin) {
    next()
    return
  }
  next('/login')
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
      path: '/login',
      name: 'login',
      component: loadView('login')
    },
    {
      path: '/search',
      name: 'search',
      component: loadView('search')
    },
    {
      path: '/all',
      name: 'all',
      component: loadView('all')
    },
    {
      path: '/items/:id',
      name: 'productPage',
      component: loadView('productPage')
    },
    {
      path: '/account',
      name: 'account',
      component: loadView('account'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: loadView('addProduct'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/items',
      name: 'items',
      component: loadView('items'),
      beforeEnter: ifAuthenticated
    },
    { 
      path: '/404', 
      component: loadView('NotFound')
    }, 
    { 
      path: '*', 
      redirect: '/404' 
    },  
  ]
})
