import * as React from 'react';

import NameInput from './NameInput';
import { Team } from '../../main/model';

interface HeaderProps {
  addSurvey: (team: Team, name:string)=> any;
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
      this.props.addSurvey(this.props.team, name);
    }
  }

  toggleNewSurveyForm() {
    this.setState({ addNew: !this.state.addNew })
  }

  render() {
    let element;
    if (this.state.addNew) {
      element = ( 
        <NameInput
          newSurvey
          onSave={this.handleSave.bind(this)}
          placeholder="New Survey Name"
        />
      )
    }
    return (
      <header className="header pure-form pure-form-stacked">
        <h1> Surveys </h1>
        <button 
          className="pure-button button-primary"
          onClick={this.toggleNewSurveyForm.bind(this)} > 
          Add New Survey </button>
        {element}
      </header>
    );
  }
}

export default Header;
