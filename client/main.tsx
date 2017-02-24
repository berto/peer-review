import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';
import { State } from './main/model';

import App from './main/components/App';
import SurveyForm from './surveys/components/SurveyForm';
import rootReducer from './main/reducer';

const initialState: State = {
  teams: {list: [], selected: null}, 
  surveys: {list: [], selected: null},
  members: {list: [], selected: null},
  feedback: {text: [], rating: 0}
};

const store: Store<any> = createStore(rootReducer, initialState, applyMiddleware(
  thunk
));

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/survey/:id" component={SurveyForm}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
