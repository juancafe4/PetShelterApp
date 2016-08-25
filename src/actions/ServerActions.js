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
  },
  createAnimal(animal) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_PET',
      animal
    })
  },

  adopt(user) {
    AppDispatcher.dispatch({
      type: 'ADOPT',
      user
    })
  }
}

export default ServerActions;