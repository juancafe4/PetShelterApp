import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events'

let _pets = [];
class AnimalStore() extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action =>{
      switch(action.type) {
        case 'RECEIVE_PETS':
          _pets = action.animals;
          this.emit('CHANGE')
          break;
      }
    })
  }

  startListening(cb) {
    this.startListening(cb);
  }

  stopListening(cb) {
    this.removeListener(cb);
  }
  
  getAll() {
    return _pets;
  }
}