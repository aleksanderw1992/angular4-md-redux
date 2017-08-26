import {Injectable} from "@angular/core";
import {User} from "../auth/user";
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducers";


@Injectable()
export class CardColorsService {
  _userToColorTranslation;

  constructor(private store: Store<fromApp.AppState>) {

    this.store.select('auth').subscribe(state => {
      this._userToColorTranslation = this.calculateUserToColorTranslation(state)
    })
  }

  getColorsTranslation() {
    return this._userToColorTranslation;
  }

  calculateUserToColorTranslation(fromAuthState) {
    let username = User.getUsernameOrNull(fromAuthState.authenticatedUser);
    let result = {}

    //currently no nice solution in TS! have to duplicate code from CardColorExcludingInitial
    let cardColorExcludingInitial = ['red', 'yellow', 'green', 'blue', 'orange', 'pink'];
    let usernames = fromAuthState.users.filter(u => u.username != username).map(u => u.username);
    let randomInd = Math.floor(Math.random() * cardColorExcludingInitial.length);
    let randomColor = cardColorExcludingInitial.splice(randomInd, 1);

    result[username] = randomColor
    for (let i = 0; i < usernames.length; i++) {
      let currentUsername = usernames[i]
      let color = cardColorExcludingInitial[i % cardColorExcludingInitial.length]
      result[currentUsername] = color
    }
    return result
  }
}

