import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './containers';

const HOME_ROUTE = [
  {
    path: '',
    component: HomeContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTE)]
})
export class HomeRoutingModule {}
