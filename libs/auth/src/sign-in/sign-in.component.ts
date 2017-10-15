import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Authenticate} from "../models/authenticate";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user$ = this.store.select('auth');

  constructor(public store: Store<any>) { }

  ngOnInit() {}

  login(user: Authenticate) {
    console.log(user);
    // this.store.dispatch();
  }
}
