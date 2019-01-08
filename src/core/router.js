import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Import feature for route 
import Home from '@/features/home/Index.vue'
import Account from '@/features/account/Account.vue'
import Login from '@/features/login/Index.vue'
import AddProduct from '@/features/addProduct/Index.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct
    }
  ]
})
