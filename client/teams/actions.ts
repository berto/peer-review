import { Team } from '../main/model';
import axios from 'axios';

export const GET_TEAMS = 'GET_TEAMS';
export const ADD_TEAM = 'ADD_TEAM';
export const DELETE_TEAM = 'DELETE_TEAM';
export const EDIT_TEAM = 'EDIT_TEAM';

const getTeams = () => {
  return dispatch => {
    axios.get('/api/team/').then(result => {
      dispatch({ type: GET_TEAMS, payload: result.data})
    })
  }
};

const addTeam = (name: string) => {
  return dispatch => {
    axios.post('/api/team/', {name}).then(result => {
      dispatch({ type: ADD_TEAM, payload: {name, id: result.data.id}})
    })
  }
};

const deleteTeam = (team: Team) => {
  return dispatch => {
    axios.delete(`/api/team/${team.id}`).then(result => {
      let payload = {id: team.id, success: result.data.success };
      dispatch({ type: DELETE_TEAM, payload })
    })
  }
};

const editTeam = (team: Team, name: string) => {
  return dispatch => {
    axios.put(`/api/team/${team.id}`, {name}).then(result => {
      let payload = {id: team.id, name, success: result.data.success };
      dispatch({ type: EDIT_TEAM, payload })
    })
  }
};

export const actions = {
  getTeams,
  addTeam,
  deleteTeam,
  editTeam
}
