import * as React from 'react';

import { Member } from '../../main/model';
import MemberName from './MemberName';

interface MainSectionProps {
  members: Member[];
  editMember: (member:Member, name:string)=>void;
  deleteMember: (member:Member)=>void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    const { members, deleteMember, editMember } = this.props;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {members.map(member =>
            <MemberName
              key={member.id}
              member={member}
              editMember={editMember}
              deleteMember={deleteMember}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
