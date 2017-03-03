import { State } from './model';

const initialState: State = {
  teams: {list: [], selected: null}, 
  surveys: {list: [], selected: null},
  members: {list: [], selected: null},
  feedback: {text: [], rating: 0},
  form: {submitted: false, feedback: [{id: 0,name: null, rating: 0, text: null}]}
};

export default initialState;
