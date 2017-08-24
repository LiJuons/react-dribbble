import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  ERR_CLR,
  HDR_OFF,
  HDR_ON
} from '../actions/types';

export default function(state = { error: '', authenticated: false, header: true }, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true, header: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    case AUTH_ERROR:
      return { ...state, error: action.payload };

    case ERR_CLR:
      return { ...state, error: '' };

    case HDR_OFF:
      return { ...state, header: false };

    default:
      return state;
  }
}
