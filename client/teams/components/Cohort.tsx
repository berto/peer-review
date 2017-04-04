import * as React from 'react';

interface CohortProps {
  cohort: any;
  key?: any;
};

class Cohort extends React.Component<CohortProps, void> {

  handleClick() {
    console.log("clicked", this.props.cohort.url);
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} className="pure-menu-link hand"> {this.props.cohort.name} - {this.props.cohort.label} - {this.props.cohort.campus}</li>
    );
  }
}

export default Cohort;
