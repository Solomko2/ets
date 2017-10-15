import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AuthState } from './auth.interfaces';
import { AuthService } from '../services/auth.service';
import { User } from '@ets/auth/src/models';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  signIn = this.d.pessimisticUpdate(AuthActions.LOGIN, {
    run: (a: AuthActions.Login, state: AuthState) => {
      return this.authService.signIn(a.payload).map((user: User) => new AuthActions.LoginSuccess(user));
    },

    onError: (a: AuthActions.Login, error) => {
      console.error('Error', error);
    }
  });

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions
    .ofType(AuthActions.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/home']))
    .map((auth: AuthActions.LoginSuccess) => auth.payload)
    .do((user: User) => localStorage.setItem('token', user.token));

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions
    .ofType(AuthActions.LOGIN_REDIRECT, AuthActions.LOGOUT)
    .do(authed => this.router.navigate(['/signin']));

  constructor(
    private actions: Actions,
    private d: DataPersistence<AuthState>,
    private authService: AuthService,
    private router: Router
  ) {}
}
