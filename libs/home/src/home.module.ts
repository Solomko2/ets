import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeReducer } from './+state/home.reducer';
import { homeInitialState } from './+state/home.init';
import { HomeEffects } from './+state/home.effects';
import { HomeRoutingModule } from './home-router.module';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', homeReducer, { initialState: homeInitialState }),
    EffectsModule.forFeature([HomeEffects]),
    HomeRoutingModule
  ],
  providers: [HomeEffects],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class HomeModule {}
