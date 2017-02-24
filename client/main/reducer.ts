import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import teams from '../teams';
import members from '../members';
import surveys from '../surveys';
import feedback from '../feedback';

const rootReducer = combineReducers({
  routing: routerReducer,
  teams,
  members,
  surveys,
  feedback
});

export default rootReducer;
