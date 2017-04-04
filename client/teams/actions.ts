import { Team } from '../main/model';
import axios from 'axios';

import { 
  GET_TEAMS, 
  GET_COHORTS, 
  ADD_COHORT, 
  TOGGLE_COHORTS, 
  SET_TEAM, 
  ADD_TEAM, 
  EDIT_TEAM, 
  DELETE_TEAM 
} from './constants/ActionTypes';

import {
  GET_TEAM_MEMBERS
} from './../members/constants/ActionTypes';

import {
  GET_TEAM_SURVEYS
} from './../surveys/constants/ActionTypes';

const getTeams = () => {
  return dispatch => {
    axios.get('/api/team/').then(result => {
      dispatch({ type: GET_TEAMS, payload: result.data})
    })
  }
};

const getCohorts = (token: string) => {
  return dispatch => {
    axios.get('/api/cohort/', {headers: { 'Authorization': `Bearer ${token}` }}).then(result => {
      dispatch({ type: GET_COHORTS, payload: result.data});
    })
  }
};

const addCohort = (token: string, url: string) => {
  return dispatch => {
    axios.post('/api/cohort/', {url}, {headers: { 'Authorization': `Bearer ${token}` }}).then(teamResult => {
      axios.get('/api/team/').then(result => {
        dispatch({ type: GET_TEAMS, payload: result.data});
      }).then(() => {
        dispatch({ type: SET_TEAM, payload: teamResult.data});
        dispatch({ type: TOGGLE_COHORTS, payload: false});
        return axios.get(`/api/team/${teamResult.data.id}/member/`);
      }).then(result => {
        dispatch({ type: GET_TEAM_MEMBERS, payload: result.data});
        return axios.get(`/api/team/${teamResult.data.id}/survey/`);
      }).then(result => {
        dispatch({ type: GET_TEAM_SURVEYS, payload: result.data});
      })
    });
  }
};

const toggleCohorts = (show:boolean) => {
  return {type: TOGGLE_COHORTS, payload: show};
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
  getCohorts,
  addCohort,
  toggleCohorts,
  addTeam,
  setTeam,
  deleteTeam,
  editTeam
}
