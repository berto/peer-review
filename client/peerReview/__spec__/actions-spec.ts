/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import * as actions from '../actions';

describe('actions', () => {
  it('creates new team', () => {
    const { payload: team } = actions.addTeam('hello');

    expect(team.text).to.eql('hello');
  });

  it('deletes team', () => {
    const { payload: team } = actions.deleteTeam({
      id: 999,
      text: ''
    });

    expect(team.id).to.eql(999);
  });

  it('edits team', () => {
    const { payload: team } = actions.editTeam({
      id: 999,
      text: 'hi'
    }, 'bye');
    expect(team).to.eql({ id: 999, text: 'bye' });
  });

});
