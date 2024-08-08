import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
import Layout from '@/views/Layout/index'
// import { ElMessage } 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    }
  ]
})

// 登录访问拦截
// router.beforeEach((to) => {
//   const userStore = useUserStore()
//   if (!userStore.token && to.path !== '/login') {
//     ElMessage.error('请先完成登录')
//     return '/login'
//   }
//   return true
// })

export default router
