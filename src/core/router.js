import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Import feature for route 
import Home from '@/features/home/Index.vue'
import About from '@/features/about/Index.vue'
import Account from '@/features/account/Account.vue'
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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct
    }
  ]
})
