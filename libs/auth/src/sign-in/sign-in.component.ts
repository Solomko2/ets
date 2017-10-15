import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '../models/authenticate';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(public store: Store<any>) {}

  ngOnInit() {}

  login(user: Authenticate) {
    this.store.dispatch(new AuthActions.Login(user));
  }
}
