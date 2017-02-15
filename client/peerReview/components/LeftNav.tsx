import * as React from 'react';

import { Team } from '../model';
import Header from './Header';
import MainSection from './MainSection';

interface LeftNavProps {
  teams: Team[];
  addTeam: (text:string)=> any;
  editTeam: (team:Team, text:string)=>void;
  deleteTeam: (team:Team)=> void;
};

class LeftNav extends React.Component<LeftNavProps, void> {
  render() {
    return (
      <section className="left-nav pure-u-1-3">
        <Header addTeam={this.props.addTeam} />
        <MainSection
          teams={this.props.teams}
          editTeam={this.props.editTeam}
          deleteTeam={this.props.deleteTeam}/>
      </section>
    );
  }
}

export default LeftNav;
