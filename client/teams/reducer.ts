import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Team, IState } from './model';

import {
  GET_TEAMS,
  ADD_TEAM,
  DELETE_TEAM,
  EDIT_TEAM
} from './actions';
const initialState: IState = [<Team>{}];

export default handleActions<IState, Team>({
  [GET_TEAMS]: (state: IState, action: Action<IState>): IState => {
    return action.payload;
  },

  [ADD_TEAM]: (state: IState, action: Action<Team>): IState => {
    return [{
      id: action.payload.id,
      name: action.payload.name
    }, ...state];
  },

  [DELETE_TEAM]: (state: IState, action: Action<Team>): IState => {
    return state.filter(team => {
      return team.id !== action.payload.id
    });
  },

  [EDIT_TEAM]: (state: IState, action: Action<Team>): IState => {
    return <IState>state.map(team => {
      return team.id === action.payload.id
        ? assign(<Team>{}, team, { name: action.payload.name })
        : team
    });
  },
}, initialState);
