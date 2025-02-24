import api from '@/configuration/axios'
import store from '@/store'

async function getUsers() {
  try {
    const response = await api.get('/users')
    console.log('🚀 ~ users.js:13 ~ store:', store)
    console.log('🚀 ~ users.js:14 ~ store._actions:', store._actions)
    store._actions.showToast
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

export { getUsers }
