import * as React from 'react';

import NameInput from './NameInput';

interface HeaderProps {
  addTeam: (name:string)=> any;
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
        <button 
          className="pure-button button-secondary"
          onClick={this.toggleNewTeamForm.bind(this)} > 
          Add New Team </button>
        {element}
      </header>
    );
  }
}

export default Header;
