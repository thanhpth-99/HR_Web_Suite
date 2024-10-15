import axios from 'axios'

const https = axios.create({
    baseURL: 'http://localhost:1687/api/v1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

https.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

https.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    },
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
