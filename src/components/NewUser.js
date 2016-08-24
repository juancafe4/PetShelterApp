import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap'
class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: ''
        }
    }
    render() {
        return (
          <form>
            <h3>Create A New Account</h3>
            <FormGroup>
              <FormControl type="text" value={this.state.name} placeholder="Enter Nmme" onChange={this.changeEmail}/>
            </FormGroup>
            <FormGroup>
              <FormControl type="email" value={this.state.email} placeholder="Enter Emaill" onChange={this.changeEmail}/>
            </FormGroup>
            <Button bsStyle="primary" onClick={this.restaurantValidation}>Log In</Button>
        </form>
      )
    }
}

export default NewUser;
