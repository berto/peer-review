import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Member, MemberFeedback, Members, Form, State } from '../main/model';
import initialState from '../main/initialState';

import {
  ADD_PEER,
} from './constants/ActionTypes';

export default handleActions<State, Form>({

  [ADD_PEER]: (state: Form, action: Action<MemberFeedback>): Form => {
    state.feedback.push({id: action.payload.id, name: null, rating: 0, text: null})
    return state;
  }

}, initialState);
