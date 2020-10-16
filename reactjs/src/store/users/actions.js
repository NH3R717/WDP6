import API from '../../../../api';
import {
    SET_USER,
    ADD_USER,
    DELETE_USER,
} from '../actionsTypes';
import { shouldLoad } from '../utils';

export const getAllUsers = () => async (dispatch, getState) => {
  const { users: { userLoadedAt } } = getState();
  if (!shouldLoad(userLoadedAt)) return;
  const users = await API.get('/users');
  dispatch({ type: SET_USERS, users });
};

export const getOneByIdUser = id => async (dispatch, getState) => {
  const { user: { byId: { [id]: existingUser } } } = getState();
dispatch(getUserSelect(id));
  if (existingUser) return;
  const user = await API.get(`/users/${id}`);
  dispatch({ type: SET_USER, user });
};

export const deleteUser = id => async (dispatch) => {
  await API.delete(`users/${id}`);
  dispatch({ type: DELETE_USER, id });
};

export const addUser = (user) => async (dispatch) => {
  if (user.id) {
    const updateUser = await API.put(`/users/${user.id}`, user);
    dispatch({ type: SET_USER, user: { ...user, ...updateUser } });
  } else {
    const newUser = await API.user("/users", user);
    dispatch({ type: SET_USER, user: { ...user, ...newUser } });
    dispatch({
      type: ADD_USER,
      id: newUser.id,
      userId: newUser.userId,
    });
  }
};
