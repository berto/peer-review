import * as React from 'react';

import NameInput from './NameInput';

interface HeaderProps {
  cohorts: any[];
  addTeam: (name:string)=> any;
  getCohorts: ()=> any;
  toggleCohorts: (show:boolean)=> any;
};

interface HeaderSectionState {
  addNew: boolean;
  loading: boolean;
};

class Header extends React.Component<HeaderProps, HeaderSectionState> {
  constructor(props, conname) {
    super(props, conname);
    this.state = {
      addNew: false,
      loading: false
    };
  }

  handleSave(name: string) {
    if (name.length !== 0) {
      this.props.addTeam(name);
    }
  }

  toggleNewTeamForm() {
    this.state.addNew = !this.state.addNew;
    this.setState(this.state);
  }

  getCohorts() {
    if (!this.props.cohorts.length) {
      this.props.getCohorts();
      this.state.loading = true;
      this.setState(this.state);
    } else {
      this.props.toggleCohorts(true);
    }
  }

  render() {
    let element;
    let importButtonText = 'Import Team';
    if (this.state.addNew) {
      element = ( 
        <NameInput
          newTeam
          onSave={this.handleSave.bind(this)}
          placeholder="New Team Name"
        />
      )
    }
    if (this.state.loading && !this.props.cohorts.length) {
      importButtonText = "Loading...";
    }
    return (
      <header className="header pure-form pure-form-stacked">
        <h1> Peer Review </h1>
        <button 
          className="pure-button button-secondary" 
          onClick={this.getCohorts.bind(this)}> 
          {importButtonText} </button>
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
