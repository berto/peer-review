import * as React from 'react';
import * as classNames from 'classnames';

import { Team } from '../model';
import TextInput from './TextInput';

interface ItemProps {
  team: Team;
  editTeam: (team:Team, text:string)=>void;
  deleteTeam: (team:Team)=>void;
  key?: any;
};

interface ItemState {
  editing: boolean;
};

class TeamItem extends React.Component<ItemProps, ItemState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(team:Team, text:string) {
    if (text.length === 0) {
      this.props.deleteTeam(team);
    } else {
      this.props.editTeam(team, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {team, deleteTeam} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TextInput text={team.text}
        editing={this.state.editing}
        onSave={(text) => this.handleSave(team, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <label className="hand" onDoubleClick={this.handleDoubleClick.bind(this)}>
            {team.text}
          </label>
          <i className="material-icons hide warning hand right" onClick={() => deleteTeam(team)} > delete </i>
        </div>
      );
    }

    return (
      <li className={classNames({ editing: this.state.editing }, 
        "pure-menu-form", "pure-menu-link", "pure-form")}>
        {element}
      </li>
    );
  }
}

export default TeamItem;
