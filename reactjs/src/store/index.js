
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// reducer import
import auth from './auth';
import posts from './posts';
import tags from './tags';
import users from './users';

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