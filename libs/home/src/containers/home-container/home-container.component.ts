import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '@ets/auth/src/+state';
import { User } from '@ets/auth/src/models';
import { Observable } from 'rxjs/Observable';

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
}
