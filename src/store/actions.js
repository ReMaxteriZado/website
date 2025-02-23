import axios from 'axios'
import router from '@/router'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

function getAuthorizationToken() {
  return `Bearer ${localStorage.getItem('token')}`
}

export default {
  getAuthorizationToken() {
    return localStorage.getItem('token')
  },
  async login({ commit }, credentials) {
    const { data, status } = await api.post('login', credentials)
    console.log('🚀 ~ actions.js:15 ~ status:', status)
    commit('setToken', data.token)
  },
  async logout({ commit }) {
    await api.post(
      'logout',
      {},
      {
        headers: { Authorization: getAuthorizationToken() },
      },
    )
    commit('clearAuth')

    router.push({ name: 'Login' })
  },
  async getUser({ commit }) {
    const response = await api.get('user', {
      headers: { Authorization: getAuthorizationToken() },
    })
    console.log('🚀 ~ actions.js:40 ~ response:', response)
    commit('setUser', response.data)
  },
}
