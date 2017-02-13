import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Resource } from './model';

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const DELETE_RESOURCE = 'DELETE_RESOURCE';
export const EDIT_RESOURCE = 'EDIT_RESOURCE';

const addResource = createAction<Resource, string>(
  ADD_RESOURCE,
  (text: string) => ({ text, completed: false })
);

const deleteResource = createAction<Resource, Resource>(
  DELETE_RESOURCE,
  (resource: Resource) => resource
);

const editResource = createAction<Resource, Resource, string>(
  EDIT_RESOURCE,
  (resource: Resource, newText: string) => <Resource>assign(resource, { text: newText })
);

export {
  addResource,
  deleteResource,
  editResource,
}
