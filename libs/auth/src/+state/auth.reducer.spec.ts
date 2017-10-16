import { authReducer } from './auth.reducer';
import { authInitialState } from './auth.init';

describe('authReducer', () => {
  it('should work', () => {
    expect(
      authReducer(authInitialState, {
        type: '[Auth] Login Success',
        payload: {
          id: 1,
          email: 'sol@gmail.com',
          first_name: 'alex',
          last_name: 'sol',
          position: ['member'],
          roles: ['admin'],
          rate: 1,
          locked: 2,
          created_at: '20.10.2015',
          updated_at: '20.10.2015',
          token: 'sometoken'
        }
      })
    )
      .toEqual({ user: {
        id: 1,
        email: 'sol@gmail.com',
        first_name: 'alex',
        last_name: 'sol',
        position: ['member'],
        roles: ['admin'],
        rate: 1,
        locked: 2,
        created_at: '20.10.2015',
        updated_at: '20.10.2015',
        token: 'sometoken'
      },
        isLoggedIn: true });
  });
});
