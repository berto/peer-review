import * as React from 'react';
import * as classNames from 'classnames';

interface TextInputProps {
  onSave: (text:string)=>void;
  text?: string;
  placeholder?: string,
  editing?: boolean;
  newResource?: boolean;
};

interface TextInputState {
  text: string;
}

class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newResource) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newResource) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input className={
        classNames({
          edit: this.props.editing,
          'new-resource': this.props.newResource
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}


export default TextInput;
