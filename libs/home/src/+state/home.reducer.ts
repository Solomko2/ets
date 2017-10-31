import { Home } from './home.interfaces';
import * as fromAction from './home.actions';

export function homeReducer(state: Home, action: fromAction.HomeActions): Home {
  switch (action.type) {
    case fromAction.LOAD_USERS_SUCCESS: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
