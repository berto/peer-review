import * as React from 'react';

import FeedbackForm from './FeedbackForm';

import { Members, MemberFeedback, Form as FormType } from '../../main/model';

interface FormProps {
  survey_id: string;
  members: Members;
  form: FormType;
  getSurveyMembers: (survey_id:string)=> void;
  addPeer: () => void;
};

interface FormState {
  feedback: MemberFeedback[];
};

class Form extends React.Component<FormProps, FormState> {
  constructor (props, context) {
    super(props, context);
    this.state = {
      feedback: [{id: 0, name: "", text: "", rating: null}] 
    };
  }

  componentWillMount() {
    this.props.getSurveyMembers(this.props.survey_id);
  }

  handleAddPeer (i) {
    this.state.feedback.push({id: this.state.feedback.length, name: "", text: "", rating: null});
    this.setState(this.state);
  }

  handleUpdate (feedback) {
    this.state.feedback = this.state.feedback.map(fb => {
      return feedback.id === fb.id ? feedback : fb
    })
    this.setState(this.state);
  }

  handleSubmit () {
    console.log(this.state.feedback);
  }

  render() {
    return (
      <section className="form">
        <h1> Peer Review </h1>
        <div className="feedbacks">
          {this.state.feedback.map((_,i) => 
          <FeedbackForm 
           key={i}
            id={i}
            update={this.handleUpdate.bind(this)}
            members={this.props.members} />
          )}
          <button onClick={this.handleAddPeer.bind(this)} className="pure-button button-secondary"> Add Peer </button>
        </div>
        <button onClick={this.handleSubmit.bind(this)} className="pure-button button-secondary right submit"> Submit Feedback </button>
      </section>
    );
  }
}

export default Form;
