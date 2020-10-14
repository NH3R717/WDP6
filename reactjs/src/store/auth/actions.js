import API from '../../../../api';
import {
  SET_LOGGED_IN,
} from '../actionsTypes';

export const logout = () => {
  localStorage.removeItem('token');
  return { type: SET_LOGGED_IN, loggedIn: false };
};

export const login = (username, password) => async (dispatch) => {
  const { pass, loggedIn } = await API.post('/auth/login', { username, password });
  localStorage.setItem('token', pass);
  dispatch({ type: SET_LOGGED_IN, loggedIn });
};
