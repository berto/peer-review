import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { Survey, Surveys, State } from '../main/model';

import {
  GET_TEAM_SURVEYS,
  ADD_SURVEY,
  SET_SURVEY,
  DELETE_SURVEY,
  EDIT_SURVEY
} from './constants/ActionTypes';

const initialState: State = {
  teams: {list: [], selected: null}, 
  surveys: {list: [], selected: null},
  members: {list: [], selected: null}
};

export default handleActions<State, Survey>({
  [GET_TEAM_SURVEYS]: (state: Surveys, action: Action<Survey[]>): Surveys => {
    return {selected: null, list: action.payload};
  },

  [SET_SURVEY]: (state: Surveys, action: Action<Survey>): Surveys => {
    return {list: state.list, selected: action.payload};
  },

  [ADD_SURVEY]: (state: Surveys, action: Action<Survey>): Surveys => {
    return {
      list: [{
        id: action.payload.id,
        name: action.payload.name
      }, ...state.list],
      selected: state.selected
    };
  },

  [DELETE_SURVEY]: (state: Surveys, action: Action<Survey>): Surveys => {
    let surveys: Survey[] = state.list.filter(survey => {
      return survey.id !== action.payload.id
    });
    return {list: surveys, selected: null};
  },

  [EDIT_SURVEY]: (state: Surveys, action: Action<Survey>): Surveys => {
    let surveys: Survey[] =  <Survey[]>state.list.map(survey => {
      return survey.id === action.payload.id
        ? assign(<Survey>{}, survey, { name: action.payload.name })
        : survey
    });
    return {list: surveys, selected: state.selected};
  },
}, initialState);
