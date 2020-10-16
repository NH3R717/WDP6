
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// reducer import
import auth from './auth/reducer';
import posts from './posts/reducer';
import tags from './tags/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
  auth,
  posts,
  tags,
  users,
});

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
);

export const store = createStore(rootReducer, middleware);