import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as AuthActions from './auth.actions';
import {FormUserLogin, FormUserSignUp} from "../form-user";

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions) {
  }
  @Effect()
  authSignup = this.actions
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignupAction) => {
      return action.payload;
    })
    .map((formUserSignUp: FormUserSignUp) => {
      return [
        {
          type: AuthActions.SIGNUP
        }
      ];
    });

  @Effect()
  authSignin = this.actions
    .ofType(AuthActions.TRY_LOGIN)
    .map((action: AuthActions.TryLoginAction) => {
      return action.payload;
    })
    .mergeMap((formUserLogin: FormUserLogin) => {
      return [
        {
          type: AuthActions.LOGIN
        }
      ];
    });


}
