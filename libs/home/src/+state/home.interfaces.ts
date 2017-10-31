import {EntityState} from "@ngrx/entity";
import {UserInstance} from "@ets/home/src/models";

export interface Home extends EntityState<UserInstance> {}

export interface HomeState {
  readonly home: Home;
}
