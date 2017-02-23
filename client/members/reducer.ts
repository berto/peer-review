import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Member, Members, State } from '../main/model';

import {
  GET_TEAM_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER
} from './actions';

const initialState: State = {teams: [], members: {list: [], team: null}};

export default handleActions<State, Member>({
  [GET_TEAM_MEMBERS]: (state: Members, action: Action<any>): Members => {
    return {team: action.payload.team, list: action.payload.members};
  },

  [ADD_MEMBER]: (state: Members, action: Action<Member>): Members => {
    return {
      list: [{
        id: action.payload.id,
        name: action.payload.name
      }, ...state.list],
      team: state.team
    };
  },

  [DELETE_MEMBER]: (state: Members, action: Action<Member>): Members => {
    let members: Member[] = state.list.filter(member => {
      return member.id !== action.payload.id
    });
    return {list: members, team: state.team};
  },

  [EDIT_MEMBER]: (state: Members, action: Action<Member>): Members => {
    let members: Member[] =  <Member[]>state.list.map(member => {
      return member.id === action.payload.id
        ? assign(<Member>{}, member, { name: action.payload.name })
        : member
    });
    return {list: members, team: state.team};
  },
}, initialState);
