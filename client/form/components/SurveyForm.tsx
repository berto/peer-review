import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../main/action';
import Form from './Form';

import { Params, Teams, Surveys, Feedback, Members, Form as FeedbackForm } from '../../main/model';

interface SurveyFormProps {
  params: Params;
  members: Members;
  surveys: Surveys;
  form: FeedbackForm;
  actions: any;
};

class SurveyForm extends React.Component<SurveyFormProps, void> {
  render() {
    return (
      <div className="form-page">
        <Form
          members={this.props.members}
          form={this.props.form}
          survey_id={this.props.params.id}
          survey={this.props.surveys.selected}
          getSurveyMembers={this.props.actions.getSurveyMembers}
          getSurvey={this.props.actions.getSurvey}
          submitFeedback={this.props.actions.submitFeedback}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
  surveys: state.surveys,
  form: state.form
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);
