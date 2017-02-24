import * as React from 'react';

import { Survey } from '../../main/model';

interface HeaderProps {
  survey: Survey;
};

class Header extends React.Component<HeaderProps, void> {

  render() {
    let title = this.props.survey ? `Feedback for ${this.props.survey.name}` : "Overall Feedback";
    return (
      <header>
        <h1> {title} </h1>
      </header>
    );
  }
}

export default Header;
