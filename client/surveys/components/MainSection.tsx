import * as React from 'react';

import { Survey, Member } from '../../main/model';
import SurveyName from './SurveyName';

interface MainSectionProps {
  surveys: Survey[];
  survey: Survey;
  member: Member;
  setSurvey: (survey: Survey)=> void;
  editSurvey: (survey:Survey, name:string)=>void;
  deleteSurvey: (survey:Survey)=>void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    const { surveys, member, deleteSurvey, editSurvey, setSurvey } = this.props;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {surveys.map(survey =>
            <SurveyName
              key={survey.id}
              survey={survey}
              currentSurvey={this.props.survey}
              member={member}
              selected={this.props.survey ? survey.id == this.props.survey.id : false }
              getMemberFeedback={this.props.getMemberFeedback}
              editSurvey={editSurvey}
              setSurvey={setSurvey}
              deleteSurvey={deleteSurvey}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
