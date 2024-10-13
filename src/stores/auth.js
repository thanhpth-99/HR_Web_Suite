import router from '@/router'
import { defineStore } from 'pinia'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    //const token = ref(null)
    const token = ref('aaaaa')
    let inactivityTimer

    const setToken = (newToken) => {
        token.value = newToken
        setupInactivityTimer()
    }

    const clearToken = () => {
        token.value = null
        clearTimeout(inactivityTimer)
    }

    const setupInactivityTimer = () => {
        inactivityTimer = setTimeout(() => {
            clearToken()
            Swal.fire({
                title: t('auth.time_out.title'),
                text: t('auth.time_out.text'),
                icon: 'warning',
            })
            router.push('/pages/login')
        }, 300000)
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

    return { token, setToken, clearToken }
})
