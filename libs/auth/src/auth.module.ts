import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './+state';
import { AuthEffects } from './+state/auth.effects';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SharedModule } from '@ets/shared';
import { AuthService } from '@ets/auth/src/services/auth.service';
import { AuthRoutingModule } from './auth-router.module';
import { JwtService } from '@ets/auth/src/services/jwt.service';
import {UserService} from "@ets/auth/src/services/user.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService,
    JwtService,
    AuthEffects,
    UserService
  ],
  declarations: [
    SignInComponent,
    SignInFormComponent
  ],
  exports: [
    SignInComponent,
    SignInFormComponent
  ]
})
export class AuthModule {}
