// @flow
import { repoType } from '../constants/actionTypes';

export const initialState = {};

export default (state: any = initialState, action: any) => {
  const { type, error = null, data } = action;
  switch (type) {
    case repoType.FETCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case repoType.FETCH_SUCCESS: {
      return {
        ...state,
        data,
        loading: false,
      };
    }
    case repoType.FETCH_ERROR: {
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
