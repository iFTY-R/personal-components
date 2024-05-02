import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import asyncRoutes from '@/router/routers'

const isHistory = true

const router = createRouter({
  history: isHistory ? createWebHistory(import.meta.env.BASE_URL) : createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...asyncRoutes
  ]
})

export default router

router.beforeEach((to, from, next) => {
  // 解决非ASCII文件名的路由, 防止 404
  const decodedPath = decodeURIComponent(to.path)
  if (decodedPath !== to.path) {
    next(
      Object.assign({}, to, {
        fullPath: decodeURIComponent(to.fullPath),
        path: decodedPath
      })
    )
  } else {
    next()
  }
})
