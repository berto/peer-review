import { Member, Survey } from '../main/model';
import axios from '../main/axios';

import { 
  GET_MEMBER_FEEDBACK, 
} from './constants/ActionTypes';

const format = (feedbacks) => {
  return feedbacks.reduce((result, feedback, i) => {
    result.text = result.text || [];  
    result.rating = result.rating || 0;  
    result.contribution = result.contribution || 0;  
    let defaultFutureTeammate = { "No": 0, "Yes": 0, "Indifferent": 0 };
    result.futureTeammate = result.futureTeammate || defaultFutureTeammate;
    result.text.push(feedback.feedback);
    result.rating += feedback.score;
    result.contribution += feedback.contribution;
    result.futureTeammate[feedback.future_teammate]++
    if (i == feedbacks.length -1) {
      result.rating /= feedbacks.length;  
      result.contribution /= feedbacks.length;  
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
