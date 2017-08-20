import {User} from "./user";

export class AuthenticatedUserService{
  private _authenticatedUser: User;

  login(user: User) {
    this._authenticatedUser = user
  }

  logout() {
    this._authenticatedUser = undefined
  }

  get authenticatedUser(): User {
    return this._authenticatedUser;
  }
  hasAuthenticatedUser(){
    return !!this._authenticatedUser;
  }
}
