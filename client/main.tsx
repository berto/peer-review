import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';
import { State } from './main/model';
import initialState from './main/initialState';

import App from './main/components/App';
import SurveyForm from './form/components/SurveyForm';
import Login from './auth/components/Login.tsx';
import rootReducer from './main/reducer';

const store: Store<any> = createStore(rootReducer, initialState, applyMiddleware(
  thunk
));

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/survey/:id" component={SurveyForm}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
