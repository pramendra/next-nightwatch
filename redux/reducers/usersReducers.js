// @flow
import { usersType } from '../constants/actionTypes';

export const initialState = {};

export default (state: any = initialState, action: any) => {
  const { type, error = null, data } = action;
  switch (type) {
    case usersType.FETCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case usersType.FETCH_SUCCESS: {
      return {
        ...state,
        data,
        loading: false,
      };
    }
    case usersType.FETCH_ERROR: {
      return {
        ...state,
        error,
        data,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
