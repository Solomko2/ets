import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './+state/auth.reducer';
import { authInitialState } from './+state/auth.init';
import { AuthEffects } from './+state/auth.effects';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import {SharedModule} from "@ets/shared";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule
  ],
  providers: [AuthEffects],
  declarations: [SignInComponent, SignInFormComponent],
  exports: [SignInComponent, SignInFormComponent]
})
export class AuthModule {}
