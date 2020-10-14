import API from '../../../../api';
import {
    SET_POST,
    SET_POSTS,
    ADD_POST,
    DELETE_POST,
} from '../actionsTypes';
import { shouldLoad } from '../utils';

const startState = {
  postLoadedAt: {},
  byPostId: {},
  byId: {},
};

export default function postReducer(state = startState, action) {
  const { type, ...payload } = action;
    switch (type) {
    //   ! reducer functions go here
    
    default: return state;
  }
}
