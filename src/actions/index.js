import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'https://dribbble-server-dev.herokuapp.com';

export function signinUser({ email, username, name, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/login`, { email, password })
      .then(response => {
        browserHistory.push('/ok');
      })
      .catch(() => {
        console.log('Failed.');
      });
  };
}

export function signupUser({ email, username, name, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/create`, { email, username, name, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/ok');
      })
      .catch(error => {
        //TODO remove comment
        console.log(error.response.data[0].msg);
        dispatch(authError(error.response.data[0].msg));
      });
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
