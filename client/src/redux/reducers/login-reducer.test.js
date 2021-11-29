import userReducer from './login-reducer';
import { saveUser } from '../actions';

describe('userReducer should:', () => {
  test('return the initial state', () => {
    const fakeAction = { type: 'FAKE' };
    expect(userReducer({}, fakeAction)).toEqual({});
  });

  test('saves the user', () => {
    const payload = { username : 'some name' };
    expect(userReducer({}, saveUser(payload))).toEqual(payload);
  });
});
