import React from 'react';
import PersonStore from '../stores/PersonStore';
import PersonActions from '../actions/PersonActions';

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
      console.log('main menu ', this.state.user)
      return <div>MainMenu</div>;
    }
}

export default MainMenu;
