import * as React from 'react';

import { Member } from '../../main/model';
import MemberName from './MemberName';

interface MainSectionProps {
  members: Member[];
  member: Member;
  editMember: (member:Member, name:string)=>void;
  setMember: (member:Member)=>void;
  deleteMember: (member:Member)=>void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    const { members, deleteMember, editMember, setMember } = this.props;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {members.map(member =>
            <MemberName
              key={member.id}
              member={member}
              selected={this.props.member ? member.id == this.props.member.id : false }
              editMember={editMember}
              setMember={setMember}
              deleteMember={deleteMember}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
