import * as React from 'react';

import { Team } from '../model';
import TeamName from './TeamName';
import { SHOW_ALL } from '../constants/Filters';

const FILTERS = {
  [SHOW_ALL]: () => true,
};

interface MainSectionProps {
  teams: Team[];
  getTeams: ()=>void;
  editTeam: (team:Team, name:string)=>void;
  deleteTeam: (team:Team)=>void;
};

interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  render() {
    const { teams, deleteTeam, editTeam } = this.props;
    const { filter } = this.state;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {teams.map(team =>
            <TeamName
              key={team.id}
              team={team}
              editTeam={editTeam}
              deleteTeam={deleteTeam}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
