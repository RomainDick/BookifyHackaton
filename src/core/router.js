import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Import feature for route 
import Home from '../features/home/Home.vue'
import About from '../features/about/About.vue'


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
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
