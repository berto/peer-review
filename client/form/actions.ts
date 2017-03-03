import { Team, Survey, MemberFeedback } from '../main/model';
import axios from 'axios';

import { 
  SUBMIT_FEEDBACK
} from './constants/ActionTypes';

const submitFeedback = (feedback:MemberFeedback[]) => {
  return { type: SUBMIT_FEEDBACK };
};

export const actions = {
  submitFeedback
}
