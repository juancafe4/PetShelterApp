import API from '../API'

const PersonActions = {
  getUsers() {
    API.getUsers()
  },
  createUser(user) {
    API.createUser(user)
  }
}

export default PersonActions