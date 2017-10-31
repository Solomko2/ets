import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './+state/home.effects';
import { HomeRoutingModule } from './home-router.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import {SharedModule} from "@ets/shared";
import {reducer} from "@ets/home/src/+state";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature([HomeEffects]),
    HomeRoutingModule,
    SharedModule
  ],
  providers: [HomeEffects, ...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class HomeModule {}
