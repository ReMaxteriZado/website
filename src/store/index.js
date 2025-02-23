import { createStore } from 'vuex'

// Import state file
import state from './state'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state,
  mutations,
  actions,
})
