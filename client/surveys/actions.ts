import { Team, Survey } from '../main/model';
import axios from '../main/axios';

import { 
  GET_TEAM_SURVEYS, 
  ADD_SURVEY, 
  GET_SURVEY, 
  SET_SURVEY, 
  EDIT_SURVEY, 
  DELETE_SURVEY 
} from './constants/ActionTypes';

const getTeamSurveys = (team: Team) => {
  return dispatch => {
    axios.get(`/api/team/${team.id}/survey/`).then(result => {
      dispatch({ type: GET_TEAM_SURVEYS, payload: result.data})
    })
  }
};

const getSurvey = (id: string) => {
  return dispatch => {
    axios.get(`/api/survey/${id}`).then(result => {
      dispatch({ type: GET_SURVEY, payload: result.data})
    })
  }
};

const setSurvey = (survey: Survey) => {
  return { type: SET_SURVEY, payload: survey};
};

const addSurvey = (team: Team, name: string) => {
  return dispatch => {
    axios.post(`/api/team/${team.id}/survey/`, {name}).then(result => {
      dispatch({ type: ADD_SURVEY, payload: {name, id: result.data.id}})
    })
  }
};

const deleteSurvey = (survey: Survey) => {
  return dispatch => {
    axios.delete(`/api/survey/${survey.id}`).then(result => {
      let payload = {id: survey.id, success: result.data.success };
      dispatch({ type: DELETE_SURVEY, payload })
    })
  }
};

const editSurvey = (survey: Survey, name: string) => {
  return dispatch => {
    axios.put(`/api/survey/${survey.id}`, {name}).then(result => {
      let payload = {id: survey.id, name, success: result.data.success };
      dispatch({ type: EDIT_SURVEY, payload })
    })
  }
};

export const actions = {
  getTeamSurveys,
  addSurvey,
  setSurvey,
  getSurvey,
  deleteSurvey,
  editSurvey
}
