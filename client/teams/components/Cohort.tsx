import * as React from 'react';
import { Team } from '../../main/model';

interface CohortProps {
  addCohort: (url:string)=> Team;
  setTeam: (team:Team)=>void;
  getTeams: ()=> any;
  toggleCohorts: (show:boolean) => void;
  cohort: any;
  key?: any;
};

class Cohort extends React.Component<CohortProps, void> {

  handleClick() {
    let team = this.props.addCohort(this.props.cohort.url);
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} className="pure-menu-link hand"> {this.props.cohort.name} - {this.props.cohort.label} - {this.props.cohort.campus}</li>
    );
  }
}

export default Cohort;
