import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Team, IState } from '../main/model';

import {
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER
} from './actions';

export default handleActions<IState, Team>({
  [GET_MEMBERS]: (state: IState, action: Action<IState>): IState => {
    return action.payload;
  },

  [ADD_MEMBER]: (state: IState, action: Action<Team>): IState => {
    return [{
      id: action.payload.id,
      name: action.payload.name
    }, ...state];
  },

  [DELETE_MEMBER]: (state: IState, action: Action<Team>): IState => {
    return state.filter(team => {
      return team.id !== action.payload.id
    });
  },

  [EDIT_MEMBER]: (state: IState, action: Action<Team>): IState => {
    return <IState>state.map(team => {
      return team.id === action.payload.id
        ? assign(<Team>{}, team, { name: action.payload.name })
        : team
    });
  },
}, []);
