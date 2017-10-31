import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '@ets/auth/src/+state';
import { User } from '@ets/auth/src/models';
import { Observable } from 'rxjs/Observable';
import * as fromAction from '../../+state/home.actions';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private store: Store<fromAuth.AuthState>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromAuth.getUser);
  }

  test() {
    this.store.dispatch(new fromAction.LoadUsers());
  }
}
