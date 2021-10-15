import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/zh-CN',
    name: 'home',
  },
  {
    path: '/zh-CN',
    name: 'cn',
    component: () => import('../App.vue'),
  },
  {
    path: '/en-US',
    name: 'en',
    component: () => import('../App.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export const setupRouter = (app: App) => app.use(router)
