import { combineReducers } from 'redux';

import teams from '../teams';
import members from '../members';
import surveys from '../surveys';
import feedback from '../feedback';

const rootReducer = combineReducers({
  teams,
  members,
  surveys,
  feedback
});

export default rootReducer;
