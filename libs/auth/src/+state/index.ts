import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export interface AuthState {
  status: fromAuth.State;
}

export const reducers = {
  status: fromAuth.authReducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.status);

export const getLoggedIn = createSelector(selectAuthStatusState, fromAuth.getLoggedIn);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
