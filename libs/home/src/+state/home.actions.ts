export interface UserList {
  type: 'USER_LIST';
  payload: {};
}

export interface UserListLoaded {
  type: 'USER_LIST_LOADED';
  payload: {};
}

export type HomeAction = UserList | UserListLoaded;
