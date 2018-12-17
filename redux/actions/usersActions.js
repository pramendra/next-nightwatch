// @flow
import { usersType } from '../constants/actionTypes';

export const fetchUser = (name: string = 'pramendra') => {
  return {
    type: usersType.FETCH,
    payload: {},
    uri: `/users/${name}`,
  };
};
