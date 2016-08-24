import AnimalActions from '../actions/AnimalActions'
import AnimalStore from '../stores/AnimalStore'
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';
import React from 'react';

class DisplayAnimals extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          animals : AnimalStore.getAll()
        }

        this._onChangeAnimal = this._onChangeAnimal.bind(this);
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
    render() {
        console.log('rendering at display animals ', this.state.animals)
        if (this.state.animals.length) {
          let petsInAdoption = this.state.animals.filter(animal => !animal.adopted);
          
          let actionBtn = <Button bsStyle="success">Adopt</Button>
          if(this.props.isAdmin) 
            actionBtn = <Button bsStyle="primary">Edit</Button>
          let thumbnails = petsInAdoption.map(animal => {
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
