import React from 'react';

import PersonStore from '../stores/PersonStore';
import AnimalStore from '../stores/AnimalStore';
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';
import EditDeleteAnimal from './EditDeleteAnimal';

class RecentlyAdopted extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          user: PersonStore.getOneUser(),
          pets: PersonStore.getOneUser().pets
        }

        this._onChangeAnimal = this._onChangeAnimal.bind(this);
        // this._onChangePerson
    }

    componentDidMount() {
      AnimalStore.startListening(this._onChangeAnimal);
    }

    componentWillUnmount() {
      AnimalStore.stopListening(this._onChangeAnimal);
    }

    _onChangeAnimal() {
      let newPets = []
      AnimalStore.getAll().forEach(animal => {
    
       this.state.pets.forEach(pet => {
          if (pet._id === animal._id) {
            pet = animal
            newPets.push(pet)
          }
        })
      });
      console.log(newPets)
      this.setState ({
        pets: newPets
      })
    }
    render() {
        if(this.state.pets.length) {
            let thumbnails = this.state.pets.map((animal, index) => {
              return (
                <Col xs={6} md={4} key={index + 1}>
                  <Thumbnail src={animal.img}>
                    <h3>Name: {animal.name}</h3>
                    <p>Type: {animal.type}</p>
                    <p>Age: {animal.age}</p>
                    <EditDeleteAnimal animal={animal}/>
                  </Thumbnail>
                </Col>
              )
            })

          return (
            <Row>
              {thumbnails}
            </Row>
          )
        }
        
        else return <div>RecentlyAdopted</div>;
    }
}

export default RecentlyAdopted;
