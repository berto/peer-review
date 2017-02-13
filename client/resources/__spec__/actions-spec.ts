/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import * as actions from '../actions';

describe('actions', () => {
  it('creates new resource', () => {
    const { payload: resource } = actions.addResource('hello');

    expect(resource.text).to.eql('hello');
  });

  it('deletes resource', () => {
    const { payload: resource } = actions.deleteResource({
      id: 999,
      text: ''
    });

    expect(resource.id).to.eql(999);
  });

  it('edits resource', () => {
    const { payload: resource } = actions.editResource({
      id: 999,
      text: 'hi'
    }, 'bye');
    expect(resource).to.eql({ id: 999, text: 'bye' });
  });

});
