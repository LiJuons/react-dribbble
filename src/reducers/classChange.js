import {
  CLASS_CHNG
} from '../actions/types';

export default function(state = { smallReso: false }, action) {
  switch(action.type) {
    case CLASS_CHNG:
      return { ...state, smallReso: true, classN: 'smallReso' };

    default:
      return state;
  }
}
