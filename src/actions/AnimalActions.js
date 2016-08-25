import API from '../API';

const AnimalActions = {
  getAnimals() {
    API.getAnimals();
  },
  createAnimal(obj) {
    console.log('action ', obj)
    API.createAnimal(obj)
  }
}

export default AnimalActions;