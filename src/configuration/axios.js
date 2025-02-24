import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

function setAuthorizationToken() {
  const token = localStorage.getItem('token')

  if (token) {
    api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token') // Get token from localStorage (or Vuex/Pinia)
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
}

export { setAuthorizationToken }

export default api
