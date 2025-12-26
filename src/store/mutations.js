export default {
  setLoaded(state, loaded) {
    state.loaded = loaded
  },
  setUser(state, user) {
    state.user = user
  },
  clearAuth(state) {
    state.user = null
    localStorage.removeItem('token')
  },
  setAdminSidebarVisible(state, visible) {
    state.adminSidebarVisible = visible
  },
  setShowReadMore(state, show) {
    state.showReadMore = show
  },
}
