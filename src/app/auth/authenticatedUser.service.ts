import {User} from "./user";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import * as fromAuth from "../auth/store/auth.reducers";
import * as fromApp from '../store/app.reducers';


@Injectable()
export class AuthenticatedUserService {
  private _authenticatedUser: User;


  constructor(private store: Store<fromApp.AppState>) {
  }


  get authenticatedUser(): User {
    return this._authenticatedUser;
  }

  hasAuthenticatedUser() {
    return this.store.select('auth').map((authState: fromAuth.State) => {
        return !!authState.authenticatedUser;
      }
    )
  }

  getUsernameOrNull() {
    return this.store.select('auth').map((authState: fromAuth.State) => {
      let user = authState.authenticatedUser;
      return !!user ? user.username:null;
      }
    )
  }

  getUsernameOrNullStr() {
    return 'asdf'
  }
}
