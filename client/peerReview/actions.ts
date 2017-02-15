import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Team } from './model';

export const ADD_TEAM = 'ADD_TEAM';
export const DELETE_TEAM = 'DELETE_TEAM';
export const EDIT_TEAM = 'EDIT_TEAM';

const addTeam = createAction<Team, string>(
  ADD_TEAM,
  (text: string) => ({ text })
);

const deleteTeam = createAction<Team, Team>(
  DELETE_TEAM,
  (team: Team) => team
);

const editTeam = createAction<Team, Team, string>(
  EDIT_TEAM,
  (team: Team, newText: string) => <Team>assign(team, { text: newText })
);

export {
  addTeam,
  deleteTeam,
  editTeam,
}
