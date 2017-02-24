import * as React from 'react';

import { Feedback as FeedbackType, Survey } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface FeedbackProps {
  feedback: FeedbackType;
  survey: Survey;
};

class Feedback extends React.Component<FeedbackProps, void> {
  render() {
    return (
      <section className="feedback pure-u">
        <Header 
          survey={this.props.survey} />
        <MainSection
          rating={this.props.feedback.rating}
          feedback={this.props.feedback.text}/>
      </section>
    );
  }
}

export default Feedback;
