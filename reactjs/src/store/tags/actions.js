import API from '../../../../api';
import {
    SET_TAG,
    SET_TAGS,
    ADD_TAG,
    DELETE_TAG,
} from '../actionsTypes';
import { shouldLoad } from '../utils';

export const getAllTags = () => async (dispatch, getState) => {
  const { tags: { userTagsLoadedAt } } = getState();
  if (!shouldLoad(userTagsLoadedAt)) return;
  const userTags = await API.get('/tags');
  dispatch({ type: SET_TAGS, userTags });
};

export const getOneByIdTag = id => async (dispatch, getState) => {
  const { tag: { byId: { [id]: existingTag } } } = getState();
dispatch(getTagSelect(id));
  if (existingTag) return;
  const tag = await API.get(`/tags/${id}`);
  dispatch({ type: SET_TAG, tag });
};

export const deleteTag = id => async (dispatch) => {
  await API.delete(`tags/${id}`);
  dispatch({ type: DELETE_TAG, id });
};

export const addTag = (tag) => async (dispatch) => {
  if (tag.id) {
    const updateTag = await API.put(`/tags/${tag.id}`, tag);
    dispatch({ type: SET_TAG, tag: { ...tag, ...updateTag } });
  } else {
    const newTag = await API.tag("/tags", tag);
    dispatch({ type: SET_TAG, tag: { ...tag, ...newTag } });
    dispatch({
      type: ADD_TAG,
      id: newTag.id,
      tagId: newTag.tagId,
    });
  }
};
