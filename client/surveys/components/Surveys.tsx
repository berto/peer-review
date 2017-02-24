import * as React from 'react';

import { Survey, Member, Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface SurveysProps {
  surveys: Survey[];
  survey: Survey;
  member: Member;
  team: Team;
  addSurvey: (team:Team, text:string)=> void;
  setSurvey: (survey: Survey)=> void;
  editSurvey: (survey:Survey, text:string)=>void;
  deleteSurvey: (survey:Survey)=> void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
};

class Surveys extends React.Component<SurveysProps, void> {
  render() {
    return (
      <section className="list pure-u">
        <Header 
          team={this.props.team}
          addSurvey={this.props.addSurvey} />
        <MainSection
          surveys={this.props.surveys}
          survey={this.props.survey}
          member={this.props.member}
          editSurvey={this.props.editSurvey}
          setSurvey={this.props.setSurvey}
          getMemberFeedback={this.props.getMemberFeedback}
          deleteSurvey={this.props.deleteSurvey}/>
      </section>
    );
  }
}

export default Surveys;
