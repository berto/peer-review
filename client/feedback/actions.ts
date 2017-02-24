import { Member, Survey } from '../main/model';
import axios from 'axios';

import { 
  GET_MEMBER_FEEDBACK, 
} from './constants/ActionTypes';

const format = (feedbacks) => {
  return feedbacks.reduce((result, feedback, i) => {
    result.text = result.text || [];  
    result.rating = result.rating || 0;  
    result.text.push(feedback.feedback);
    result.rating += feedback.score;
    if (i == feedbacks.length -1) {
      result.rating /= feedbacks.length;  
    } 
    return result;
  }, {});
}

const getMemberFeedback = (survey: Survey, member: Member) => {
  let url: string = survey ? `/api/survey/${survey.id}/member/${member.id}/feedback` : `/api/member/${member.id}/feedback/`;
  return dispatch => {
    axios.get(url).then(result => {
      dispatch({ type: GET_MEMBER_FEEDBACK, payload: format(result.data)})
    })
  }
};

export const actions = {
  getMemberFeedback
}
