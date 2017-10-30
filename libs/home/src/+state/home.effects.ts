import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { HomeState } from './home.interfaces';
import { UserList, UserListLoaded } from './home.actions';
import {HomeService} from "@ets/home/src/services";
import "rxjs/add/operator/map";

@Injectable()
export class HomeEffects {
  @Effect()
  userList = this.d.pessimisticUpdate('USER_LIST', {
    run: (a: UserList, state: HomeState) => {
      return this.homeService.getUserList()
        .map((users: any) => ({type: 'USER_LIST_LOADED', payload: users}));
    },

    onError: (a: UserList, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions: Actions,
    private d: DataPersistence<HomeState>, private homeService: HomeService) {}
}
