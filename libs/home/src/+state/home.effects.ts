import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { HomeState } from './home.interfaces';
import {HomeService} from "@ets/home/src/services";
import * as fromAction from './home.actions';
import "rxjs/add/operator/map";
import {UserInstance} from "@ets/home/src/models";

@Injectable()
export class HomeEffects {
  @Effect()
  userList = this.d.pessimisticUpdate(fromAction.LOAD_USERS, {
    run: (a: fromAction.LoadUsers, state: HomeState) => {
      return this.homeService.getUserList()
        .map((res: UserInstance[]) => new fromAction.LoadUsersSuccess({users: res}));
    },

    onError: (a: fromAction.LoadUsers, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private d: DataPersistence<HomeState>,
    private homeService: HomeService
  ) {}
}
