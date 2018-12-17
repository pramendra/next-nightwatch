// @flow
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import reducer, { initialState } from './reducers';
import { rootEpic } from './epics';

export default () => {
  const epicMiddleware = createEpicMiddleware();
  const logger = createLogger({ collapsed: true }); // log every action to see what's happening behind the scenes.
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger);

  const store = createStore(reducer, initialState, reduxMiddleware);
  epicMiddleware.run(rootEpic);

  return store;
};
