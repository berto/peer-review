import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import actions from '../action';
import {Team, Member} from '../model';

import { LeftNav } from '../../teams';

interface AppProps {
  teams: Team[]
  members: Member[]
  actions: any
}

class App extends React.Component<AppProps, void> {
  render() {
    const { actions, teams } = this.props;
    return (
      <div>
        <LeftNav 
          addTeam={actions.addTeam}
          teams={teams}
          getMembers={actions.getMembers}
          getTeams={actions.getTeams}
          editTeam={actions.editTeam}
          deleteTeam={actions.deleteTeam}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
