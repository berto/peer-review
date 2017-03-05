import * as React from 'react';
import FeedbackForm from './FeedbackForm';

import { Members, MemberFeedback, Form as FormType } from '../../main/model';

interface FormProps {
  survey_id: string;
  members: Members;
  form: FormType;
  getSurveyMembers: (survey_id:string)=> void;
  submitFeedback: (survey_id:string, feedback:MemberFeedback[])=> void;
};

interface FormState {
  submitted: boolean;
  feedback: MemberFeedback[];
};

class Form extends React.Component<FormProps, FormState> {
  constructor (props, context) {
    super(props, context);
    this.state = {
      submitted: false,
      feedback: [{id: 0, member_id: null, name: "", text: "", rating: null}] 
    };
  }

  componentWillMount() {
    this.props.getSurveyMembers(this.props.survey_id);
  }

  handleAddPeer (i) {
    this.state.feedback.push({id: this.state.feedback.length, member_id: null, name: "", text: "", rating: null});
    this.setState(this.state);
  }

  handleUpdate (feedback) {
    this.state.feedback = this.state.feedback.map(fb => {
      return feedback.id === fb.id ? feedback : fb
    })
    this.setState(this.state);
  }

  handleSubmit () {
    this.state.submitted = true;
    this.setState(this.state);
    this.props.submitFeedback(this.props.survey_id, this.state.feedback);
  }

  render() {
    let form = (
      <section className="submitted">
        <h1> Submitted </h1>
        <div className="image">
          <img src={require("../../assets/dance.gif")} />
        </div>
      </section>
    )
    if (!this.state.submitted) {
      form = (
        <div>
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
              <button onClick={this.handleAddPeer.bind(this)} className="pure-button button-primary"> Add Peer </button>
            </div>
          </section>
          <section className="submit">
            <button onClick={this.handleSubmit.bind(this)} className="pure-button button-secondary right submit"> Submit Feedback </button>
          </section>
        </div>
      )
    }
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default Form;
