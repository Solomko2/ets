import { Home } from './home.interfaces';
import { HomeAction } from './home.actions';

export function homeReducer(state: Home, action: HomeAction): Home {
  switch (action.type) {
    case 'USER_LIST_LOADED': {
      console.log(action);
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
