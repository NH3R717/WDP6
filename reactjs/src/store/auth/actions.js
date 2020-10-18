// ! goes in all actions
import API from '../../API';
import {
  SET_LOGGED_IN,
} from '../actionsTypes';

export const logout = () => {
  localStorage.removeItem('token');
  return { type: SET_LOGGED_IN, loggedIn: false };
};

// ! Hook up this function
export const loginUser = ( username, password ) => async (dispatch) => {
  const { pass, loggedIn } = await API.post('/auth/login', { username, password  });
  localStorage.setItem('token', pass);
  dispatch({ type: SET_LOGGED_IN, loggedIn });
};

export const registerUser = ({avatar, city, password, username}) => async (dispatch) => {
  console.log('From react form >>>', avatar, username, password)
  const { token, loggedIn } = await API.post('/auth/signup', { username, password, city, avatar });
  localStorage.setItem('token', token);
  console.log(token, loggedIn)
  dispatch({ type: SET_LOGGED_IN, loggedIn });
};