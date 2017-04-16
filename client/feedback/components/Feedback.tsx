import * as React from 'react';

import { Feedback as FeedbackType, Member, Survey } from '../../main/model';
import Header from './Header';
import MainSection from './MainSection';

interface FeedbackProps {
  feedback: FeedbackType;
  member: Member;
  survey: Survey;
};

class Feedback extends React.Component<FeedbackProps, void> {
  render() {
    let token: string = localStorage.getItem('user_token');
    let url: string = `/api/member/${this.props.member.id}/feedback/?token=${token}`;
    if (this.props.survey) {
      url = `/api/survey/${this.props.survey.id}/member/${this.props.member.id}/feedback?token=${token}`;
    }
    return (
      <section className="feedback pure-u">
        <Header 
          survey={this.props.survey} />
        <MainSection
          rating={this.props.feedback.rating}
          contribution={this.props.feedback.contribution}
          futureTeammate={this.props.feedback.futureTeammate}
          url={url}
          feedback={this.props.feedback.text}/>
      </section>
    );
  }
}

export default Feedback;
