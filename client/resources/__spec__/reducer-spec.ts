/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import reducer from '../reducer';
import { Resource } from '../model';

import {
  ADD_RESOURCE,
  DELETE_RESOURCE,
  EDIT_RESOURCE
} from '../actions';

describe('reducer', () => {
  it('handles add', () => {
    let state: Resource[] = [{ id: 0, text: ''}];

    state = reducer(state, {
      type: ADD_RESOURCE,
      payload: { text: 'hello'}
    });

    expect(state[0]).to.eql(
      { id: 1, text: 'hello'}
    );
  });

  it('handles delete', () => {
    let state: Resource[] = [{ id: 1, text: ''}];

    state = reducer(state, {
      type: DELETE_RESOURCE,
      payload: { id: 1 } as Resource
    });

    expect(state).to.eql([]);
  });

  it('handles edit', () => {
    let state: Resource[] = [{ id: 1, text: '' }];

    state = reducer(state, {
      type: EDIT_RESOURCE,
      payload: { id: 1, text: 'hello' } as Resource
    });

    expect(state[0]).to.eql(
      { id: 1, text: 'hello' }
    );
  });

});
