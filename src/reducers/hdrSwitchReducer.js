import {
  HDR_OFF,
  HDR_ON
} from '../actions/types';

export default function(state = { header: true }, action) {
  switch(action.type) {
    case HDR_ON:
      return { ...state, header: true };

    case HDR_OFF:
      return { ...state, header: false };

    default:
      return state;
  }
}
