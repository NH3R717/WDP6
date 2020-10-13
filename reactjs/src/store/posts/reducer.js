import {
  SET_POST,
} from '../actionTypes';
import { arrayToObject, removeIdFromObject, removeIdFromArray } from '../utils';

const startState = {
  postLoadedAt: {},
  byPostId: {},
  byId: {},
};

export default function choiceReducer(state = startState, action) {
  const { type, ...payload } = action;
    switch (type) {
    //   ! reducer functions go here
    
    default: return state;
  }
}
