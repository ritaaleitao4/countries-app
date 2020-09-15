import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/pages/Homepage.vue'),
    }, {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/pages/Details.vue'),
    },
  ],
})
