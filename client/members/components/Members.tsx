import * as React from 'react';

import { Member, Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface MembersProps {
  members: Member[];
  team: Team;
  addMember: (team:Team, text:string)=> void;
  editMember: (member:Member, text:string)=>void;
  deleteMember: (member:Member)=> void;
};

class Members extends React.Component<MembersProps, void> {
  render() {
    let element;
    if (this.props.team) {
      element = (
        <Header 
          team={this.props.team}
          addMember={this.props.addMember} />
      );
    }
    return (
      <section className="member-list pure-u">
        {element}
        <MainSection
          members={this.props.members}
          editMember={this.props.editMember}
          deleteMember={this.props.deleteMember}/>
      </section>
    );
  }
}

export default Members;
