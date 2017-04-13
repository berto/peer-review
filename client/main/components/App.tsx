import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import actions from '../action';
import {Team, Member, Cohorts, Members, Surveys, Feedback, Teams} from '../model';

import { LeftNav, TeamInfo, Cohort } from '../../teams'; 
import { Feedback as FeedbackInfo } from '../../feedback'; 
interface AppProps {
  teams: Teams;
  cohorts: Cohorts;
  members: Members;
  surveys: Surveys;
  feedback: Feedback;
  actions: any;
}

class App extends React.Component<AppProps, void> {
  componentWillMount() {
    let token = localStorage.getItem('user_token');
    if (!token) {
      window.location.href = '/login';
    }
  }
  render() {
    const { actions, teams, cohorts, members, surveys, feedback } = this.props;
    let team, feedbackInfo;
    if (cohorts.show) {
      team = (
        <section className="pure-u team">
          <header>
            <h1> Galvanize Cohorts </h1>
          </header>
          <ul className="pure-menu-list cohorts">
            {cohorts.list.map((cohort,i) => 
              <Cohort 
                key={i} 
                addCohort={actions.addCohort}
                getTeams={actions.getTeams}
                setTeam={actions.setTeam}
                toggleCohorts={actions.toggleCohorts}
                cohort={cohort}/>
            )}
          </ul>
        </section>
      )
    } else if (teams.selected) {
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
          deleteSurvey={actions.deleteSurvey}
          getMemberFeedback={actions.getMemberFeedback}/>
      )
    } else {
      team = (
        <p className="emoji"> 👻 </p>
      ) 
    }
    if (members.selected && !cohorts.show) {
      feedbackInfo = (
        <FeedbackInfo
          survey={surveys.selected}
          member={members.selected}
          feedback={feedback}/>
      )
    }
    return (
      <div className="app">
        <LeftNav 
          addTeam={actions.addTeam}
          team={teams.selected}
          teams={teams.list}
          cohorts={cohorts.list}
          getTeamMembers={actions.getTeamMembers}
          getTeamSurveys={actions.getTeamSurveys}
          getTeams={actions.getTeams}
          getCohorts={actions.getCohorts}
          toggleCohorts={actions.toggleCohorts}
          setTeam={actions.setTeam}
          editTeam={actions.editTeam}
          deleteTeam={actions.deleteTeam}/>
        {team}
        {feedbackInfo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  cohorts: state.cohorts,
  members: state.members,
  surveys: state.surveys,
  feedback: state.feedback,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
