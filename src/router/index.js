import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require(['../views/Home.vue'], resolve)

const router = new Router({
  routes: [{
    path: '/',
    component: Home
  }]
})

export default router
