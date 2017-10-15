import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user$ = this.store.select('auth');

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.user$.subscribe(res => console.log(res));
  }
}
