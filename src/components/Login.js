import React from 'react';
import NewUser from './NewUser'
import {Jumbotron , Button, FormGroup, FormControl} from 'react-bootstrap'
import PersonStore from '../stores/PersonStore'

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          email:''
        }

        this.changeEmail = this.changeEmail.bind(this)
    }
    changeEmail(e) {
      this.setState({email: e.target.value} )
    }

    login(e) {
      let {email} = this.state
      if(email) {

      }
    }
    render() {
        return (
          <Jumbotron>
            <h1>Pet Adoption</h1>
            <p>Please join and adopt!</p>
            <div className="row">
              <div className="col-xs-4">
                <h3>Enter Email Address</h3>
                <FormGroup>
                  <FormControl type="email" value={this.state.email} placeholder="Enter Emaill" onChange={this.changeEmail}/>
                </FormGroup>

              <Button bsStyle="primary" onClick={this.login}>Log in</Button>


            </div>

            <div className="col-xs-1">
              <h3>or</h3>
            </div>
            <div className="col-xs-6">
              <NewUser />
              </div>
            </div>
          </Jumbotron>
        )

    }
}

export default Login;
