import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import actions from '../action';
import {Team, Member, Members, Teams} from '../model';

import { LeftNav } from '../../teams';
import { Members as MembersComponent } from '../../members';

interface AppProps {
  teams: Teams
  members: Members
  actions: any
}

class App extends React.Component<AppProps, void> {
  render() {
    const { actions, teams, members } = this.props;
    return (
      <div>
        <LeftNav 
          addTeam={actions.addTeam}
          teams={teams}
          getTeamMembers={actions.getTeamMembers}
          getTeams={actions.getTeams}
          editTeam={actions.editTeam}
          deleteTeam={actions.deleteTeam}/>
        <MembersComponent 
          team={members.team}
          addMember={actions.addMember}
          members={members.list}
          editMember={actions.editMember}
          deleteMember={actions.deleteMember}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  members: state.members,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
