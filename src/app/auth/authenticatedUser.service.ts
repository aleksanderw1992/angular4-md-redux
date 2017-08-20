import {User} from "./user";
import {Injectable} from "@angular/core";
import {Observables} from "../common/Observables";

@Injectable()
export class AuthenticatedUserService{
  private _authenticatedUser: User;


  constructor(  private observables: Observables) {
  }

  login(user: User) {
    this._authenticatedUser = user
    this.observables.notifyCardAdded()
  }

  logout() {
    this._authenticatedUser = undefined
    this.observables.notifyCardAdded()
  }

  get authenticatedUser(): User {
    return this._authenticatedUser;
  }
  hasAuthenticatedUser(){
    return !!this._authenticatedUser;
  }
  getUsernameOrNull(){
    return this.hasAuthenticatedUser()? this.authenticatedUser.username:null
  }
}
