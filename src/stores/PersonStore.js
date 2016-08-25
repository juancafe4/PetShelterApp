import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';

let _users = [];
let _user = {};
class PersonStore extends EventEmitter{
  constructor() {
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_USERS':
          _users = action.users;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_USER':
          _users.push(action.user);
          _user = action.user;
          this.emit('CHANGE');
          break;
        case 'ADOPT':
          console.log('from the store', action.user)
          _user = action.user;
          this.emit('CHANGE');
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

  setOneUser(user) {
    _user = user;
  }
  getOneUser() {
    return _user;
  }
}

export default new PersonStore()