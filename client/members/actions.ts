import { Team, Member, Survey } from '../main/model';
import axios from '../main/axios';

import { 
  GET_TEAM_MEMBERS, 
  GET_SURVEY_MEMBERS, 
  ADD_MEMBER, 
  SET_MEMBER, 
  EDIT_MEMBER, 
  DELETE_MEMBER 
} from './constants/ActionTypes';

const getTeamMembers = (team: Team) => {
  return dispatch => {
    axios.get(`/api/team/${team.id}/member/`).then(result => {
      dispatch({ type: GET_TEAM_MEMBERS, payload: result.data})
    })
  }
};

const getSurveyMembers = (survey_id: number) => {
  return dispatch => {
    axios.get(`/api/survey/${survey_id}/member/`).then(result => {
      dispatch({ type: GET_SURVEY_MEMBERS, payload: result.data})
    }).catch(error => {
      let survey_id = window.location.pathname.split('/')[2];
      localStorage.setItem('survey_id', survey_id);
      window.location.href = '/login';
    });
  }
};

const setMember = (member: Member) => {
  return { type: SET_MEMBER, payload: member };
};

const addMember = (team: Team, name: string) => {
  return dispatch => {
    axios.post(`/api/team/${team.id}/member/`, {name}).then(result => {
      dispatch({ type: ADD_MEMBER, payload: {name, id: result.data.id}})
    })
  }
};

const deleteMember = (member: Member) => {
  return dispatch => {
    axios.delete(`/api/member/${member.id}`).then(result => {
      let payload = {id: member.id, success: result.data.success };
      dispatch({ type: DELETE_MEMBER, payload })
    })
  }
};

const editMember = (member: Member, name: string) => {
  return dispatch => {
    axios.put(`/api/member/${member.id}`, {name}).then(result => {
      let payload = {id: member.id, name, success: result.data.success };
      dispatch({ type: EDIT_MEMBER, payload })
    })
  }
};

export const actions = {
  getTeamMembers,
  getSurveyMembers,
  addMember,
  setMember,
  deleteMember,
  editMember
}
