import {Action} from "@ngrx/store";
import {User} from "../user";
export const LOGIN = 'LOGIN';
export const SINGUP = 'SINGUP';
export const LOGOUT = 'LOGOUT';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: { user: User }) {
  }

}
export class SingupAction implements Action {
  readonly type = SINGUP;

  constructor(public payload: { user: User }) {
  }

}
export class LogoutAction implements Action {
  readonly type = LOGOUT;

}
export type AuthActions = LoginAction |
  SingupAction |
  LogoutAction;
