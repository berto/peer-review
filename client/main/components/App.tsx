import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  MainSection,
  model,
  addResource,
  editResource,
  deleteResource
} from '../../resources';

interface AppProps {
  resources: model.Resource[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { resources, dispatch } = this.props;

    return (
      <div>
        <Header addResource={(text: string) => dispatch(addResource(text))} />
        <MainSection
            resources={resources}
            editResource={(t,s) => dispatch(editResource(t, s))}
            deleteResource={(t: model.Resource) => dispatch(deleteResource(t))}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resources: state.resources
});

export default connect(mapStateToProps)(App);
