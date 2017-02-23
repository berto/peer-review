import { Team, Member } from '../main/model';
import axios from 'axios';

export const ADD_MEMBER = 'ADD_MEMBER';
export const GET_TEAM_MEMBERS = 'GET_TEAM_MEMBERS';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const EDIT_MEMBER = 'EDIT_MEMBER';

const getTeamMembers = (team: Team) => {
  return dispatch => {
    axios.get(`/api/team/${team.id}/member/`).then(result => {
      dispatch({ type: GET_TEAM_MEMBERS, payload: {team, members: result.data}})
    })
  }
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
  addMember,
  deleteMember,
  editMember
}
