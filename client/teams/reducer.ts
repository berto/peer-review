import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Team, Teams, State } from '../main/model';

import {
  GET_TEAMS,
  ADD_TEAM,
  DELETE_TEAM,
  EDIT_TEAM
} from './actions';

const initialState: State = {teams: [], members: {list: [], team: null}};

export default handleActions<State, Teams>({
  [GET_TEAMS]: (state: State, action: Action<Teams>): Teams => {
    return action.payload
  },

  [ADD_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    return [{
        id: action.payload.id,
        name: action.payload.name
      }, ...state]
  },

  [DELETE_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    return state.filter(team => {
      return team.id !== action.payload.id
    });
  },

  [EDIT_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    return <Teams>state.map(team => {
      return team.id === action.payload.id
        ? assign(<Team>{}, team, { name: action.payload.name })
        : team
    });
  },
}, initialState);
