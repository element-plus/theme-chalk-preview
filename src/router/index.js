import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/zh-CN',
    name: 'home'
  },
  {
    path: '/zh-CN',
    name: 'cn',
    component: () => import(/* webpackChunkName: "layout" */ '../App.vue')
  },
  {
    path: '/en-US',
    name: 'en',
    component: () => import(/* webpackChunkName: "layout" */ '../App.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

// config router
export function setupRouter (app) {
  app.use(router)
}