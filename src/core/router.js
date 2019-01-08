import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Import feature for route 
// import Home       from '@/features/home/Index.vue'
// import Login      from '@/features/login/Index.vue'
// import Account    from '@/features/account/Index.vue'
// import AddProduct from '@/features/addProduct/Index.vue'
// import Items      from '@/features/items/Index.vue'


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
      // component: Home
    },
    {
      path: '/account',
      name: 'account',
      component: loadView('account')
      // component: Account
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('login')
      // component: Login
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: loadView('addProduct')
      // component: AddProduct
    },
    {
      path: '/items',
      name: 'items',
      component: loadView('items')
      // component: Items
    }
  ]
})
