import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from "@ets/auth/src/services/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: 'libs/auth/src/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: 'libs/home/src/home.module#HomeModule',
    canActivate: [AuthGuard],
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
