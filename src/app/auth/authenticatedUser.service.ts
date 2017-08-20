import {User} from "./user";

export class AuthenticatedUserService{
  private _authenticatedUser: User;

  login(user: User) {
    console.log('Successively logged in user:' + user.username);
    this._authenticatedUser = user
  }

  logout() {
    this._authenticatedUser = undefined
  }

  get authenticatedUser(): User {
    console.log(this._authenticatedUser);
    return this._authenticatedUser;
  }
  hasAuthenticatedUser(){
    console.log(this._authenticatedUser);
    return !!this._authenticatedUser;
  }
}
