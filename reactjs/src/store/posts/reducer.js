import API from '../../../../api';
import {
    SET_POST,
    SET_POSTS,
    ADD_POST,
    DELETE_POST,
} from '../actionsTypes';
import { arrayToObject, removeIdFromObject, removeIdFromArray } from '../utils';

const startState = {
  postLoadedAt: {},
  byPostId: {},
  byId: {},
};

export default function postReducer(state = startState, action) {
  const { type, ...payload } = action;
    switch (type) {
    case SET_POSTS: {
      const { allPosts } = payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          ...arrayToObject(allPosts),
        },
        allPosts: allPosts.map(post => post.id),
        postLoadedAt: Date.now(),
      };
    }
    case SET_POST: {
      const { post } = payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [post.id]: post,
        },
      };
    }
    case DELETE_POST: {
      const { id } = payload;
      return {
        ...state,
        byId: removeIdFromObject(id, state.byId),
        post: removeIdFromArray(id, state.post),
      };
    }
    case ADD_POST: {
      const { id } = payload;
      const allIds = [...state.post, id];
      return {
        ...state,
        post: [...new Set(allIds)],
      };
    }
    default: return state;
  }
}
