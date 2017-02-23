import * as React from 'react';

import { Team } from '../../main/model';
import TeamName from './TeamName';
interface MainSectionProps {
  teams: Team[];
  getTeams: ()=>void;
  getTeamMembers: (team:Team)=>void;
  editTeam: (team:Team, name:string)=>void;
  deleteTeam: (team:Team)=>void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    const { teams, deleteTeam, editTeam, getTeamMembers } = this.props;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {teams.map(team =>
            <TeamName
              key={team.id}
              team={team}
              getTeamMembers={getTeamMembers}
              editTeam={editTeam}
              deleteTeam={deleteTeam}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
