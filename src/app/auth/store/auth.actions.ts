import {Action} from "@ngrx/store";
import {User} from "../user";
import {FormUserLogin, FormUserSignUp} from "../form-user";

export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const TRY_SIGNUP = 'TRY_SIGNUP';
export const LOGOUT = 'LOGOUT';
export const EMPTY = 'EMPTY';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: { user: User }) {
  }

}
export class TryLoginAction implements Action {
  readonly type = TRY_LOGIN;

  constructor(public payload: FormUserLogin) {
  }
}
export class SignupAction implements Action {
  readonly type = SIGNUP;

  constructor(public payload: { user: User }) {
  }
}
export class TrySignupAction implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: FormUserSignUp ) {
  }
}
export class LogoutAction implements Action {
  readonly type = LOGOUT;

}
export class EmptyAction implements Action{
  readonly type = EMPTY
}
export type AuthActions = LoginAction |
  SignupAction |
  LogoutAction|
  TryLoginAction|
  TrySignupAction;
