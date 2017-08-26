import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import * as fromApp from '../../store/app.reducers';
import * as fromAuthActions from "./auth.actions";
import 'rxjs/add/operator/withLatestFrom';
import {FormUserLogin, FormUserSignUp} from "../form-user";
import {Store} from "@ngrx/store";
import {UserService} from "../user.service";
import {CustomErrorHandler} from "../../common/CustomErrorHandler";
import {TryLoginAction, TrySignupAction} from "./auth.actions";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private store: Store<fromApp.AppState>,
  private userService: UserService) {
  }
  @Effect()
  authSignup$ = this.actions$
    .ofType(fromAuthActions.TRY_SIGNUP)
    .withLatestFrom(this.store)
    .map(([action, storeState]: [TrySignupAction, fromApp.AppState] ) => {
      // Do something ...
      let errorOrResultSignUp = this.userService.trySignUp(action.payload, storeState.auth.users)
      if(errorOrResultSignUp.data){
        return {
          type: fromAuthActions.SIGNUP,
          payload: {user: errorOrResultSignUp.data}
        }
      }else{
        CustomErrorHandler.handleError(errorOrResultSignUp.error)
      }
    });

  @Effect()
  authSignin$ = this.actions$
    .ofType(fromAuthActions.TRY_LOGIN)
    .withLatestFrom(this.store)
    .map(([action, storeState]: [TryLoginAction, fromApp.AppState] ) => {
      // Do something ...
      let errorOrResultLogin = this.userService.tryLogin(action.payload, storeState.auth.users );
      if(errorOrResultLogin.data){
        return {
          type: fromAuthActions.LOGIN,
          payload: {user: errorOrResultLogin.data}
        }
      }else{
        CustomErrorHandler.handleError(errorOrResultLogin.error)
      }
    });


}
