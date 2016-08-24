const axios = require('axios');

const API = {
  getUsers() {
    axios.get('/people')
      .then(res => res.data)
      .then(users => ServerActions.getUsers(users))
      .catch(console.error)
  }
}

export default API;