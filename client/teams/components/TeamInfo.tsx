import * as React from 'react';

import { Team, Member, Survey } from '../../main/model';

import { Members as MembersComponent } from '../../members';
import { Surveys as SurveysComponent } from '../../surveys';
interface TeamInfoProps {
  team: Team;
  members: Member[];
  surveys: Survey[];
  member: Member;
  survey: Survey;
  addMember: (team:Team, text:string)=> void;
  setMember: (member:Member)=> void;
  editMember: (member:Member, text:string)=>void;
  deleteMember: (member:Member)=> void;
  addSurvey: (team:Team, text:string)=> void;
  setSurvey: (survey:Survey)=> void;
  editSurvey: (survey:Survey, text:string)=>void;
  deleteSurvey: (survey:Survey)=> void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
};

class TeamInfo extends React.Component<TeamInfoProps, void> {
  render() {
    let title: string = this.props.team ? this.props.team.name : "";
    return (
      <section className="pure-u team">
        <header>
          <h1> {title} </h1>
        </header>
        <SurveysComponent 
          team={this.props.team}
          addSurvey={this.props.addSurvey}
          surveys={this.props.surveys}
          member={this.props.member}
          survey={this.props.survey}
          setSurvey={this.props.setSurvey}
          editSurvey={this.props.editSurvey}
          getMemberFeedback={this.props.getMemberFeedback}
          deleteSurvey={this.props.deleteSurvey}/>
        <MembersComponent 
          team={this.props.team}
          addMember={this.props.addMember}
          members={this.props.members}
          member={this.props.member}
          survey={this.props.survey}
          setMember={this.props.setMember}
          editMember={this.props.editMember}
          getMemberFeedback={this.props.getMemberFeedback}
          deleteMember={this.props.deleteMember}/>
      </section>
    )
  }
}

export default TeamInfo;
