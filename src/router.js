/* global Vue */
import Router from 'vue-router'

import home from '@/views/home/index.vue'
import me from '@/views/me/index.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      // component: () => import('@/views/home/index.vue'),
      component: home,
      children: [
        {
          path: 'me',
          // component: () => import('@/views/me/index.vue')
          component: me
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      // component: () => import('@/views/me/index.vue')
      component: me
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
