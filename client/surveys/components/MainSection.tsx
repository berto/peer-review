import * as React from 'react';

import { Survey } from '../../main/model';
import SurveyName from './SurveyName';

interface MainSectionProps {
  surveys: Survey[];
  survey: Survey;
  setSurvey: (survey: Survey)=> void;
  editSurvey: (survey:Survey, name:string)=>void;
  deleteSurvey: (survey:Survey)=>void;
};

class MainSection extends React.Component<MainSectionProps, void> {

  render() {
    const { surveys, deleteSurvey, editSurvey, setSurvey } = this.props;

    return (
      <section className="pure-menu">
        <ul className="pure-menu-list">
          {surveys.map(survey =>
            <SurveyName
              key={survey.id}
              survey={survey}
              selected={this.props.survey ? survey.id == this.props.survey.id : false }
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
