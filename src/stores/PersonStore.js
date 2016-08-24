import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events'

let _users = []
class PersonStore extends EventEmitter{
  constructor() {
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_USERS':
          _users = action.users
          this.emmit('CHANGE')
          break;
      }
    })
  }

  startListenning(cb) {
    this.addListener('CHANGE', cb);
  }

  stopListenning(cb) {
    this.removeListener('CHANGE', cb);
  }

  getUsers() {
    return _users;
  }
}

export default new PersonStore()