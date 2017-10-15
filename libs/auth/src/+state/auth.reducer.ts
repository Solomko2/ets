import { Auth } from './auth.interfaces';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';
import { User } from '@ets/auth/src/models';
import { authInitialState } from '@ets/auth/src/+state/auth.init';

export interface State {
  isLoggedIn: boolean;
  user: User | null;
}

export function authReducer(state: Auth = authInitialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return Object.assign({}, state, { user: action.payload, isLoggedIn: true });
    }
    case AuthActions.LOGOUT: {
      return authInitialState;
    }
    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.isLoggedIn;
export const getUser = (state: State) => state.user;
