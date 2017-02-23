import * as React from 'react';

import NameInput from './NameInput';
import { Team } from '../../main/model';

interface HeaderProps {
  addMember: (team: Team, name:string)=> any;
  team: Team;
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
      this.props.addMember(this.props.team, name);
    }
  }

  toggleNewMemberForm() {
    this.setState({ addNew: !this.state.addNew })
  }

  render() {
    let element;
    if (this.state.addNew) {
      element = ( 
        <NameInput
          newMember
          onSave={this.handleSave.bind(this)}
          placeholder="New Member Name"
        />
      )
    }
    return (
      <header className="header pure-form pure-form-stacked">
        <h1> {this.props.team.name} </h1>
        <button 
          className="pure-button button-primary"
          onClick={this.toggleNewMemberForm.bind(this)} > 
          Add New Member </button>
        {element}
      </header>
    );
  }
}

export default Header;
