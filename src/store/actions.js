import api from '@/configuration/axios'
import router from '@/router'

export default {
  async logout({ commit }) {
    await api.post('logout')

    commit('clearAuth')
    router.push({ name: 'Login' })
  },
  async getUser() {
    try {
      return await api.get('user')
    } catch (error) {
      console.error(error)
    }
  },
  mustShrinkAdminView({ state }) {
    // Check if the width of the window is less than 992px
    if (window.innerWidth < 992) {
      state.shrinkAdminView = true
    }
  },
}
