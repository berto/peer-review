import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import teams from '../teams';
import { cohorts } from '../teams';
import members from '../members';
import surveys from '../surveys';
import feedback from '../feedback';
import form from '../form';

const rootReducer = combineReducers({
  routing: routerReducer,
  teams,
  cohorts,
  members,
  surveys,
  feedback,
  form
});

export default rootReducer;
