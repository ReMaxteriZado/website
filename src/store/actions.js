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
    const { data } = await api.post('login', credentials)
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
    const { data } = await api.get('user', {
      headers: { Authorization: getAuthorizationToken() },
    })
    commit('setUser', data)
  },
}
