import {UserUpdate, UserCreate, UserInstance} from "@ets/home/src/models";

export const LOAD_USERS          = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS  = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE  = 'LOAD_USERS_FAILURE';

export const USER_CREATE         = 'USER_CREATE';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE';


export const USER_UPDATE         = 'USER_UPDATE';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';



export class LoadUsers {
  readonly type = LOAD_USERS;
  constructor() {}
}

export class LoadUsersSuccess {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: { users: UserInstance[] }) {}
}


export class LoadUserFailure {
  readonly type = LOAD_USERS_FAILURE;

  constructor(public payload: string) {}
}

