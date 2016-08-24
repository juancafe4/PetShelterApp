const axios = require('axios');
import  ServerActions from './actions/ServerActions';

console.log('server actions ', ServerActions);
const API = {
  getUsers() {
    axios.get('api/people')
      .then(res => res.data)
      .then(users => ServerActions.getUsers(users))
      .catch(console.error)
  },

  createUser(user) {
    axios.post('api/people', user)
      .then(res => res.data)
      .then(user => ServerActions.getOneUser(user))
      .catch(console.error)
  },

  getAnimals() {
    axios.get('api/animals')
      .then(res => res.data)
      .then(animals => ServerActions.getAnimals(animals))
      .catch(console.error)
  }
}
export default API;