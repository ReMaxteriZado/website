import api from '@/configuration/axios'

// Get users
async function getUsers(params = null) {
  try {
    const response = await api.post('/paginated-users', {
      filter: params?.filter,
      pagination: params?.pagination,
    })

    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

// Create user
async function createUser(user) {
  try {
    const response = await api.post('/users', user)
    return response
  } catch (error) {
    return error.response
  }
}

// Edit user
async function editUser(user) {
  try {
    const response = await api.put(`/users/${user.id}`, user)
    return response
  } catch (error) {
    return error.response
  }
}

// Delete user
async function deleteUser(user) {
  try {
    const response = await api.delete(`/users/${user.id}`)
    return response
  } catch (error) {
    return error.response
  }
}

export { getUsers, createUser, editUser, deleteUser }
