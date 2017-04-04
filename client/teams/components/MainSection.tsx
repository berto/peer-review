import * as React from 'react';

import { Team } from '../../main/model';
import TeamName from './TeamName';
interface MainSectionProps {
  teams: Team[];
  team: Team;
  getTeamMembers: (team:Team)=>void;
  getTeamSurveys: (team:Team)=>void;
  toggleCohorts: (show:boolean)=>void;
  editTeam: (team:Team, name:string)=>void;
  setTeam: (team:Team)=>void;
  deleteTeam: (team:Team)=>void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {this.props.teams.map(team =>
          <TeamName
            key={team.id}
            team={team}
            getTeamMembers={this.props.getTeamMembers}
            getTeamSurveys={this.props.getTeamSurveys}
            toggleCohorts={this.props.toggleCohorts}
            editTeam={this.props.editTeam}
            setTeam={this.props.setTeam}
            selected={this.props.team ? team.id == this.props.team.id : false }
            deleteTeam={this.props.deleteTeam}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
