import * as React from 'react';

import TextInput from './TextInput';

interface HeaderProps {
  addResource: (text:string)=> any;
};

class Header extends React.Component<HeaderProps, void> {
  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addResource(text);
    }
  }

  render() {
    return (
      <header className="header">
          <h1>React, Redux, TypeScript Starter</h1>
          <TextInput
            newResource
            onSave={this.handleSave.bind(this)}
          />
      </header>
    );
  }
}

export default Header;
