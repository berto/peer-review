import { State } from './model';

const initialState: State = {
  teams: {list: [], selected: null}, 
  cohorts: {list: [], show: false}, 
  surveys: {list: [], selected: null},
  members: {list: [], selected: null},
  feedback: {text: [], contribution: 0, futureTeammate: null, rating: 0},
  form: {submitted: false}
};

export default initialState;
