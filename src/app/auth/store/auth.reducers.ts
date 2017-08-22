import * as AuthActions from './auth.actions';
import {User} from "../user";
export interface State{
  authenticatedUser:User
}
const initialState:State={
  authenticatedUser:null
};

export function authReducer(state=initialState, action:AuthActions.AuthActions){
  switch (action.type){
    case AuthActions.LOGIN:
      return {
        ...state,
        authenticatedUser:action.payload.user
      };
    case AuthActions.SINGUP:
      return {
        ...state,
        authenticatedUser:action.payload.user
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        authenticatedUser:null
      };
    default:
      return state;
  }
}
