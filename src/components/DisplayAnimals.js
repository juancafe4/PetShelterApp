import AnimalActions from '../actions/AnimalActions'
import AnimalStore from '../stores/AnimalStore'
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';
import React from 'react';
import EditDeleteAnimal from './EditDeleteAnimal';
import PersonActions from '../actions/PersonActions';
import PersonStore from '../stores/PersonStore';

console.log(EditDeleteAnimal)
class DisplayAnimals extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          animals : AnimalStore.getAll() 
        }

        this._onChangeAnimal = this._onChangeAnimal.bind(this);
        this.adopt = this.adopt.bind(this);
    }

    componentDidMount() {
      AnimalActions.getAnimals();
      AnimalStore.startListening(this._onChangeAnimal);
    }

    componentWillUnmount() {
      AnimalStore.stopListening(this._onChangeAnimal);
    }

    _onChangeAnimal() {
      this.setState ({
        animals: AnimalStore.getAll()
      })
    }

    adopt(animalId) {
      PersonActions.adopt(PersonStore.getOneUser()._id, animalId);
    }
    render() {
       
        if (this.state.animals.length) {
          let petsInAdoption = this.state.animals.filter(animal => !animal.adopted);
          
          let thumbnails = petsInAdoption.map(animal => {
            let actionBtn = <Button onClick={this.adopt.bind(null, animal._id)} bsStyle="success">Adopt</Button>
            if(this.props.isAdmin) 
              actionBtn = <EditDeleteAnimal animal={animal}/>
            return (
              <Col xs={6} md={4} key={animal._id}>
                <Thumbnail src={animal.img}>
                  <h3>Name: {animal.name}</h3>
                  <p>Type: {animal.type}</p>
                  <p>Age: {animal.age}</p>
                  {actionBtn}
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
        else return <div>Loading List of Pets...</div>;
    }
}

export default DisplayAnimals;
