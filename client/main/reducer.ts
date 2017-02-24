import { combineReducers } from 'redux';

import teams from '../teams';
import members from '../members';
import surveys from '../surveys';

const rootReducer = combineReducers({
  teams,
  members,
  surveys
});

export default rootReducer;
