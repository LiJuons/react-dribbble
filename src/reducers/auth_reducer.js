import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  ERR_CLR,
} from '../actions/types';

export default function(state = { error: '', authenticated: false }, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    case AUTH_ERROR:
      return { ...state, error: action.payload };

    case ERR_CLR:
      return { ...state, error: '' };

    default:
      return state;
  }
}
