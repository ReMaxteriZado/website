export default {
  setUser(state, user) {
    state.user = user
  },
  clearAuth(state) {
    state.user = null
    localStorage.removeItem('token')
  },
}
