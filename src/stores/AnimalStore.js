import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events'

let _pets = [];
class AnimalStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action =>{
      switch(action.type) {
        case 'RECEIVE_PETS':
          _pets = action.animals;
          this.emit('CHANGE')
          break;
        case 'RECEIVE_ONE_PET': 
          _pets.push(action.animal)
          this.emit('CHANGE')
          break;
      }
    })
  }

  startListening(cb) {
    this.addListener('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _pets;
  }
}

export default new AnimalStore();