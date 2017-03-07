import * as React from 'react';
import * as classNames from 'classnames';

interface NameInputProps {
  onSave: (name:string)=>void;
  name?: string; placeholder?: string, editing?: boolean;
  newMember?: boolean;
};

interface NameInputState {
  name: string;
  tempName: string;
}

class NameInput extends React.Component<NameInputProps, NameInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      tempName: this.props.name || ''
    };
  }

  handleSubmit(e) {
    if (e.which === 27) { 
      this.props.onSave(this.state.tempName);
    }
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(name);
      this.state.tempName = name;
      if (this.props.newMember) {
        this.state.name = '';
      }
      this.setState(this.state);
    }
  }

  handleChange(e) {
    if (e.target.value.length < 25) {
      this.state.name = e.target.value;
      this.setState(this.state);
    }
  }

  handleBlur(e) {
    if (!this.props.newMember) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input className={
        classNames({
          edit: this.props.editing,
          'new-member': this.props.newMember
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
