import * as React from 'react';
import * as classNames from 'classnames'; 
import { Survey, Member } from '../../main/model';
import NameInput from './NameInput';

interface NameProps {
  survey: Survey;
  currentSurvey: Survey;
  member: Member;
  setSurvey: (survey: Survey)=> void;
  editSurvey: (survey:Survey, name:string)=>void;
  deleteSurvey: (survey:Survey)=>void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
  selected: boolean;
  key?: any;
};

interface NameState {
  editing: boolean;
  deleting: boolean;
};

class SurveyName extends React.Component<NameProps, NameState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false,
      deleting: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true, deleting: false });
  }

  handleClick() {
    let survey: Survey = this.props.survey;
    if (this.props.currentSurvey && this.props.currentSurvey.id === this.props.survey.id) {
      survey = null;
    } 
    this.props.setSurvey(survey);
    if (this.props.member) {
      this.props.getMemberFeedback(survey, this.props.member);
    }
  }

  toggleDelete() {
    this.setState({ editing: false, deleting: !this.state.deleting });
  }

  handleSave(survey:Survey, name:string) {
    if (name.length === 0) {
      this.props.deleteSurvey(survey);
    } else {
      this.props.editSurvey(survey, name);
    }
    this.setState({ editing: false, deleting: false });
  }

  surveyRedirect() {
    window.location.href = `survey/${this.props.survey.id}`;
  }

  render() {
    const {survey, deleteSurvey} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NameInput name={survey.name}
        editing={this.state.editing}
        onSave={(name) => this.handleSave(survey, name)}/>
      );
    } else if (this.state.deleting) {
      element = (
        <div>
          <p> Are you sure? </p>
          <button onClick={this.toggleDelete.bind(this)} className="pure-button button-primary"> Cancel </button>
          <button onClick={() => deleteSurvey(survey)} className="pure-button button-warning"> Delete </button>
        </div>
      )
    } else {
      element = (
        <div className="view">
          <label className="hand" >
            {survey.name}
          </label>
          <i className="material-icons hide warning right" onClick={this.toggleDelete.bind(this)} > delete </i>
          <i className="material-icons hide success right" onClick={this.surveyRedirect.bind(this)} > link </i>
        </div>
      );
    }

    return (
      <li onDoubleClick={this.handleDoubleClick.bind(this)} onClick={this.handleClick.bind(this)}
          className={classNames({ editing: this.state.editing }, { selected: this.props.selected},
            "pure-menu-form", "pure-menu-link", "pure-form", "hand")}>
        {element}
      </li>
    );
  }
}

export default SurveyName;
