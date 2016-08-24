import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import PersonStore from '../stores/PersonStore';
import PersonActions from '../actions/PersonActions';
import {browserHistory} from 'react-router';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          user: PersonStore.getOneUser()
        }

        this._onChange = this._onChange.bind(this)
        this.signup = this.signup.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }

    signup(e) {
      let {email, name} = this.state;

      if(email && name) {
        PersonActions.createUser({name, email});
        browserHistory.push('/mainMenu')
      }
           
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
    changeName(e) {
      this.setState({name: e.target.value})
    }
    changeEmail(e) {
      this.setState({email: e.target.value})
    }
    render() {

        return (
          <form>
            <h3>Create A New Account</h3>
            <FormGroup>
              <FormControl type="text" value={this.state.name} placeholder="Enter Name" onChange={this.changeName}/>
            </FormGroup>
            <FormGroup>
              <FormControl type="email" value={this.state.email} placeholder="Enter Emaill" onChange={this.changeEmail}/>
            </FormGroup>
            <Button bsStyle="primary" onClick={this.signup}>Sign Up</Button>
        </form>
      )
    }
}

export default NewUser;
