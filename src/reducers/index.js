import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import headerReducer from './hdrSwitchReducer';
import resoReducer from './classChange';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  hdr: headerReducer,
  ccg: resoReducer
});

export default rootReducer;
