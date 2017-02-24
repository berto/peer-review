import * as React from 'react';
import * as classNames from 'classnames'; 
import { Member, Survey } from '../../main/model';
import NameInput from './NameInput';

interface NameProps {
  member: Member;
  survey: Survey;
  editMember: (member:Member, name:string)=>void;
  setMember: (member:Member)=>void;
  deleteMember: (member:Member)=>void;
  getMemberFeedback: (member:Member, survey:Survey)=> void;
  selected: boolean;
  key?: any;
};

interface NameState {
  editing: boolean;
  deleting: boolean;
};

class MemberName extends React.Component<NameProps, NameState> {
  constructor(props, conname) {
    super(props, conname);
    this.state = {
      editing: false,
      deleting: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true, deleting: false });
  }

  handleClick() {
    this.props.setMember(this.props.member);
    this.props.getMemberFeedback(this.props.survey, this.props.member);
  }

  toggleDelete() {
    this.setState({ editing: false, deleting: !this.state.deleting });
  }

  handleSave(member:Member, name:string) {
    if (name.length === 0) {
      this.props.deleteMember(member);
    } else {
      this.props.editMember(member, name);
    }
    this.setState({ editing: false, deleting: false });
  }

  render() {
    const {member, deleteMember} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NameInput name={member.name}
        editing={this.state.editing}
        onSave={(name) => this.handleSave(member, name)}/>
      );
    } else if (this.state.deleting) {
      element = (
        <div>
          <p> Are you sure? </p>
          <button onClick={this.toggleDelete.bind(this)} className="pure-button button-primary"> Cancel </button>
          <button onClick={() => deleteMember(member)} className="pure-button button-warning"> Delete </button>
        </div>
      )
    } else {
      element = (
        <div className="view">
          <label className="hand" >
            {member.name}
          </label>
          <i className="material-icons hide warning right" onClick={this.toggleDelete.bind(this)}> delete </i>
        </div>
      );
    }

    return (
      <li onDoubleClick={this.handleDoubleClick.bind(this)} onClick={this.handleClick.bind(this)}
          className={classNames({ editing: this.state.editing }, { selected: this.props.selected},  
            "pure-menu-form", "pure-menu-link", "pure-form", "hand")}>
        {element}
      </li>
    );
  }
}

export default MemberName;
