import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { State, Feedback } from '../main/model';
import initialState from '../main/initialState';

import { 
  GET_MEMBER_FEEDBACK, 
} from './constants/ActionTypes';

export default handleActions<State, Feedback>({
  [GET_MEMBER_FEEDBACK]: (state: Feedback, action: Action<Feedback>): Feedback => {
    return action.payload;
  }

}, initialState);
