/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import { actions } from '../actions';

// describe('actions', () => {
//   it('creates new team', () => {
//     const { payload: team } = actions.addTeam('hello');
//
//     expect(team.name).to.eql('hello');
//   });
//
//   it('deletes team', () => {
//     const { payload: team } = actions.deleteTeam({
//       id: "999",
//       name: ''
//     });
//
//     expect(team.id).to.eql("999");
//   });
//
//   it('edits team', () => {
//     const { payload: team } = actions.editTeam({
//       id: "999",
//       name: 'hi'
//     }, 'bye');
//     expect(team).to.eql({ id: "999", name: 'bye' });
//   });
//
// });
