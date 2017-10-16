import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot } from '@nrwl/nx/testing';
import { AuthEffects } from './auth.effects';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';
import {User} from "@ets/auth/src/models";
import {AuthService} from "@ets/auth/src/services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

import {cold, getTestScheduler} from 'jasmine-marbles';
import 'rxjs/add/operator/concat';

describe('AuthEffects', () => {
  let actions;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        AuthEffects,
        DataPersistence,
        AuthService,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(AuthEffects);
  });

  describe('AuthEffect', () => {
    // it('should work', async () => {
    //   actions = hot('-a-|', { a: { type: '[Auth] Login', payload: {} } });
    //   expect(await readAll(effects.signIn)).toEqual([{type: '[Auth] Login Success'}]);
    // });
    it('concat', () => {
      const one$ = cold('x-x|');
      const two$ = cold('-y|');

      expect(one$.concat(two$)).toBeObservable(cold('x-x-y|'));
    });

  });
});
