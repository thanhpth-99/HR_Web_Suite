import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

const permitURL = ['/', '/pages/login', '/pages/register']

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const isAuthenticated = !!authStore.accessToken
    if (!permitURL.includes(to.path) && !isAuthenticated) {
        next('/pages/login')
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
