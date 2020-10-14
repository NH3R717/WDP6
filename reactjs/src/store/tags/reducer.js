import {
    SET_TAG,
    SET_TAGS,
    ADD_TAG,
    DELETE_TAG,
} from '../actionsTypes';
import { arrayToObject, removeIdFromObject, removeIdFromArray } from '../utils';

const startState = {
  tagLoadedAt: {},
  byTagId: {},
  byId: {},
};

export default function tagReducer(state = startState, action) {
  const { type, ...payload } = action;
    switch (type) {
    case SET_TAGS: {
      const { allTags } = payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          ...arrayToObject(allTags),
        },
        allTags: allTags.map(tag => tag.id),
        tagLoadedAt: Date.now(),
      };
    }
    case SET_TAG: {
      const { tag } = payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [tag.id]: tag,
        },
      };
    }
    case DELETE_TAG: {
      const { id } = payload;
      return {
        ...state,
        byId: removeIdFromObject(id, state.byId),
        tag: removeIdFromArray(id, state.tag),
      };
    }
    case ADD_TAG: {
      const { id } = payload;
      const allIds = [...state.tag, id];
      return {
        ...state,
        tag: [...new Set(allIds)],
      };
    }
    default: return state;
  }
}
