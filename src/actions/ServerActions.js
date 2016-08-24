import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  getUsers(users) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_USERS',
      users
    })
  },
  getOneUser(user) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_USER',
      user
    })
  },
  getAnimals(animals) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PETS',
      animals
    })
  }
}

export default ServerActions;