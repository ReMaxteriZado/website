import api, { setAuthorizationToken } from '@/configuration/axios'
import router from '@/router'

export default {
  // eslint-disable-next-line no-empty-pattern
  async login({}, credentials) {
    const response = await api.post('login', credentials)

    if (response.status == 200) {
      localStorage.setItem('token', response.data.token)
      setAuthorizationToken()
    }
  },
  async logout({ commit }) {
    await api.post('logout', {})
    commit('clearAuth')

    router.push({ name: 'Login' })
  },
  async getUser({ commit, dispatch }) {
    try {
      const response = await api.get('user')

      if (response.status == 200) {
        commit('setUser', response.data)
      } else {
        dispatch('logout')
      }
    } catch (error) {
      console.error(error)
      dispatch('logout')
    }
  },
}

export { setAuthorizationToken }
