import axios from 'axios'
import { useAuthStore } from '../auth'


const url = [
    { dev: 'http://localhost:1688' },
    { prod: '' },
    { test: '' }
]

const env = [
    { 1: 'dev' },
    { 2: 'prop' },
    { 3: 'test' }
]
const environment = 1

const https = axios.create({
    baseURL: 'http://localhost:1688',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => { // Hàng chớ tiến trình 
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })

    failedQueue = []
}

https.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore()
        const token = authStore.accessToken
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

// Interceptor cho response để xử lý trường hợp access token hết hạn
https.interceptors.response.use(
    (response) => {
        return response.data
    },
    async (error) => {
        const authStore = useAuthStore()
        const originalRequest = error.config
        // Kiểm tra lỗi và status là 401 và chưa thử lại
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) { // Nếu đã thực hiện refresh token -> thực hiện lại các request trong hàng chờ
                try {
                    const token = await new Promise(function (resolve, reject) {
                        failedQueue.push({ resolve, reject })
                    })
                    originalRequest.headers.Authorization = 'Bearer ' + token
                    return await axios(originalRequest)
                } catch (err) {
                    return await Promise.reject(err)
                }
            }

            originalRequest._retry = true
            isRefreshing = true

            const refreshToken = authStore.refreshToken
            if (!refreshToken) {
                authStore.clearToken()
                router.push('/login')
                return Promise.reject(error)
            }

            return new Promise((resolve, reject) => {
                post('/api/v1/auth/refresh', { refreshToken: refreshToken })
                    .then(({ accessToken }) => {
                        authStore.setToken(accessToken, refreshToken)
                        https.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
                        originalRequest.headers.Authorization = 'Bearer ' + accessToken
                        processQueue(null, accessToken)
                        resolve(axios(originalRequest))
                    })
                    .catch(err => {
                        processQueue(err, null)
                        authStore.clearToken()
                        router.push('/login')
                        reject(err)
                    })
                    .finally(() => {
                        isRefreshing = false
                    })
            })
        }

        return Promise.reject(error)
    }
)

export const get = (url, params = {}) => {
    return https.get(url, { params })
}

export const post = (url, data) => {
    return https.post(url, data)
}

export const put = (url, data) => {
    return https.put(url, data)
}

export const del = (url) => {
    return https.delete(url)
}
