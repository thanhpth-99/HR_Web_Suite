import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

const permiseURL = ['/', '/pages/login', '/pages/register']

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const isAuthenticated = !!authStore.token
    if (!permiseURL.includes(to.path) && !isAuthenticated) {
        next('/page/login')
    } else {
        next()
    }

    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'HRM'
    }
    next()
})

export default router
