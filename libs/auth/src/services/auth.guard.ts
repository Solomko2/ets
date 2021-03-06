import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import * as fromAuth from '../+state/index';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .select(fromAuth.getLoggedIn)
      .map(authed => {
        if (!authed) {
          this.store.dispatch(new AuthActions.LoginRedirect());
          return false;
        }

        return true;
      })
      .take(1);
  }
}
