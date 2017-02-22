import * as React from 'react';
import * as classNames from 'classnames'; 
import { Team } from '../../main/model';
import NameInput from './NameInput';

interface ItemProps {
  team: Team;
  getMembers: (team:Team)=>void;
  editTeam: (team:Team, name:string)=>void;
  deleteTeam: (team:Team)=>void;
  key?: any;
};

interface ItemState {
  editing: boolean;
};

class TeamItem extends React.Component<ItemProps, ItemState> {
  constructor(props, conname) {
    super(props, conname);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(team:Team, name:string) {
    if (name.length === 0) {
      this.props.deleteTeam(team);
    } else {
      this.props.editTeam(team, name);
    }
    this.setState({ editing: false });
  }

  render() {
    const {team, deleteTeam, getMembers} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NameInput name={team.name}
        editing={this.state.editing}
        onSave={(name) => this.handleSave(team, name)}/>
      );
    } else {
      element = (
        <div className="view">
          <label className="hand" >
            {team.name}
          </label>
          <i className="material-icons hide warning right" onClick={() => deleteTeam(team)} > delete </i>
        </div>
      );
    }

    return (
      <li onDoubleClick={this.handleDoubleClick.bind(this)}
          onClick={() => getMembers(team)}
          className={classNames({ editing: this.state.editing }, 
            "pure-menu-form", "pure-menu-link", "pure-form", "hand")}>
        {element}
      </li>
    );
  }
}

export default TeamItem;
