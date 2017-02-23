import { combineReducers } from 'redux';

import teams from '../teams';
import members from '../members';

const rootReducer = combineReducers({
  teams,
  members
});

export default rootReducer;
