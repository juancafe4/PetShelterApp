import React from 'react';
import NewUser from './NewUser'
import {Jumbotron , Button, FormGroup, FormControl} from 'react-bootstrap'
import PersonStore from '../stores/PersonStore'
import PersonActions from '../actions/PersonActions'
import {browserHistory} from 'react-router';
class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          users: [],
          email: ''
        }
        this.changeEmail = this.changeEmail.bind(this)
        this._onChange = this._onChange.bind(this);
        this.login = this.login.bind(this);
    }
    changeEmail(e) {
      this.setState({email: e.target.value} )
    }

    componentDidMount() {
      PersonActions.getUsers();
      PersonStore.startListenning(this._onChange)
    }

    componentWillUnmount() {
      PersonStore.stopListenning(this._onChange)
    }
    _onChange() {
      this.setState({users: PersonStore.getUsers()})
    }
    login(e) {
      let {email} = this.state
      
      if (email) {
        let confirm = this.state.users.filter(user => user.email === this.state.email)
        if(confirm.length) {
          PersonStore.setOneUser(confirm[0])
          browserHistory.push('/mainMenu')
        }
        else {
          alert('Wrong email address')
        }
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
              <NewUser/>
              </div>
            </div>
          </Jumbotron>
        )

    }
}

export default Login;
