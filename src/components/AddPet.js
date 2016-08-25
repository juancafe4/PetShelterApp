import React from 'react';
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap';
import AnimalActions from '../actions/AnimalActions'

class AddPet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          showModal: false,
          img: '',
          age: 0,
          name: '',
          type:''
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.addPet = this.addPet.bind(this);

        this.changeName = this.changeName.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeImg = this.changeImg.bind(this);
    }

    changeName(e){
      this.setState({name: e.target.value})
    }

    changeType(e){
      this.setState({type: e.target.value})
    }

    changeAge(e){
      this.setState({age: e.target.value})
    }

    changeImg(e){
      this.setState({img: e.target.value})
    }
    close() {
    this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }
    addPet() {
      let {name, type, age, img} = this.state
      if (name && type && age && img) {
        AnimalActions.createAnimal({name, type, age, img})
        this.setState({
          img: '',
          age: 0,
          name: '',
          type:''
        });
        this.close();
      }
    }
    render() {
        let btnStyle = {
          float: 'right'
        };
        return (
          <div>
            <Button bsStyle="primary" style={btnStyle} onClick={this.open}>+</Button>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Enter Pet Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup>
                  <FormControl onChange={this.changeName} value={this.state.name} type="text" placeholder="Name" />
                  <FormControl onChange={this.changeType} value={this.state.type} type="text" placeholder="Type" />
                  <FormControl onChange={this.changeAge} value={this.state.age} type="number" placeholder="Age" />
                  <FormControl onChange={this.changeImg} value={this.state.img} type="text" placeholder="Image" />
                </FormGroup>
                <Button onClick={this.addPet}type="submit">Submit</Button>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}

export default AddPet;
