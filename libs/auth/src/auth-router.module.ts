import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const AUTH_ROUTE = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTE)]
})
export class AuthRoutingModule {}
