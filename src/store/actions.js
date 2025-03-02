import api from '@/configuration/axios'
import router from '@/router'

export default {
  async logout({ commit }, tokenExpired) {
    if (!tokenExpired) {
      await api.post('logout', {})
    }
    commit('clearAuth')

    router.push({ name: 'Login' })
  },
  async getUser({ commit, dispatch }) {
    try {
      const response = await api.get('user')

      if (response.status == 200) {
        commit('setUser', response.data)
      } else {
        dispatch('logout', false)
      }
    } catch (error) {
      console.error(error)
      dispatch('logout', true)
    }
  },
  mustShrinkAdminView({ state }) {
    // Check if the width of the window is less than 992px
    if (window.innerWidth < 992) {
      state.shrinkAdminView = true
    }
  },
}
