import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Member, Members, State } from '../main/model';
import initialState from '../main/initialState';

import {
  GET_TEAM_MEMBERS,
  GET_SURVEY_MEMBERS,
  ADD_MEMBER,
  SET_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER
} from './constants/ActionTypes';

export default handleActions<State, Member>({
  [GET_TEAM_MEMBERS]: (state: Members, action: Action<Member[]>): Members => {
    return {selected: null, list: action.payload};
  },

  [GET_SURVEY_MEMBERS]: (state: Members, action: Action<Member[]>): Members => {
    return {selected: null, list: action.payload};
  },

  [SET_MEMBER]: (state: Members, action: Action<Member>): Members => {
    return {list: state.list, selected: action.payload};
  },

  [ADD_MEMBER]: (state: Members, action: Action<Member>): Members => {
    return {
      list: [{
        id: action.payload.id,
        name: action.payload.name
      }, ...state.list],
      selected: state.selected
    };
  },

  [DELETE_MEMBER]: (state: Members, action: Action<Member>): Members => {
    let members: Member[] = state.list.filter(member => {
      return member.id !== action.payload.id
    });
    return {list: members, selected: null};
  },

  [EDIT_MEMBER]: (state: Members, action: Action<Member>): Members => {
    let members: Member[] =  <Member[]>state.list.map(member => {
      return member.id === action.payload.id
        ? assign(<Member>{}, member, { name: action.payload.name })
        : member
    });
    return {list: members, selected: state.selected};
  },
}, initialState);
