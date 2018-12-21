import { combineReducers, createStore } from 'redux';

import players from './players-reducer';

const reducer = combineReducers({
  players,
});

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
);

// Exporting dispatch and getState to be used in actions
export const { dispatch, getState } = store;

export default store;
