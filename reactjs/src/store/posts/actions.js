import API from '../../../../api';
import {
  SET_POSTS
} from '../actionsTypes';
import { shouldLoad } from '../utils';

// ! export (see example below)

export const getPosts= postId => async (dispatch, getState) => {
  const { posts: { questionLoadedAt: { [postId]: loadedAt = 0 } } } = getState();
  if (!shouldLoad(loadedAt)) return;
  const posts= await API.get(`/post?postId=${postId}`);
  dispatch({ type: SET_POSTS, posts, postId });
};
