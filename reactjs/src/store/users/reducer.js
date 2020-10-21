import {
    SET_USER,
    // SET_USERS,
    ADD_USER,
    DELETE_USER,
} from '../actionsTypes';
import { removeIdFromObject, removeIdFromArray } from '../utils';
// import { arrayToObject, removeIdFromObject, removeIdFromArray } from '../utils';

const startState = {
  userLoadedAt: {},
  byUserId: {},
  byId: {},
};

export default function userReducer(state = startState, action) {
  const { type, ...payload } = action;
    switch (type) {
    // case SET_USERS: {
    //   const { allUsers } = payload;
    //   return {
    //     ...state,
    //     byId: {
    //       ...state.byId,
    //       ...arrayToObject(allUsers),
    //     },
    //     allUsers: allUsers.map(user => user.id),
    //     userLoadedAt: Date.now(),
    //   };
    // }
    case SET_USER: {
      const { user } = payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [user.id]: user,
        },
      };
    }
    case DELETE_USER: {
      const { id } = payload;
      return {
        ...state,
        byId: removeIdFromObject(id, state.byId),
        user: removeIdFromArray(id, state.user),
      };
    }
    case ADD_USER: {
      const { id } = payload;
      const allIds = [...state.user, id];
      return {
        ...state,
        user: [...new Set(allIds)],
      };
    }
    default: return state;
  }
}
