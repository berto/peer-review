import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import actions from '../action';
import {Team, Member, Members, Surveys, Teams} from '../model';

import { LeftNav, TeamInfo } from '../../teams'; 
interface AppProps {
  teams: Teams
  members: Members
  surveys: Surveys
  actions: any
}

class App extends React.Component<AppProps, void> {
  render() {
    const { actions, teams, members, surveys } = this.props;
    let team;
    if (teams.selected) {
      team = (
        <TeamInfo 
          team={teams.selected}
          addMember={actions.addMember}
          members={members.list}
          member={members.selected}
          survey={surveys.selected}
          editMember={actions.editMember}
          setMember={actions.setMember}
          deleteMember={actions.deleteMember}
          addSurvey={actions.addSurvey}
          setSurvey={actions.setSurvey}
          surveys={surveys.list}
          editSurvey={actions.editSurvey}
          deleteSurvey={actions.deleteSurvey}/>
      )
    }
    return (
      <div className="pure-g">
        <LeftNav 
          addTeam={actions.addTeam}
          team={teams.selected}
          teams={teams.list}
          getTeamMembers={actions.getTeamMembers}
          getTeamSurveys={actions.getTeamSurveys}
          getTeams={actions.getTeams}
          setTeam={actions.setTeam}
          editTeam={actions.editTeam}
          deleteTeam={actions.deleteTeam}/>
        {team}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  members: state.members,
  surveys: state.surveys,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
