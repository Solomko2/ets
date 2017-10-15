export interface Auth {
  user: any;
  isLoggedIn: boolean;
}

export interface AuthState {
  readonly auth: Auth;
}
