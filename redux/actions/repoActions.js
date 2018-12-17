// @flow
import { repoType } from '../constants/actionTypes';

export const fetchRepo = (name: string = 'pramendra') => {
  return {
    type: repoType.FETCH,
    payload: {},
    uri: `/users/${name}/repos`,
  };
};
