import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeReducer } from './+state/home.reducer';
import { homeInitialState } from './+state/home.init';
import { HomeEffects } from './+state/home.effects';
import { UserListComponent } from './user-list/user-list.component';
import { HomeRoutingModule } from './home-router.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', homeReducer, { initialState: homeInitialState }),
    EffectsModule.forFeature([HomeEffects]),
    HomeRoutingModule
  ],
  providers: [HomeEffects],
  declarations: [UserListComponent]
})
export class HomeModule {}
