import { combineReducers } from 'redux';
import userReducer from './login-reducer';
import isUserLoggedReducer from './is-logged-reducer';

const rootReducer = combineReducers({
  isUserLoggedIn: isUserLoggedReducer,
  currentUser: userReducer,
});

export default rootReducer;
