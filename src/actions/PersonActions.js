import API from '../API'

const PersonActions = {
  getUsers() {
    API.getUsers()
  },
  createUser(user) {
    API.createUser(user)
  },
  adopt(personId, animalId) {
    API.adopt(personId, animalId);
  }
}

export default PersonActions