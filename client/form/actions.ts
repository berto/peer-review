import { Team, Survey, MemberFeedback } from '../main/model';
import axios from 'axios';

import { 
  SUBMIT_FEEDBACK
} from './constants/ActionTypes';

const submitFeedback = (survey_id, feedback:MemberFeedback[]) => {
  return dispatch => {
    axios.post(`/api/survey/${survey_id}/feedback`, feedback).then(() => {
      dispatch({ type: SUBMIT_FEEDBACK})
    })
  }
};

export const actions = {
  submitFeedback
}
