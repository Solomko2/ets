import { Injectable } from '@angular/core';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AuthState } from './auth.interfaces';
import { AuthService } from '../services/auth.service';
import { User } from '@ets/auth/src/models';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/catch";

@Injectable()
export class AuthEffects {
  @Effect()
  signIn = this.d.pessimisticUpdate(AuthActions.LOGIN, {
    run: (a: AuthActions.Login, state: AuthState) => {
      return this.authService.signIn(a.payload)
        .map((user: User) => new AuthActions.LoginSuccess(user))
        .catch(error => Observable.of(new AuthActions.LoginFailure(error)));
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
    private authService: AuthService,
    private d: DataPersistence<AuthState>,
    private router: Router
  ) {}
}
