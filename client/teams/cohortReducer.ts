import { handleActions, Action } from 'redux-actions';
import { Cohorts, State } from '../main/model';
import initialState from '../main/initialState';

import {
  GET_COHORTS,
  TOGGLE_COHORTS
} from './constants/ActionTypes';

export default handleActions<State, Cohorts>({

  [GET_COHORTS]: (state: Cohorts, action: Action<any[]>) => {
    const cohorts = {
      show: true,
      list: action.payload
    } 
    return cohorts;
  },

  [TOGGLE_COHORTS]: (state: Cohorts, action: Action<boolean>) => {
    const cohorts = {
      show: action.payload,
      list: state.list
    } 
    return cohorts;
  }
  
}, initialState);
