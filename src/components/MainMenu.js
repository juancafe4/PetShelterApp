import React from 'react';
import PersonStore from '../stores/PersonStore';
import PersonActions from '../actions/PersonActions';
import {Button} from 'react-bootstrap';
import AddPet from './AddPet';
import DisplayAnimals from './DisplayAnimals'
import {Link} from 'react-router'
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
        let addPet = null;
        let recently = null;
        let isAdmin = false;

        if (this.state.user.name === 'admin') {
          addPet = <AddPet />
          isAdmin = true;
        }
        else {
          recently = <Link to={'/recently/' + this.state.user._id} > <Button  style={{float: 'right'}} bsStyle="success">Recently Adopted Pets</Button> </Link>
        }
        return (
           <div className='container'>
            {addPet}
            {recently}
            <h4 className="centered">Name: {name}</h4>
            <h4 className="centered">Email: {email}</h4>
            <br/><br/>
            <DisplayAnimals isAdmin={isAdmin}/>
          </div>
        )
      }
      else 
        return <div className='container'>Loading...</div>
    }
}

export default MainMenu;
