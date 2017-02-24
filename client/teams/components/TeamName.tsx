import * as React from 'react';
import * as classNames from 'classnames'; 
import { Team } from '../../main/model';
import NameInput from './NameInput';

interface NameProps {
  team: Team;
  getTeamMembers: (team:Team)=>void;
  getTeamSurveys: (team:Team)=>void;
  editTeam: (team:Team, name:string)=>void;
  setTeam: (team:Team)=>void;
  deleteTeam: (team:Team)=>void;
  selected: boolean;
  key?: any;
};

interface NameState {
  editing: boolean;
  deleting: boolean;
};

class TeamName extends React.Component<NameProps, NameState> {
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

  toggleDelete() {
    this.setState({ editing: false, deleting: !this.state.deleting });
  }

  handleClick() {
    this.props.getTeamMembers(this.props.team);
    this.props.getTeamSurveys(this.props.team);
    this.props.setTeam(this.props.team);
  }

  handleSave(team:Team, name:string) {
    if (name.length === 0) {
      this.props.deleteTeam(team);
    } else {
      this.props.editTeam(team, name);
    }
    this.setState({ editing: false, deleting: false });
  }

  render() {
    const {team, deleteTeam, getTeamMembers} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NameInput name={team.name}
        editing={this.state.editing}
        onSave={(name) => this.handleSave(team, name)}/>
      );
    } else if (this.state.deleting) {
      element = (
        <div>
          <p> Are you sure? </p>
          <button onClick={this.toggleDelete.bind(this)} className="pure-button button-primary"> Cancel </button>
          <button onClick={() => deleteTeam(team)} className="pure-button button-warning"> Delete </button>
        </div>
      )
    } else {
      element = (
        <div className="view">
          <label className="hand" >
            {team.name}
          </label>
          <i className="material-icons hide warning right" onClick={this.toggleDelete.bind(this)}> delete </i>
        </div>
      );
    }

    return (
      <li onDoubleClick={this.handleDoubleClick.bind(this)}
      onClick={this.handleClick.bind(this)}
      className={classNames({ editing: this.state.editing }, { selected: this.props.selected}, 
      "pure-menu-form", "pure-menu-link", "pure-form", "hand")}>
      {element}
    </li>
    );
  }
}

export default TeamName;
