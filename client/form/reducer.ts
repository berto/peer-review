import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Member, MemberFeedback, Members, Form, State } from '../main/model';
import initialState from '../main/initialState';

import {
  SUBMIT_FEEDBACK
} from './constants/ActionTypes';

export default handleActions<State, Form>({

  [SUBMIT_FEEDBACK]: (state: Form): Form => {
    state.submitted = true;
    return state;
  }

}, initialState);
