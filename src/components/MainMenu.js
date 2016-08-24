import React from 'react';
import PersonStore from '../stores/PersonStore';
import PersonActions from '../actions/PersonActions';
import {Button} from 'react-bootstrap';
import AddPet from './AddPet';

class MainMenu extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user: PersonStore.getOneUser()
      }

      this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
      PersonStore.startListenning(this._onChange)
    }

    componentWillUnmount() {
      PersonStore.stopListenning(this._onChange)
    }
    _onChange() {
      this.setState({user: PersonStore.getOneUser()})
    }
    render() {
      if(this.state.user.name) {
        let {name, email} = this.state.user
        let addPet = null
        if (this.state.user.name === 'admin') 
          addPet = <AddPet />
        return (
           <div className='container'>
            {addPet}
            <h4 className="centered">Name: {name}</h4>
            <h4 className="centered">Email: {email}</h4>
          </div>
        )
      }
      else 
        return <div className='container'>Loading...</div>
    }
}

export default MainMenu;
