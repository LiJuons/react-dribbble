import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'https://dribbble-server-dev.herokuapp.com';

export function signinUser({ email, username, name, password }) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/login`, { email, password })
      .then(response => {
        browserHistory.push('/ok');
      })
      .catch((response) => {
        dispatch(authError(response.request.status));
      });
  }
}


export function signupUser({ email, username, name, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/create`, { email, username, name, password })
      .then(response => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/ok');
      })
      .catch(error => {
        dispatch(authError(error.response.data[0].msg));
      });
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
