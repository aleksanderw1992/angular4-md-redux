import * as AuthActions from './auth.actions';
import {User} from "../user";
import {Md5} from "ts-md5/dist/md5";

export interface State{
  authenticatedUser:User
  users: User[]
}
const initialState:State={
  authenticatedUser:null,
  users:[{
    username: 'test',
    hashedPassword: Md5.hashStr('test').toString(),
    firstname: 'Test',
    surname: 'User'
  }]
};

export function authReducer(state=initialState, action:AuthActions.AuthActions){
  switch (action.type){
    case AuthActions.LOGIN:
      return {
        ...state,
        authenticatedUser:action.payload.user
      };
    case AuthActions.SIGNUP:
      return {
        ...state,
        authenticatedUser:action.payload.user,
        users:[...state.users, action.payload.user]
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
