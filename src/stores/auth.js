import { defineStore } from 'pinia'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref(sessionStorage.getItem('accessToken') || null)
    const refreshToken = ref(sessionStorage.getItem('refreshToken') || null)
    let inactivityTimer

    const TIMER_ACTIVITY = 600000 // 10 minutes

    const setToken = (newAccessToken, newRefreshToken) => {
        accessToken.value = newAccessToken
        refreshToken.value = newRefreshToken

        sessionStorage.setItem('accessToken', newAccessToken)
        sessionStorage.setItem('refreshToken', newRefreshToken)

        setupInactivityTimer()
    }

    const clearToken = () => {
        accessToken.value = null
        refreshToken.value = null

        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')

        clearTimeout(inactivityTimer)
    }

    const setupInactivityTimer = () => {
        inactivityTimer = setTimeout(() => {
            clearToken()
            router.push('/pages/login')
        }, TIMER_ACTIVITY)
    }

    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer)
        setupInactivityTimer()
    }

    onMounted(() => {
        window.addEventListener('mousemove', resetInactivityTimer)
        window.addEventListener('keypress', resetInactivityTimer)
    })

    onBeforeUnmount(() => {
        clearTimeout(inactivityTimer)
        window.removeEventListener('mousemove', resetInactivityTimer)
        window.removeEventListener('keypress', resetInactivityTimer)
    })

    return { accessToken, refreshToken, setToken, clearToken }
})