import { Member, IState } from '../main/model';
import axios from 'axios';

export const GET_MEMBERS = 'GET_MEMBERS';
export const ADD_MEMBER = 'ADD_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const EDIT_MEMBER = 'EDIT_MEMBER';

const getMembers = () => {
  return dispatch => {
    axios.get('/api/members/').then(result => {
      dispatch({ type: GET_MEMBERS, payload: result.data})
    })
  }
};

const addMember = (name: string) => {
  return dispatch => {
    axios.post('/api/members/', {name}).then(result => {
      dispatch({ type: ADD_MEMBER, payload: {name, id: result.data.id[0]}})
    })
  }
};

const deleteMember = (member: Member) => {
  return dispatch => {
    axios.delete(`/api/members/${member.id}`).then(result => {
      let payload = {id: member.id, success: result.data.success };
      dispatch({ type: DELETE_MEMBER, payload })
    })
  }
};

const editMember = (member: Member, name: string) => {
  return dispatch => {
    axios.put(`/api/members/${member.id}`, {name}).then(result => {
      let payload = {id: member.id, name, success: result.data.success };
      dispatch({ type: EDIT_MEMBER, payload })
    })
  }
};

export const actions = {
  getMembers,
  addMember,
  deleteMember,
  editMember
}
