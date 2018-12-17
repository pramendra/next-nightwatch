// @flow
import 'isomorphic-unfetch';
import { of, from } from 'rxjs';
import { mergeMap, catchError, map, debounceTime } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import type { ActionsObservable } from 'redux-observable';
import getConfig from 'next/config';
import { usersType, repoType } from '../constants/actionTypes';

const { publicRuntimeConfig } = getConfig();
const baseURL = `${publicRuntimeConfig.BASE_API_URL}`;

const QS = `client_id=${publicRuntimeConfig.GITHUB_CLIENT_ID}&client_secret=${
  publicRuntimeConfig.GITHUB_CLIENT_SECRET
}`;

const apiX = (type: any) => (action$: ActionsObservable) => {
  return action$.pipe(
    ofType(type.FETCH),
    debounceTime(250),
    mergeMap(({ uri, payload }) => {
      const promise = fetch(`${baseURL}${uri}?${QS}`).then(response =>
        response.json(),
      );
      return from(promise).pipe(
        map(data => {
          return {
            type: type.FETCH_SUCCESS,
            data,
            payload,
          };
        }),
        catchError(error =>
          of({
            type: type.FETCH_ERROR,
            error,
            requestParam: payload,
          }),
        ),
      );
    }),
  );
};

export const rootEpic = combineEpics(
  //
  apiX(usersType),
  apiX(repoType),
);
