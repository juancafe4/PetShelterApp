import API from '../API';

const AnimalActions = {
  getAnimals() {
    API.getAnimals();
  },
  createAnimal(obj) {
    API.createAnimal(obj)
  },
  deleteAnimal(id) {
    API.deleteAnimal(id)
  },
  updateAnimal(id ,obj) {
    API.updateAnimal(id, obj);
  }
}

export default AnimalActions;