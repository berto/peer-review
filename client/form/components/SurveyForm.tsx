import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../main/action';
import Form from './Form';

import { Params, Teams, Surveys, Feedback, Members, Form as FeedbackForm } from '../../main/model';

interface SurveyFormProps {
  params: Params;
  members: Members;
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
          getSurveyMembers={this.props.actions.getSurveyMembers}
          submitFeedback={this.props.actions.submitFeedback}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
  form: state.form
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);
