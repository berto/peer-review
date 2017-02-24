import * as React from 'react';

import { Member, Survey } from '../../main/model';
import MemberName from './MemberName';

interface MainSectionProps {
  members: Member[];
  member: Member;
  survey: Survey;
  editMember: (member:Member, name:string)=>void;
  setMember: (member:Member)=>void;
  deleteMember: (member:Member)=>void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    const { members, survey, getMemberFeedback, deleteMember, editMember, setMember } = this.props;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {members.map(member =>
            <MemberName
              key={member.id}
              member={member}
              survey={survey}
              selected={this.props.member ? member.id == this.props.member.id : false }
              editMember={editMember}
              setMember={setMember}
              getMemberFeedback={getMemberFeedback}
              deleteMember={deleteMember}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
