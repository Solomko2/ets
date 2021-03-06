import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { HomeState } from './home.interfaces';
import {HomeService} from "@ets/home/src/services";
import * as fromAction from './home.actions';
import "rxjs/add/operator/map";
import {UserInstance} from "@ets/home/src/models";
import {HomeContainerComponent} from "@ets/home/src/containers";
import {ActivatedRouteSnapshot} from "@angular/router";

@Injectable()
export class HomeEffects {
  @Effect()
  loadUsers = this.d.navigation(HomeContainerComponent, {
    run: (a: ActivatedRouteSnapshot, state: HomeState) => {
      return this.homeService.getUserList()
        .map((res: UserInstance[]) => new fromAction.LoadUsersSuccess({users: res}));
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      console.error('Error', e);
      return null;
    }
  });


  constructor(
    private d: DataPersistence<HomeState>,
    private homeService: HomeService
  ) {}
}
