import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { State, Feedback } from '../main/model';

import { 
  GET_MEMBER_FEEDBACK, 
} from './constants/ActionTypes';

const initialState: State = {
  teams: {list: [], selected: null}, 
  surveys: {list: [], selected: null},
  members: {list: [], selected: null},
  feedback: {text: [], rating: 0}
};

export default handleActions<State, Feedback>({
  [GET_MEMBER_FEEDBACK]: (state: Feedback, action: Action<Feedback>): Feedback => {
    return action.payload;
  }

}, initialState);
