import * as React from 'react';

import { Survey, Team } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface SurveysProps {
  surveys: Survey[];
  survey: Survey;
  team: Team;
  addSurvey: (team:Team, text:string)=> void;
  setSurvey: (survey: Survey)=> void;
  editSurvey: (survey:Survey, text:string)=>void;
  deleteSurvey: (survey:Survey)=> void;
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
          editSurvey={this.props.editSurvey}
          setSurvey={this.props.setSurvey}
          deleteSurvey={this.props.deleteSurvey}/>
      </section>
    );
  }
}

export default Surveys;
