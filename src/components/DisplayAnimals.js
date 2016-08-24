import AnimalActions from '../actions/AnimalActions'
import AnimalStore from '../stores/AnimalStore'

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
        return <div>DisplayAnimals</div>;
    }
}

export default DisplayAnimals;
