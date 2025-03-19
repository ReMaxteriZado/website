// Declare state from vuex
export default {
  user: null,
  token: localStorage.getItem('token') || null,
  shrinkAdminView: false,
  isTouchableDevice: false,
  adminSidebarVisible: false,
}
