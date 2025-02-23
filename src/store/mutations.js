export default {
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  clearAuth(state) {
    state.user = null
    state.token = null
    localStorage.removeItem('token')
  },
}
