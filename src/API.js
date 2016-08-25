const axios = require('axios');
import  ServerActions from './actions/ServerActions';

console.log('server actions ', ServerActions);
const API = {
  getUsers() {
    axios.get('/api/people')
      .then(res => res.data)
      .then(users => ServerActions.getUsers(users))
      .catch(console.error)
  },

  createUser(user) {
    axios.post('/api/people', user)
      .then(res => res.data)
      .then(user => ServerActions.getOneUser(user))
      .catch(console.error)
  },

  getAnimals() {
    axios.get('/api/animals')
      .then(res => res.data)
      .then(animals => ServerActions.getAnimals(animals))
      .catch(console.error)
  },

  createAnimal(obj) {
    axios.post('/api/animals', obj)
      .then(res => res.data)
      .then(animal => ServerActions.createAnimal(animal))
      .catch(console.error)
  },

  deleteAnimal(id, obj) {
    axios.delete('/api/animals/' + id)
      .then(res => axios.get('/api/animals'))
      .then(res => res.data)
      .then(animals => ServerActions.getAnimals(animals))
      .catch(console.error)
  },

  updateAnimal(id, obj) {
    axios.put('/api/animals/' + id, obj)
      .then(res => res.data)
      .then(animals => ServerActions.getAnimals(animals))
      .catch(console.error)
  },

  adopt(personId, animalId) {
    axios.put('/api/people/adopt/' + personId + '/addPet/' + animalId)
      .then(res => res.data)
      .then((user) => {
        return axios.get('/api/people/' + user._id)
      })
      .then(res => res.data)
      .then (user => {
        ServerActions.adopt(user);
        return axios.get('/api/animals')
      })
      .then(res => res.data)
      .then(animals => ServerActions.getAnimals(animals))
      .catch(console.error)
  }
}
export default API;