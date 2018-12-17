// @flow
import { combineReducers } from 'redux';
import users, { initialState as usersState } from './usersReducers';
import repo, { initialState as repoState } from './repoReducers';

export const initialState = {
  users: usersState,
  repo: repoState,
};

export default combineReducers({
  users,
  repo,
});
