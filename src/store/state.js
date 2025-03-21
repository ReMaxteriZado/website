// Declare state from vuex
export default {
  loaded: false,
  user: null,
  token: localStorage.getItem('token') || null,
  shrinkAdminView: false,
  adminSidebarVisible: false,
}
