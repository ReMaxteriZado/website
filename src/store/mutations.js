export default {
  setUser(state, user) {
    console.log('🚀 ~ mutations.js:3 ~ user:', user)
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
