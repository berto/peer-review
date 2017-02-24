import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Team, Teams, State } from '../main/model';

import {
  GET_TEAMS,
  SET_TEAM,
  ADD_TEAM,
  DELETE_TEAM,
  EDIT_TEAM
} from './constants/ActionTypes';

const initialState: State = {
  teams: {list: [], selected: null}, 
  surveys: {list: [], selected: null},
  members: {list: [], selected: null},
  feedback: {text: [], rating: 0}
};

export default handleActions<State, Teams>({
  [GET_TEAMS]: (state: Teams, action: Action<Team[]>): Teams => {
    return {list: action.payload, selected: state.selected};
  },

  [SET_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    return {list: state.list, selected: action.payload};
  },

  [ADD_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    let list: Team[] = [{
      id: action.payload.id,
      name: action.payload.name
    }, ...state.list]
    return {list, selected: state.selected};
  },

  [DELETE_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    let list: Team[] = state.list.filter(team => {
      return team.id !== action.payload.id
    });
    return {list, selected: null};
  },

  [EDIT_TEAM]: (state: Teams, action: Action<Team>): Teams => {
    let list: Team[] = <Team[]>state.list.map(team => {
      return team.id === action.payload.id
        ? assign(<Team>{}, team, { name: action.payload.name })
        : team
    });
    return {list, selected: state.selected};
  },
}, initialState);
