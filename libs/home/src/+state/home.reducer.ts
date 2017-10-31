import { Home } from './home.interfaces';
import * as fromAction from './home.actions';
import {homeAdapter, homeInitialState} from "./home.init";

export function homeReducer(state: Home = homeInitialState, action: fromAction.HomeActions) {
  switch (action.type) {
    case fromAction.LOAD_USERS_SUCCESS: {
      return homeAdapter.addAll(action.payload.users, state);
    }
    default: {
      return state;
    }
  }
}
