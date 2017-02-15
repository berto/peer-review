import * as React from 'react';

import TextInput from './TextInput';

interface HeaderProps {
  addTeam: (text:string)=> any;
};

interface HeaderSectionState {
  addNew: boolean;
};

class Header extends React.Component<HeaderProps, HeaderSectionState> {
  constructor(props, context) {
    super(props, context);
    this.state = {addNew: false};
  }

  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addTeam(text);
    }
  }

  toggleNewTeamForm() {
    this.setState({ addNew: !this.state.addNew })
  }

  render() {
    let element;
    if (this.state.addNew) {
      element = ( 
        <TextInput
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
