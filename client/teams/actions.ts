import { Team } from '../main/model';
import axios from 'axios';

import { 
  GET_TEAMS, 
  SET_TEAM, 
  ADD_TEAM, 
  EDIT_TEAM, 
  DELETE_TEAM 
} from './constants/ActionTypes';

const getTeams = () => {
  return dispatch => {
    axios.get('/api/team/').then(result => {
      dispatch({ type: GET_TEAMS, payload: result.data})
    })
  }
};

const setTeam = (team: Team) => {
  return { type: SET_TEAM, payload: team};
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
  setTeam,
  deleteTeam,
  editTeam
}
