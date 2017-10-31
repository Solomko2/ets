import { Home } from './home.interfaces';

export function homeReducer(state: Home, action: any): Home {
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
