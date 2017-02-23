import * as React from 'react';

import { Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface LeftNavProps {
  teams: Team[];
  addTeam: (text:string)=> void;
  getTeamMembers: (team:Team)=>void;
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
          getTeamMembers={this.props.getTeamMembers}
          getTeams={this.props.getTeams}
          editTeam={this.props.editTeam}
          deleteTeam={this.props.deleteTeam}/>
      </section>
    );
  }
}

export default LeftNav;
