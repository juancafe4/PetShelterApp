import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  getUsers(users) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_USERS'
      users
    })
  }
}

export default ServerActions;