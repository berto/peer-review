import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Resource, IState } from './model';
import {
  ADD_RESOURCE,
  DELETE_RESOURCE,
  EDIT_RESOURCE
} from './actions';

const initialState: IState = [<Resource>{
  text: 'Redux with TypeScript',
  id: 0
}];

export default handleActions<IState, Resource>({
  [ADD_RESOURCE]: (state: IState, action: Action<Resource>): IState => {
    return [{
      id: state.reduce((maxId, resource) => Math.max(resource.id, maxId), -1) + 1,
      text: action.payload.text
    }, ...state];
  },

  [DELETE_RESOURCE]: (state: IState, action: Action<Resource>): IState => {
    return state.filter(resource =>
      resource.id !== action.payload.id
    );
  },

  [EDIT_RESOURCE]: (state: IState, action: Action<Resource>): IState => {
    return <IState>state.map(resource =>
      resource.id === action.payload.id
        ? assign(<Resource>{}, resource, { text: action.payload.text })
        : resource
    );
  },
}, initialState);
