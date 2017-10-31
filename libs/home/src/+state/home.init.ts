import { Home } from './home.interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {UserInstance} from "@ets/home/src/models";

export const homeAdapter: EntityAdapter<UserInstance> = createEntityAdapter<UserInstance>();

export const homeInitialState: Home = homeAdapter.getInitialState();
