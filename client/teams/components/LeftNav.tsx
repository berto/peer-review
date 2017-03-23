import * as React from 'react';

import { Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface LeftNavProps {
  teams: Team[];
  team: Team;
  addTeam: (text:string)=> void;
  getTeamMembers: (team:Team)=>void;
  getTeamSurveys: (team:Team)=>void;
  setTeam: (team:Team)=>void;
  getTeams: () => void;
  editTeam: (team:Team, text:string)=>void;
  deleteTeam: (team:Team)=> void;
};

class LeftNav extends React.Component<LeftNavProps, void> {
  componentWillMount() {
    this.props.getTeams()
  }
  render() {
    return (
      <section className="left-nav pure-u">
        <Header addTeam={this.props.addTeam} />
        <MainSection
          teams={this.props.teams}
          team={this.props.team}
          getTeamMembers={this.props.getTeamMembers}
          getTeamSurveys={this.props.getTeamSurveys}
          getTeams={this.props.getTeams}
          setTeam={this.props.setTeam}
          editTeam={this.props.editTeam}
          deleteTeam={this.props.deleteTeam}/>
        <footer className="pure-form pure-form-stacked">
          <a href="https://github.com/berto/peer-review"> 
            <button 
              className="pure-button button-secondary"> 
              Code </button>
          </a>
          <a href="/docs"> 
            <button 
              className="pure-button button-secondary"> 
              Documentation </button>
          </a>
        </footer>
      </section>
    );
  }
}

export default LeftNav;
