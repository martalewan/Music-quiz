import { combineReducers } from 'redux';
import userReducer from './login-reducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
});

export default rootReducer;
