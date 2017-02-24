import * as React from 'react';
import * as classNames from 'classnames'; 
import { Survey } from '../../main/model';
import NameInput from './NameInput';

interface NameProps {
  survey: Survey;
  setSurvey: (survey: Survey)=> void;
  editSurvey: (survey:Survey, name:string)=>void;
  deleteSurvey: (survey:Survey)=>void;
  selected: boolean;
  key?: any;
};

interface NameState {
  editing: boolean;
};

class SurveyName extends React.Component<NameProps, NameState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(survey:Survey, name:string) {
    if (name.length === 0) {
      this.props.deleteSurvey(survey);
    } else {
      this.props.editSurvey(survey, name);
    }
    this.setState({ editing: false });
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
    } else {
      element = (
        <div className="view">
          <label className="hand" >
            {survey.name}
          </label>
          <i className="material-icons hide warning right" onClick={() => deleteSurvey(survey)} > delete </i>
          <i className="material-icons hide success right" onClick={this.surveyRedirect.bind(this)} > link </i>
        </div>
      );
    }

    return (
      <li onDoubleClick={this.handleDoubleClick.bind(this)} onClick={() => this.props.setSurvey(survey)}
          className={classNames({ editing: this.state.editing }, { selected: this.props.selected},
            "pure-menu-form", "pure-menu-link", "pure-form", "hand")}>
        {element}
      </li>
    );
  }
}

export default SurveyName;
