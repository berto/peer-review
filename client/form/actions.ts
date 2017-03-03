import { Team, Survey } from '../main/model';
import axios from 'axios';

import { 
  ADD_PEER, 
} from './constants/ActionTypes';

const addPeer = () => {
  return { type: ADD_PEER };
};

export const actions = {
  addPeer
}
