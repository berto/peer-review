import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  LeftNav,
  model,
  addTeam,
  editTeam,
  deleteTeam
} from '../../peerReview';

interface AppProps {
  teams: model.Team[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { teams, dispatch } = this.props;
    
    return (
      <div>
        <LeftNav 
          addTeam={(text: string) => dispatch(addTeam(text))}
          teams={teams}
          editTeam={(t,s) => dispatch(editTeam(t, s))}
          deleteTeam={(t: model.Team) => dispatch(deleteTeam(t))}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams
});

export default connect(mapStateToProps)(App);
