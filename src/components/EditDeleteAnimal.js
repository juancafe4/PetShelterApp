import React from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import AnimalActions from '../actions/AnimalActions'
class EditDeleteAnimal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          showModal: false,
          img: this.props.animal.img,
          age: this.props.animal.age,
          name: this.props.animal.name,
          type:this.props.animal.type
        }


        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.editPet = this.editPet.bind(this);
        this.deletePet = this.deletePet.bind(this);

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
    editPet() {
      let {name, type, age, img} = this.state
      
      AnimalActions.updateAnimal(this.props.animal._id, {name, type, age, img})
      this.close();
    }

    deletePet() {
      AnimalActions.deleteAnimal(this.props.animal._id);
      this.close();
    }
    render() {
       return (
          <div>
            <Button bsStyle="primary" onClick={this.open}>Edit</Button>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Edit or Delete Pet</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup>
                  <FormControl onChange={this.changeName} value={this.state.name} type="text" placeholder="Name" />
                  <FormControl onChange={this.changeType} value={this.state.type} type="text" placeholder="Type" />
                  <FormControl onChange={this.changeAge} value={this.state.age} type="number" placeholder="Age" />
                  <FormControl onChange={this.changeImg} value={this.state.img} type="text" placeholder="Image" />
                </FormGroup>
                <Button onClick={this.deletePet} bsStyle="danger" type="submit">Delete Pet</Button>
                <Button onClick={this.editPet}type="submit">Edit Pet</Button>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}

export default EditDeleteAnimal;
