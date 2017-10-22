import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { AuthEffects } from './auth.effects';
import * as AuthActions from '@ets/auth/src/+state/auth.actions';
import { User } from '@ets/auth/src/models';
import { AuthService } from '@ets/auth/src/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { cold } from 'jasmine-marbles';
import 'rxjs/add/operator/concat';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions: Observable<any>;
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterTestingModule, HttpClientModule],
      providers: [
        AuthEffects,
        provideMockActions(() => actions),
        DataPersistence,
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', ['signIn'])
        }
      ]
    });

    effects = TestBed.get(AuthEffects);
    service = TestBed.get(AuthService);
  });

  it('Auth signIn success', () => {
    actions = hot('b', { b: { type: AuthActions.LOGIN } });
    service.signIn.and.returnValue(Observable.of(new User()));

    const expected = cold('a', { a: new AuthActions.LoginSuccess(new User()) });
    expect(effects.signIn).toBeObservable(expected);
  });

  it('Auth signIn failed', () => {
    actions = hot('b', { b: { type: AuthActions.LOGIN } });
    service.signIn.and.returnValue(Observable.throw('error'));

    const expected = cold('a', { a: new AuthActions.LoginFailure('error') });
    expect(effects.signIn).toBeObservable(expected);
  });
});
