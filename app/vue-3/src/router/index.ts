import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import asyncRoutes from '@/router/routers'

// const PageDemo = {
//   path: '/demo',
//   name: 'demo',
//   component: () => import('@/views/PageDemo/index.vue')
// }
const isHistory = true

const router = createRouter({
  history: isHistory ? createWebHistory(import.meta.env.BASE_URL) : createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/NativeJs/DragAndDropDemo',
      name: 'NativeJsDragAndDropDemo',
      component: () => import('@/views/NativeJs/DragAndDropDemo.vue')
    },
    // PageDemo,
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
