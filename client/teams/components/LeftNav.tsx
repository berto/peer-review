import * as React from 'react';

import { Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface LeftNavProps {
  teams: Team[];
  cohorts: any[];
  team: Team;
  addTeam: (text:string)=> void;
  getTeamMembers: (team:Team)=>void;
  getTeamSurveys: (team:Team)=>void;
  setTeam: (team:Team)=>void;
  getTeams: () => void;
  toggleCohorts: (show:boolean) => void;
  getCohorts: ()=> any;
  editTeam: (team:Team, text:string)=>void;
  deleteTeam: (team:Team)=> void;
};

class LeftNav extends React.Component<LeftNavProps, void> {
  componentWillMount() {
    this.props.getTeams()
  }
  logout() {
    localStorage.removeItem('user_token');
    window.location.href = "/login";
  }
  render() {
    return (
      <section className="left-nav pure-u">
        <Header 
          cohorts={this.props.cohorts}
          addTeam={this.props.addTeam}
          toggleCohorts={this.props.toggleCohorts}
          getCohorts={this.props.getCohorts}/>
        <MainSection
          teams={this.props.teams}
          team={this.props.team}
          getTeamMembers={this.props.getTeamMembers}
          getTeamSurveys={this.props.getTeamSurveys}
          toggleCohorts={this.props.toggleCohorts}
          setTeam={this.props.setTeam}
          editTeam={this.props.editTeam}
          deleteTeam={this.props.deleteTeam}/>
        <footer className="pure-form pure-form-stacked">
          <a className="pure-menu-heading" target="_blank" href="https://github.com/berto/peer-review"> Code </a>
          <a className="pure-menu-heading" target="_blank" href="/docs"> Documentation </a>
          <a className="pure-menu-heading" href="#" onClick={this.logout.bind(this)}> Log Out </a>
        </footer>
      </section>
    );
  }
}

export default LeftNav;
