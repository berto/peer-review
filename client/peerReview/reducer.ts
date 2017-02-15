import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Team, IState } from './model';
import {
  ADD_TEAM,
  DELETE_TEAM,
  EDIT_TEAM
} from './actions';

const initialState: IState = [<Team>{
  text: 'g38',
  id: 0
}];

export default handleActions<IState, Team>({
  [ADD_TEAM]: (state: IState, action: Action<Team>): IState => {
    return [{
      id: state.reduce((maxId, team) => Math.max(team.id, maxId), -1) + 1,
      text: action.payload.text
    }, ...state];
  },

  [DELETE_TEAM]: (state: IState, action: Action<Team>): IState => {
    return state.filter(team =>
      team.id !== action.payload.id
    );
  },

  [EDIT_TEAM]: (state: IState, action: Action<Team>): IState => {
    return <IState>state.map(team =>
      team.id === action.payload.id
        ? assign(<Team>{}, team, { text: action.payload.text })
        : team
    );
  },
}, initialState);
