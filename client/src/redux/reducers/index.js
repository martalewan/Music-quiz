import { combineReducers } from 'redux';
import userReducer from './login-reducer';
import isUserLoggedReducer from './is-logged-reducer';
import pointsReducer from './points-reducer';

const rootReducer = combineReducers({
  isUserLoggedIn: isUserLoggedReducer,
  currentUser: userReducer,
  userPoints: pointsReducer,
});

export default rootReducer;
