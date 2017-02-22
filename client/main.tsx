import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
{/* import promise from 'redux-promise-middleware'; */}

import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {teams: []};

const store: Store<any> = createStore(rootReducer, initialState, applyMiddleware(
  thunk
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
