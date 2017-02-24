import * as React from 'react';
import * as classNames from 'classnames';

interface NameInputProps {
  onSave: (name:string)=>void;
  name?: string; placeholder?: string, editing?: boolean;
  newSurvey?: boolean;
};

interface NameInputState {
  name: string;
}

class NameInput extends React.Component<NameInputProps, NameInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || ''
    };
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(name);
      if (this.props.newSurvey) {
        this.setState({ name: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newSurvey) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input className={
        classNames({
          edit: this.props.editing,
          'new-survey': this.props.newSurvey
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.name}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}


export default NameInput;
