import API from '../../../../api';
import {
    SET_POST,
    SET_POSTS,
    ADD_POST,
    DELETE_POST,
} from '../actionsTypes';
import { shouldLoad } from '../utils';

export const getAllPosts = () => async (dispatch, getState) => {
  const { posts: { userPostsLoadedAt } } = getState();
  if (!shouldLoad(userPostsLoadedAt)) return;
  const userPosts = await API.get('/posts');
  dispatch({ type: SET_POSTS, userPosts });
};

export const getOneByIdPost = id => async (dispatch, getState) => {
  const { post: { byId: { [id]: existingPost } } } = getState();
dispatch(getPostSelect(id));
  if (existingPost) return;
  const post = await API.get(`/posts/${id}`);
  dispatch({ type: SET_POST, post });
};

export const deletePost = id => async (dispatch) => {
  await API.delete(`posts/${id}`);
  dispatch({ type: DELETE_POST, id });
};

export const addPost = (post) => async (dispatch) => {
  if (post.id) {
    const updatePost = await API.put(`/posts/${post.id}`, post);
    dispatch({ type: SET_POST, post: { ...post, ...updatePost } });
  } else {
    const newPost = await API.post("/posts", post);
    console.log(`New Post! ${{ ...newPost }}`);
    dispatch({ type: SET_POST, post: { ...post, ...newPost } });
    dispatch({
      type: ADD_POST,
      id: newPost.id,
      postId: newPost.postId,
    });
  }
};
