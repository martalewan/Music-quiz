import { combineReducers } from 'redux';
import userReducer from './login-reducer';
import isUserLoggedReducer from './is-logged-reducer';
import pointsReducer from './points-reducer';
import gameConfigReducer from './game-config-reducer';
import gameStatsReducer from './game-stats-reducer';

const rootReducer = combineReducers({
  isUserLoggedIn: isUserLoggedReducer,
  currentUser: userReducer,
  userPoints: pointsReducer,
  gameConfig: gameConfigReducer,
  gameStats: gameStatsReducer,
});

export default rootReducer;
