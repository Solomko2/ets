import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import {homeReducer} from "./home.reducer";
import {Home} from "./home.interfaces";
import {homeAdapter} from "./home.init";


export interface State {
  users: Home;
}

export const reducer = {
  users: homeReducer
};


export const getHomeState = createFeatureSelector<State>('home');

export const getUsersEntitiesState = createSelector(
  getHomeState,
  state => state.users
);

export const {
  selectIds: getUsersIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers,
} = homeAdapter.getSelectors(getUsersEntitiesState);
