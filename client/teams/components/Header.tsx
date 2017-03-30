import * as React from 'react';

import NameInput from './NameInput';

interface HeaderProps {
  addTeam: (name:string)=> any;
  getCohorts: (token:string)=> any;
};

interface HeaderSectionState {
  addNew: boolean;
};

class Header extends React.Component<HeaderProps, HeaderSectionState> {
  constructor(props, conname) {
    super(props, conname);
    this.state = {addNew: false};
  }

  handleSave(name: string) {
    if (name.length !== 0) {
      this.props.addTeam(name);
    }
  }

  toggleNewTeamForm() {
    this.setState({ addNew: !this.state.addNew })
  }

  getCohorts() {
    let token = localStorage.getItem('user_token'); 
    this.props.getCohorts(token);
  }

  render() {
    let element;
    if (this.state.addNew) {
      element = ( 
        <NameInput
          newTeam
          onSave={this.handleSave.bind(this)}
          placeholder="New Team Name"
        />
      )
    }
    return (
      <header className="header pure-form pure-form-stacked">
        <h1> Peer Review </h1>
        <button 
          className="pure-button button-secondary"
          onClick={this.toggleNewTeamForm.bind(this)} > 
          Add New Team </button>
        <button 
          className="pure-button button-secondary" 
          onClick={this.getCohorts.bind(this)}> 
          Import Team </button>
        {element}
      </header>
    );
  }
}

export default Header;
