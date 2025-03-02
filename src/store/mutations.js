export default {
  setUser(state, user) {
    state.user = user
  },
  clearAuth(state) {
    state.user = null
    localStorage.removeItem('token')
  },
  setAdminSidebarVisible(state, visible) {
    console.log('🚀 ~ mutations.js:10 ~ visible:', visible)
    state.adminSidebarVisible = visible
  },
}
