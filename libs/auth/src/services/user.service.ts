import { Injectable } from '@angular/core';
import { JwtService } from '@ets/auth/src/services/jwt.service';
import { User } from '@ets/auth/src/models';
import { AuthService } from '@ets/auth/src/services/auth.service';
import {Store} from "@ngrx/store";
import * as AuthActions from '@ets/auth/src/+state/auth.actions';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService,
              private authService: AuthService,
              private store: Store<any>) {}

  populate() {
    if (this.jwtService.getToken()) {
      this.authService.populate().subscribe((user: User) => {
        this.setAuth(user);
      });
    } else {
      // this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.store.dispatch(new AuthActions.LoginSuccess(user));
  }

  purgeAuth() {
    this.jwtService.destroyToken();
  }

}
