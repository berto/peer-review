import * as React from 'react';

import { Member, Survey, Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface MembersProps {
  members: Member[];
  member: Member;
  survey: Survey;
  team: Team;
  addMember: (team:Team, text:string)=> void;
  setMember: (member:Member)=> void;
  editMember: (member:Member, text:string)=>void;
  deleteMember: (member:Member)=> void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
};

class Members extends React.Component<MembersProps, void> {
  render() {
    return (
      <section className="list pure-u">
        <Header 
          team={this.props.team}
          addMember={this.props.addMember} />
        <MainSection
          members={this.props.members}
          member={this.props.member}
          survey={this.props.survey}
          editMember={this.props.editMember}
          setMember={this.props.setMember}
          getMemberFeedback={this.props.getMemberFeedback}
          deleteMember={this.props.deleteMember}/>
      </section>
    );
  }
}

export default Members;
